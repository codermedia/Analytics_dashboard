import { useContext, useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

import { ch_data } from "./chartData";

import { Context } from "../../contexts/Context";

const Barchart = () => {
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
    <BarChart
      width={560}
      height={350}
      data={plotdata}
      className="rounded-lg bg-slate-50"
    >
      <XAxis dataKey="month" label="Month" />
      <YAxis dataKey="count" label="Count" />
      <Tooltip />
      <Bar dataKey="month" fill="#82ca9d" />
      <Bar dataKey="count" stroke="#82ca9d" />
    </BarChart>
  );
};

export default Barchart;
