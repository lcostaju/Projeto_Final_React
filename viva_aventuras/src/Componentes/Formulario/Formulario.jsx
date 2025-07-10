import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './FormSection.module.css';




function Formulario() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const validate = () => {
    const newErrors = {};
    if (!form.name || form.name.trim().length < 2) {
      newErrors.name = 'Digite seu nome completo.';
    }
    if (!form.email) {
      newErrors.email = 'Digite seu e-mail.';
        } else if (!/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,}$/.test(form.email)) {
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
    setFeedback({ type: '', message: '' });
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSending(true);
    emailjs.sendForm('service_edqh72a', 'template_fltm1jl', e.target, 'IN3q3laY6zJFJG4LT')
      .then(() => {
        setFeedback({ type: 'success', message: 'Mensagem enviada com sucesso!' });
        setForm({ name: '', email: '', message: '' });
        setSending(false);
        setTimeout(() => {
          setFeedback({ type: '', message: '' });
        }, 4000);
      }, (error) => {
        setFeedback({ type: 'error', message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.' });
        setSending(false);
        setTimeout(() => {
          setFeedback({ type: '', message: '' });
        }, 5000);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {feedback.message && (
        <div
          style={{
            background: feedback.type === 'success' ? '#F44C34' : '#ffeaea',
            color: feedback.type === 'success' ? '#E5E7EB' : '#d32f2f',
            border: `1.5px solid ${feedback.type === 'success' ? '#E5E7EB' : '#d32f2f'}`,
            borderRadius: 8,
            padding: '12px 18px',
            marginBottom: 16,
            textAlign: 'center',
            fontWeight: 600,
            fontSize: '1rem'
          }}
        >
          {feedback.message}
        </div>
      )}
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
