import PropTypes from "prop-types";
import React, { useState } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  SETTINGS_DATASET_NAME_KEY,
  SETTINGS_DATASET_NAME_VALUE_DEFAULT,
} from "../localStorage";

const DatasetSettingsForm = ({ datasets }) => {
  const [localStorageDatasetName, setLocalStorageDatasetName] = useLocalStorage(
    SETTINGS_DATASET_NAME_KEY,
    SETTINGS_DATASET_NAME_VALUE_DEFAULT
  );
  const [datasetName, setDatasetName] = useState(localStorageDatasetName);

  const handleSelect = (evt) => {
    setDatasetName(evt.target.value);
  };

  const handleSave = (evt) => {
    setLocalStorageDatasetName(datasetName);
    evt.preventDefault();
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

DatasetSettingsForm.propTypes = {
  datasets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DatasetSettingsForm;
