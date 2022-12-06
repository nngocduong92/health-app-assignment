import "./Line-Chart.scss";
import EChart from "./E-Chart";
import { format } from "date-fns";
import { BodyRecordChartModel } from "../../models/BodyRecordModel";
type propType = {
  bodyRecordChart: BodyRecordChartModel;
};
function LineChart({ bodyRecordChart }: propType) {
  const date = new Date();
  return (
    <div className="line-chart">
      <p className="line-chart__title">
        Body Record&emsp;{format(date, "yyyy.MM.dd")}
      </p>
      {bodyRecordChart && <EChart bodyRecordChart={bodyRecordChart}></EChart>}
      <div className="line-chart__btn-function">
        <div className="button">
          <button className="btn">日</button>
        </div>
        <div className="button">
          <button className="btn">週</button>
        </div>
        <div className="button">
          <button className="btn">月</button>
        </div>
        <div className="button">
          <button className="btn active">年</button>
        </div>
      </div>
    </div>
  );
}

export default LineChart;
