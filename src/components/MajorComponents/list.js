/** @format */

function List({ children }) {
  const styles = {
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  };
  return <ul style={styles}>{children}</ul>;
}

export default List;
