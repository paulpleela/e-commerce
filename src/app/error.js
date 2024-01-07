"use client";

import Link from "next/link";

export const metadata = {
  title: "Error",
  description: "An error occured.",
};

const Error = () => {
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
      <h1>500 Internal Server Error</h1>
      <h3>Sorry. The server encountered an unexpected condition that prevented it from fulfilling the request.</h3>
      <h3><Link href="/">Return Home</Link></h3>
    </div>
  );
};

export default Error;
