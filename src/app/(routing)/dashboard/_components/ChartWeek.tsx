"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { month: "January", week: 186 },
  { month: "February", week: 305 },
  { month: "March", week: 237 },
  { month: "April", week: 73 },
  { month: "May", week: 209 },
  { month: "June", week: 214 },
];
export default function ChartWeek() {
  const chartConfig = {
    week: {
      label: "week sales",
      color: "hsl(var(--primary))",
    },
  } satisfies ChartConfig;
  return (
    <ChartContainer className="h-[350px] w-full" config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <defs>
          <linearGradient id="fillWeek" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="hsl(var(--primary))"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="hsl(var(--primary))"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="week"
          type="natural"
          fill="url(#fillWeek)"
          fillOpacity={0.4}
          stroke="hsl(var(--primary))"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
}
