import React from "react";
import { Tag } from "interface/lecture";

interface Props {
  tagListData: [Tag];
}

const TagList = ({ tagListData }: Props) => {
  const tagList = tagListData.map((tag) => {
    return <span key={tag.id}>{tag.title}</span>;
  });

  return <div>{tagList}</div>;
};

export default TagList;
