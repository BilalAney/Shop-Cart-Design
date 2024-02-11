/** @format */

import { useState } from "react";

function Star({
  handleClick,
  handleMouseIn,
  handleMouseOut,
  isFilled,
  displayOnly,
}) {
  return (
    <button
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
      onClick={handleClick}
      style={{
        opacity: isFilled ? "1" : "0.5",
        border: "none",
        backgroundColor: "transparent",
        userSelect: "none",
        WebkitUserSelect: "none",
        cursor: !displayOnly ? "pointer" : "",
      }}
    >
      ⭐
    </button>
  );
}

export default function StarBar({
  numOfStars,
  numOfSelectedStars = "",
  setNumOfSelectedStars,
  displayOnly = false,
}) {
  const [stars, setStars] = useState(renderSavedStars);

  function renderSavedStars() {
    const newArr = [];
    for (let i = 0; i < numOfStars; i++)
      newArr.push({
        starNum: i,
        isFilled: i <= numOfSelectedStars,
      });
    return newArr;
  }

  function handleMouseIn(id) {
    if (displayOnly) return;
    setStars((pre) => {
      return pre.map((ele) =>
        ele.starNum <= id
          ? { ...ele, isFilled: true }
          : { ...ele, isFilled: false }
      );
    });
  }

  function handleMouseOut() {
    if (displayOnly) return;
    setStars(renderSavedStars);
  }

  function handleClick(id) {
    if (displayOnly) return;
    setNumOfSelectedStars(id);
  }

  return (
    <div>
      {stars.map((ele) => (
        <Star
          key={ele.starNum}
          id={ele.starNum}
          isFilled={ele.isFilled}
          handleClick={() => handleClick(ele.starNum)}
          handleMouseIn={() => handleMouseIn(ele.starNum)}
          handleMouseOut={handleMouseOut}
          displayOnly={displayOnly}
        />
      ))}
    </div>
  );
}
