import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  SETTINGS_DATASET_NAME_KEY,
  SETTINGS_DATASET_NAME_VALUE_DEFAULT,
} from "../localStorage";

import { show } from "./alert/alertSlice";

const DatasetSettingsSelection = ({ datasets }) => {
  const [localStorageDatasetName, setLocalStorageDatasetName] = useLocalStorage(
    SETTINGS_DATASET_NAME_KEY,
    SETTINGS_DATASET_NAME_VALUE_DEFAULT
  );
  const [datasetName, setDatasetName] = useState(localStorageDatasetName);
  const dispatch = useDispatch();

  const handleSelect = (evt) => {
    setDatasetName(evt.target.value);
  };

  const handleSave = (evt) => {
    evt.preventDefault();
    setLocalStorageDatasetName(datasetName);
    dispatch(show("Save"));
  };

  return (
    <form onSubmit={handleSave}>
      <dl className="form-group">
        <dt>
          <label htmlFor="dataset_select">Dataset</label>
        </dt>
        <dd>
          <select
            id="dataset_select"
            className="form-select"
            aria-label="Dataset"
            onBlur={handleSelect}
            onChange={handleSelect}
            value={datasetName}
          >
            <option value={SETTINGS_DATASET_NAME_VALUE_DEFAULT}>
              {SETTINGS_DATASET_NAME_VALUE_DEFAULT}
            </option>
            {datasets.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>{" "}
          <button className="btn" type="submit">
            Save
          </button>
        </dd>
      </dl>
    </form>
  );
};

DatasetSettingsSelection.propTypes = {
  datasets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DatasetSettingsSelection;
