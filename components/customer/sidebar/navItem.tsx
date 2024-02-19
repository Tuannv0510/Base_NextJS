"use client";
import { type FC } from "react";
import { usePathname } from "next/navigation";
import { SidebarItem } from "@/config/site";
import { Sidebar } from "flowbite-react";
import { joinUrl } from "@/common/functions";

interface NavItemProps {
  item: SidebarItem;
  index?: number;
}

const NavItem: FC<NavItemProps> = ({ item, index }) => {
  const pathName = usePathname();
  const isChildren = item?.children && item?.children?.length > 0;
  const path = joinUrl(item?.path, "/");

  const arrPath = pathName?.substring(1)?.split("/");

  const pathNameCheck = `/${arrPath?.slice(1).join("/")}`;

  return !isChildren ? (
    <Sidebar.Item
      href={path}
      className={`menu nav-item invoice nav-link  text-white group w-full ${
        path === pathNameCheck ? "active" : ""
      }`}
      icon={item?.icon}
      key={index}
    >
      {item?.title}
    </Sidebar.Item>
  ) : (
    <Sidebar.Collapse
      className={`menu nav-item  invoice nav-link text-white group w-full
          ${pathNameCheck.includes(path) ? "active" : ""}`}
      label={item?.title}
      icon={item?.icon}
      key={index}
    >
      <Sidebar.Item
        href="/customer/software"
        className={`menu nav-item  invoice nav-link text-white group w-full ${
          pathNameCheck.includes(path) ? "active" : ""
        }`}
      >
        Products
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
        className="menu nav-item invoice nav-link text-white group w-full"
      >
        Sales
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
        className="menu nav-item invoice nav-link text-white group w-full"
      >
        Refunds
      </Sidebar.Item>
      {/* {item?.children?.map((child, index) => {
        let props = {};
        const childPath = !child?.is_blank
          ? joinUrl(child?.path, path)
          : child?.path ?? "/";

        if (child?.is_blank) {
          props = {
            ...props,
            target: "_blank",
          };
        }

        return (
          <Sidebar.Item
            {...props}
            href={childPath}
            key={index + 100}
            className={`menu nav-item  invoice nav-link text-white group w-full ${
              childPath === pathNameCheck ? "active" : ""
            }`}
            icon={child?.icon}
          >
            - {child?.title}
          </Sidebar.Item>
        );
      })} */}
    </Sidebar.Collapse>
  );
};

export default NavItem;
