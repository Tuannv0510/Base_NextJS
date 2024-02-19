"use client";

import { FiUserCheck } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { BsCheckCircleFill, BsLink45Deg } from "react-icons/bs";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import {
  ChatIcon,
  IconDashBoardHome,
  PhoneIcon,
  SupportIcon,
  SupportPeopleIcon,
} from "@/components/icons";
import StaticImages from "@/public/assets/images";
import Image from "next/image";
import SupportItem from "@/components/supportItem/SupportItem";
import HeaderSupportItem from "@/components/supportItem/HeaderSupportItem";

import { useState } from "react";
import { isSmallScreen } from "@/services/helpers/is-small-screen";

function PageDashboard() {
  const [changeBtn, setChangeBtn] = useState(true);

  return (
    <div>
      <div className="flex lg:mt-5 justify-between">
        <div
          className={`${
            isSmallScreen() ? (changeBtn ? "block" : "hidden") : ""
          } flex-1 w-full lg:w-auto lg:pr-5 lg:space-y-5`}
        >
          <div className="panel !p-0  overflow-hidden !bg-transparent !shadow-none lg:mb-6">
            <div className="h-[240px] lg:h-[335px] overflow-hidden bg-white rounded-2xl">
              <Image
                src={StaticImages.bg_robot_home}
                alt="banner"
                width={0}
                height={0}
                className="w-full h-full"
              />
            </div>

            <div className="flex px-8 lg:pb-8 w-full flex-col items-center -mt-24 lg:mt-0 lg:items-start lg:flex-row lg:relative">
              <div className="h-[211px] w-[211px] lg:absolute rounded-full overflow-hidden border-[3px] border-gray-300 lg:-translate-y-1/2 bg-white ">
                <Image
                  src={StaticImages.logo_icon}
                  alt="logo"
                  className="object-cover !w-full !h-full"
                  width={200}
                  height={200}
                />
              </div>
              <div className="pt-2 lg:pl-[240px] gap-2 flex flex-col lg:flex-row items-center  lg:items-start justify-between flex-1 text-white min-h-[110px]">
                <div className="flex items-center flex-col lg:block ">
                  <h1 className="text-2xl mb-1">Phần mềm MKT</h1>
                  <div className="space-x-3">
                    <span className="text-base">101k lượt thích</span>
                    <span className="text-base">99k lượt theo dõi</span>
                  </div>
                </div>

                <div className="flex items-end pb-8">
                  <button className="btn btn-sm btn-outline-primary cursor-pointer min-w-[200px]">
                    <FiUserCheck className="mr-2" />
                    Đang theo dõi
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="panel">
            <div className="card mb-3">
              <div className="card-body">
                <div className="flex items-center">
                  <div className="mr-3">
                    <Image
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-full object-cover border-2 border-[#0E206D]"
                      src="https://html.vristo.sbthemes.com/assets/images/user-profile.jpeg"
                      alt="userProfile"
                    />
                  </div>
                  <div className="col pl-0">
                    <h6 className="mb-0 font-semibold text-base text-[#0E206D]">
                      Phần mềm MKT
                    </h6>
                    <small>4 hours ago</small>
                  </div>
                </div>
                <div className="content mt-3">
                  <div className="mb-0">
                    <p>
                      PHẦN MỀM MINSOFTWARE HỢP TÁC VỚI VTV1 TRONG CHƯƠNG TRÌNH
                      “HITECH CÔNG NGHỆ TƯƠNG LAI”
                    </p>
                    <p>--------------------------------------------</p>
                    <p>
                      🔥Hôm 17.8.2023 vừa qua, Công ty phần mềm MINSoftware đã
                      được VTV1 đến phỏng vấn với chuyên mục “HITECH CÔNG NGHỆ
                      TƯƠNG LAI”
                    </p>
                    <p>
                      🔥
                      <span style={{ color: "rgb(19, 19, 19)" }}>
                        Với một dàn máy khoảng 150 chiếc điện thoại, tương đương
                        với khoảng 150 nhân viên mẫn cán nhưng chỉ cần duy nhất
                        2 người điều khiển là đã có một &ldquo;nông trại điện
                        thoại&ldquo;.
                      </span>
                    </p>
                    <p>
                      🔥Cảm ơn đội ngũ của VTV1 - những người đã tạo ra một môi
                      trường chuyên nghiệp và thân thiện trong suốt quá trình
                      ghi hình. Sự nhiệt tình và sự chu đáo của các anh chị giúp
                      MINSoftware có một buổi phóng vấn diễn thành công tốt đẹp
                      và đã được chiếu trong chương trình thời sự VTV1 hôm thứ
                      năm vừa qua.
                    </p>
                    <p>
                      🍀Với sự hỗ trợ và tin tưởng của cả hai phía là VTV1 và
                      Quý khách hàng, MINSoftware đã có cơ hội chia sẻ quan điểm
                      và kiến thức về hệ thống PhoneFarm trên sóng truyền hình
                      quốc gia. Công ty phần mềm MINSoftware xin cam kết sẽ tiếp
                      tục nỗ lực hết mình và mang lại những giá trị tích cực cho
                      Quý khách hàng trong công việc, kinh doanh, marketing…
                    </p>
                    <p>-------------------------</p>
                    <p>Để được tư vấn và sử dụng phần mềm xin liên hệ:</p>
                    <p>☎𝐇𝐨𝐭𝐥𝐢𝐧𝐞: 0969 078 803- 082 980 3601</p>
                    <p>📧𝐄𝐦𝐚𝐢𝐥: hotrominsoftware@gmail.com</p>
                    <p>🔗𝐖𝐞𝐛𝐬𝐢𝐭𝐞: minsoftware.vn</p>
                    <p>
                      <br />
                    </p>
                  </div>
                  <div>
                    <Image
                      src="https://app.minsoftware.vn/assets/img/uploads/1692588154.jpg"
                      alt=""
                      className="w-100"
                      width={1280}
                      height={1920}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            isSmallScreen() ? (!changeBtn ? "block" : "hidden") : ""
          }  w-full lg:w-1/3 space-y-5 `}
        >
          <div className="panel bg-no-repeat text-white bg-center lg:bg-125 bg-[url('/assets/images/bg/bg_info_custom.png')]">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Thông tin tài khoản
              </h5>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-x-2">
                  <BiUser size={24} />

                  <span className="text-base font-medium">Mã khách hàng:</span>
                </div>
                <div className="flex">
                  <span className="font-medium ">KH-1068030</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-x-2">
                  <BsLink45Deg size={24} />

                  <span className="text-base font-medium">Tài khoản:</span>
                </div>
                <div className="flex space-x-1">
                  <div className="bg-[#dff7e9] text-[#28c76f] px-2 py-1 rounded text-sm">
                    Đã xác thực
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <button className="btn btn-sm btn-primary cursor-pointer w-full !bg-white !text-[#FF6400]">
                <MdOutlineMoneyOffCsred className="mr-2" size={20} />
                <span>Nạp tiền</span>
              </button>
            </div>
          </div>

          <div className="panel space-y-8 bg-no-repeat bg-center lg:bg-125 bg-[url('/assets/images/bg/bg_digital.png')]">
            <SupportItem
              IconHeader={<SupportIcon />}
              headerDetail={{
                title: "Liên hệ",
                subtile: "Hỗ trợ",
              }}
              IconItemSupport={<SupportPeopleIcon />}
            />

            <SupportItem
              IconHeader={<ChatIcon />}
              headerDetail={{
                title: "Góp ý",
                subtile: "Khiếu nại",
              }}
              IconItemSupport={<PhoneIcon />}
            />

            <div>
              <HeaderSupportItem
                IconHeader={<SupportIcon />}
                headerDetail={{
                  title: "Email",
                  subtile: "phanmemmkt.vn@gmail.com",
                }}
              />

              <div className="grid grid-cols-3 gap-4 mt-11">
                {Array(3)
                  .fill("")
                  .map((_, index) => {
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className="mb-6 h-[125px]">
                          <Image
                            src={
                              "https://i.pinimg.com/originals/a8/69/40/a86940a4ed8a69539b341f3c414c47b3.png"
                            }
                            alt="qr code"
                            className="h-full w-full"
                            width={400}
                            height={400}
                          />
                        </div>

                        <span className="text-base font-semibold text-white opacity-80 text-center">
                          Fanpage Facebook
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          <div className="panel  bg-no-repeat bg-center lg:bg-125 bg-[url('/assets/images/bg/bg_digital.png')]">
            <div className="flex items-center justify-center">
              <Image
                src={StaticImages.commit_logo}
                alt="s"
                width={350}
                height={0}
              />
            </div>

            <h2 className="text-xl font-semibold text-white text-center">
              CAM KẾT{" "}
              <span className="text-[#FFB169]">
                &quot;HIỆU QUẢ - NHANH - DỄ DÙNG&quot;
              </span>
            </h2>

            <div className="mt-5 text-white font-semibold space-y-5 pb-24">
              <div className="flex gap-2">
                <BsCheckCircleFill
                  className="shrink-0 mt-1"
                  color="#FFB169"
                  size={25}
                />
                <div className="flex items-center">
                  <span>
                    <span className="text-[#FFB169]">HỖ TRỢ 1 - 1</span> trong
                    quá trình sử dụng phần mềm.
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <BsCheckCircleFill
                  className="shrink-0 mt-1"
                  color="#FFB169"
                  size={25}
                />
                <div className="flex items-center">
                  <span>
                    Bảo hành, update phần mềm{" "}
                    <span className="text-[#FFB169]">MIỄN PHÍ</span> trọn đời
                    đầu
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <BsCheckCircleFill
                  className="shrink-0 mt-1"
                  color="#FFB169"
                  size={25}
                />
                <div className="flex items-center">
                  <span>
                    <span className="text-[#FFB169]">
                      CAM KẾT REEFUND 100% TRONG 7 NGÀY
                    </span>{" "}
                    đầu tiên nếu tính năng phần mềm không giống mô tả
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <BsCheckCircleFill
                  className="shrink-0 mt-1"
                  color="#FFB169"
                  size={25}
                />
                <div className="flex items-center">
                  <span>
                    Đào tạo,
                    <span className="text-[#FFB169]">CẦM TAY CHỈ VIỆC</span> đến
                    khi <span className="text-[#FFB169]"> THÀNH THẠO</span> sử
                    dụng công cụ.
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <BsCheckCircleFill
                  className="shrink-0 mt-1"
                  color="#FFB169"
                  size={25}
                />
                <div className="flex items-center">
                  <span>
                    <span className="text-[#FFB169]">ĐỒNG HÀNH</span> với khách
                    hàng cho đến khi sử dụng hiệu quả
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <BsCheckCircleFill
                  className="shrink-0 mt-1"
                  color="#FFB169"
                  size={25}
                />
                <div className="flex items-center">
                  <span>
                    Khách hàng được hỗ trợ đổi một sản phẩm khác thay thế 1 lần
                    trong tháng đầu tiên sử dụng
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <BsCheckCircleFill
                  className="shrink-0 mt-1"
                  color="#FFB169"
                  size={25}
                />
                <div className="flex items-center">
                  <span>
                    Liên tục cải tiến sản phẩm, giúp khách hàng có trải nghiệm
                    tốt nhất.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="lg:hidden z-[50] fixed bottom-[75px] right-3 text-[#FF9E45] bg-white-light/70 rounded-full flex items-center justify-center w-12 h-12"
          onClick={() => setChangeBtn(!changeBtn)}
        >
          {changeBtn ? (
            <SupportIcon h={32} w={32} />
          ) : (
            <IconDashBoardHome height={28} width={28} />
          )}
        </button>
      </div>
    </div>
  );
}

export default PageDashboard;
