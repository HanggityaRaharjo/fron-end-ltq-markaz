import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [stateLoading, setStateLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setStateLoading(false);
    }, 500);
  }, []);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        className="transition-all duration-150"
        style={{ opacity: stateLoading ? "0" : "1" }}
      >
        <div className="loading-wrapper ">
          <div className="loading-circle"></div>
          <div className="loading-circle"></div>
          <div className="loading-circle"></div>
          <div className="loading-shadow"></div>
          <div className="loading-shadow"></div>
          <div className="loading-shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
