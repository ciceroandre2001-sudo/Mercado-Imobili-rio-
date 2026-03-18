import React from 'react';

const Ticker = ({ indicators }) => {
  // Double the indicators for a seamless loop
  const displayIndicators = [...indicators, ...indicators];

  return (
    <div className="glass" style={{ borderBottom: '1px solid var(--border)', overflow: 'hidden', padding: '10px 0', background: 'rgba(0,0,0,0.5)' }}>
      <div className="animate-scroll">
        {displayIndicators.map((item, index) => (
          <div key={index} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0 24px', whiteSpace: 'nowrap' }}>
            <span style={{ fontWeight: '700', fontSize: '14px', color: 'var(--text-primary)' }}>{item.name}</span>
            <span style={{ fontSize: '14px', fontWeight: '500' }}>{item.value}%</span>
            <span style={{ 
              fontSize: '12px', 
              color: item.variation.startsWith('+') ? 'var(--success)' : (item.variation === '0.00' ? 'var(--text-secondary)' : 'var(--danger)'),
              display: 'flex',
              alignItems: 'center',
              gap: '2px'
            }}>
              {item.variation.startsWith('+') ? '▲' : (item.variation === '0.00' ? '' : '▼')}
              {item.variation}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
