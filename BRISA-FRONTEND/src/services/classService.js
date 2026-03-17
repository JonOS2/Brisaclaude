import api from './api';

export const classService = {
  // ✅ Retorna mapa { programId: count } em uma única chamada ao backend
  async getCountByProgram() {
    try {
      const response = await api.get('/classes/count-by-program');
      return response.data; // ex: { 1: 3, 2: 1 }
    } catch (error) {
      throw error;
    }
  },

  // ✅ Novo: busca turmas diretamente pelo programId — mais eficiente que getAll() + filtro
  async getByProgramId(programId) {
    try {
      const response = await api.get(`/classes/program/${programId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getAll() {
    try {
      const response = await api.get('/classes');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getById(id) {
    try {
      const response = await api.get(`/classes/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async create(classData) {
    try {
      const response = await api.post('/classes', classData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async update(id, classData) {
    try {
      const response = await api.put(`/classes/${id}`, classData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async delete(id) {
    try {
      await api.delete(`/classes/${id}`);
    } catch (error) {
      throw error;
    }
  },

  async importExcel(file) {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await api.post('/classes/import/excel', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
};