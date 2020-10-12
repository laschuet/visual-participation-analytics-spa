import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import {
  SETTINGS_DATASET_NAME_KEY,
  SETTINGS_DATASET_NAME_VALUE_DEFAULT,
} from "../constants";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useRest } from "../hooks/useRest";

import ContributionList from "./ContributionList";
import Error from "./Error";
import Loader from "./Loader";

const Analytics = () => {
  const [datasetName] = useLocalStorage(
    SETTINGS_DATASET_NAME_KEY,
    SETTINGS_DATASET_NAME_VALUE_DEFAULT
  );
  const [{ data: contributions, hasError, isLoading }] = useRest(
    `http://localhost:8080/api/v1/datasets/${datasetName}/contributions`,
    []
  );

  return (
    <Fragment>
      <h2>Analytics</h2>
      {hasError && <Error />}
      {datasetName === "" && (
        <div>
          No dataset set. Go to <NavLink to="/settings">settings</NavLink>.
        </div>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <ContributionList contributions={contributions} />
      )}
    </Fragment>
  );
};

export default Analytics;
