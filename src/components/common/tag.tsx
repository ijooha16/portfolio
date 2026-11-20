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
          ? `${tagColor[tag]} rounded-md py-0.5`
          : "text-gray-400 border border-gray-200 rounded-md py-0.5"
      } ${button ? "cursor-pointer text-xs px-2" : "text-xs px-2"}`}
    >
      {noDecoration && "# "}
      {tag}
    </div>
  );
};

export default Tag;

const tagColor: TagColorType = {
  Award: "bg-[#f7f1e3] text-[#7a5f1c] border border-[#e9dcb8]",
  AI: "bg-[#f3eff9] text-[#5b3f94] border border-[#ddd2f0]",
  Team: "bg-[#e8f5f1] text-[#2a6a5a] border border-[#c5e4db]",
  Personal: "bg-[#f6eef5] text-[#7a466c] border border-[#e8d2e2]",
  Leader: "bg-[#eceff9] text-[#3e4d8c] border border-[#d0d7ef]",
  NextJs: "bg-[#f1f2f4] text-[#3a4654] border border-[#dcdfe5]",
  React: "bg-[#e9f3f9] text-[#2c5f80] border border-[#c8e0ee]",
  API: "bg-[#f9eeec] text-[#8a463e] border border-[#edd1cc]",
  Js: "bg-[#f6f4e4] text-[#6a6122] border border-[#e3dfb8]",
};

type TagColorType = {
  [key in TagType]: string;
};
