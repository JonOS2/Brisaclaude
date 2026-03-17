package com.example.brisa.services;

import com.example.brisa.exceptions.ResourceNotFoundException;
import com.example.brisa.models.ClassModel;
import com.example.brisa.models.ProgramModel;
import com.example.brisa.repositories.ClassRepository;
import com.example.brisa.repositories.ProgramRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ClassService {
    
    private final ClassRepository classRepository;
    private final ProgramRepository programRepository;

    public List<ClassModel> findAll() {
        return classRepository.findAll();
    }

    public ClassModel findById(Long id) {
        return classRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Turma não encontrada com id: " + id));
    }

    public List<ClassModel> findByProgramId(Long programId) {
        return classRepository.findByProgramId(programId);
    }

    // ✅ Retorna mapa { programId -> contagem } em uma única query
    public Map<Long, Long> getClassesCountByProgram() {
        List<Object[]> results = classRepository.countClassesGroupedByProgram();
        Map<Long, Long> countMap = new HashMap<>();
        for (Object[] row : results) {
            Long programId = ((Number) row[0]).longValue();
            Long count     = ((Number) row[1]).longValue();
            countMap.put(programId, count);
        }
        return countMap;
    }

    @Transactional
    public ClassModel create(ClassModel classModel) {
        if (classModel.getProgram() != null && classModel.getProgram().getId() != null) {
            ProgramModel program = programRepository.findById(classModel.getProgram().getId())
                    .orElseThrow(() -> new ResourceNotFoundException("Programa não encontrado"));
            classModel.setProgram(program);
        }
        return classRepository.save(classModel);
    }

    @Transactional
    public ClassModel update(Long id, ClassModel classDetails) {
        ClassModel classModel = findById(id);
        
        classModel.setCode(classDetails.getCode());
        classModel.setStartDate(classDetails.getStartDate());
        classModel.setEndDate(classDetails.getEndDate());
        
        if (classDetails.getProgram() != null && classDetails.getProgram().getId() != null) {
            ProgramModel program = programRepository.findById(classDetails.getProgram().getId())
                    .orElseThrow(() -> new ResourceNotFoundException("Programa não encontrado"));
            classModel.setProgram(program);
        }
        if (classDetails.getLocation() != null) {
            classModel.setLocation(classDetails.getLocation());
        }
        return classRepository.save(classModel);
    }

    @Transactional
    public void delete(Long id) {
        ClassModel classModel = findById(id);
        classRepository.delete(classModel);
    }
}