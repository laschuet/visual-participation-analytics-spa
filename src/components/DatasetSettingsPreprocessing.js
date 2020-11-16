import React, { Fragment } from "react";

const DatasetSettingsPreprocessing = () => {
  const handlePreprocess = (evt) => {
    evt.preventDefault();
  };

  return (
    <Fragment>
      <p>The dataset has not yet been pre-processed.</p>
      <form onSubmit={handlePreprocess}>
        <button className="btn" type="submit">
          Pre-process
        </button>
      </form>
    </Fragment>
  );
};

export default DatasetSettingsPreprocessing;
