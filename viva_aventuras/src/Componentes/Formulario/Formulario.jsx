import React, { useState } from 'react';
import styles from './FormSection.module.css';


function Formulario() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logica para enviar os dados do formulário
    alert('Prepare-se para viver grandes aventuras com a gente! Entraremos em contato em breve.');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Seu nome"
        value={form.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="seu@email.com"
        value={form.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="message">Mensagem</label>
      <textarea
        id="message"
        name="message"
        placeholder="Conte sua motivação, dúvida ou expectativa"
        required
        value={form.message}
        onChange={handleChange}
        rows="4"
        style={{ resize: 'none' }}
      />
      <button className={styles.button} type="submit">
        Quero me jogar nessa experiência
        <img src="/icone/botao.svg" alt="Ícone de ação" style={{ marginLeft: 8, height: 24, width: 24 }} />
      </button>
    </form>
  );
}

export default Formulario;
