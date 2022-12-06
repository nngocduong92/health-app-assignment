import React from "react";
import "./Meal-Item.scss";
import { MealIcon } from "../../../assets/images";
import { MealModel } from "../../../models/TopPageModel";

type propType = {
  meal: MealModel;
};
const MealItem = ({ meal }: propType) => {
  let iconitem = MealIcon.find((e) => e.includes(meal.icon)) || "";
  return (
    <div className="meal-item">
      <div className="meal-item__content">
        <div className="meal-item__content__icon">
          <img className="icon" src={iconitem} alt="" />
        </div>
        <div className="meal-item__content__title">
          <p>{meal.title}</p>
        </div>
      </div>
    </div>
  );
};

export default MealItem;
