import React from "react";

import { ColumnPageTopMenu } from "../../components";
import { ColumnPageContent } from "../../components";
import data from "../../data/column-page.json";

import "./Column-Page.scss";

import { ColumnPageModel } from "../../models/ColumnPageModel";
import { Button } from "../../components/layout";

const ColumnPage = () => {
  const source: ColumnPageModel = data;

  return (
    <div className="column_page__container">
      <div className="column_page__top__container">
        {source &&
          source.comlumnPageTopData.map((topData, index) => (
            <ColumnPageTopMenu topData={topData} key={index} />
          ))}
      </div>
      <div className="column_page__content__container">
        {source &&
          source.columnPageContentModel.map((contentData, index) => (
            <ColumnPageContent
              contentData={contentData}
              key={index}
            ></ColumnPageContent>
          ))}
      </div>
      <div className="column_page__content__action">
        <Button value={"コラムをもっと見る"} />
      </div>
    </div>
  );
};

export default ColumnPage;
