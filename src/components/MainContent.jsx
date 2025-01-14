import React, { useContext } from "react";
import { FaCode, FaCompass, FaLightbulb, FaUserCircle } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { Context } from "../context/Context";
import geminiLogo from "../assets/geminiLogo.png";

const MainContent = () => {
  const { 
    input, 
    setInput, 
    recentPrompt, 
    showResult, 
    loading, 
    resultData, 
    onSent 
  } = useContext(Context);

  return (
    <div className="flex-1 min-h-screen pb-[15vh] bg-cyan-100 relative">
      <div className="flex items-center justify-between bg-cyan-100 text-xl p-5 text-black-500">
        <p className="pl-4">SidhuJetha AI</p>
      </div>
      <div className="max-w-[900px] bg-cyan-100 mx-auto">
        {!showResult ? (
          <div className="my-12 text-[56px] max-[320px]:text-[40px] text-slate-500 font-semibold p-5">
            <p>
              <span className="bg-gradient-to-r from-[#401d69] to-[#059bff] bg-clip-text text-transparent">
                Sidhu Jetha here,
              </span>
            </p>
            <p className="text-slate-400">What brings you up to me?</p>
          </div>
        ) : (
          <div className="py-0 px-[5%] max-h-[70vh] overflow-y-scroll scrollbar-hidden">
            <div className="my-10 mx-0 flex items-center gap-5">
              <FaUserCircle className="text-3xl" />
              <p className="text-lg font-[400] leading-[1.8]">{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-5">
              <img src={geminiLogo} alt="" className="w-8 rounded-[50%]" />
              {loading ? (
                <div className="w-full flex flex-col gap-2">
                  <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-scroll-bg" />
                  <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-scroll-bg" />
                  <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-scroll-bg" />
                </div>
              ) : (
                <p 
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="text-lg font-[400] leading-[1.8]"
                />
              )}
            </div>
          </div>
        )}
        <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto mt-10">
          <div className="flex items-center justify-between gap-20 max-[320px]:gap-4 bg-white py-2 px-5 max-[320px]:px-3 rounded-full">
            <input
              type="text"
              placeholder="Enter a prompt / question here..."
              className="flex-1 bg-transparent border-none outline-none p-2 text-lg max-[320px]:text-base max-[320px]:p-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSent();
                }
              }}
            />
            <div className="flex gap-4 items-center">
              {input && (
                <IoMdSend
                  onClick={() => onSent()}
                  className="text-2xl text-black cursor-pointer max-[320px]:text-xl"
                />
              )}
            </div>
          </div>
          <p className="text-sm my-4 mx-auto text-center font-[500] text-slate-600 max-[320px]:text-xs max-[320px]:my-2">
            Well, I am just an AI trying the mimic the legendary Sidhu Jetha but nowhere near to his merit. So please bear up if I go wrong. 😅
          </p>
          <p className="text-sm my-4 mx-auto text-center font-[500] text-slate-600 max-[320px]:text-xs max-[320px]:my-2">
            Made with 💙 by Mainak
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;