import React from "react";
import {
  RecordList,
  LineChart,
  MyExerciseList,
  MyDiaryList,
} from "../../components/index";
import { Button } from "../../components/layout";
import "./My-Record.scss";
import data from "../../data/my-record.json";
import { MyRecordModel } from "../../models/MyRecordModel";

const MyRecord = () => {
  const myRecordData: MyRecordModel = data;

  return (
    <div className="my-record__container container">
      <div className="my-record__main-content">
        <div className="my-record__main-content__item">
          {myRecordData && (
            <RecordList records={myRecordData.records}></RecordList>
          )}
        </div>
        <div className="my-record__main-content__item">
          {myRecordData && (
            <LineChart
              bodyRecordChart={myRecordData.bodyRecordChart}
            ></LineChart>
          )}
        </div>
        <div className="my-record__main-content__item">
          {myRecordData && (
            <MyExerciseList
              myExercises={myRecordData.myExercises}
            ></MyExerciseList>
          )}
        </div>
        <div className="my-record__main-content__item">
          {myRecordData && (
            <MyDiaryList myDiaries={myRecordData.myDiaries}></MyDiaryList>
          )}
        </div>
      </div>
      <div className="my-record--action">
        <Button
          value={"自分の日記をもっと見る"}
          onClick={() => console.log("123")}
        />
      </div>
    </div>
  );
};

export default MyRecord;
