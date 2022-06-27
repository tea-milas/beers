import React, { useState, useEffect } from "react";
import Mobile from "./Mobile/Mobile.jsx";
import Desktop from "./Desktop/Desktop";

const Navigation = (props) => {
  const { setSearchText, searchBeers, setUrl } = props;

  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 1024;

  return (
    <>
      {isMobile ? (
        <Mobile
          setSearchText={setSearchText}
          searchBeers={searchBeers}
          setUrl={setUrl}
        />
      ) : (
        <Desktop
          setSearchText={setSearchText}
          searchBeers={searchBeers}
          setUrl={setUrl}
        />
      )}
    </>
  );
};

export default Navigation;
