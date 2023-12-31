import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist or is currently unavailable.",
};

const NotFound = () => {
  const styles = {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  };

  return (
    <div style={styles}>
      <h1>404 Page Not Found</h1>
      <h3>Sorry. The page you are looking for does not exist or is currently unavailable.</h3>
      <h3><Link href="/">Return Home</Link></h3>
    </div>
  );
};

export default NotFound;
