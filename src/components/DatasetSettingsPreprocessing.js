import React from "react";

const DatasetSettingsPreprocessing = () => {
  const handlePreprocess = (evt) => {
    evt.preventDefault();
  };

  return (
    <>
      <p>The dataset has not yet been pre-processed.</p>
      <form onSubmit={handlePreprocess}>
        <button className="btn" type="submit">
          Pre-process
        </button>
      </form>
    </>
  );
};

export default DatasetSettingsPreprocessing;
