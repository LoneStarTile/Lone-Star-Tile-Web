import { useEffect, useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  const [dotCount, setDotCount] = useState(0);
  const [isCoverVisible, setIsCoverVisible] = useState(true);
  const [isCoverSlidingDown, setIsCoverSlidingDown] = useState(false);

  useEffect(() => {
    if (!isCoverVisible) {
      return;
    }

    const dotTimer = window.setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4);
    }, 1000);

    return () => {
      window.clearInterval(dotTimer);
    };
  }, [isCoverVisible]);

  useEffect(() => {
    if (!isCoverVisible) {
      return;
    }

    const beginReveal = () => {
      setIsCoverSlidingDown(true);
      window.setTimeout(() => {
        setIsCoverVisible(false);
      }, 700);
    };

    if (document.readyState === "complete") {
      beginReveal();
      return;
    }

    window.addEventListener("load", beginReveal, { once: true });

    return () => {
      window.removeEventListener("load", beginReveal);
    };
  }, [isCoverVisible]);

  return (
    <>
      <RouterProvider router={router} />
      {isCoverVisible ? (
        <div className={`loading-cover${isCoverSlidingDown ? " loading-cover--slide-down" : ""}`}>
          <p className="loading-cover__text">{`loading in${".".repeat(dotCount)}`}</p>
        </div>
      ) : null}
    </>
  );
}
