import React, { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaMessage, FaPlus } from "react-icons/fa6";
import { Context } from "../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div 
      className={`fixed top-0 left-0 h-full bg-white transition-all duration-300 shadow-lg
        ${extended ? 'w-64 z-50' : 'w-16'} 
        md:relative md:block`}
    >
      <div className="p-4">
        <IoMenu
          onClick={() => setExtended(!extended)}
          className="text-2xl cursor-pointer hover:text-gray-600"
        />
        
        <button
          onClick={newChat}
          className={`mt-4 flex items-center gap-2 py-2 px-3 text-sm text-gray-500 
            bg-gray-200 rounded-full hover:bg-gray-300 transition-all
            ${extended ? 'w-full justify-start' : 'w-10 h-10 justify-center'}`}
        >
          <FaPlus className={`${extended ? 'text-sm' : 'text-lg'}`} />
          {extended && <span>New Chat</span>}
        </button>

        {extended && (
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Recent</h3>
            <div className="space-y-2">
              {prevPrompt?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => loadPrompt(item)}
                  className="flex items-center gap-2 w-full p-2 text-sm text-slate-700 
                    rounded-full hover:bg-gray-200 transition-all truncate"
                >
                  <FaMessage className="shrink-0" />
                  <span className="truncate">
                    {item.length > 18 ? `${item.slice(0, 18)}...` : item}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;