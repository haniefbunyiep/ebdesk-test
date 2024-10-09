'use client';

import ReactECharts from 'echarts-for-react';

interface BarChartProps {
  height?: string;
}

export default function BarChart(props: BarChartProps) {
  const option = {
    title: {
      text: 'Prasarana Air Bersih',
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
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
