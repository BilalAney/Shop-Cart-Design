/** @format */

import { useState } from "react";

function TextExpander({
  children,
  minNumOfWords = 35,
  defaultMode = false,
  expandWord = "Expand",
  collapseWord = "Collapse",
  expandWordColor = "blue",
  collapseWordColor = "blue",
}) {
  const [isExpanded, setIsExpanded] = useState(defaultMode);
  const textWords = children.split(" ");
  const collapsedText = textWords.slice(0, minNumOfWords).join(" ");
  const spanStyles = {
    color: isExpanded ? collapseWordColor : expandWordColor,
  };
  return (
    <div className="textExpander-bundle">
      <p>
        {isExpanded ? textWords.join(" ") : collapsedText}...
        <span onClick={() => setIsExpanded((pre) => !pre)} style={spanStyles}>
          {isExpanded ? collapseWord : expandWord}
        </span>
      </p>
    </div>
  );
}

export default TextExpander;
