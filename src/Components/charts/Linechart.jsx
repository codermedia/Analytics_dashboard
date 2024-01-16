import { useContext, useEffect, useState } from "react";
import { ch_data } from "./ChartData";
import { Context } from "../../contexts/Context";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Linechart = () => {
  const [plotdata, setplotdata] = useState({});

  const { dta } = useContext(Context);
  const [dt] = dta;
  const createData = async () => {
    setplotdata(await ch_data(dt));
  };

  console.log(plotdata);

  useEffect(() => {
    createData();
  }, [dt]);

  return (
    <LineChart
      width={560}
      height={350}
      data={plotdata}
      className="rounded-lg bg-slate-50"
    >
      <XAxis dataKey="month" label="Month" minTickGap={50} />
      <YAxis label="Count" minTickGap={50} />
      <Line type="monotone" dataKey="month" stroke="#8884d8" />
      <Line type="monotone" dataKey="count" stroke="#82ca9d" />
      <Tooltip />
    </LineChart>
  );
};

export default Linechart;
