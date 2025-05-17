/* eslint-disable @typescript-eslint/no-explicit-any */
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
  ChartOptions as ChartJsOptions,
} from "chart.js";
import { useState, useEffect } from "react";
import { useAccount, usePublicClient } from "wagmi";
import { readContract } from "viem/actions";
import { wagmiContractSolarConfig } from "@/app/services/contract";

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
  const { address } = useAccount();
  const publicClient = usePublicClient();

  const [chartData, setChartData] = useState<ChartData<"line">>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchPerformanceData = async () => {
      if (!address || !publicClient) return;

      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;

      const monthLabels = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ];

      const labels = monthLabels.slice(0, currentMonth);
      const investments: number[] = [];
      const returns: number[] = [];

      for (let month = 1; month <= currentMonth; month++) {
        try {
          const result: any = await readContract(publicClient, {
            ...wagmiContractSolarConfig,
            functionName: "getUserPortfolioPerformance",
            args: [address, currentYear, month],
          });

          const investment = result?.totalInvestment ? Number(result.totalInvestment) : 0;
          const returnAmount = result?.totalReturns ? Number(result.totalReturns) : 0;
          const returnPercentage = investment > 0 ? (returnAmount / investment) * 100 : 0;

          investments.push(investment);
          returns.push(returnPercentage);
        } catch (err) {
          console.error(`Error fetching data for month ${month}:`, err);
          investments.push(0);
          returns.push(0);
        }
      }

      setChartData({
        labels,
        datasets: [
          {
            label: "Returns (%)",
            data: returns,
            borderColor: "rgb(37, 99, 235)",
            backgroundColor: "rgba(37, 99, 235, 0.1)",
            fill: true,
            tension: 0.4,
            pointRadius: 6,
            pointHoverRadius: 8,
            pointBackgroundColor: "rgb(37, 99, 235)",
            yAxisID: "y2",
          },
          {
            label: "Investment (IDR)",
            data: investments,
            borderColor: "rgb(34, 197, 94)",
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            fill: true,
            tension: 0.4,
            pointRadius: 6,
            pointHoverRadius: 8,
            pointBackgroundColor: "rgb(34, 197, 94)",
            yAxisID: "y",
          },
        ],
      });
    };

    fetchPerformanceData();
  }, [address, publicClient]);

  const options: ChartJsOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#ddd",
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function (context) {
            const value = context.parsed.y;
            const label = context.dataset.label || "";

            if (label.includes("Investment")) {
              return `${label}: IDR ${(value / 1_000_000).toFixed(1)}M`;
            }
            return `${label}: ${value.toFixed(1)}%`;
          },
        },
      },
    },
    scales: {
      y: {
        type: "linear",
        position: "left",
        beginAtZero: true,
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          callback: (value) =>
            `IDR ${((value as number) / 1_000_000).toFixed(0)}M`,
        },
        min: 0,
        max: 250_000_000,
      },
      y2: {
        type: "linear",
        position: "right",
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
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div className="h-[400px] w-full p-4 bg-white rounded-lg shadow-sm">
      <Line data={chartData} options={options} />
    </div>
  );
}
