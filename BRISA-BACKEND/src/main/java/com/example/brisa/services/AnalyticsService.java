package com.example.brisa.services;

import com.example.brisa.dtos.analytics.CourseCompletionTimelineDTO;
import com.example.brisa.dtos.analytics.CourseProgressionFunnelDTO;
import com.example.brisa.repositories.CourseProgressionRepository;
import com.example.brisa.repositories.StageRepository;
import com.example.brisa.models.StageModel;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.YearMonth;
import java.time.temporal.WeekFields;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AnalyticsService {

    private final CourseProgressionRepository courseProgressionRepository;
    private final StageRepository stageRepository;

    public List<CourseProgressionFunnelDTO> getCourseProgressionFunnel(Long classId) {
        return getCourseProgressionFunnel(classId, null, null);
    }

    public List<CourseProgressionFunnelDTO> getCourseProgressionFunnel(Long classId, Long stageId, String stageName) {
        List<Object[]> rows;

        if (stageId != null) {
            rows = courseProgressionRepository.countStatusByStage(stageId);
        } else if (stageName != null && classId != null) {
            var optStage = stageRepository.findByNameAndClassModelId(stageName, classId);
            if (optStage.isPresent()) {
                StageModel stage = optStage.get();
                rows = courseProgressionRepository.countStatusByStage(stage.getId());
            } else {
                rows = courseProgressionRepository.countStatusByClass(classId);
            }
        } else {
            rows = courseProgressionRepository.countStatusByClass(classId);
        }

        return rows.stream()
                .map(r -> new CourseProgressionFunnelDTO((String) r[0], ((Number) r[1]).longValue()))
                .collect(Collectors.toList());
    }

    public List<CourseCompletionTimelineDTO> getCourseCompletions(Long classId, Long stageId, String granularity) {
        List<LocalDate> dates;

        if (stageId != null) {
            dates = courseProgressionRepository.findCompletionDatesByStage(stageId);
        } else if (classId != null) {
            dates = courseProgressionRepository.findCompletionDatesByClass(classId);
        } else {
            dates = courseProgressionRepository.findCompletionDates();
        }

        String normalizedGranularity = granularity == null ? "week" : granularity.trim().toLowerCase(Locale.ROOT);
        Map<String, Long> grouped = new TreeMap<>();

        for (LocalDate date : dates) {
            String key = switch (normalizedGranularity) {
                case "day" -> date.toString();
                case "month" -> YearMonth.from(date).toString();
                default -> {
                    WeekFields wf = WeekFields.ISO;
                    int week = date.get(wf.weekOfWeekBasedYear());
                    int year = date.get(wf.weekBasedYear());
                    yield String.format("%d-W%02d", year, week);
                }
            };

            grouped.put(key, grouped.getOrDefault(key, 0L) + 1L);
        }

        return grouped.entrySet().stream()
            .map(e -> new CourseCompletionTimelineDTO(e.getKey(), e.getValue()))
            .collect(Collectors.toList());
    }
}
