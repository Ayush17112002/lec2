import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Lec15() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
