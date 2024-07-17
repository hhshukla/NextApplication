import Link from "next/link";
// import { useEffect } from "react";

// useEffect(() => {
//     setTimeout(() => {
//       // Code to execute after 5000 milliseconds (5 seconds)
//     }, 5000);
//   }, []);

const ErrorPage = () => {
  return (
    <>
      <h1>sorry ,404 Not Found</h1>
      <h2 className="">This page does not exist</h2>
      <Link href={"/"} className="">
        Back to Home
      </Link>
    </>
  );
};

export default ErrorPage;
