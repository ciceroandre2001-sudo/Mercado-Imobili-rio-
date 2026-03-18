import React from 'react';
import * as Icons from 'lucide-react';

const IndicatorCard = ({ name, value, variation, accumulated, iconName }) => {
  const Icon = Icons[iconName] || Icons.Activity;
  const isPositive = variation.startsWith('+');
  const isNeutral = variation === '0.00';

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px', color: 'var(--vmc-red)' }}>
          <Icon size={24} />
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Último Valor</p>
          <h3 style={{ fontSize: '28px', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>{value}<span style={{ fontSize: '16px' }}>%</span></h3>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>{name}</h4>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Variação</span>
          <span style={{ 
            fontSize: '13px', 
            fontWeight: '700', 
            color: isPositive ? 'var(--success)' : (isNeutral ? 'var(--text-secondary)' : 'var(--danger)'),
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            {isPositive ? '↑' : (isNeutral ? '' : '↓')} {variation}%
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Acumulado (12m)</span>
          <span style={{ fontSize: '13px', fontWeight: '700' }}>{accumulated}%</span>
        </div>
      </div>
    </div>
  );
};

export default IndicatorCard;
