"use client";

import useAuth from "@/services/auth/use-auth";
import useAuthActions from "@/services/auth/use-auth-actions";
import { Avatar, Dropdown } from "flowbite-react";
import Image from "next/image";

export function DropdownAvatar() {
  const { user } = useAuth();
  const { logOut } = useAuthActions();
  return (
    <Dropdown
      label={
        <Image
          width={36}
          height={36}
          className=" rounded-full object-cover"
          alt="profile"
          src="/assets/images/avatar/profile-picture-3.jpg"
        />
      }
      arrowIcon={false}
      inline
    >
      <Dropdown.Header>
        <Avatar img="/assets/images/avatar/profile-picture-3.jpg" rounded>
          <div className="space-y-1 font-medium dark:text-white">
            <div>{user?.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {user?.roles && user?.roles.length > 0 && user?.roles[0].name}
            </div>
          </div>
        </Avatar>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={logOut}>Đăng Xuất</Dropdown.Item>
    </Dropdown>
  );
}
