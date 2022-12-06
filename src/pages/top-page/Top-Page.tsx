import React from "react";
import { Button } from "../../components/layout";
import data from "../../data/top-page.json";
import { ItemPage } from "../../components";
import Echart from "../../components/line-chart/E-Chart";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Top-Page.scss";
import MealList from "../../components/meal-list/Meal-List";
import { TopPageModel } from "../../models/TopPageModel";
import { format } from "date-fns";

const TopPage = () => {
  const source: TopPageModel = data;
  const progressBarData = {
    ...source.progressBar,
    date: new Date(source.progressBar.date),
  };
  return (
    <div className="top-page__main">
      <div className="top-page__top-main">
        <div className="top-page__top-main__progress">
          <div className="top-page__top-main__progress__circle-container">
            <CircularProgressbarWithChildren
              circleRatio={1}
              value={progressBarData.numberPercent}
              strokeWidth={1}
            >
              <div className="circle-content">
                <span className="circle-sub-text">
                  {format(progressBarData.date, "MM/dd")}
                </span>
                <span className="circle-text">
                  {progressBarData.numberPercent}%
                </span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="top-page__line-chart">
          {source && <Echart bodyRecordChart={source.bodyRecordChart}></Echart>}
        </div>
      </div>
      <div className="top-page__item_main">
        {source && <MealList meals={source.meals}></MealList>}
      </div>
      <div className="top-page__content_main">
        {source &&
          source.topPageItems.map((topPageItem, index) => {
            return <ItemPage key={index} topPageItem={topPageItem} />;
          })}
      </div>
      <div className="top-page--action">
        <Button value={"記録をもっと見る"} />
      </div>
    </div>
  );
};
export default TopPage;
