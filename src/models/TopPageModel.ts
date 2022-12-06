import { BodyRecordChartModel } from "./BodyRecordModel";

export interface MealModel {
  icon: string;
  title: string;
}

export interface TopPageProgressBarModel {
  numberPercent: number;
  date: string;
}

export interface TopPageItemModel {
  imageUrl: string;
  title: string;
  date: string;
}

export interface TopPageModel {
  meals: MealModel[];
  progressBar: TopPageProgressBarModel;
  bodyRecordChart: BodyRecordChartModel;
  topPageItems: TopPageItemModel[];
}
