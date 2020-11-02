import { XIcon } from "@primer/octicons-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { dismiss, selectMessage } from "./alertSlice";

const Alert = () => {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();

  const handleClose = (evt) => {
    evt.preventDefault();
    dispatch(dismiss());
  };

  return (
    <div className="flash flash-full">
      {message}
      <button
        className="flash-close js-flash-close"
        type="button"
        aria-label="Close"
        onClick={handleClose}
      >
        <XIcon />
      </button>
    </div>
  );
};

export default Alert;
