import React, { useState, useEffect } from "react";
import "./Toast.css";
import { ReactComponent as ToastIcon } from "../svg/ToastIcon.svg";

const Toast = ({
  duration,
  onClose
}: {
  duration: number;
  onClose: () => void;
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setVisible(true);

    const timeout = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  return (
    <div className={`toast ${visible ? "toast-visible" : ""}`}>
      <ToastIcon className="icon" />
      <div className="toast-content">
        <span className="toast-title">Toast title</span>
        <span className="toast-detail">
          Long details go here after the title, long details go here after the
          title
        </span>
        <div className="toast-button">
          <button className="btn btn-blue">Button</button>
          <button className="btn btn-white">Button</button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
