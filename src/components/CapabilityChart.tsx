import { useMemo } from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar, Tooltip, PolarAngleAxis } from 'recharts';
import { serviceCatalog } from '../data/content';
import './CapabilityChart.css';

const COLORS = ['#F0A63A', '#0C6B4E', '#E1592C', '#E8C15B', '#14183F', '#7A1F2B', '#0C6B4E', '#F0A63A', '#E1592C', '#0C6B4E', '#E8C15B'];

export default function CapabilityChart() {
  const data = useMemo(
    () =>
      serviceCatalog.map((cat, i) => ({
        name: cat.category,
        value: cat.services.length,
        fill: COLORS[i % COLORS.length],
      })),
    []
  );

  const totalServices = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="capability-chart">
      <div className="capability-chart__viz">
        <ResponsiveContainer width="100%" height={320}>
          <RadialBarChart
            innerRadius="24%"
            outerRadius="100%"
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis type="number" domain={[0, 5]} angleAxisId={0} tick={false} />
            <RadialBar background={{ fill: 'rgba(20,24,63,0.05)' }} dataKey="value" cornerRadius={8} />
            <Tooltip
              contentStyle={{
                background: 'var(--navy)',
                border: 'none',
                borderRadius: 10,
                color: '#fff',
                fontSize: 13,
              }}
              formatter={(value) => [`${value} services`, '']}
              labelFormatter={(label) => label}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="capability-chart__center">
          <strong>{totalServices}</strong>
          <span>services, 11 categories</span>
        </div>
      </div>

      <ul className="capability-chart__legend">
        {data.map((d) => (
          <li key={d.name}>
            <span className="capability-chart__dot" style={{ background: d.fill }} />
            <span className="capability-chart__label">{d.name}</span>
            <span className="capability-chart__value">{d.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
