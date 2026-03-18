import React from 'react';
import { ChevronDown, ArrowUpRight, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{ 
      position: 'relative', 
      width: '100%', 
      height: '80vh', 
      minHeight: '600px',
      display: 'flex', 
      alignItems: 'center', 
      overflow: 'hidden',
      backgroundColor: '#000'
    }}>
      {/* Background Image with Overlay */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        backgroundImage: `url('/assets/hero_bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: '0.6'
      }}></div>
      
      {/* Gradient Overlay for Readability */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        background: 'linear-gradient(90deg, rgba(5,5,5,1) 0%, rgba(5,5,5,0.8) 40%, rgba(5,5,5,0) 100%)'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ backgroundColor: 'var(--vmc-red)', width: '30px', height: '2px' }}></div>
            <span style={{ fontSize: '14px', fontWeight: '800', color: 'var(--vmc-red)', textTransform: 'uppercase', letterSpacing: '4px' }}>Mercado de Capitais</span>
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(40px, 8vw, 72px)', 
            fontWeight: '900', 
            lineHeight: '1.1', 
            marginBottom: '24px', 
            fontFamily: 'var(--font-heading)',
            color: 'white',
            letterSpacing: '-2px'
          }}>
            Onde a <span style={{ color: 'var(--vmc-red)' }}>Construção</span> encontra o Futuro <span style={{ color: 'var(--vmc-yellow)' }}>Financeiro</span>.
          </h1>
          
          <p style={{ 
            fontSize: 'clamp(16px, 2vw, 20px)', 
            color: 'rgba(255,255,255,0.7)', 
            maxWidth: '600px', 
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            Análise aprofundada, indicadores de precisão e notícias exclusivas do mercado imobiliário brasileiro em uma única plataforma.
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              style={{ 
                backgroundColor: 'var(--vmc-red)', 
                color: 'white', 
                border: 'none', 
                padding: '18px 36px', 
                borderRadius: '12px', 
                fontSize: '16px', 
                fontWeight: '800', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 20px rgba(227, 6, 19, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(227, 6, 19, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(227, 6, 19, 0.3)';
              }}
            >
              EXPLORAR DASHBOARD <ArrowUpRight size={20} />
            </button>
            
            <btn className="glass" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              padding: '18px 36px', 
              borderRadius: '12px', 
              fontSize: '16px', 
              fontWeight: '700', 
              color: 'white',
              cursor: 'pointer',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              INDICADORES VMC <TrendingUp size={20} color="var(--vmc-yellow)" />
            </btn>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{ 
        position: 'absolute', 
        bottom: '30px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        color: 'rgba(255,255,255,0.4)',
        animation: 'bounce 2s infinite'
      }}>
        <span style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={20} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translate(-50%, 0); }
          40% { transform: translate(-50%, -10px); }
          60% { transform: translate(-50%, -5px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
