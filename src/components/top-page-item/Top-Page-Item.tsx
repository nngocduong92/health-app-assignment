import React from "react";
import { ImageUrl } from "../../assets/images";
import { TopPageItemModel } from "../../models/TopPageModel";

import "./Top-Page-Item.scss";
import { format } from "date-fns";

type propType = {
  topPageItem: TopPageItemModel;
};

const ItemPage = ({ topPageItem }: propType) => {
  const imgIndex = Number.parseFloat(topPageItem.imageUrl.split("-")[1]);
  let imgUrl = ImageUrl.find((_, index) => index + 1 === imgIndex);
  const data = {
    ...topPageItem,
    imageUrl: imgUrl,
    date: new Date(topPageItem.date),
  };
  return (
    <div className="top-page-item">
      <div className="top-page-item__content">
        <img src={data.imageUrl} alt="" />
        <div className="top-page-item__content__date">
          <span>
            {format(data.date, "MM.dd")}.{data.title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
