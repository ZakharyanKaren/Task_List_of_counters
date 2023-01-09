import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../features/counter/counterSlice";
import { ITechSpecialist } from "../../types/types";
import "./list.css";
interface Props {
  list: ITechSpecialist;
  sectionId: number;
}

const List: React.FC<Props> = React.memo(
  ({ list, sectionId }) => {
    const dispatch = useDispatch();

    const handleClick = (value: number) => {
      dispatch(
        increment({
          value: value,
          sectionId: sectionId,
          itemId: list.id,
        })
      );
    };

    return (
      <div className="itemsWrapper">
        <div>{list.name}</div>
        <div className="counterWrapper">
          <button onClick={() => handleClick(-1)}>-</button>
          <div>{list.count}</div>
          <button onClick={() => handleClick(1)}>+</button>
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

export default List;
