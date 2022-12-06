import React from "react";
import "./my-diary-list.scss";
import MyDiaryItem from "./my-diary-item/My-Diary-Item";
import { MyDiaryModel } from "../../models/MyRecordModel";
type propType = {
  myDiaries: MyDiaryModel[];
};
function MyDiaryList({ myDiaries }: propType) {
  return (
    <div className="my-diary-list">
      <div className="my-diary-list__header">
        <div className="my-diary-list__header__title">
          <p>MY DIARY</p>
        </div>
      </div>
      <div className="my-diary-list__body">
        <div className="my-diary-list__body__content">
          {myDiaries &&
            myDiaries.map((diary, index) => (
              <div className="my-diary-item" key={index}>
                <MyDiaryItem myDiary={diary}></MyDiaryItem>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MyDiaryList;
