import { TagType } from "@/constants/tags.constant";

const Tag = ({
  tag,
  active = true,
  button = false,
  onClick,
  noDecoration = false,
}: {
  tag: TagType;
  active?: boolean;
  button?: boolean;
  onClick?: () => void;
  noDecoration?: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className={`box-border font-semibold ${
        noDecoration
          ? "text-gray-700 border rounded-full py-1 px-2 border-gray-200 backdrop-blur-sm bg-white/60 "
          : active
          ? `${tagColor[tag]} rounded-sm`
          : "text-gray-300 border border-gray-300 rounded-sm"
      } ${button ? "cursor-pointer text-xs px-2" : "text-xs px-1"}`}
    >
      {noDecoration && "# "}
      {tag}
    </div>
  );
};

export default Tag;

const tagColor: TagColorType = {
  Team: "bg-[#c7e8ca] text-[#37643d] border border-[#85cc8f]",
  Personal: "bg-[#dac7e8] text-[#65467e] border border-[#af96c1]",
  Leader: "bg-[#dfc6b4] text-[#644937] border border-[#cc9d85]",
  NextJs: "bg-[#e7e7e7] border border-gray-300",
  React: "bg-[#d6f6ff] text-[#2778bf] border border-[#80baec]",
  API: "bg-[#ffd4d4] text-[#9e5353] border border-[#e2a4a4]",
  Js: "bg-[#fff4a2] text-[#95763c] border border-[#dec28c]",
};

type TagColorType = {
  [key in TagType]: string;
};
