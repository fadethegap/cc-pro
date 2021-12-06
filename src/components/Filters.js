import React, { useState, useEffect } from "react";
import useFilterAssets from "../utils/useFilterAssets";

export default function Filters({ assets, setAssets }) {
  console.log(assets);
  const { platformAssets, typeAssets } = useFilterAssets(assets);

  const [platformCheckedState, setPlatformCheckedState] = useState(
    new Array(4).fill(false)
  );
  const [assetTypeCheckedState, setAssetTypeCheckedState] = useState(
    new Array(15).fill(false)
  );

  const handlePlatformOnChange = (position) => {
    const updatedCheckedState = platformCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setPlatformCheckedState(updatedCheckedState);
  };

  const handleAssetTypeOnChange = (position) => {
    const updatedCheckedState = assetTypeCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setAssetTypeCheckedState(updatedCheckedState);
  };
  console.log(platformCheckedState);
  console.log(assetTypeCheckedState);

  const loading = true;

  // const platformAssetsInit = [
  //   { i: 0, id: "premierePro", name: "Premiere Pro", count: 0 },
  //   { i: 1, id: "afterEffects", name: "After Effects", count: 0 },
  //   { i: 2, id: "finalCutPro", name: "Final Cut Pro", count: 0 },
  //   { i: 3, id: "divinciResolve", name: "Divinci Resolve", count: 0 },
  // ];

  // const typeAssetsInit = [
  //   { i: 4, id: "backgrounds", name: "Backgrounds", count: 0 },
  //   { i: 5, id: "edits", name: "Edits", count: 0 },
  //   { i: 6, id: "effects", name: "Effects", count: 0 },
  //   { i: 7, id: "intros", name: "Intros", count: 0 },
  //   { i: 8, id: "logo", name: "Logo", count: 0 },
  //   { i: 9, id: "lowerThirds", name: "Lower Thirds", count: 0 },
  //   { i: 10, id: "luts", name: "Luts", count: 0 },
  //   { i: 11, id: "other", name: "Other", count: 0 },
  //   { i: 12, id: "overlays", name: "Overlays", count: 0 },
  //   { i: 13, id: "photoVideo", name: "Photo / Video", count: 0 },
  //   { i: 14, id: "slideshow", name: "Slideshow", count: 0 },
  //   { i: 15, id: "titles", name: "Titles", count: 0 },
  //   { i: 16, id: "text", name: "Text", count: 0 },
  //   { i: 17, id: "toolKits", name: "Tool Kits", count: 0 },
  //   { i: 18, d: "transitions", name: "Transitions", count: 0 },
  // ];
  // console.log(isLoading);

  const assetsInit = [
    {
      i: 0,
      id: "premierePro",
      name: "Premiere Pro",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 1,
      id: "afterEffects",
      name: "After Effects",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 2,
      id: "finalCutPro",
      name: "Final Cut Pro",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 3,
      id: "divinciResolve",
      name: "Divinci Resolve",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 4,
      id: "backgrounds",
      name: "Backgrounds",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 5,
      id: "edits",
      name: "Edits",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 6,
      id: "effects",
      name: "Effects",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 7,
      id: "intros",
      name: "Intros",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 8,
      id: "logo",
      name: "Logo",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 9,
      id: "lowerThirds",
      name: "Lower Thirds",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 10,
      id: "luts",
      name: "Luts",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 11,
      id: "other",
      name: "Other",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 12,
      id: "overlays",
      name: "Overlays",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 13,
      id: "photoVideo",
      name: "Photo / Video",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 14,
      id: "slideshow",
      name: "Slideshow",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 15,
      id: "titles",
      name: "Titles",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 16,
      id: "text",
      name: "Text",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 17,
      id: "toolKits",
      name: "Tool Kits",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
    {
      i: 18,
      d: "transitions",
      name: "Transitions",
      count: 0,
      asset: {
        video: {
          mprUrl:
            "https://stream.mux.com/bzYU7iNYlWhrQLPFIT1DcprV7wOD01z9k/high.mp4",
        },
      },
      contributor: { name: "Anthony Gallo" },
      assetTitle: "Falling For You",
    },
  ];

  // useEffect(() => {
  //   setAssets(assetsInit);
  // });

  // const platforms = () => {
  //   return platformAssets1;
  // };
  // const assetTypes = () => {
  //   return typeAssets1;
  // };

  const platforms = () => {
    return platformAssets;
  };
  const assetTypes = () => {
    return typeAssets;
  };

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  return (
    <div className="flex flex-col text-blue-100">
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
                  <span className="text-blue-400 pl-2">{`(${platform.count})`}</span>
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
                  <span className="text-blue-400 pl-2">{`(${asset.count})`}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
