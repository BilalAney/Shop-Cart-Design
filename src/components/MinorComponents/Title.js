/** @format */

function Title(props) {
  return (
    <p
      style={{
        display: "inline-block",
        fontSize: props.fontSize ? props.fontSize : "10px",
        fontWeight: props.weight ? props.weight : "bold",
      }}
    >
      {props.children}
    </p>
  );
}

export default Title;
