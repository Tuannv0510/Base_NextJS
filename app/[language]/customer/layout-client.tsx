"use client";

import CustomerFooter from "@/components/customer/Footer/Footer";
import { CustomerNavbar } from "@/components/customer/navbar";
import { CustomerSidebar } from "@/components/customer/sidebar/sidebar";
import { useSidebarContext } from "@/context/sidebar-context";
import { cn } from "@/services/helpers/utils";
import "@/styles/globals.css";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed } = useSidebarContext();

  return (
    <>
      <div className=" flex items-start bg-[url('/assets/images/bg/bg-home.png')]">
        <CustomerSidebar />
        <div
          id="main-content"
          className={cn(
            "relative h-full w-full min-h-screen overflow-y-auto bg-transparent dark:bg-gray-900",
            isCollapsed ? "lg:ml-[4.5rem]" : "lg:ml-64"
          )}
        >
          <CustomerNavbar />
          <div className={`animate__animated p-3 pt-16 lg:p-6 lg:pt-20`}>
            {children}
          </div>
          <CustomerFooter />
        </div>
      </div>
    </>
  );
}
