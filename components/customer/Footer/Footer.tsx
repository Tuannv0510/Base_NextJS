"use client";

import { useState, Fragment } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

import Image from "next/image";

import { LinkTypeFooter } from "./ConfigFooter";
import StaticImages from "@/public/assets/images";

const CustomerFooter = () => {
  const [strDate] = useState(() => {
    const d = new Date();
    return d.getFullYear();
  });

  return (
    <footer className="max-sm:bg-cover pt-4 relative">
      <span className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-2/5 block bg-white z-1"></span>
      <span className="absolute block bg-[#0E206D] inset-0 z-0 opacity-50"></span>
      <span
        className="absolute block inset-0 z-1 opacity-40"
        style={{
          backgroundImage: `url('${StaticImages.bgFooter}')`,
          backgroundPositionY: "627px",
        }}
      ></span>
      <span
        className="bg-no-repeat absolute w-[400px] h-[350px] block z-3 bg-contain bottom-[40px] left-0 -translate-x-[31%] bg-center"
        style={{ backgroundImage: `url('${StaticImages.robotFooter}')` }}
      ></span>

      <div className="relative z-10">
        <div className="px-5 pt-5 pb-10">
          <div className="max-w-[1300px] mx-auto">
            <div className="flex flex-row-reverse justify-end items-center">
              <div className="w-[250px] h-[59px] mr-9">
                <Image
                  width={250}
                  height={59}
                  src={StaticImages.logoWhite}
                  alt="Phần mềm mkt"
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-4 max-lg:grid-cols-2 max-lg:gap-y-8 max-sm:grid-cols-1">
              {LinkTypeFooter?.map((item, index) => {
                const Element = item?.lastReactElement || Fragment;
                const InnerElement = item?.innerReactElement || Fragment;

                return (
                  <div key={index}>
                    <h4 className="text-[#f58120] font-semibold text-xl mb-7 uppercase">
                      {item?.head}
                    </h4>

                    <div
                      className={`${
                        item?.classParent ? item?.classParent : ""
                      }`}
                    >
                      <div
                        className={`mt-[10px] space-y-2 ${
                          item?.classDivChild ?? ""
                        }`}
                      >
                        {item?.children &&
                          Array.isArray(item?.children) &&
                          item?.children?.map((child, indexChild) => {
                            const Icon =
                              child?.Icon ||
                              (child?.isArrow && IoIosArrowForward) ||
                              (child?.isDots && FaCircle) ||
                              Fragment;

                            return (
                              <div
                                className="flex items-center"
                                key={indexChild}
                              >
                                <div
                                  className="text-[#f58120] flex justify-center items-center"
                                  style={{
                                    fontSize: child?.isDots ? 8 : 28,
                                  }}
                                >
                                  <Icon />
                                </div>
                                <a
                                  href={child?.link}
                                  className="text-sm text-white pl-[5px]"
                                  rel="noreferrer"
                                  target="_blank"
                                >
                                  {child?.name}
                                </a>
                              </div>
                            );
                          })}
                      </div>
                      <InnerElement />
                    </div>

                    <Element />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="p-[10px] bg-blue-500 text-center">
          <span className="text-white">
            © Copyright {strDate} by phần mềm MKT
          </span>
        </div>
      </div>
    </footer>
  );
};

export default CustomerFooter;
