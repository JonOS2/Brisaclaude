<template>
  <!-- O reset-container ocupa 100vh e tem posição fixed para sobrepor qualquer layout pai -->
  <div class="reset-container">
    <div class="reset-card">

      <!-- Logo + nome -->
      <div class="logo-section">
        <div class="logo-circle">
          <img src="https://inscricoesrestic.brisabr.com.br/_next/image?url=%2Flogo_no-txt.png&w=256&q=75" alt="logo" class="logo">
        </div>
        <div class="brand-name">
          <h1>Brisa</h1>
          <h1 class="brand-highlight">One</h1>
        </div>
      </div>

      <!-- Corpo: título + campo de email + botão -->
      <div class="reset-body">
        <h2 class="reset-title">Recuperar senha</h2>
        <p class="reset-description">
          Digite o e-mail cadastrado em sua conta para enviarmos as instruções de recuperação.
        </p>

        <div class="form-group">
          <label for="email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            E-mail
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Digite seu e-mail cadastrado"
            autocomplete="email"
          />
        </div>

        <button class="btn-submit" :disabled="loading || !email">
          <span v-if="!loading">Enviar e-mail de recuperação</span>
          <span v-else class="loading-text">
            <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-opacity="0.25"/>
              <path d="M12 2C6.47715 2 2 6.47715 2 12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>
            Enviando...
          </span>
        </button>
      </div>

      <!-- Link de voltar -->
      <div class="footer-text">
        <router-link to="/" class="back-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Voltar para o login
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ResetPasswordView',
  setup() {
    const email = ref('');
    const loading = ref(false);

    return { email, loading };
  }
};
</script>

<style scoped>
/*
  position: fixed + inset: 0 garante que esse componente
  cubra 100% da tela independentemente do layout pai (navbar inclusa).
*/
.reset-container {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1F285F 0%, #0288d1 100%);
  padding: 20px;
  z-index: 9999;
}

.reset-card {
  background: white;
  padding: 48px 40px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(31, 40, 95, 0.25);
  width: 100%;
  max-width: 420px;
  text-align: center;
}

/* Logo */
.logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
}

.logo-circle {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1F285F 0%, #0288d1 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  box-shadow: 0 4px 12px rgba(31, 40, 95, 0.2);
}

.logo {
  height: 80px;
}

.brand-name {
  display: flex;
  justify-content: center;
  gap: 6px;
}

.brand-name h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: #1F285F;
}

.brand-highlight {
  color: #0288d1 !important;
}

/* Corpo */
.reset-body {
  padding: 24px 0 28px;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 28px;
}

.reset-title {
  margin: 0 0 10px;
  color: #1F285F;
  font-size: 20px;
  font-weight: 700;
}

.reset-description {
  margin: 0 0 24px;
  color: #777;
  font-size: 15.5px;
  line-height: 1.7;
}

/* Campo de email */
.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 15px;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  color: #1F285F;
  font-weight: 600;
  font-size: 16px;
}

.form-group label svg {
  color: #0288d1;
}

.form-group input {
  padding: 14px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.2s ease;
  background: white;
  color: #333;
  outline: none;
}

.form-group input:focus {
  border-color: #0288d1;
  box-shadow: 0 0 0 4px rgba(2, 136, 209, 0.08);
}

.form-group input::placeholder {
  color: #aaa;
}

/* Botão */
.btn-submit {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #1F285F 0%, #0288d1 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(31, 40, 95, 0.2);
}

.btn-submit:hover:not(:disabled) {
  box-shadow: 0 6px 20px rgba(31, 40, 95, 0.3);
  transform: translateY(-1px);
}

.btn-submit:disabled {
  opacity: 0.55;
  cursor: not-allowed;
  transform: none;
}

.loading-text {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.spinner {
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* Link de voltar */
.footer-text {
  display: flex;
  justify-content: center;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #0288d1;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: #1F285F;
}
</style>