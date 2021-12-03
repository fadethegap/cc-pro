const useFilterAssets = (assets) => {
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
  const platforms = [
    { i: 0, id: "premierePro", name: "Premiere Pro", count: ppCount },
    { i: 1, id: "afterEffects", name: "After Effects", count: aeCount },
    { i: 2, id: "finalCutPro", name: "Final Cut Pro", count: fcpCount },
    { i: 3, id: "divinciResolve", name: "Divinci Resolve", count: drCount },
  ];

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

  const assetTypes = [
    { i: 4, id: "backgrounds", name: "Backgrounds", count: bgCount },
    { i: 5, id: "edits", name: "Edits", count: editCount },
    { i: 6, id: "effects", name: "Effects", count: effectCount },
    { i: 7, id: "intros", name: "Intros", count: introCount },
    { i: 8, id: "logo", name: "Logo", count: logoCount },
    { i: 9, id: "lowerThirds", name: "Lower Thirds", count: ltCount },
    { i: 10, id: "luts", name: "Luts", count: lutsCount },
    { i: 11, id: "other", name: "Other", count: otherCount },
    { i: 12, id: "overlays", name: "Overlays", count: overlayCount },
    { i: 13, id: "photoVideo", name: "Photo / Video", count: pvCount },
    { i: 14, id: "slideshow", name: "Slideshow", count: ssCount },
    { i: 15, id: "titles", name: "Titles", count: titleCount },
    { i: 16, id: "text", name: "Text", count: textCount },
    { i: 17, id: "toolKits", name: "Tool Kits", count: tkCount },
    { i: 18, d: "transitions", name: "Transitions", count: transCount },
  ];

  const platformAssets = platforms;
  const typeAssets = assetTypes;
  return { platformAssets, typeAssets };
};

export default useFilterAssets;
