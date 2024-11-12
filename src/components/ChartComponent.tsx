"use client";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const ChartComponent = () => {
  const chartData = [
    { day: "Monday", products: 35 },
    { day: "Tuesday", products: 42 },
    { day: "Wednesday", products: 58 },
    { day: "Thursday", products: 27 },
    { day: "Friday", products: 63 },
    { day: "Saturday", products: 74 },
    { day: "Sunday", products: 49 },
  ];

  const chartConfig = {
    products: {
      label: "Products",
      color: "#000000",
    },
  } satisfies ChartConfig;

  return (
    <div>
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/chart"
        className="font-bold underline cursor-pointer"
      >
        Chart
      </a>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="products" fill="var(--color-products)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default ChartComponent;
