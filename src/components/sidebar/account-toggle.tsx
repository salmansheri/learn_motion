import { BsGoogle } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const AccountToggle = () => {
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300/20">
      <button className="flex p-0.5 hover:bg-stone-200/20 rounded transition-colors relative gap-2 w-full items-center">
        <BsGoogle className="size-8 rounded shrink-0 bg-violet-500 p-2 shadow" />
        <div className="text-start">
          <span className="text-sm font-bold block">Salman Sheriff</span>
          <span className="text-xs block text-stone-500">
            sheriffsalman00@gmail.com
          </span>
        </div>
        <FiChevronDown className="absolute right-2 top-1/2 translate-[calc(-50%+4px)] text-xs" />
        <FiChevronUp className="absolute right-2 top-1/2 translate-[calc(-50%-4px)] text-xs" />
      </button>
    </div>
  );
};

export default AccountToggle;
