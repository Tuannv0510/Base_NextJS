import {
  IconChat,
  IconCustomer,
  IconDashBoard,
  IconDashBoardHome,
  IconDashHistory,
  IconDashSecurity,
  IconMenu,
  IconReport,
  IconSettingSystem,
} from "@/components/icons";
import { FC } from "react";
import { IconType } from "react-icons";
import {
  BsFillBuildingFill,
  BsFillCreditCardFill,
  BsFillTicketPerforatedFill,
} from "react-icons/bs";
import {
  FaInternetExplorer,
  FaTelegram,
  FaTiktok,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { IoIosTime } from "react-icons/io";

import { MdEmail } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import config from ".";

export type SiteConfig = typeof siteConfig;

export interface SidebarItem {
  title: string;
  path?: string;
  icon?: FC;
  isHeader?: boolean;
  children?: SidebarItem[];
  is_blank?: boolean;
}

export interface FooterLinkChildren {
  link?: string;
  name?: string;
  isArrow?: boolean;
  isDots?: boolean;
  Icon?: IconType;
}

export interface FooterLink {
  head?: string;
  children?: FooterLinkChildren[];
  classParent?: string;
  classDivChild?: string;
  lastReactElement?: () => JSX.Element;
  innerReactElement?: () => JSX.Element;
}

export const siteConfig = {
  name: "Phần Mêm MKT",
  description: "Hệ thống quản lý phần mềm MKT.",
  navCustomerItems: [
    {
      title: "DASHBOARD",
      isHeader: true,
    },

    {
      title: "Tổng quan",
      icon: IconDashBoardHome,
      path: config.routerPathCustomer.home,
    },

    {
      title: "Đăng ký dịch vụ",
      icon: IconDashBoard,
      path: config.routerPathCustomer.software,

      children: [
        {
          title: "Phần mềm",
        },

        {
          title: "Dịch vụ Proxy",
          is_blank: true,
          path: "https://phanmemmkt.vn/",
        },

        {
          title: "Dịch vụ Captcha",
          is_blank: true,
          path: "https://phanmemmkt.vn/",
        },
      ],
    },

    {
      title: "Quản lý dịch vụ",
      icon: IconDashSecurity,
      path: config.routerPathCustomer.list_software,
      children: [
        {
          title: "Phần mềm",
        },
      ],
    },

    {
      title: "APPS",
      isHeader: true,
    },

    {
      title: "Ticket hỗ trợ",
      icon: BsFillTicketPerforatedFill,
      path: config.routerPathCustomer.ticket,
    },

    {
      title: "Chat",
      icon: IconChat,
      path: config.routerPathCustomer.chat,
    },

    {
      title: "Nạp tiền tài khoản",
      icon: RiMoneyDollarCircleFill,
      path: config.routerPathCustomer.payment,
    },

    {
      title: "Affiliates",
      icon: BsFillCreditCardFill,
      path: config.routerPathCustomer.affiliate,
    },

    {
      title: "Lịch sử giao dịch",
      icon: IoIosTime,
      path: config.routerPathCustomer.history,
    },

    {
      title: "Lịch sử hoạt động",
      icon: IconDashHistory,
      path: config.routerPathCustomer.activity,
    },

    {
      title: "Admin",
      isHeader: true,
    },

    {
      title: "Lịch sử đổi máy",
      icon: IconDashHistory,
      path: config.routerPathCustomer.machine,
    },
  ],
  navEmployeeItems: [
    { title: "Menu", icon: IconMenu },
    {
      title: "Dashboard",
      path: config.routerPathEmployee.dashboard,
    },
    {
      title: "Tiện ích",
      path: config.routerPathEmployee.utilities,
    },
    {
      title: "Quản lý bản quyền",
      children: [
        {
          title: "- Danh sách bản quyển",
          path: config.routerPathEmployee.listLicense,
        },
        {
          title: "- Danh sách dùng thử",
          path: config.routerPathEmployee.listLicenseTrial,
        },
        {
          title: "- Danh sách bản quyền đã xóa",
          path: config.routerPathEmployee.listLicenseTrashed,
        },
      ],
    },
    {
      title: "Quản lý Khách hàng",
      children: [
        {
          title: "Danh sách Khách hàng",
          path: config.routerPathEmployee.listCustommer,
        },
        {
          title: "Thêm mới khách hàng",
          path: config.routerPathEmployee.addCustommer,
        },
      ],
    },
    {
      title: "Quản lý đại lý",
      children: [
        {
          title: "Tổng quan",
          path: config.routerPathEmployee.overviewAcengy,
        },
        {
          title: "Nhân viên",
          path: config.routerPathEmployee.staffAgency,
        },
        {
          title: "Quản lý",
          path: config.routerPathEmployee.managerAgency,
        },
        {
          title: "Lịch sử nạp tiền",
          path: config.routerPathEmployee.historydeposit,
        },
      ],
    },
    {
      title: "Quản lý nhân viên",
      children: [
        {
          title: "Danh sách nhân viên",
          path: config.routerPathEmployee.listStaff,
        },
        {
          title: "Quản lý KPI",
          path: config.routerPathEmployee.listKpi,
        },
        {
          title: "Thêm nhân viên",
          path: config.routerPathEmployee.addStaff,
        },
      ],
    },
    { title: "Báo cáo", icon: IconReport },
    {
      title: "Danh sách bản quyền",
      path: config.routerPathEmployee.licenseReport,
    },
    {
      title: "Danh sách dùng thử",
      path: config.routerPathEmployee.licenseTrialReport,
    },
    {
      title: "Danh sách sắp hết hạn",
      path: "/#",
    },
    {
      title: "Báo cáo khách hàng",
      path: "/#",
    },
    {
      title: "Danh sách hóa đơn",
      path: "/#",
    },
    {
      title: "Danh sách đại lý ",
      children: [
        {
          title: "Đại lý",
          path: "/#",
        },
        {
          title: "Duyệt thanh toán",
          path: "/#",
        },
      ],
    },
    {
      title: "Báo cáo logs",
      path: "/#",
    },
    { title: "Chăm sóc khách hàng", icon: IconCustomer },
    {
      title: "Feedback",
      children: [
        {
          title: "Danh sách",
          path: "/#",
        },
        {
          title: "Tạo feedback",
          path: "/#",
        },
      ],
    },
    {
      title: "Quản lý cấu hình Email",
      children: [
        {
          title: "Danh sách mẫu email",
          path: "/#",
        },
        {
          title: "Cấu hình email",
          path: "/#",
        },
        {
          title: "Logs email",
          path: "/#",
        },
      ],
    },
    { title: "Dashboard chart", path: "/#" },
    { title: "Table list feedback", path: "/#" },
    { title: "Cài đặt hệ thống", icon: IconSettingSystem },
    { title: "Phân quyền người dùng", path: "/#" },
    {
      title: "Sản phẩm",
      children: [
        {
          title: "Danh sách sản phẩm",
          path: "/#",
        },
      ],
    },
    {
      title: "Gói sản phẩm",
      children: [
        {
          title: "Danh sách gói sản phẩm",
          path: "/#",
        },
      ],
    },
    { title: "Danh sách Selector", path: "/#" },
  ],
  listHeaderTicket: [
    {
      content: "STT",
      keyActive: "stt",
    },
    {
      content: "Sản phẩm / Dịch vụ",
      keyActive: "name",
    },
    {
      content: "Thời gian sử dụng",
      keyActive: "time",
    },
    {
      content: "Phụ trách",
      keyActive: "responsibility",
    },
    {
      content: "Hỗ trợ",
      keyActive: "support",
    },
    {
      content: "Còn lại",
      keyActive: "remaing_day",
    },
    {
      content: "Mã máy",
      keyActive: "tag",
    },
  ],
  listHeaderUserTrans: [
    {
      content: "#",
      keyActive: "stt",
    },
    {
      content: "Email",
      keyActive: "Email",
    },
    {
      content: "Tên sản phẩm",
      keyActive: "name",
    },
    {
      content: "Số Tiền",
      keyActive: "money",
    },
    {
      content: "Ngày mua",
      keyActive: "date",
    },
    {
      content: "Trạng thái",
      keyActive: "status",
    },
  ],
  listHeaderUserCreate: [
    {
      content: "#",
      keyActive: "stt",
    },
    {
      content: "Tên",
      keyActive: "name",
    },
    {
      content: "Email",
      keyActive: "Email",
    },

    {
      content: "Ngày tạo",
      keyActive: "date",
    },
  ],
  listHeaderHistoryWithdraw: [
    {
      content: "#",
      keyActive: "stt",
    },
    {
      content: "Tên",
      keyActive: "name",
    },
    {
      content: "Email",
      keyActive: "Email",
    },

    {
      content: "Ngày tạo",
      keyActive: "date",
    },
  ],
  listHeaderPayment: [
    {
      content: "#",
      keyActive: "id",
    },

    {
      content: "Giao dịch",
      keyActive: "id",
    },
    {
      content: "Nội dung",
      keyActive: "name",
    },

    {
      content: "Số tiền",
      keyActive: "name",
    },

    {
      content: "Số dư trước",
      keyActive: "name",
    },

    {
      content: "Số dư sau",
      keyActive: "name",
    },

    {
      content: "Ngày tạo",
      keyActive: "name",
    },
  ],
  listHeaderListSoftware: [
    {
      content: "STT",
      keyActive: "stt",
    },
    {
      content: "Sản phẩm / Dịch vụ",
      keyActive: "name",
    },
    {
      content: "Thời gian sử dụng",
      keyActive: "time",
    },
    {
      content: "Phụ trách",
      keyActive: "responsibility",
    },
    {
      content: "Hỗ trợ",
      keyActive: "support",
    },
    {
      content: "Còn lại",
      keyActive: "remaing_day",
    },
    {
      content: "Mã máy",
      keyActive: "tag",
    },
  ],
  listHeaderHistoryTrans: [
    {
      content: "#",
      keyActive: "stt",
    },
    {
      content: "Giao dịch",
      keyActive: "transaction",
    },
    {
      content: "Nội dung",
      keyActive: "content",
    },

    {
      content: "Số tiền",
      keyActive: "amount",
    },
    {
      content: "Số dư trước",
      keyActive: "previous balance",
    },
    {
      content: "Số dư sau",
      keyActive: "before balance",
    },
    {
      content: "Ngày tạo",
      keyActive: "create date",
    },
  ],
  listHeaderActivity: [
    {
      content: "#",
      keyActive: "stt",
    },
    {
      content: "Hoạt động",
      keyActive: "activity",
    },
    {
      content: "Nội dung",
      keyActive: "content",
    },

    {
      content: "Người thực hiện",
      keyActive: "Implementer",
    },

    {
      content: "Ngày tạo",
      keyActive: "create date",
    },
  ],
  listHeaderMachine: [
    {
      content: "STT",
      keyActive: "stt",
    },
    {
      content: "Họ tên",
      keyActive: "name",
    },
    {
      content: "Email",
      keyActive: "email",
    },

    {
      content: "Sản phẩm / Dịch Vụ",
      keyActive: "Products/Services",
    },

    {
      content: "Số lần đổi máy",
      keyActive: "changing devices",
    },
    {
      content: "Nhân viên hỗ trợ",
      keyActive: "support staff",
    },
  ],
  links: {
    mxh: [
      {
        Icon: FaUsers,
        link: "https://www.facebook.com/groups/807240710504127/",
        color: "#69727d",
      },

      {
        Icon: FaTelegram,
        link: "https://t.me/+9EuCubBZNCJhYmE1",
        color: "#2ca5e0",
      },

      {
        Icon: FaYoutube,
        link: "https://www.youtube.com/channel/UCzT9f4tX-o4oQpVbHTdm_sA",
        color: "#cd201f",
      },

      {
        Icon: FaTiktok,
        link: "http://www.tiktok.com/@mokate.mkt",
        color: "#69727d",
      },
    ],
    mkt: [
      {
        head: "CÔNG TY CP GIẢI PHÁP MKT",
        children: [
          {
            Icon: BsFillBuildingFill,
            name: "Tầng 4 Toà Nhà Stellar Garden, 35 Lê Văn Thiêm, Thanh Xuân, HN",
            link: "https://www.google.com/maps/place/Stellar+Garden/@21.000621,105.8013367,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ad10940ff6fb:0x2390fdb10dee9dc6!8m2!3d21.000616!4d105.8035254",
          },

          {
            Icon: HiPhone,
            name: "tel:+84966363373",
            link: "mailto:phanmemmkt.vn@gmail.com",
          },

          {
            Icon: MdEmail,
            name: "phanmemmkt.vn@gmail.com",
            link: "mailto:phanmemmkt.vn@gmail.com",
          },

          {
            Icon: FaInternetExplorer,
            name: "Website: phanmemmkt.vn",
            link: "https://phanmemmkt.vn",
          },
        ],
      },

      {
        head: "ĐIỀU KHOẢN CHÍNH SÁCH",
        children: [
          {
            isArrow: true,
            name: "Điều Khoản Sử Dụng",
            link: "https://phanmemmkt.vn/dieu-khoan-su-dung/",
          },

          {
            isArrow: true,
            name: "Chính Sách Bảo Mật",
            link: "https://phanmemmkt.vn/chinh-sach-bao-mat/",
          },

          {
            isArrow: true,
            name: "Chính Sách Bảo Hành",
            link: "https://phanmemmkt.vn/chinh-sach-bao-hanh/",
          },

          {
            isArrow: true,
            name: "Chính Sách Cài Đặt Phần Mềm",
            link: "https://phanmemmkt.vn/chinh-sach-cai-dat-phan-mem/",
          },

          {
            isArrow: true,
            name: "Hướng Dẫn Thanh Toán",
            link: "https://phanmemmkt.vn/huong-dan-thanh-toan-phan-mem-mkt",
          },

          {
            isArrow: true,
            name: "Câu Hỏi Thường Gặp",
            link: "https://phanmemmkt.vn/huong-dan-thanh-toan-phan-mem-mkt",
          },
        ],
      },

      {
        head: "Bạn nên đọc",
        children: [
          {
            isArrow: true,
            name: "Giới Thiệu",
            link: "https://phanmemmkt.vn/gioi-thieu/",
          },

          {
            isArrow: true,
            name: "Hoạt động đào tạo",
            link: "https://phanmemmkt.vn/dao-tao",
          },

          {
            isArrow: true,
            name: "Tin Tức & Sự Kiện",
            link: "https://phanmemmkt.vn/chuyen-muc/tin-bao-chi",
          },

          {
            isArrow: true,
            name: "Tuyển Dụng",
            link: "https://phanmemmkt.vn/tuyen-dung",
          },

          {
            isArrow: true,
            name: "Liên Hệ",
            link: "https://phanmemmkt.vn/lien-he/",
          },
        ],
      },

      {
        head: "Thanh toán",
        children: [
          {
            isDots: true,
            name: "STK: 4294396868",
          },

          {
            isDots: true,
            name: "TechcomBank",
          },

          {
            isDots: true,
            name: "Phan Thị Hải Yến",
          },
        ],
      },
    ],
  },
};
