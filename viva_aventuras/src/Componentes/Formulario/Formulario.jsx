import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './FormSection.module.css';



function Formulario() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name || form.name.trim().length < 2) {
      newErrors.name = 'Digite seu nome completo.';
    }
    if (!form.email) {
      newErrors.email = 'Digite seu e-mail.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(form.email)) {
      newErrors.email = 'E-mail inválido.';
    }
    if (!form.message || form.message.trim().length < 10) {
      newErrors.message = 'A mensagem deve ter pelo menos 10 caracteres.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSending(true);
    emailjs.sendForm('service_edqh72a', 'template_fltm1jl', e.target, 'IN3q3laY6zJFJG4LT')
      .then(() => {
        alert('Mensagem enviada com sucesso!');
        setForm({ name: '', email: '', message: '' });
        setSending(false);
      }, (error) => {
        alert('Erro ao enviar: ' + error.text);
        setSending(false);
      });
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
        minLength={2}
        maxLength={100}
        style={errors.name ? { borderColor: '#F44C34' } : {}}
        autoComplete="off"
      />
      {errors.name && <span style={{ color: '#F44C34', fontSize: '0.95rem' }}>{errors.name}</span>}
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="seu@email.com"
        value={form.email}
        onChange={handleChange}
        required
        maxLength={100}
        style={errors.email ? { borderColor: '#F44C34' } : {}}
        autoComplete="off"
      />
      {errors.email && <span style={{ color: '#F44C34', fontSize: '0.95rem' }}>{errors.email}</span>}
      <label htmlFor="message">Mensagem</label>
      <textarea
        id="message"
        name="message"
        placeholder="Conte sua motivação, dúvida ou expectativa"
        required
        minLength={10}
        maxLength={500}
        value={form.message}
        onChange={handleChange}
        rows="4"
        style={{ resize: 'none', ...(errors.message ? { borderColor: '#F44C34' } : {}) }}
      />
      {errors.message && <span style={{ color: '#F44C34', fontSize: '0.95rem' }}>{errors.message}</span>}
      <button className={styles.button} type="submit" disabled={sending}>
        {sending ? 'Enviando...' : 'Quero me jogar nessa experiência'}
        <img src="/icone/botao.svg" alt="Ícone de ação" style={{ marginLeft: 8, height: 24, width: 24 }} />
      </button>
    </form>
  );
}

export default Formulario;
