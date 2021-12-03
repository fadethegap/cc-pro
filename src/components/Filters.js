import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";

export default function Filters({ assets, handleChange }) {
  // console.log(assets);
  const [platformsCheckedState, setPlatformsCheckedState] = useState(
    new Array(4).fill(false)
  );
  const [assetTypeCheckedState, setAssetTypeCheckedState] = useState(
    new Array(15).fill(false)
  );

  const [allAssets] = useState(assets);
  const [filteredAssets, setFilteredAssets] = useState([
    { id: "premierePro", name: "Premiere Pro", count: 0 },
    { id: "afterEffects", name: "After Effects", count: 0 },
    { id: "finalCutPro", name: "Final Cut Pro", count: 0 },
    { id: "divinciResolve", name: "Divinci Resolve", count: 0 },
    { id: "backgrounds", name: "Backgrounds", count: 0 },
    { id: "edits", name: "Edits", count: 0 },
    { id: "effects", name: "Effects", count: 0 },
    { id: "intros", name: "Intros", count: 0 },
    { id: "logo", name: "Logo", count: 0 },
    { id: "lowerThirds", name: "Lower Thirds", count: 0 },
    { id: "luts", name: "Luts", count: 0 },
    { id: "other", name: "Other", count: 0 },
    { id: "overlays", name: "Overlays", count: 0 },
    { id: "photoVideo", name: "Photo / Video", count: 0 },
    { id: "slideshow", name: "Slideshow", count: 0 },
    { id: "titles", name: "Titles", count: 0 },
    { id: "text", name: "Text", count: 0 },
    { id: "toolKits", name: "Tool Kits", count: 0 },
    { id: "transitions", name: "Transitions", count: 0 },
  ]);

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  function getOccurrence(array, value) {
    return array.filter((v) => v === value).length;
  }

  // useEffect(() => {
  //   let ppCount = 0;
  //   let aeCount = 0;
  //   let fcpCount = 0;
  //   let drCount = 0;
  //   let bgCount = 0;
  //   let editCount = 0;
  //   let effectCount = 0;
  //   let introCount = 0;
  //   let logoCount = 0;
  //   let ltCount = 0;
  //   let lutsCount = 0;
  //   let otherCount = 0;
  //   let overlayCount = 0;
  //   let pvCount = 0;
  //   let ssCount = 0;
  //   let titleCount = 0;
  //   let textCount = 0;
  //   let tkCount = 0;
  //   let transCount = 0;

  //   assets.map((a) => {
  //     if (asset.premierePro) {
  //       ppCount++;
  //     }
  //     if (asset.afterEffects) {
  //       aeCount++;
  //     }
  //     if (asset.finalCutPro) {
  //       fcpCount++;
  //     }
  //     if (asset.divinciResolve) {
  //       drCount++;
  //     }
  //     if (asset.backgrounds) {
  //       bgCount++;
  //     }
  //     if (asset.edits) {
  //       editCount++;
  //     }
  //     if (asset.effects) {
  //       effectCount++;
  //     }
  //     if (asset.intros) {
  //       introCount++;
  //     }
  //     if (asset.logo) {
  //       logoCount++;
  //     }
  //     if (asset.lowerThirds) {
  //       ltCount++;
  //     }
  //     if (asset.luts) {
  //       lutsCount++;
  //     }
  //     if (asset.other) {
  //       otherCount++;
  //     }
  //     if (asset.overlays) {
  //       overlayCount++;
  //     }
  //     if (asset.photoVideo) {
  //       pvCount++;
  //     }
  //     if (asset.slideshow) {
  //       ssCount++;
  //     }
  //     if (asset.titles) {
  //       titleCount++;
  //     }
  //     if (asset.text) {
  //       textCount++;
  //     }
  //     if (asset.toolkits) {
  //       tkCount++;
  //     }
  //     if (asset.transitions) {
  //       transCount++;
  //     }
  //   });
  //   let temp = [
  //     { id: "premierePro", name: "Premiere Pro", count: ppCount },
  //     { id: "afterEffects", name: "After Effects", count: aeCount },
  //     { id: "finalCutPro", name: "Final Cut Pro", count: fcpCount },
  //     { id: "divinciResolve", name: "Divinci Resolve", count: drCount },
  //   ];
  // }, [filteredAssets]);

  // Array to hold all filtered assets
  const platforms = () => {
    let assetIds = [];
    let ppCount = 0;
    let aeCount = 0;
    let fcpCount = 0;
    let drCount = 0;

    assets.map((asset) => {
      if (asset.premierePro) {
        ppCount++;
        assetIds.push(asset.id);
      }
      if (asset.afterEffects) {
        aeCount++;
        assetIds.push(asset.id);
      }
      if (asset.finalCutPro) {
        fcpCount++;
        assetIds.push(asset.id);
      }
      if (asset.divinciResolve) {
        drCount++;
        assetIds.push(asset.id);
      }
    });
    const pForms = [
      { id: "premierePro", name: "Premiere Pro", count: ppCount },
      { id: "afterEffects", name: "After Effects", count: aeCount },
      { id: "finalCutPro", name: "Final Cut Pro", count: fcpCount },
      { id: "divinciResolve", name: "Divinci Resolve", count: drCount },
    ];
    const res = pForms.filter((o) => o.count > 0);
    return res;
  };

  const assetTypes = () => {
    let assetIds = [];
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
    assets.map((asset) => {
      if (asset.backgrounds) {
        bgCount++;
        assetIds.push(asset.id);
      }
      if (asset.edits) {
        editCount++;
        assetIds.push(asset.id);
      }
      if (asset.effects) {
        effectCount++;
        assetIds.push(asset.id);
      }
      if (asset.intros) {
        introCount++;
        assetIds.push(asset.id);
      }
      if (asset.logo) {
        logoCount++;
        assetIds.push(asset.id);
      }
      if (asset.lowerThirds) {
        ltCount++;
        assetIds.push(asset.id);
      }
      if (asset.luts) {
        lutsCount++;
        assetIds.push(asset.id);
      }
      if (asset.other) {
        otherCount++;
        assetIds.push(asset.id);
      }
      if (asset.overlays) {
        overlayCount++;
        assetIds.push(asset.id);
      }
      if (asset.photoVideo) {
        pvCount++;
        assetIds.push(asset.id);
      }
      if (asset.slideshow) {
        ssCount++;
        assetIds.push(asset.id);
      }
      if (asset.titles) {
        titleCount++;
        assetIds.push(asset.id);
      }
      if (asset.text) {
        textCount++;
        assetIds.push(asset.id);
      }
      if (asset.toolkits) {
        tkCount++;
        assetIds.push(asset.id);
      }
      if (asset.transitions) {
        transCount++;
        assetIds.push(asset.id);
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

    const res = oAssets.filter((a) => a.count > 0);
    return res;
  };

  // const distinctAssetIds = [...new Set(assetIds)];
  // console.log("Disinct IDs: " + distinctAssetIds);

  return (
    <div className=" flex flex-col text-blue-100">
      <div className="text-bue-100">Platforms</div>
      <div className="flex flex-col px-3 py-2 text-sm text-bue-100">
        <ul>
          {platforms().map((platform, index) => (
            <li key={generateKey(index)}>
              <Checkbox
                labelText={platform.name}
                checkedState={platformsCheckedState}
                setCheckedState={setPlatformsCheckedState}
                index={index}
                count={platform.count}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="text-blue-100 mt-2">Asset Type</div>
      <div className="flex flex-col px-3 py-2 text-sm text-blue-100">
        <ul>
          {assetTypes().map((asset, index) => (
            <li key={generateKey(index)}>
              <Checkbox
                labelText={asset.name}
                checkedState={assetTypeCheckedState}
                setCheckedState={setAssetTypeCheckedState}
                index={index}
                count={asset.count}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
