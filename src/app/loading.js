const Loading = () => {
  const styles = {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <div style={styles}>
      <h1>Loading... Please Wait</h1>
    </div>
  );
};

export default Loading;
