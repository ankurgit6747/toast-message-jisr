import "./styles.css";
import Toast from "../src/compoent/Toast";
import React, { useState } from "react";

const App = () => {
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleButtonClick = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick} style={{marginTop:'5rem', height:'5rem', width:'10rem', background:'#000', border:'none', color:'#fff', cursor:'pointer', borderRadius:'10px', fontSize:'2rem'
    }}>Click me</button>
      {showToast && <Toast duration={3000} onClose={handleCloseToast} />}
    </div>
  );
};

export default App;
