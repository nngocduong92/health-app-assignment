import React from "react";
import { ImageUrl } from "../../assets/images";
import { ColumnPageContentModel } from "../../models/ColumnPageModel";

import "./Column-Page-Content.scss";
import { format } from "date-fns";

type propType = {
  contentData: ColumnPageContentModel;
};

const ColumnPageContent = ({ contentData }: propType) => {
  const imgIndex = Number.parseFloat(contentData.image.split("-")[1]);
  let imgUrl = ImageUrl.find((_, index) => index + 1 === imgIndex);
  const data = {
    ...contentData,
    date: new Date(contentData.date),
    image: imgUrl,
  };
  return (
    <div className="column-page-content">
      <div className="column-page-content__content">
        <img src={data.image} alt="" />
        <div className="column-page-content__content__date">
          <span>{format(data.date, "yyyy.MM.dd")}</span>
          <span>{format(data.date, "HH:mm")}</span>
        </div>
      </div>

      <div className="column-page-content__header">{data.title}</div>
      <div className="column-page-content__tag">
        {data.tags &&
          data.tags.map((tag, index) => {
            return <span key={index}>#{tag}</span>;
          })}
      </div>
    </div>
  );
};

export default ColumnPageContent;
