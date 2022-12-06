import { BodyRecordChartModel } from "./BodyRecordModel";

export interface RecordModel {
  title: string;
  description: string;
  image: string;
}

export interface MyExerciseModel {
  title: string;
  time: number;
  kcal: number;
}

export interface MyDiaryModel {
  date: string;
  title: string;
  description: string;
}

export interface MyRecordModel {
  records: RecordModel[];
  bodyRecordChart: BodyRecordChartModel;
  myExercises: MyExerciseModel[];
  myDiaries: MyDiaryModel[];
}
