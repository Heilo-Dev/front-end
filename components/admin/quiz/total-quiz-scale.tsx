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
  LabelList,
  ResponsiveContainer,
} from "recharts";

export default class TotalQuizScale extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/bar-chart-with-customized-event-4k1bd";

  state = {
    data: [
      {
        name: "SATURDAY",
        uv: 3.4,
        pv: 4300,
        amt: 2100,
      },
      {
        name: "SUNDAY",
        uv: 4.2,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "MONDAY",
        uv: 3.7,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "TUESDAY",
        uv: 7.5,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "WEDNESDAY",
        uv: 2.7,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "THURSDAY",
        uv: -0.7,
        pv: 1398,
        amt: 2181,
      },
      {
        name: "FRIDAY",
        uv: 2.0,
        pv: 3800,
        amt: 2500,
      },
    ],
    activeIndex: 0,
  };

  handleClick = (data: any, index: any) => {
    this.setState({
      activeIndex: index,
    });
  };

  CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-primaryLight p-1.5 text-white">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="intro">{label}</p>
        </div>
      );
    }

    return null;
  };

  render() {
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];

    return (
      <div className="w-full flex">
        {/* <p className="font-light text-[#7d7d7d]">ACTIVITY SCALE in hours</p> */}
        <div className="w-full">
          <ResponsiveContainer width="100%" height={380}>
            <BarChart width={150} height={40} data={data}>
              <Tooltip
                // cursor={{ fill: "transparent" }}
                cursor={false}
                content={<this.CustomTooltip />}
              />
              <Bar
                radius={[35, 35, 0, 0]}
                dataKey="uv"
                onClick={this.handleClick}
              >
                <LabelList
                  dataKey="uv"
                  position={"top"}
                  style={{
                    fill: "#a0a0a0",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                />
                {data.map((entry, index) => (
                  <Cell
                    cursor="pointer"
                    fill={
                      index === activeIndex
                        ? "#1BE59D"
                        : entry.uv >= 0
                        ? "#01B489"
                        : "#DA4453"
                    }
                    key={`cell-${index}`}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="content uppercase text-[#7d7d7d]">{`${activeItem.name}: ${activeItem.uv}`}</p>
        </div>
      </div>
    );
  }
}
