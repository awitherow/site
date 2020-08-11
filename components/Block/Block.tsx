import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import sanity from "../../lib/sanity";

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube className="responsive-video" videoId={id} />;
    },
  },
};

export default function Block({ content }) {
  return (
    <BlockContent
      serializers={serializers}
      blocks={content}
      imageOptions={{ w: 754, fit: "max" }}
      {...sanity.config()}
    />
  );
}
