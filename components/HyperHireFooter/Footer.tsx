import Image from "next/image";
import InfoCard from "./InfoCard";
import { ArrowRightIcon } from "lucide-react";
import CodeIcon from "../Icons/CodeIcon";
import KorIcon from "../Icons/KorIcon";
import UserIcon from "../Icons/UserIcon";
import SettingIcon from "../Icons/SettingIcon";

const Footer = () => {
  const items = [
    {
      icon: CodeIcon,
      title: "해외 개발자 원격 채용",
    },
    {
      icon: UserIcon,
      title: "외국인 원격 채용 (비개발)",
    },
    {
      icon: KorIcon,
      title: "한국어 가능 외국인 채용",
    },
    {
      icon: SettingIcon,
      title: "해외 개발자 활용 서비스",
    },
  ];

  return (
    <footer className="py-[80px] px-6 md:px-12 font-poppins bg-[#FBFBFB] ">
      <div className="container flex flex-col gap-12 px-4 max-w-[1440px] mx-auto ">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-[18px]">
          <div className="lg:col-span-4">
            <Image
              src="/hyperhirelogo.png"
              alt="hyperhire logo"
              width={187}
              height={34}
              priority
              className="mb-[16px]"
            />
            <div className=" mb-[18px] text-[14px] text-color-1">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </div>
            <div className="flex flex-col gap-2 text-[13px] text-color-f">
              <div>010-0000-0000</div>
              <div>aaaaa@naver.com</div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-[15px] lg:col-span-8 ">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-2xl text-[14px] flex flex-col gap-4"
              >
                <div className="flex flex-col gap-3">
                  <div className="bg-color-f6 w-10 h-10 rounded-lg flex items-center justify-center">
                    {item?.icon()}
                  </div>
                  <div className="text-color-1">{item?.title}</div>
                </div>
                <a href="#" className="text-color-f flex items-center gap-1">
                  바로가기
                  <ArrowRightIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-[40px]">
          <div className="lg:col-span-4  flex gap-[40px]">
            <InfoCard
              title={"상호명"}
              subtitle={"하이퍼하이어"}
              description={"Hyperhire India Private Limited"}
            />

            <InfoCard
              title={"대표 CEO"}
              subtitle={"김주현"}
              description={"Juhyun Kim"}
            />
          </div>
          <div className="lg:col-span-8  flex lg:flex-row flex-col gap-[40px]">
            <InfoCard
              title={"사업자등록번호 CIN"}
              subtitle={"427-86-01187"}
              description={"U74110DL2016PTC290812"}
            />

            <InfoCard
              title={"주소 ADDRESS"}
              subtitle={"서울특별시 강남대로 479, 지하 1층 238호"}
              description={
                "D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India"
              }
            />
          </div>
        </div>
        <div className="text-[13px] text-color-f">
          ⓒ {new Date().getFullYear()} Hyperhire
        </div>
      </div>
    </footer>
  );
};

export default Footer;
