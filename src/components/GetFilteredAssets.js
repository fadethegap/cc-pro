import React from "react";

export default function GetFilteredAssets() {
  return (
    <>
      {/* const [allAssets] = useState(assets);
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

  useEffect(() => {
    let ppCount = 0;
    let aeCount = 0;
    let fcpCount = 0;
    let drCount = 0;
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

    assets.map((a) => {
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
    let temp = [
      { id: "premierePro", name: "Premiere Pro", count: ppCount },
      { id: "afterEffects", name: "After Effects", count: aeCount },
      { id: "finalCutPro", name: "Final Cut Pro", count: fcpCount },
      { id: "divinciResolve", name: "Divinci Resolve", count: drCount },
    ];
  }, [filteredAssets]); */}
    </>
  );
}
