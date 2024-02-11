/** @format */
import { memo } from "react";
import CourseItem from "./courseItem";
import List from "./list";
import Title from "../MinorComponents/Title";

function ShopMenu({ courses, handleSelect, handleAddCourse, children }) {
  const styles = {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    overflowY: "auto",
    overflowX: "hidden",
  };
  return (
    <div className="theList" style={styles}>
      <Title fontSize="var(--size-three)" fontWeight="600">
        BEST COURSES SPECIALLY FOR YOU!
      </Title>
      <List>
        {courses.map((ele) => (
          <CourseItem
            key={ele.id}
            course={ele}
            handleSelect={() => handleSelect(ele)}
            handleAddCourse={() => handleAddCourse(ele)}
          />
        ))}
      </List>

      <div style={{ display: "flex", placeContent: "center" }}>{children}</div>
    </div>
  );
}

export default memo(ShopMenu);
