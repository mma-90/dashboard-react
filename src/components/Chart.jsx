import "../styles/components/chart.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   {
//     name: "JAN",
//     user: 4000,
//   },
//   {
//     name: "FEB",
//     user: 3000,
//   },
//   {
//     name: "MAR",
//     user: 2000,
//   },
//   {
//     name: "APR",
//     user: 2780,
//   },
//   {
//     name: "MAY",
//     user: 1890,
//   },
//   {
//     name: "JUN",
//     user: 2390,
//   },
// ];

const Chart = ({ data, xDataKey, yDataKey, title }) => {
  return (
    <div className="chart">
      <h2 className="chart__title">{title} </h2>
      <ResponsiveContainer width="90%" aspect={4 / 1}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xDataKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={yDataKey}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
