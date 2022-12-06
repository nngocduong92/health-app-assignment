import React from "react";
import "./Meal-List.scss";
import MealItem from "./meal-item/Meal-Item";
import { MealModel } from "../../models/TopPageModel";
type propType = {
  meals: MealModel[];
};
const MealList = ({ meals }: propType) => {
  return (
    <div className="meal-list">
      {meals &&
        meals.map((meal, index) => {
          return <MealItem meal={meal} key={index}></MealItem>;
        })}
    </div>
  );
};

export default MealList;
