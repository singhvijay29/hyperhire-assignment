'use client';
import React from 'react';
import ResponsiveCarousel from './ResponsiveCarousel';
import { ArrowDownIcon, DollarSignIcon } from 'lucide-react';
import CheckBoxIcon from './Icons/CheckBoxIcon';
import MarqueeCard from './MarqueeCard';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Marketing from './Icons/Marketing';
import ImageIcon from './Icons/ImageIcon';
import Hexagon from './Icons/Hexagon';
import Targeting from './Icons/Targeting';
import CallIcon from './Icons/CallIcon';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const marqueeData = [
  {
    name: '해외 마케팅',
    icon: Marketing,
  },
  {
    name: '퍼블리셔',
    icon: ImageIcon,
  },
  {
    name: '캐드원(제도사)',
    icon: Hexagon,
  },
  {
    name: '해외 세일즈',
    icon: Targeting,
  },
  {
    name: '해외 세일즈',
    icon: CallIcon,
  },
];

const HeroSection = () => {
  return (
    <div
      className="w-full px-6 md:px-12"
      style={{
        backgroundImage:
          "linear-gradient(151.17deg, rgba(38, 194, 185, 0.8) 8.69%, rgba(40, 139, 231, 0.8) 126.06%), url('https://s3-alpha-sig.figma.com/img/e9c5/52b8/d4c5da9953baca7f5d85f4d6f313f927?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FldTZT5gxr4dHqzu6i1iJf2ohzShiTp8c1FN5D8wG7qlvrFM7zCuiBTkuJHU9ovGnYxaBp1KOR5S86oB6DLYni965KhoI1rJvP-g7agy2Lu2V78MUQfYBP6RzKtMeeJh4t30H3XNLojqbI~6UyxEv4sWeJWJpx4XCTdATaMA2QBODD0rmW57VS28Wih0atuw6F0gn1EPUQKF1lrNTB70nyK-o03dOMOP8ORcyV3ketGjc2-svvcj~VXn2p3dSigAdcdxAvqYonOEp27hOo~-1fPGB7PMMJfsFQ2qQ4jKWRUSiBKIi4l9tF~BYqeWJnkJ38E7H-4w-yh68XiZMTSfdw__')",
        backgroundSize: 'cover',
      }}>
      <main className="bg-gradient lg:pt-[132px] pt-[86px] text-white lg:pb-[108px] pb-[60px] max-w-[1440px] mx-auto font-poppins">
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <div className="transition-opacity duration-500 delay-300 opacity-0 animate-fadeIn">
              <div className="text-[18px] relative lg:text-color-96 text-color-white lg:bg-color-ef bg-color-4ff lg:py-2 py-[6px] lg:px-4 px-3 rounded-lg mb-6 w-fit">
                풀타임, 파트타임
                <ArrowDownIcon className="lg:text-color-ef text-color-4ff absolute -bottom-2 left-2" />
              </div>
            </div>

            <div className="transition-opacity duration-500 opacity-0 animate-fadeInY">
              <div className="lg:text-[48px] text-[36px] mb-4 whitespace-pre">
                최고의 실력을 가진
                <br />
                외국인 인재를 찾고 <br className="block md:hidden" />
                계신가요?
              </div>
            </div>

            <div className="transition-opacity duration-500 opacity-0 animate-fadeInY">
              <div className="mb-6 lg:text-[24px] text-[18px] lg:text-white/90 text-white/80">
                법률 및 인사관리 부담없이
                <br />
                1주일 이내에 원격으로 채용해보세요.
              </div>
              <div className="hidden lg:block text-[18px] underline">개발자가 필요하신가요?</div>
            </div>

            <div className="transition-opacity duration-500 opacity-0 animate-fadeIn">
              <div className="lg:grid hidden grid-cols-3 gap-[48px] mt-[60px] *:flex *:flex-col *:gap-2 *:border-t *:border-white *:pt-2">
                <div>
                  <div className="font-[18px]">평균 월 120만원</div>
                  <div className="font-[16px]">임금을 해당 국가를 기준으로 계산합니다.</div>
                </div>
                <div>
                  <div className="font-[18px]">최대 3회 인력교체</div>
                  <div className="font-[16px]">막상 채용해보니 맞지 않아도 걱정하지 마세요.</div>
                </div>
                <div>
                  <div className="font-[18px]">평균 3일, 최대 10일</div>
                  <div className="font-[16px]">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="transition-opacity duration-500 opacity-0 animate-fadeIn -mt-6 ">
            <div className="flex flex-col items-center gap-4 md:gap-8">
              <div className="text-[18px] relative text-color-96 bg-color-ef py-2 px-4 rounded-lg inline-flex items-center gap-[10px] ">
                <DollarSignIcon />월 100만원
                <ArrowDownIcon className="text-color-ef absolute -bottom-2 left-1/2 transform -translate-x-1/2" />
              </div>
              <ResponsiveCarousel />
            </div>
          </div>

          <div className="transition-opacity duration-500 opacity-0 animate-fadeIn">
            <div className="flex lg:hidden flex-col gap-4 mt-6">
              <div className="text-[16px] flex flex-col gap-2">
                <div className="flex flex gap-2">
                  <div className="flex items-center gap-3">
                    <CheckBoxIcon />
                    한국어 능력
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckBoxIcon />
                    업무 수행 능력
                  </div>
                </div>
                <div className="flex flex gap-2">
                  <div className="flex items-center gap-3">
                    <CheckBoxIcon />
                    겸업 여부
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckBoxIcon />
                    평판 조회
                  </div>
                </div>
              </div>
              <div className="block text-[18px] underline text-color-23">개발자가 필요하신가요?</div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:mt-10 mt-5 lg:mt-0 justify-center">
          <div className="w-full transition-opacity duration-500 opacity-0 animate-fadeIn">
            <Swiper
              slidesPerView="auto"
              slidesPerGroup={1}
              speed={600}
              autoplay
              loop
              transition={'all 0.3s cubic-bezier(.4, 0, 0, 1)'}
              direction={'horizontal'}
              modules={[Autoplay]}>
              {marqueeData?.map((item, id) => (
                <SwiperSlide key={item.id} style={{ width: 'fit-content' }}>
                  <MarqueeCard index={id} item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
