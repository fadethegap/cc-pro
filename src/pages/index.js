import React, { useState } from "react";
import Filters from "../components/Filters";
import Asset from "../components/Asset";
import Footer2 from "../components/Footer2";
import { graphql } from "gatsby";
import Header2 from "../components/Header2";
import * as BiIcons from "react-icons/bi";

export default function Home({ data }) {
  const [assets, setAssets] = useState(data.assets.nodes);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  // console.log(assets);
  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  return (
    <>
      <main className="flex flex-col h-screen bg-black">
        <Header2 />
        <div className="flex text-blue-100 bg-black md:hidden">
          <div onClick={handleSidebar}>
            {showSidebar ? (
              <BiIcons.BiArrowFromBottom className="text-2xl ml-3 mr-3" />
            ) : (
              <BiIcons.BiArrowFromTop className="text-2xl ml-3" />
            )}
          </div>
          <div>
            {showSidebar ? (
              <Filters assets={assets} setAssets={setAssets} />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="bg-black hidden md:flex md:flex-col  md:w-64 md:p-4">
            <Filters assets={assets} setAssets={setAssets} />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 bg-black overflow-y-auto ">
              {assets.map((asset, index) => (
                <Asset key={generateKey(index)} asset={asset} />
              ))}
            </div>
          </div>
        </div>
        <Footer2 />
      </main>
      {/* <Header2 />
      <main className="relative min-h-screen flex">
        <div className="text-blue-100 bg-black" onClick={handleSidebar}>
          {">>"}
        </div>
        <div
          className={`bg-black md:w-64 w-screen h-full p-4 z-50 md:transform none md:relative  ${
            showSidebar ? "" : "absolute transform -translate-x-full"
          }`}
        >
          <Filters assets={assets} setAssets={setAssets} />
          <div
            className="text-blue-100 absolute top-2 right-2"
            onClick={handleSidebar}
          >
            X
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 bg-black overflow-y-auto ">
            {assets.map((asset, index) => (
              <Asset key={generateKey(index)} asset={asset} />
            ))}
          </div>
        </div>
      </main>
      <Footer2 /> */}
    </>
  );
}
export const query = graphql`
  {
    assets: allDatoCmsAsset(
      filter: { assetTitle: { ne: null }, isActive: { eq: true } }
      sort: { order: DESC, fields: id }
    ) {
      nodes {
        assetTitle
        id
        asset {
          createdAt
          video {
            mp4Url
          }
        }
        contributor {
          name
        }
        premierePro
        finalCutPro
        divinciResolve
        afterEffects
        photoVideo
        text
        logo
        lowerThirds
        transitions
        other
        slideshow
        intros
        edits
        titles
        toolkits
        overlays
        backgrounds
        luts
        effects
      }
    }
  }
`;
