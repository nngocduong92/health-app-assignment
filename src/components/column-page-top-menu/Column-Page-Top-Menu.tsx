import React from "react";
import { ComlumnPageTopModel } from "../../models/ColumnPageModel";
import "./Column-Page-Top-Menu.scss";

type propType = {
  topData: ComlumnPageTopModel;
};

const ColumnPageTop = ({ topData }: propType) => (
  <div className="column-page-top-menu__container">
    <div className="column-page-top-menu__container__title">
      {topData.title}
    </div>
    <hr />
    <div className="column-page-top-menu__container__description">
      {topData.description}
    </div>
  </div>
);

export default ColumnPageTop;
