import Icon from "@/components/common/icon";
import Tag from "@/components/common/tag";
import { TAGS, TagType } from "@/constants/tags.constant";
import { RotateCcwIcon } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { useMediaQuery } from "react-responsive";

const Filter = ({
  filtered,
  setFiltered,
}: {
  filtered: TagType[];
  setFiltered: Dispatch<SetStateAction<TagType[]>>;
}) => {
  const isMobile = useMediaQuery({ maxWidth: 920 });

  const handleOnClick = (tag: TagType) => {
    setFiltered((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  };

  return (
    <div
      className={`flex items-center gap-2 px-2 ${
        isMobile ? "flex-wrap justify-start" : ""
      }`}
    >
      {Object.values(TAGS).map((tag) => (
        <Tag
          key={tag}
          tag={tag}
          onClick={() => handleOnClick(tag)}
          button={true}
          active={filtered.some((f) => f === tag)}
        />
      ))}
      <Icon
        onClick={() => setFiltered([])}
        active={filtered.length > 0}
        className={`${isMobile ? "flex-1 justify-end flex" : ""}`}
      >
        <RotateCcwIcon size={16} />
      </Icon>
    </div>
  );
};

export default Filter;
