import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import IndicatorCard from './components/IndicatorCard';
import SelicCard from './components/SelicCard';
import NewsFeed from './components/NewsFeed';
import Newsletter from './components/Newsletter';
import { fetchIndicators, fetchSelicData, fetchNews } from './services/dataService';

function App() {
  const [indicators, setIndicators] = useState([]);
  const [selic, setSelic] = useState(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('vmc-theme') || 'dark';
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('vmc-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const [indicatorsData, selicData, newsData] = await Promise.all([
          fetchIndicators(),
          fetchSelicData(),
          fetchNews()
        ]);
        
        setIndicators(indicatorsData);
        setSelic(selicData);
        setNews(newsData);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div style={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '40px', height: '40px', border: '3px solid rgba(227, 6, 19, 0.2)', borderTopColor: 'var(--vmc-red)', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }}></div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: '600' }}>Iniciando Mercado Imobiliário...</p>
        </div>
        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  return (
    <div className="app-container" style={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh', transition: 'background-color 0.3s ease' }}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Ticker indicators={indicators} />
      
      <main className="container" style={{ paddingTop: '60px' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--vmc-red)', textTransform: 'uppercase', letterSpacing: '2px' }}>Painel Económico</span>
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>Indicadores do Mercado</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>Dados atualizados para análise do cenário imobiliário brasileiro.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          {selic && <SelicCard data={selic} />}
          
          {indicators.map(indicator => (
            <IndicatorCard 
              key={indicator.id}
              name={indicator.name}
              value={indicator.value}
              variation={indicator.variation}
              accumulated={indicator.accumulated}
              iconName={indicator.icon}
            />
          ))}
        </div>

        <Newsletter />
        <NewsFeed news={news} />
        
        <footer style={{ padding: '80px 0 40px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <div style={{ marginBottom: '24px' }}>
            <span style={{ fontWeight: '800', fontSize: '24px', color: 'var(--vmc-red)', fontFamily: 'var(--font-heading)' }}>Mercado Imobiliário</span>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.6' }}>
            Todos os direitos reservados ©. <br />
            Feito por Cícero André com a orientação de Eliakim Rocha
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
