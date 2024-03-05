/** @format */

import Btn from "../MinorComponents/Btn";
import StarBar from "../MinorComponents/StarRating";
import TextExpander from "../MinorComponents/TextExpander";
import Title from "../MinorComponents/Title";

function Info({ course, handleAddCourse }) {
  const btnProps = {
    padding: "8px",
    margin: "6px",
    color: "white",
    bgColor: "var(--default-dark-color)",
    fontSize: "var(--size-one)",
  };
  return (
    <div className="theInfo">
      <Title fontWeight="600" fontSize="var(--size-three)">
        {course.title}
      </Title>

      <TextExpander
        minNumOfWords={45}
        collapseWord="Show Less"
        expandWord="Show More"
        expandWordColor="blue"
        collapseWordColor="var(--defaul-dark-color)"
      >
        {course.description}
      </TextExpander>

      <StarBar
        numOfStars={5}
        numOfSelectedStars={course.rating}
        displayOnly={true}
      />

      <div className="info-btns-Container">
        <Btn {...btnProps} handleClick={() => handleAddCourse(course.id)}>
          Add To Cart
        </Btn>
        <Btn {...btnProps}>Buy Now</Btn>
      </div>
    </div>
  );
}

export default Info;
