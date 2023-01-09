import { useSelector } from "react-redux";
import ListSection from "../components/listSection/ListSection";
import "./myPage.css";
import { selectSpecialistsData } from "../features/counter/counterSlice";
import { ITechSpecialistsData } from "../types/types";

const MyPage = () => {
  const specialistsData: ITechSpecialistsData[] = useSelector(
    selectSpecialistsData
  );
  return (
    <div>
      <div className="techDataWrapper">
        {specialistsData.map((elem) => {
          return <ListSection key={elem.id} {...elem} />;
        })}
      </div>
    </div>
  );
};

export default MyPage;
