import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { nanoid } from "nanoid";
import Navigation from "../components/Navigation";
import Filters from "../components/Filters";
import Asset from "../components/Asset";
import Footer2 from "../components/Footer2";
import { graphql } from "gatsby";
import Header2 from "../components/Header2";

export default function Home({ data }) {
  const assets = data.assets.nodes;

  return (
    <>
      <main class="flex flex-col h-screen">
        <Header2 />
        <div class="flex flex-1 overflow-hidden">
          <div class="flex flex-col bg-black w-64 p-4">
            <Filters assets={assets} />
          </div>
          <div class="flex flex-1 flex-col">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 bg-black overflow-y-auto ">
              {assets.map((asset) => (
                <Asset key={nanoid()} asset={asset} />
              ))}
            </div>
          </div>
        </div>
        <Footer2 />
      </main>
    </>
  );
}

export const query = graphql`
  {
    assets: allDatoCmsAsset(
      filter: { assetTitle: { ne: null } }
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
