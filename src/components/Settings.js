import React from "react";

import { useRest } from "../hooks/useRest";

import DatasetSettings from "./DatasetSettings";
import Error from "./Error";
import Loader from "./Loader";

const Settings = () => {
  const [{ data: datasets, hasError, isLoading }] = useRest(
    "http://localhost:8080/api/v1/datasets",
    []
  );

  return (
    <div>
      <h2>Settings</h2>
      {hasError && <Error />}
      {isLoading ? <Loader /> : <DatasetSettings datasets={datasets} />}
    </div>
  );
};

export default Settings;
