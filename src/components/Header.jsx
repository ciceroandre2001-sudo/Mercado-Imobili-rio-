import React, { useState, useEffect } from 'react';
import { Sun, Moon, Clock, TrendingUp } from 'lucide-react';

const Header = ({ theme, toggleTheme }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <header className="glass sticky-top" style={{ position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid var(--border)', padding: '12px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={toggleTheme}
            className="glass"
            style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '10px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              cursor: 'pointer',
              color: 'var(--text-primary)',
              transition: 'all 0.3s ease'
            }}
            title={theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', backgroundColor: 'var(--vmc-red)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white' }}>
              <TrendingUp size={22} />
            </div>
            <div>
              <h1 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>MERCADO IMOBILIÁRIO</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                <span style={{ fontSize: '10px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Dashboard</span>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '700', color: 'var(--text-primary)' }}>
              <Clock size={14} style={{ color: 'var(--vmc-red)' }} />
              {formatTime(time)}
            </div>
            <div style={{ fontSize: '10px', color: 'var(--text-secondary)', fontWeight: '600' }}>
              {formatDate(time)}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '16px', borderLeft: '1px solid var(--border)' }}>
            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--success)', borderRadius: '50%', boxShadow: '0 0 10px var(--success)' }}></div>
            <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Mercado Aberto</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
