import React, { useEffect, useState } from "react";
import "./Record-Item.scss";
import { RecordModel } from "../../../models/MyRecordModel";
import { ImageRecordUrl } from "../../../assets/images";

type propType = {
  record: RecordModel;
};

function RecordItem({ record }: propType) {
  const imgIndex = Number.parseFloat(record.image.split("-")[1]);
  let imgUrl = ImageRecordUrl.find((_, index) => index + 1 === imgIndex);
  const image = {
    backgroundImage: "url(" + imgUrl + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="record">
      <div className="record__container">
        <div className="record__container__content">
          <img
            className="record__container__content__img"
            src={imgUrl}
            alt={record.image}
          />
          <div className="record__container__content__container">
            <div className="record__container__content__container__title">
              <p>{record.title}</p>
            </div>
            <div className="record__container__content__container__description">
              <p>{record.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordItem;
