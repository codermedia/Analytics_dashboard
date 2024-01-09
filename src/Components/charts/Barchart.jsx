import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { chart_data } from "../../constants/data";

const Barchart = () => {
  return (
    <BarChart width={500} height={300} data={chart_data}>
      <XAxis dataKey="name" />
      <YAxis dataKey="price" />
      <Tooltip />
      <Bar dataKey="price" fill="#8884d8" />
    </BarChart>
  );
};

export default Barchart;
