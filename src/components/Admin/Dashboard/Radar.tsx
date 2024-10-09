'use client';

import ReactECharts from 'echarts-for-react';

interface RadarProps {
  height?: string;
}

export default function Radar(props: RadarProps) {
  const option = {
    radar: {
      indicator: [
        { name: 'Dusun 1', max: 6500 },
        { name: 'Dusun 2', max: 16000 },
        { name: 'Dusun 3', max: 30000 },
        { name: 'Dusun 4', max: 38000 },
        { name: 'Dusun 5', max: 52000 },
        { name: 'Dusun 6', max: 25000 },
      ],
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget',
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Actual Spending',
          },
        ],
      },
    ],
  };

  return (
    <div
      className={`rounded-xl border border-white bg-white pt-2 shadow-md`}
      style={{ height: props.height || '400px' }}
    >
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  );
}
