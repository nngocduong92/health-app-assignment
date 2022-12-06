import React from "react";
import { MyExerciseModel } from "../../../models/MyRecordModel";
import "./My-Exercise-Item.scss";
type propType = {
  myExercise: MyExerciseModel;
};

function MyExerciseItem({ myExercise }: propType) {
  return (
    <div className="my-exercise">
      <div className="my-exercise__dot">
        <div className="dot"></div>
      </div>
      <div className="my-exercise__content">
        <div className="my-exercise__content__top">
          <div className="my-exercise__content__top__title">
            <p className="my-exercise__content__top__title__text">
              {myExercise.title}
            </p>
          </div>
          <div className="my-exercise__content__top__count-time">
            <p>{myExercise.time} min</p>
          </div>
        </div>
        <div className="my-exercise__content__bottom">
          <div className="my-exercise__content__bottom__count-calory">
            <p>{myExercise.kcal} kcal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyExerciseItem;
