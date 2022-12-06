import React from "react";
import { format } from "date-fns";
import "./My-Diary-Item.scss";
import { MyDiaryModel } from "../../../models/MyRecordModel";
type propType = {
  myDiary: MyDiaryModel;
};
function MyDiaryItem({ myDiary }: propType) {
  const data = {
    date: new Date(myDiary.date),
    title: myDiary.title,
    description: myDiary.description,
  };
  return (
    <div className="my-diary">
      <div className="my-diary__time">
        <div className="my-diary__time__date">
          {format(data.date, "yyyy.MM.dd")}
        </div>
        <div className="my-diary__time__hour">{format(data.date, "HH:mm")}</div>
      </div>
      <div className="my-diary__body">
        <div className="my-diary__body__content">
          <p className="my-diary__body__title">{data.title}</p>
          <p className="my-diary__body__description">{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MyDiaryItem;
