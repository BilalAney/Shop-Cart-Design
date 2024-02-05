/** @format */

function Btn({
  children,
  gap = "5px",
  aClass = "Ready-to-use_BUTTON",
  bgColor = "yellow",
  color = "black",
  fontSize = "8px",
  margin = "5px",
  borderRadius = "5px",
}) {
  const styles = {
    display: "flex",
    flexDirection: "row",
    gap,
    backgroundColor: bgColor,
    color,
    fontSize,
    borderRadius,
    margin,
  };
  return (
    <button className={aClass} style={styles}>
      {children}
    </button>
  );
}
