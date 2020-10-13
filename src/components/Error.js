import { ShieldXIcon } from "@primer/octicons-react";
import PropTypes from "prop-types";
import React from "react";

const Error = ({ message = "" }) => (
  <div className="flash flash-error">
    <ShieldXIcon />
    {message === "" ? "Oops! An error occured..." : message}
  </div>
);

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
