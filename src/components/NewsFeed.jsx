import React from 'react';
import { Newspaper, ChevronRight, Clock, Tag } from 'lucide-react';

const NewsFeed = ({ news }) => {
  return (
    <section style={{ marginTop: '40px', marginBottom: '60px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ backgroundColor: 'var(--vmc-red)', width: '4px', height: '24px', borderRadius: '2px' }}></div>
          <h2 style={{ fontSize: '22px', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>NOTÍCIA</h2>
        </div>
        <button className="glass" style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', color: 'var(--text-primary)' }}>
          VER TUDO <ChevronRight size={14} />
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {news.map((item) => (
          <div key={item.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', height: '180px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
              <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                <span className="glass" style={{ padding: '4px 10px', borderRadius: '6px', fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--vmc-yellow)' }}>
                  {item.category}
                </span>
              </div>
            </div>
            
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={12} /> {item.date}
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Newspaper size={12} /> {item.source}
                </span>
              </div>
              
              <h3 style={{ fontSize: '17px', fontWeight: '700', lineHeight: '1.4', marginBottom: '10px', color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', display: '-webkit-box', overflow: 'hidden' }}>
                {item.summary}
              </p>

              <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                <a href="#" style={{ color: 'var(--vmc-red)', fontSize: '12px', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  LER MAIS <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsFeed;
