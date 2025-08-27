import { TagType } from "@/constants/tags.constant";
import React from "react";

const Tag = ({
  tag,
  active = true,
  button = false,
  onClick,
}: {
  tag: TagType;
  active?: boolean;
  button?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`box-border rounded-sm font-semibold ${
        active ? tagColor[tag] : "text-gray-300 border border-gray-300"
      } ${button ? "cursor-pointer text-xs px-2" : "text-xs px-1"}`}
    >
      {tag}
    </div>
  );
};

export default Tag;

const tagColor = {
  Team: "border border-gray-300",
  Personal: "border border-gray-300",
  Leader: "border border-gray-300",
  NextJs: "bg-[#e7e7e7] text-[#000]",
  React: "bg-[#d6f6ff] text-[#2778bf]",
  API: "bg-[#fff] text-[#000]",
};
