import React, { useState } from "react";

function Toggle() {
  const [buttonText, setButtonText] = useState("OFF");

  function buttonHandler () {
    if (buttonText === 'OFF'){
      setButtonText('ON');
    } else {
      setButtonText('OFF');
    };
  };

  return <button onClick={buttonHandler}>{buttonText}</button>;
}

export default Toggle;
