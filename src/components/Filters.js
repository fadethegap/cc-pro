import React, { useState, useEffect } from "react";

export default function Filters({ assets }) {
  // console.log(assets);
  const [platformCheckedState, setPlatformCheckedState] = useState(
    new Array(4).fill(false)
  );
  const [assetTypeCheckedState, setAssetTypeCheckedState] = useState(
    new Array(15).fill(false)
  );

  const handlePlatformOnChange = (position, handlePlatformClick) => {
    const updatedCheckedState = platformCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setPlatformCheckedState(updatedCheckedState);
    alert("Filters not yet functional.");
  };

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  useEffect(() => {
    // console.log(platformCheckedState);
  }, [platformCheckedState]);

  const handleAssetTypeOnChange = (position) => {
    const updatedCheckedState = assetTypeCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setAssetTypeCheckedState(updatedCheckedState);
    alert("Filters not yet functional.");
  };

  // Array to hold all filtered assets
  const platforms = () => {
    let ppCount = 0;
    let aeCount = 0;
    let fcpCount = 0;
    let drCount = 0;

    assets.forEach((asset) => {
      if (asset.premierePro) {
        ppCount++;
      }
      if (asset.afterEffects) {
        aeCount++;
      }
      if (asset.finalCutPro) {
        fcpCount++;
      }
      if (asset.divinciResolve) {
        drCount++;
      }
    });
    const pForms = [
      { id: "premierePro", name: "Premiere Pro", count: ppCount },
      { id: "afterEffects", name: "After Effects", count: aeCount },
      { id: "finalCutPro", name: "Final Cut Pro", count: fcpCount },
      { id: "divinciResolve", name: "Divinci Resolve", count: drCount },
    ];
    // const res = pForms.filter((o) => o.count > 0);
    return pForms;
  };

  const assetTypes = () => {
    let bgCount = 0;
    let editCount = 0;
    let effectCount = 0;
    let introCount = 0;
    let logoCount = 0;
    let ltCount = 0;
    let lutsCount = 0;
    let otherCount = 0;
    let overlayCount = 0;
    let pvCount = 0;
    let ssCount = 0;
    let titleCount = 0;
    let textCount = 0;
    let tkCount = 0;
    let transCount = 0;

    assets.forEach((asset) => {
      if (asset.backgrounds) {
        bgCount++;
      }
      if (asset.edits) {
        editCount++;
      }
      if (asset.effects) {
        effectCount++;
      }
      if (asset.intros) {
        introCount++;
      }
      if (asset.logo) {
        logoCount++;
      }
      if (asset.lowerThirds) {
        ltCount++;
      }
      if (asset.luts) {
        lutsCount++;
      }
      if (asset.other) {
        otherCount++;
      }
      if (asset.overlays) {
        overlayCount++;
      }
      if (asset.photoVideo) {
        pvCount++;
      }
      if (asset.slideshow) {
        ssCount++;
      }
      if (asset.titles) {
        titleCount++;
      }
      if (asset.text) {
        textCount++;
      }
      if (asset.toolkits) {
        tkCount++;
      }
      if (asset.transitions) {
        transCount++;
      }
    });

    const oAssets = [
      { id: "backgrounds", name: "Backgrounds", count: bgCount },
      { id: "edits", name: "Edits", count: editCount },
      { id: "effects", name: "Effects", count: effectCount },
      { id: "intros", name: "Intros", count: introCount },
      { id: "logo", name: "Logo", count: logoCount },
      { id: "lowerThirds", name: "Lower Thirds", count: ltCount },
      { id: "luts", name: "Luts", count: lutsCount },
      { id: "other", name: "Other", count: otherCount },
      { id: "overlays", name: "Overlays", count: overlayCount },
      { id: "photoVideo", name: "Photo / Video", count: pvCount },
      { id: "slideshow", name: "Slideshow", count: ssCount },
      { id: "titles", name: "Titles", count: titleCount },
      { id: "text", name: "Text", count: textCount },
      { id: "toolKits", name: "Tool Kits", count: tkCount },
      { id: "transitions", name: "Transitions", count: transCount },
    ];

    // const res = oAssets.filter((a) => a.count > 0);
    return oAssets;
  };

  return (
    <div className=" flex flex-col text-blue-100">
      <div className="text-bue-100">Platforms</div>
      <div className="flex flex-col px-3 py-2 text-sm text-bue-100">
        <ul>
          {platforms().map((platform, index) => (
            <li
              key={generateKey(index)}
              className={`${
                platform.count === 0 ? "invisible absolute left-9999" : ""
              }`}
            >
              <div className="">
                <div className="flex items-center mr-4 mb-2">
                  <input
                    type="checkbox"
                    id={`${platform.name}-${index}`}
                    name={platform.name}
                    value={platform.name}
                    checked={platformCheckedState[index]}
                    onChange={() => handlePlatformOnChange(index)}
                    className="opacity-0 absolute h-8 w-8"
                  />
                  <div className="bg-blue-100 border-2 rounded-md border-blue-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                    <svg
                      className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
                      version="1.1"
                      viewBox="0 0 17 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <g
                          transform="translate(-9 -11)"
                          fill="#1F73F1"
                          fillRule="nonzero"
                        >
                          <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <label htmlFor="A3-yes" className="select-none text-blue-100">
                    {platform.name}
                  </label>
                  <span className="text-blue-100 pl-2">{`(${platform.count})`}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-blue-100 mt-2">Asset Type</div>
      <div className="flex flex-col px-3 py-2 text-sm text-blue-100">
        <ul>
          {assetTypes().map((asset, index) => (
            <li
              key={generateKey(index)}
              className={`${
                asset.count === 0 ? "invisible absolute left-9999" : ""
              }`}
            >
              <div className="">
                <div className="flex items-center mr-4 mb-2">
                  <input
                    type="checkbox"
                    id={`${asset.name}-${index}`}
                    name={asset.name}
                    value={asset.name}
                    checked={assetTypeCheckedState[index]}
                    onChange={() => handleAssetTypeOnChange(index)}
                    className={`opacity-0 absolute h-8 w-8 ${
                      asset.count === 0 ? "invisible" : ""
                    }`}
                  />
                  <div className="bg-blue-100 border-2 rounded-md border-blue-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                    <svg
                      className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
                      version="1.1"
                      viewBox="0 0 17 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <g
                          transform="translate(-9 -11)"
                          fill="#1F73F1"
                          fillRule="nonzero"
                        >
                          <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <label htmlFor="A3-yes" className="select-none text-blue-100">
                    {asset.name}
                  </label>
                  <span className="text-blue-100 pl-2">{`(${asset.count})`}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
