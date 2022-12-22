import React, { FC } from "react";
import { ITechSpecialistsData } from "../../types/types";
import List from "../list/List";
import "./listSection.css";

const ListSection: FC<ITechSpecialistsData> = React.memo(
  (elem) => {
    return (
      <div className="sectionWrapper">
        <div>{elem.name}</div>
        <div className="sectionListWrapper">
          {elem.list.map((list) => {
            return <List key={list.id} list={list} sectionId={elem.id} />;
          })}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
      return true;
    }
    return false;
  }
);
export default ListSection;
