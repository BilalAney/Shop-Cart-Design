/** @format */

function Btn({
  children,
  gap = "5px",
  aClass = "Ready-to-use_BUTTON",
  padding = "8px",
  bgColor = "yellow",
  color = "black",
  fontSize = "8px",
  margin = "5px",
  borderRadius = "5px",
  width = "auto",
  justifyContent = "center",
  alignItems = "center",
  handleClick = () => console.log("CLICKED!"),
}) {
  const styles = {
    display: "flex",
    flexDirection: "row",
    border: "none",
    gap,
    backgroundColor: bgColor,
    color,
    fontSize,
    borderRadius,
    margin,
    padding,
    width,
    justifyContent,
    alignItems,
  };
  return (
    <button className={aClass} style={styles} onClick={handleClick}>
      {children}
    </button>
  );
}
export default Btn;
