import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Search from "../components/Search";
import { useEffect } from "react";

const RootLayout = () => {
  useEffect(() => {
    document.body.style.background = "#191919";
  });
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default RootLayout;
