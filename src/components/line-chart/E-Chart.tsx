import ReactEcharts from "echarts-for-react";
import { BodyRecordChartModel } from "../../models/BodyRecordModel";
type propType = {
  bodyRecordChart: BodyRecordChartModel;
};
function EChart({ bodyRecordChart }: propType) {
  const option = {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "23%",
      containLabel: true,
      backgroundColor: "#414141",
      show: true,
      borderColor: "#414141",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: bodyRecordChart.titles,
      splitLine: {
        show: true,
        lineStyle: {
          color: "#777777",
        },
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: "white",
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
      show: false,
    },
    series: [
      {
        type: "line",
        stack: "Total",
        data: bodyRecordChart.blueLineData,
        color: "#8fe9d0",
        lineStyle: {
          width: 3,
        },
      },
      {
        type: "line",
        stack: "Total",
        data: bodyRecordChart.orangeLineData,
        color: "#ffcc21",
        lineStyle: {
          width: 3,
        },
      },
    ],
  };
  return (
    <ReactEcharts
      option={option}
      lazyUpdate={true}
      style={{ height: "300px", width: "100%" }}
      opts={{ renderer: "svg" }}
    />
  );
}
export default EChart;
