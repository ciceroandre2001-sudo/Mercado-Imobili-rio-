/**
 * Mock Data Service for Mercado Imobiliário - VMC
 * Modular structure to be replaced by real API calls later.
 */

export const fetchIndicators = async () => {
    // Simulated delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return [
      { id: 'incc-di', name: 'INCC-DI', value: '0.45', variation: '+0.12', accumulated: '+4.52', icon: 'Construction' },
      { id: 'incc-m', name: 'INCC-M', value: '0.38', variation: '-0.05', accumulated: '+4.15', icon: 'Building' },
      { id: 'ipca', name: 'IPCA', value: '0.42', variation: '+0.08', accumulated: '+4.62', icon: 'ShoppingCart' },
      { id: 'igp-m', name: 'IGP-M', value: '-0.15', variation: '-0.20', accumulated: '-0.45', icon: 'TrendingDown' },
      { id: 'ivar', name: 'IVAR', value: '0.22', variation: '+0.15', accumulated: '+3.85', icon: 'Home' },
      { id: 'fipezap', name: 'FipeZap (Residencial)', value: '0.55', variation: '+0.03', accumulated: '+6.12', icon: 'MapPin' },
      { id: 'poupanca', name: 'Poupança', value: '0.50', variation: '0.00', accumulated: '+6.17', icon: 'PiggyBank' },
      { id: 'tr', name: 'T.R. (Taxa Referencial)', value: '0.08', variation: '-0.02', accumulated: '+1.12', icon: 'Percent' },
      { id: 'cub', name: 'CUB (Custo Unitário)', value: '0.48', variation: '+0.05', accumulated: '+5.10', icon: 'Tool' },
    ];
  };
  
  export const fetchSelicData = async () => {
    return {
      value: '13.25',
      variation: '0.00',
      lastMeeting: '31/01/2026',
      nextMeeting: '20/03/2026',
      expectation: {
        type: 'Corte',
        points: '0.50 p.p.',
        status: 'Previsão: Corte de 0.50 p.p.'
      }
    };
  };
  
  export const fetchNews = async () => {
    return [
      {
        id: 1,
        title: 'Mercado Imobiliário Brasileiro projeta crescimento de 5% em 2026',
        summary: 'Especialistas apontam que a estabilidade dos juros deve impulsionar novos lançamentos residenciais.',
        source: 'VMC Insights',
        date: '18 Mar 2026',
        category: 'Mercado',
        thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&h=400&auto=format&fit=crop'
      },
      {
        id: 2,
        title: 'Tecnologia na Construção: O Impacto do BIM na Redução de Custos',
        summary: 'Uso de modelagem digital permite economia de até 15% no orçamento final de grandes obras.',
        source: 'Portal Engenharia',
        date: '17 Mar 2026',
        category: 'Tecnologia',
        thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&h=400&auto=format&fit=crop'
      },
      {
        id: 3,
        title: 'Novas Regras do MCMV ampliam acesso à moradia popular',
        summary: 'Governo Federal anuncia ajustes nos subsídios para famílias da Faixa 1 do programa.',
        source: 'Notícias Urbanas',
        date: '16 Mar 2026',
        category: 'Desenvolvimento',
        thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&h=400&auto=format&fit=crop'
      },
      {
        id: 4,
        title: 'Sustentabilidade: Condomínios Verdes ganham espaço nas capitais',
        summary: 'Projetos com certificação ambiental já representam 20% dos novos lançamentos de alto padrão.',
        source: 'Eco Construção',
        date: '15 Mar 2026',
        category: 'Sustentabilidade',
        thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&h=400&auto=format&fit=crop'
      },
      {
        id: 5,
        title: 'Inovação em Loteamentos: O Conceito de Smart Cities no Interior',
        summary: 'Cidades inteligentes integradas a loteamentos planejados transformam a vida no campo.',
        source: 'Desenvolvimento Urbano',
        date: '14 Mar 2026',
        category: 'Inovação',
        thumbnail: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=600&h=400&auto=format&fit=crop'
      },
      {
        id: 6,
        title: 'Perspectivas Econômicas para o Setor de Galpões Logísticos',
        summary: 'E-commerce continua impulsionando a demanda por espaços de armazenamento estrategicamente localizados.',
        source: 'Logística & Infra',
        date: '13 Mar 2026',
        category: 'Logística',
        thumbnail: 'https://images.unsplash.com/photo-1506306560410-910e9603f90e?q=80&w=600&h=400&auto=format&fit=crop'
      }
    ];
  };
