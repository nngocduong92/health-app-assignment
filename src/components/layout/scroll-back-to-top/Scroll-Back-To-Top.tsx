import React, { useEffect, useState } from "react";
import scrollIcon from "../../../assets/images/svg/component_scroll.svg";
import "./Scroll-Back-To-Top.scss";

const ScrollBackToTop = () => {
  const [scrollState, setScrollState] = useState("none");

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  useEffect(() => {
    const handleScroll = (event: Event) => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setScrollState("block");
      } else {
        setScrollState("none");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className="scroll-to-top"
      type="button"
      onClick={() => topFunction()}
      title="Go to top"
      style={{ display: scrollState === "block" ? "block" : "none" }}
    >
      <img src={scrollIcon} alt="scroll" />
    </button>
  );
};

export default ScrollBackToTop;
