import { InfoType } from "@/data/profile";

const Information = ({ data }: { data: InfoType }) => {
  const { title, items } = data;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="font-bold text-2xl mb-3">{title}</span>
        <span className="h-[1px] flex-1 bg-gray-300" />
      </div>
      <div className="flex flex-col gap-6 pl-4">
        {items.map((item, idx) => (
          <div key={item.title} className="flex gap-2">
            {item.description ? (
              <div className="w-0.5 h-4 mt-1 bg-gray-500" />
            ) : (
              idx + 1 + ")"
            )}
            <div>
              <div className="font-semibold">{item.title} &nbsp;&nbsp;</div>

              <span className="text-sm text-gray-400">
                {item.date} &nbsp;&nbsp;
              </span>
              <span className="text-sm">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
