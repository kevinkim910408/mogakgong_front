import React from "react";
import "./MobileFrame.css";

const MobileFrame = ({ children }) => {
  return (
    <div>
      <div className="WebFullFrame">
        <div className="MobileFullFrame">
          <div id="scroll" className="Container">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;
