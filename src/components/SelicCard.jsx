import React from 'react';
import { Landmark, Calendar, Target, TrendingDown, TrendingUp, Minus } from 'lucide-react';

const SelicCard = ({ data }) => {
  const { value, variation, lastMeeting, nextMeeting, expectation } = data;
  
  const getExpectationIcon = (type) => {
    if (type.toLowerCase().includes('corte')) return <TrendingDown size={16} className="text-success" />;
    if (type.toLowerCase().includes('subida') || type.toLowerCase().includes('alta')) return <TrendingUp size={16} className="text-danger" />;
    return <Minus size={16} className="text-secondary" />;
  };

  return (
    <div className="card" style={{ gridColumn: 'span 2', borderColor: 'rgba(255, 237, 0, 0.3)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'rgba(255, 237, 0, 0.1)', padding: '12px', borderRadius: '12px', color: 'var(--vmc-yellow)' }}>
            <Landmark size={32} />
          </div>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: 0 }}>Taxa SELIC</h2>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>BANCO CENTRAL DO BRASIL</p>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Taxa Atual</p>
          <h3 style={{ fontSize: '36px', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--vmc-yellow)' }}>{value}<span style={{ fontSize: '20px' }}>%</span></h3>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Calendar size={20} className="text-secondary" />
          <div>
            <p style={{ fontSize: '11px', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '700' }}>Última Reunião</p>
            <p style={{ fontSize: '15px', fontWeight: '600' }}>{lastMeeting}</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Calendar size={20} style={{ color: 'var(--vmc-red)' }} />
          <div>
            <p style={{ fontSize: '11px', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '700' }}>Próxima Reunião</p>
            <p style={{ fontSize: '15px', fontWeight: '600' }}>{nextMeeting}</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <Target size={20} style={{ color: 'var(--vmc-yellow)' }} />
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '11px', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '700' }}>Expectativa de Mercado</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {getExpectationIcon(expectation.type)}
              <p style={{ fontSize: '14px', fontWeight: '700' }}>{expectation.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelicCard;
