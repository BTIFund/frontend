"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions as ChartJsOptions
} from "chart.js";
import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function PerformanceChart() {
  const [chartData, setChartData] = useState<ChartData<'line'>>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const currentMonths = [
      "Jan", "Feb", "Mar", "Apr", "May"
    ];
    
    const investmentData = [
      100000000,
      115000000,
      135000000,
      160000000,
      200000000,
    ];

    const returnsData = [
      0,
      15,
      35,
      60,
      100
    ];
    
    const data = {
      labels: currentMonths,
      datasets: [
        {
          label: "Returns (%)",
          data: returnsData,
          borderColor: "rgb(37, 99, 235)",
          backgroundColor: "rgba(37, 99, 235, 0.1)",
          fill: true,
          tension: 0.4,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointBackgroundColor: "rgb(37, 99, 235)",
          yAxisID: 'y2',
        },
        {
          label: "Investment (IDR)",
          data: investmentData,
          borderColor: "rgb(34, 197, 94)",
          backgroundColor: "rgba(34, 197, 94, 0.1)",
          fill: true,
          tension: 0.4,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointBackgroundColor: "rgb(34, 197, 94)",
          yAxisID: 'y',
        },
      ],
    };

    setChartData(data);
  }, []);

  const options: ChartJsOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#000',
        bodyColor: '#000',
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context) {
            const value = context.parsed.y;
            const label = context.dataset.label || '';
            
            if (label.includes("Investment")) {
              return `${label}: IDR ${(value / 1000000).toFixed(1)}M`;
            }
            return `${label}: ${value.toFixed(1)}%`;
          }
        }
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        position: 'left' as const,
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          callback: (value) => `IDR ${((value as number) / 1000000).toFixed(0)}M`,
        },
        min: 0,
        max: 250000000,
      },
      y2: {
        type: 'linear' as const,
        position: 'right' as const,
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          callback: (value) => `${value}%`,
        },
        min: 0,
        max: 120,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: 'bold',
          },
        }
      }
    },
  };

  return (
    <div className="h-[400px] w-full p-4 bg-white rounded-lg shadow-sm">
      <Line data={chartData} options={options} />
    </div>
  );
}