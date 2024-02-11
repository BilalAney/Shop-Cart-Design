/** @format */

function Item({ img, children, buttons }) {
  const itemStyles = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr",
    gap: "8px",
    padding: "10px",
    margin: "2px",
    height: "auto",
    width: "100%",
    textAlign: "start",
    backgroundColor: "lightgrey",
    borderRadius: "10px",
  };
  const imgStyles = {
    height: "inherit",
    maxWidth: "25%",
    objectFit: "cover",
  };
  return (
    <li className="list--item" style={itemStyles}>
      <img src={img} alt={`course's thumbnail`} style={imgStyles} />
      <div className="item--middle">{children}</div>
      <div className="item--left">{buttons}</div>
    </li>
  );
}

export default Item;
