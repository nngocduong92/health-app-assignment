import React from "react";
import "./my-exercise-list.scss";
import { format } from "date-fns";
import MyExerciseItem from "./my-exercise-item/My-Exercise-Item";
import { MyExerciseModel } from "../../models/MyRecordModel";
type propType = {
  myExercises: MyExerciseModel[];
};
function MyExerciseList({ myExercises }: propType) {
  const today = new Date();
  return (
    <div className="my-exercise-list">
      <div className="my-exercise-list__header">
        <div className="my-exercise-list__header__title">
          <p>MY EXERCISE</p>
        </div>
        <div className="my-exercise-list__header__date">
          <p>{format(today, "yyyy.MM.dd")}</p>
        </div>
      </div>
      <div className="my-exercise-list__body">
        <div className="my-exercise-list__body__content">
          {myExercises &&
            myExercises.map((exercise, index) => (
              <div className="my-exercise-item" key={index}>
                <MyExerciseItem myExercise={exercise}></MyExerciseItem>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MyExerciseList;
