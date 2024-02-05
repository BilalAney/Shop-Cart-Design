/** @format */

function Item({ img, info, buttons }) {
  const itemStyles = {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    gap: "8px",
    padding: "12px",
    margin: "2px",
    height: "auto",
    width: "100%",
  };
  const imgStyles = {
    height: "inherit",
    width: "auto",
  };
  return (
    <li className="list--item" style={itemStyles}>
      <img src={img} alt={`course's thumbnail`} style={imgStyles} />
      <div className="item--middle">{info}</div>
      <div className="item--left">{buttons}</div>
    </li>
  );
}
