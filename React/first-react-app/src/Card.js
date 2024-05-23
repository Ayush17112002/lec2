export default function Card(props) {
  const styles = {
    backgroundColor: "green",
    border: "10px solid black",
    borderRadius: "10px",
    fontSize: "20",
    height: "200px",
    width: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="card" style={styles}>
      {props.children}
    </div>
  );
}
