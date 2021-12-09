import React from "react";
import Checkbox from "../components/Checkbox";

export default function Filter(props) {
  const { name, id, count, idx, itemCheckedState, onChangeFunction } = props;

  return (
    // <> </>
    <li className={`${count === 0 ? "invisible absolute" : ""}`}>
      <div className="">
        <div className="flex items-center mr-4 mb-2">
          <Checkbox
            name={name}
            id={id}
            count={count}
            idx={idx}
            itemCheckedState={itemCheckedState}
            onChangeFunction={onChangeFunction}
          />
        </div>
      </div>
    </li>
  );
}
