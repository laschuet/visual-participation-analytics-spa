import React from "react";

import { useRest } from "../hooks/useRest";

import DatasetSettingsForm from "./DatasetSettingsForm";
import DatasetSettingsPreprocessing from "./DatasetSettingsPreprocessing";
import Error from "./Error";
import Loader from "./Loader";

const DatasetSettings = () => {
  const [{ data: datasets, hasError, isLoading }] = useRest(
    "http://localhost:3010/api/v1/datasets",
    []
  );

  return (
    <div>
      <div className="Subhead">
        <div className="Subhead-heading">Change dataset</div>
      </div>
      {hasError && <Error />}
      {isLoading && <Loader />}
      {!hasError && !isLoading && <DatasetSettingsForm datasets={datasets} />}
      <div className="Subhead">
        <div className="Subhead-heading">Pre-process dataset</div>
      </div>
      <DatasetSettingsPreprocessing />
    </div>
  );
};

export default DatasetSettings;
