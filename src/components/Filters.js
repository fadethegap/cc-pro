import React from "react";
import { nanoid } from "nanoid";
import Checkbox from "./Checkbox";

export default function Filters({ assets }) {
  // Get a unique array of the platforms referenced in the CMS
  const platforms = () => {
    let temp = [];
    assets.map((asset) => {
      if (asset.premierePro) {
        temp.push("Premiere Pro");
      }
      if (asset.afterEffects) {
        temp.push("After Effects");
      }
      if (asset.finalCutPro) {
        temp.push("Final Cut Pro");
      }
      if (asset.divinciResolve) {
        temp.push("Divinci Resolve");
      }
    });
    const distinct = [...new Set(temp)];
    return distinct;
  };

  // Get a unique array of the asset types referenced in the CMS
  const assetTypes = () => {
    let temp = [];
    assets.map((asset) => {
      if (asset.backgrounds) {
        temp.push("Backgrounds");
      }
      if (asset.edits) {
        temp.push("Edits");
      }
      if (asset.effects) {
        temp.push("Effects");
      }
      if (asset.intros) {
        temp.push("Intros");
      }
      if (asset.logo) {
        temp.push("Logo");
      }
      if (asset.lowerThirds) {
        temp.push("Lower Thirds");
      }
      if (asset.luts) {
        temp.push("Luts");
      }
      if (asset.other) {
        temp.push("Other");
      }
      if (asset.overlays) {
        temp.push("Overlays");
      }
      if (asset.photoVideo) {
        temp.push("Photo / Video");
      }
      if (asset.slideshow) {
        temp.push("Slideshow");
      }
      if (asset.titles) {
        temp.push("Titles");
      }
      if (asset.text) {
        temp.push("Text");
      }
      if (asset.toolkits) {
        temp.push("Toolkits");
      }
      if (asset.transitions) {
        temp.push("Transitions");
      }
    });
    const distinct = [...new Set(temp)];
    return distinct;
  };

  return (
    <div className=" flex flex-col text-blue-100">
      <div className="text-bue-100">Platforms</div>
      <div className="flex flex-col px-3 py-2 text-sm text-bue-100">
        <ul>
          {platforms().map((platform) => (
            <li key={nanoid}>
              <Checkbox labelText={platform} />
            </li>
          ))}
        </ul>
      </div>
      <div className="text-blue-100 mt-2">Asset Type</div>
      <div className="flex flex-col px-3 py-2 text-sm text-blue-100">
        <ul>
          {assetTypes().map((asset) => (
            <li key={nanoid}>
              <Checkbox labelText={asset} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
