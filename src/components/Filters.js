import React, { useState, useEffect } from "react";
import useFilterAssets from "../utils/useFilterAssets";
import Filter from "./Filter";

export default function Filters({ assets, setAssets }) {
  const { platformAssets, typeAssets } = useFilterAssets(assets);
  const { filters, setfilters } = useState("");

  const [platformCheckedState, setPlatformCheckedState] = useState(
    new Array(4).fill(false)
  );
  const [assetTypeCheckedState, setAssetTypeCheckedState] = useState(
    new Array(15).fill(false)
  );

  const handlePlatformOnChange = (position, id) => {
    const updatedCheckedState = platformCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setPlatformCheckedState(updatedCheckedState);

    const currentFilters = filters;
    console.log(currentFilters);

    //Update filters
    // const currentFilters = filters;
    // let index;

    // if (updatedCheckedState) {
    //   currentFilters.push(id);
    // } else {
    //   index = currentFilters.indexOf(id);
    //   currentFilters.splice(index, 1);
    // }

    // console.log(currentFilters);
  };

  const handleAssetTypeOnChange = (position, id) => {
    const updatedCheckedState = assetTypeCheckedState.map((item, index) =>
      index === position ? !item : item
    );

    console.log(position);
    console.log(id);
    setAssetTypeCheckedState(updatedCheckedState);
  };

  const platforms = () => {
    return platformAssets;
  };
  const assetTypes = () => {
    return typeAssets;
  };

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  let onChangeFunction = handlePlatformOnChange;
  let itemCheckedState = platformCheckedState;
  // console.log(itemCheckedState[1]);

  // onChangeFunction(0);
  // console.log(itemCheckedState[0]);
  // const filters = platformAssets.map((platform, index) => {
  //   let checkedState = itemCheckedState[index];
  //   return (
  //     <Filter
  //       key={index}
  //       item={platform}
  //       idx={index}
  //       onChangeFunction={handlePlatformOnChange}
  //       itemCheckedState={checkedState}
  //     />
  //   );
  // });

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
