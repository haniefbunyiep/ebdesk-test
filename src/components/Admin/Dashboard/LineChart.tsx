'use client';

import ReactECharts from 'echarts-for-react';

interface LineChartProps {
  height?: string;
}

export default function LineChart(props: LineChartProps) {
  const option = {
    title: {
      text: 'Jumlah Penduduk',
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'value',
      min: -100,
      max: 100,
    },
    series: [
      {
        data: [-80, -30, -90, 60, -10, 20, -100],
        type: 'line',
        smooth: true,
      },
    ],
  };

  return (
    <div
      className={`rounded-xl border border-white bg-white pt-2 shadow-md ${props.height}`}
      style={{ height: props.height || '400px' }}
    >
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  );
}
