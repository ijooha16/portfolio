import { DetailInformationType } from "@/data/projects";
import Image from "next/image";
import { ReactNode } from "react";

const Information = ({
  data,
  img,
  site,
}: {
  data: DetailInformationType;
  img: { url: string; alt: string };
  site?: ReactNode;
}) => {
  const { title, items, type } = data;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        {type !== "summary" && (
          <>
            <span className="font-bold text-2xl my-8">{title}</span>
            <span className="h-[1px] flex-1 bg-gray-300" />
          </>
        )}
      </div>
      <div className="flex flex-col gap-6 pl-4">
        {type === "achievement" &&
          items.map((item, idx) => (
            <div key={item.title} className="flex pb-4">
              <div>
                <div className="font-semibold pb-2">
                  {idx + 1 + ") " + item.title} &nbsp;&nbsp;
                </div>
                {[item.issue, item.solution].map((text, idx) => (
                  <div key={text}>
                    {item.issue && (
                      <span className="text-sm text-gray-400 font-semibold">
                        {idx === 0 ? "문제" : "해결"} &nbsp;&nbsp;
                      </span>
                    )}
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        {type === "summary" && (
          <div className="flex md:flex-row flex-col gap-8 items-center">
            <Image src={img.url} alt={img.alt} width={400} height={300} />
            <div className="flex flex-col gap-3">
              {items.map((item, idx) => (
                <div key={item.title} className="flex gap-3 items-center">
                  <span className="font-semibold w-20">{item.title}</span>
                  <span className="text-gray-300">-</span>
                  <span className="text-sm">{item.content}</span>
                </div>
              ))}
              {site && <div className="pt-2">{site}</div>}
            </div>
          </div>
        )}
        {type === "lesson" &&
          items.map((item, idx) => (
            <div key={item.title} className="flex pb-4">
              <div>
                <div className="font-semibold pb-2">{item.title}</div>
                <span className="text-sm">&nbsp;&nbsp; {item.content}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Information;
