import { useState } from "react";

// object deconstruction
const ToogleView = ({ user }) => {
  // status := "on" | "off"

  // status = ["on", "off", "on", "off"]
  //                                ^
  // array deconstruction
  const [status, setStatus] = useState("on"); // inital value => Anfangswert ist "on"

  const toggleStatus = () => {
    if (status === "on") {
      setStatus("off"); // nach dem RE-RENDER!
    } else {
      setStatus("on");
    }

    console.log(status);
    // RE-RERENDER <--- Wenn sich STATE ändert oder die PROPS. (Golden Rule of react...)
  };

  // (Conditional) RENDERing
  if (status === "on") {
    return (
      <div className="toggle-view-on" onClick={toggleStatus}>
        ON
      </div>
    );
  } else {
    return (
      <div className="toggle-view-off" onClick={toggleStatus}>
        OFF
      </div>
    );
  }
};

export default ToogleView;
