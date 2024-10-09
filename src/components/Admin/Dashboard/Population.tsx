'use client';

import ReactECharts from 'echarts-for-react';

interface DataSeries {
  name: string;
  type: string;
  data: number[];
}

interface PopulationProps {
  height?: string;
  title?: string;
  categoryType: string[];
  dataSeries: DataSeries[];
  classname?: string;
}

export default function Population(props: PopulationProps) {
  const option = {
    title: {
      text: props.title,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    xAxis: {
      type: 'category',
      data: props.categoryType,
    },
    series: props.dataSeries,
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
