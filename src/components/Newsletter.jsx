import React, { useState } from 'react';
import { Mail, CheckCircle, Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Simulate API call
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="glass" style={{ margin: '40px 0', padding: '40px', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
      {/* Background Accent */}
      <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--vmc-red)', filter: 'blur(100px)', opacity: '0.1' }}></div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ backgroundColor: 'rgba(227, 6, 19, 0.1)', padding: '10px', borderRadius: '12px', color: 'var(--vmc-red)' }}>
              <Mail size={24} />
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>Newsletter Diária</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
            Receba os principais indicadores e as notícias mais importantes do mercado imobiliário brasileiro diretamente no seu e-mail todos os dias às 08:30.
          </p>
        </div>

        <div>
          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px' }}>
              <div style={{ flex: 1, position: 'relative' }}>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  required
                  style={{ 
                    width: '100%', 
                    padding: '16px 20px', 
                    borderRadius: '12px', 
                    border: '1px solid var(--border)', 
                    backgroundColor: 'rgba(255,255,255,0.03)', 
                    color: 'var(--text-primary)',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--vmc-red)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <button 
                type="submit" 
                style={{ 
                  backgroundColor: 'var(--vmc-red)', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '12px', 
                  padding: '0 24px', 
                  fontSize: '14px', 
                  fontWeight: '700', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'transform 0.2s ease'
                }}
                onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
                onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
              >
                CADASTRAR <Send size={16} />
              </button>
            </form>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', borderRadius: '12px', backgroundColor: 'rgba(0, 200, 5, 0.1)', border: '1px solid var(--success)' }}>
              <CheckCircle size={24} className="text-success" />
              <div>
                <p style={{ fontWeight: '700', fontSize: '14px', color: 'var(--text-primary)' }}>E-mail cadastrado com sucesso!</p>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Você receberá nossa newsletter a partir de amanhã.</p>
              </div>
            </div>
          )}
          <p style={{ marginTop: '16px', fontSize: '11px', color: '#666', textAlign: 'center' }}>
            Prometemos não enviar spam. Você pode cancelar a inscrição a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
