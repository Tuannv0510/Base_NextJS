import { useSidebarContext } from "@/context/sidebar-context";
import { isSmallScreen } from "@/services/helpers/is-small-screen";
import { Avatar, DarkThemeToggle, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import { cn } from "@/services/helpers/utils";
import { useState, type FC, useEffect } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { DropdownAvatar } from "../dropdown/avatar";

export const CustomerNavbar: FC<Record<string, never>> = function () {
  const { isCollapsed: isSidebarCollapsed, setCollapsed: setSidebarCollapsed } =
    useSidebarContext();

  const [isScrolled, setIsScrolled] = useState(false);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      profile: "user-profile.jpeg",
      message:
        '<strong class="text-sm mr-1">John Doe</strong>invite you to <strong>Prototyping</strong>',
      time: "45 min ago",
    },
    {
      id: 2,
      profile: "profile-34.jpeg",
      message:
        '<strong class="text-sm mr-1">Adam Nolan</strong>mentioned you to <strong>UX Basics</strong>',
      time: "9h Ago",
    },
    {
      id: 3,
      profile: "profile-16.jpeg",
      message: '<strong class="text-sm mr-1">Anna Morgan</strong>Upload a file',
      time: "9h Ago",
    },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <Navbar
        fluid
        className={cn(
          "!fixed z-50 right-0 max-lg:left-0 lg:w-[calc(100%_-_260px)] transition-all duration-200 p-0 sm:p-0",
          isSidebarCollapsed
            ? "lg:w-[calc(100%)]"
            : "lg:w-[calc(100%_-_260px)]",
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        )}
      >
        <div className="w-full pr-5 py-2.5">
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center ${
                isSidebarCollapsed || !isSmallScreen() ? "" : "*:hidden"
              }`}
            >
              <button
                aria-controls="sidebar"
                aria-expanded
                className={`  mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 ${
                  !isSidebarCollapsed
                    ? "ml-5"
                    : "bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60 ml-3"
                }`}
                onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
              >
                <HiMenuAlt1 className="h-6 w-6" />
              </button>
              {(isSidebarCollapsed || isSmallScreen()) && (
                <Navbar.Brand href="/">
                  <Image
                    alt="Phần Mềm MKT logo"
                    width={96}
                    height={0}
                    src="/assets/images/logo/logo-mkt.png"
                  />
                </Navbar.Brand>
              )}
            </div>
            <div className="flex gap-3">
              <DarkThemeToggle />
              <Dropdown
                label={
                  <div className="relative block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 6V10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute top-0 flex h-3 w-3 ltr:right-0 rtl:left-0">
                      <span className="absolute -top-[3px] inline-flex h-full w-full animate-ping rounded-full bg-success/50 opacity-75 ltr:-left-[3px] rtl:-right-[3px]"></span>
                      <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-success"></span>
                    </span>
                  </div>
                }
                arrowIcon={false}
                inline
                className="w-[300px] divide-y !py-0 text-dark dark:divide-white/10 dark:text-white-dark sm:w-[350px]"
              >
                <Dropdown.Item>
                  <div className="flex items-center justify-between px-4 py-2 font-semibold">
                    <h4 className="text-lg">Notification</h4>
                    {notifications.length ? (
                      <span className="badge bg-primary/80">
                        {notifications.length}New
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </Dropdown.Item>

                {notifications.length > 0 ? (
                  <>
                    {notifications.map((notification) => {
                      return (
                        <Dropdown.Item
                          key={notification.id}
                          className="dark:text-white-light/90"
                        >
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="group flex items-center px-4 py-2"
                          >
                            <div className="grid place-content-center rounded">
                              <div className="relative h-12 w-12">
                                <Image
                                  width={48}
                                  height={48}
                                  className="h-12 w-12 rounded-full object-cover"
                                  alt="profile"
                                  src={`https://app.minsoftware.vn/assets/img/avatars/user.png`}
                                />
                                <span className="absolute right-[6px] bottom-0 block h-2 w-2 rounded-full bg-success"></span>
                              </div>
                            </div>
                            <div className="flex flex-auto ltr:pl-3 rtl:pr-3">
                              <div className="ltr:pr-3 rtl:pl-3">
                                <h6
                                  dangerouslySetInnerHTML={{
                                    __html: notification.message,
                                  }}
                                ></h6>
                                <span className="block text-xs font-normal dark:text-gray-500">
                                  {notification.time}
                                </span>
                              </div>
                              <button
                                type="button"
                                className="text-neutral-300 opacity-0 hover:text-danger group-hover:opacity-100 ltr:ml-auto rtl:mr-auto"
                                // onClick={() =>
                                //     removeNotification(
                                //         notification.id,
                                //     )
                                // }
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    opacity="0.5"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                  />
                                  <path
                                    d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </Dropdown.Item>
                      );
                    })}
                    <Dropdown.Item>
                      <div className="p-4">
                        <button className="btn btn-primary btn-small block w-full">
                          Read All Notifications
                        </button>
                      </div>
                    </Dropdown.Item>
                  </>
                ) : (
                  <Dropdown.Item>
                    <button
                      type="button"
                      className="!grid min-h-[200px] place-content-center text-lg hover:!bg-transparent"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="mx-auto mb-4 rounded-full ring-4 ring-primary/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="#a9abb6"
                          stroke="#ffffff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-info rounded-full bg-primary"
                        >
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                      </div>
                      No data available.
                    </button>
                  </Dropdown.Item>
                )}
              </Dropdown>
              <DropdownAvatar />
            </div>
          </div>
        </div>
      </Navbar>
    </header>
  );
};
