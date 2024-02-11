/** @format */

import Btn from "../MinorComponents/Btn";
import Item from "../MinorComponents/Item";
import StarBar from "../MinorComponents/StarRating";

function CourseItem({ course, handleAddCourse, handleSelect }) {
  const btnProps = {
    padding: "8px",
    margin: "6px",
    color: "white",
    bgColor: "var(--default-dark-color)",
    fontSize: "var(--size-one)",
  };
  return (
    <Item
      img={course.img}
      buttons={
        <>
          <Btn {...btnProps} handleClick={handleSelect}>
            DETAILS
          </Btn>
          <Btn {...btnProps} handleClick={handleAddCourse}>
            ADD TO CART
          </Btn>
        </>
      }
    >
      <>
        <p className="middle--title">{course.title}</p>
        <StarBar
          numOfStars={5}
          numOfSelectedStars={course.rating}
          displayOnly={true}
        />
        <p className="middle--price">{course.price} $</p>
      </>
    </Item>
  );
}

export default CourseItem;
