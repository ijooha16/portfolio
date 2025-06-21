import Tag from "@/components/common/tag";
import { TAGS, TagType } from "@/constants/tags.constant";
import React, { Dispatch, SetStateAction } from "react";

const Filter = ({
  filtered,
  setFiltered,
}: {
  filtered: TagType[];
  setFiltered: Dispatch<SetStateAction<TagType[]>>;
}) => {
  const handleOnClick = (tag: TagType) => {
    setFiltered((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="flex gap-2 px-2">
      {Object.values(TAGS).map((tag) => (
        <Tag
          key={tag}
          tag={tag}
          onClick={() => handleOnClick(tag)}
          button={true}
          active={filtered.some((f) => f === tag)}
        />
      ))}
    </div>
  );
};

export default Filter;
