'use client';

import ReactECharts from 'echarts-for-react';

interface value {
  name: string;
  value: number;
}

interface PieChartProps {
  height?: string;
  title?: string;
  data: value[];
  classname?: string;
}

export default function PieChart(props: PieChartProps) {
  const option = {
    title: {
      text: 'Jumlah Penduduk Tiap Dusun',
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: props.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return (
    <div
      className={`rounded-xl border border-white bg-white pt-2 shadow-md ${props.classname}`}
      style={{ height: props.height || '400px' }}
    >
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  );
}
