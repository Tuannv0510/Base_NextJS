import { useSidebarContext } from "@/context/sidebar-context";
import { cn } from "@/services/helpers/utils";
import { Sidebar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

import logoMkt from "/public/assets/images/logo/logo-mkt.png";
import { siteConfig } from "@/config/site";
import NavItem from "./navItem";
import { isSmallScreen } from "@/services/helpers/is-small-screen";
export const CustomerSidebar: FC = function () {
  const { isCollapsed, setCollapsed } = useSidebarContext();

  return (
    <div>
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        collapsed={isCollapsed}
        id="sidebar"
        className={cn(
          "sidebar overflow-hidden fixed top-0 bottom-0 z-50 h-full min-h-screen bg-[#0F2D7C] w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 border-gray-200  dark:border-gray-700 lg:flex",
          isCollapsed && "hidden w-16 pt-[63px]"
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 relative">
          <Link
            href="/customer"
            className={cn(
              "main-logo flex shrink-0 items-center flex-1 p-3",
              isCollapsed && "hidden "
            )}
          >
            <Image
              width={196}
              height={0}
              className="flex-none w-full"
              src={logoMkt}
              alt="logo"
            />
          </Link>
        </div>

        <div className="absolute -z-10 w-[300px] h-[300px] rounded-full right-0 translate-x-1/2 bg-[#dda82a59] opacity-[45%] blur-sm"></div>

        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {siteConfig.navCustomerItems?.map((item, index) => {
              return item?.isHeader ? (
                <Sidebar.Item className="-mx-4 mb-1 flex items-center bg-[#62A2D9] text-white hover:bg-[#62A2D9] hover:text-white py-3 px-7 font-bold uppercase">
                  {item?.title}
                </Sidebar.Item>
              ) : (
                <NavItem item={item} index={index} key={index} />
              );
            })}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      <div
        className={`
        ${
          isSmallScreen()
            ? !isCollapsed
              ? "bg-black w-screen bg-opacity-60 h-screen fixed z-[51]"
              : "hidden"
            : "hidden"
        }
        `}
        onClick={() => setCollapsed(!isCollapsed)}
      ></div>
    </div>
  );
};
