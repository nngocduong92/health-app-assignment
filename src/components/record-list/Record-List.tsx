import React from "react";
import { RecordModel } from "../../models/MyRecordModel";
import { RecordItem } from "./index";
import "./Record-List.scss";

type propType = {
  records: RecordModel[];
};

function RecordList({ records }: propType) {
  return (
    <div className="record-list">
      <div className="record-list__content">
        {records &&
          records.map((record, index) => (
            <div className="record-item" key={index}>
              <RecordItem record={record}></RecordItem>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RecordList;
