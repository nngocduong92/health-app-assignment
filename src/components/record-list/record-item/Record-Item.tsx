import React from "react";
import "./Record-Item.scss";
import { RecordModel } from "../../../models/MyRecordModel";
import { ImageRecordUrl } from "../../../assets/images";

type propType = {
  record: RecordModel;
};

function RecordItem({ record }: propType) {
  const imgIndex = Number.parseFloat(record.image.split("s")[1]);
  let imgUrl = ImageRecordUrl.find((_, index) => index + 1 === imgIndex) || "";
  const image = {
    backgroundImage: "url(" + imgUrl + ")",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="record">
      <div style={image} className="record__container">
        <div className="record__container__content">
          <div className="record__container__content__title">
            <p>{record.title}</p>
          </div>
          <div className="record__container__content__description">
            <p>{record.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordItem;
