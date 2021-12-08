import React, { useState, useEffect } from "react";
import useFilterAssets from "../utils/useFilterAssets";
import Filter from "./Filter";

export default function Filters({ assets, setAssets }) {
  const [cmsAssets, setCmsAssets] = useState(assets);
  const [filters, setfilters] = useState([]);
  const [platformPosition, setPlatformPosition] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [typeAssetPosition, setTypeAssetPosition] = useState(null);
  const [selectedTypeAsset, setSelectedTypeAsset] = useState(null);
  const [filteredAssets, setFilteredAssets] = useState(assets);
  const { platformAssets, typeAssets } = useFilterAssets(filteredAssets);

  // Create empty arrays to hold checkbox states
  const [platformCheckedState, setPlatformCheckedState] = useState(
    new Array(4).fill(false)
    // [false, true, false, false]
  );
  const [assetTypeCheckedState, setAssetTypeCheckedState] = useState(
    new Array(15).fill(false)
  );

  // Update the above checkbox array and set state for useEffect below
  const handlePlatformOnChange = (position, id) => {
    let platformIndex;
    const updatedCheckedState = platformCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setPlatformCheckedState(updatedCheckedState);
    setSelectedPlatform(id);
    setPlatformPosition(position);
  };

  // Add platforms to the filters state array
  useEffect(() => {
    const currentFilters = filters;
    let index;

    if (platformCheckedState[platformPosition]) {
      currentFilters.push(selectedPlatform);
    } else {
      index = currentFilters.indexOf(selectedPlatform);
      currentFilters.splice(index, 1);
    }
    setfilters(currentFilters);
    getFilteredAssets();
  }, [platformCheckedState]);

  // Update the above checkbox array and set state for useEffect below
  const handleAssetTypeOnChange = (position, id) => {
    const updatedCheckedState = assetTypeCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setAssetTypeCheckedState(updatedCheckedState);
    setSelectedTypeAsset(id);
    setTypeAssetPosition(position);
  };

  // Add typeAssets to the filters state array
  useEffect(() => {
    const currentFilters = filters;
    let index;

    if (assetTypeCheckedState[typeAssetPosition]) {
      currentFilters.push(selectedTypeAsset);
    } else {
      index = currentFilters.indexOf(selectedTypeAsset);
      currentFilters.splice(index, 1);
    }
    setfilters(currentFilters);
    getFilteredAssets();
  }, [assetTypeCheckedState]);

  function reduceFilters(assets, filters) {
    const filterCount = filters.length;
    let result = [];
    assets.forEach((asset) => {
      let test = 0;
      filters.forEach((filter, index) => {
        if (asset[filter]) {
          test++;
        }
        if (test === filterCount) {
          result.push(asset);
        }
      });
    });
    let distincResults = [...new Set(result)];
    return distincResults;
  }
  // Filter the assets
  function getFilteredAssets() {
    let result = [];

    if (filters.length === 0) {
      result = cmsAssets;
    } else {
      result = reduceFilters(cmsAssets, filters);
    }

    setFilteredAssets(result);
    setAssets(result);
  }

  return (
    // <></>
    <div className="flex flex-col text-blue-100">
      <div className="text-bue-100">Platforms</div>
      <div className="flex flex-col px-3 py-2 text-sm text-bue-100">
        <ul>
          {platformAssets.map((item, index) => {
            const { count, i, id, name } = item;
            return (
              <Filter
                key={id}
                name={name}
                checkedStateIndex={i}
                id={id}
                count={count}
                idx={index}
                itemCheckedState={platformCheckedState[index]}
                onChangeFunction={handlePlatformOnChange}
              />
            );
          })}
        </ul>
      </div>
      <div className="text-blue-100 mt-2">Asset Type</div>
      <div className="flex flex-col px-3 py-2 text-sm text-blue-100">
        <ul>
          {typeAssets.map((item, index) => {
            const { count, i, id, name } = item;
            return (
              <Filter
                key={id}
                name={name}
                checkedStateIndex={i}
                id={id}
                count={count}
                idx={index}
                itemCheckedState={assetTypeCheckedState[index]}
                onChangeFunction={handleAssetTypeOnChange}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
