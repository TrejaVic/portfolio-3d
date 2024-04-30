import { Html } from "@react-three/drei";
import React, { useState, useEffect } from "react";
import { FaInstagram, FaYoutube, FaDiscord, FaGithub } from "react-icons/fa";

const Overlay = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [showHtml, setShowHtml] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHtml(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showHtml && (
        <Html as="div" fullscreen>
          <div
            className={`w-full h-full flex items-center opacity-${
              showHtml ? "100" : "0"
            } transition`}
          >
            <div className="ml-32 p-4 border rounded bg-zinc-950/30 backdrop-blur-sm">
              <div className="py-4 w-96 flex flex-col">
                <h1 className="text-3xl text-center font-bold">
                  &lt;-- Miraç Kaynar --&gt;
                </h1>
                <p className="text-center opacity-25  mb-8">
                  Click Github button for source code.
                </p>
                <div className="flex justify-center items-center gap-4">
                  <div
                    className="p-4 border rounded hover:cursor-pointer"
                    onClick={() => setShowDiv(!showDiv)}
                  >
                    <FaDiscord size={32} />
                  </div>

                  <a href="https://www.instagram.com/trejaa_/">
                    <div className="p-4 border rounded">
                      <FaInstagram size={32} />
                    </div>
                  </a>
                  <a href="https://www.youtube.com/channel/UCwsbgTDf9PI63_V4UacKsrQ">
                    <div className="p-4 border rounded">
                      <FaYoutube size={32} />
                    </div>
                  </a>
                  <a href="https://github.com/TrejaVic/portfolio-3d ">
                    <div className="p-4 border rounded">
                      <FaGithub size={32} />
                    </div>
                  </a>
                </div>
                {showDiv && (
                  <div className="p-4 border rounded mt-8 text-center">
                    My discord id is: <span className="font-bold">.trejak</span>
                  </div>
                )}
                {/* !WIP <p className="text-center mt-8 ">
                  <span className="opacity-40">Wanna check out my </span>
                   <span className="hover:opacity-100 opacity-40 transition">
                    blog
                  </span>
                  <span className="opacity-40">?</span>
                </p> */}
              </div>
            </div>
          </div>
        </Html>
      )}
    </>
  );
};

export default Overlay;
