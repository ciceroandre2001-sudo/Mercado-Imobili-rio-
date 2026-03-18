import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const IndicatorChart = ({ data }) => {
  return (
    <div id="chart-section" className="glass" style={{ 
      padding: '30px', 
      borderRadius: '24px', 
      marginBottom: '60px',
      border: '1px solid var(--border)',
      background: 'var(--glass-bg)'
    }}>
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '800', margin: '0 0 8px 0', color: 'var(--text-primary)' }}>Variação Histórica (%)</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>Comparativo mensal dos principais indexadores (INCC, IPCA e IGP-M).</p>
      </div>

      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis 
              dataKey="month" 
              stroke="var(--text-secondary)" 
              fontSize={12} 
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis 
              stroke="var(--text-secondary)" 
              fontSize={12} 
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'rgba(15, 15, 15, 0.95)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
              }}
              itemStyle={{ fontSize: '13px', fontWeight: '600' }}
              cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 2 }}
            />
            <Legend 
              verticalAlign="top" 
              align="right" 
              height={36}
              iconType="circle"
              wrapperStyle={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}
            />
            <Line
              name="INCC"
              type="monotone"
              dataKey="incc"
              stroke="var(--vmc-red)"
              strokeWidth={3}
              dot={{ r: 4, fill: 'var(--vmc-red)', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              animationDuration={2000}
            />
            <Line
              name="IPCA"
              type="monotone"
              dataKey="ipca"
              stroke="var(--vmc-yellow)"
              strokeWidth={3}
              dot={{ r: 4, fill: 'var(--vmc-yellow)', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              animationDuration={2000}
            />
            <Line
              name="IGP-M"
              type="monotone"
              dataKey="igpm"
              stroke="#00C49F"
              strokeWidth={3}
              dot={{ r: 4, fill: '#00C49F', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              animationDuration={2000}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IndicatorChart;
