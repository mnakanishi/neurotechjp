import React from "react";
import { PostData } from "~/hooks/loader";
import { Meta } from "~/components/Meta";

export const PostMeta: React.FC<{ post: PostData }> = ({ post }) => {
  return (
    <Meta
      meta={{
        title: post.title,
        desc: post.description,
        link: post.canonicalUrl,
        image: post.bannerPhoto,
      }}
    />
  );
};
