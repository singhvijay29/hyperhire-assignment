import RightArrow from "@/components/Icons/RightArrow";
import LeftArrow from "@/components/Icons/LeftArrow";
import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import ProfileCard from "@/components/Carousel/ProfileCard";

export const data = [
  {
    name: "Abhishek Gupta",
    role: "마케팅",
    experience: "2",
    skills: [
      "마케팅 콘텐츠 제작",
      "인스타그램 관리",
      "트위터 관리",
      "블로그 글 작성",
    ],
    profileImage:
      "https://s3-alpha-sig.figma.com/img/e223/2669/f5acc1421ab983285005f3855fea261f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARe9i53iz8~-bDtpndqI9~QXX1ygDwi5X02LIpz1irljgRPosj6tak4tDpnZmPgZz1upO~NM7DiYb5x6YqCTFcPVBHn~UHrA-xkJaOkPAPu5mNbdKGrHbrcKaTHcuY2Pa2avlgIiSfP6Pdfs2t~xv1HtJWETR5sN7GuMS2eZTi8-Q6MUQxwZe09eNNwNRclkdbRb9nBpabVMqj2B3knRz40SoEdGhrNqVOUgj~SVYg57Am2ArjOynR8IFxsLoSxH5eHcdHMH8ULRCPucjuiWODnCe5gR1HFxvjsAb3Kc~NDx3g31v4yGwYxugiaITVJAvhQLxnRYkQWa7M0KcG6zQA__",
    flagImage:
      "https://s3-alpha-sig.figma.com/img/fe4c/5714/071ca88d9d6e607dff42c41cfe41a595?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKYHBaa3TGw6ZEFFs2Nm7NUoxXtqkoMWhS2C2XVI9jP7ihfnjgalfSnaSbb3un~u3iFpCCJix5TWZ1c1Bb5gv26oXKyoPXB2aydfMsgAA8u4VrRci2yixWC143dJJQ7pEAbgHrW4rY-ToNnKfdcmMPRppQpB66FR5brWHKphufQJHEFJPs-AS~VOhZImlzd0NWuBr87TiBwLddr-Dyf6-bla1ickMibEe5pw52~uozGWhP4GpqKRqYuomdX-UHTkPCZOexBgi3zpGvde2FICHzVOVyp1bxJisrNqmLLR8x0hyjXh7sJMShIav11LnJNKFF9~5NRAkgP1Dv-fllo8JA__",
  },
  {
    name: "Abhishek Gupta",
    role: "마케팅",
    experience: "2",
    skills: [
      "마케팅 콘텐츠 제작",
      "인스타그램 관리",
      "트위터 관리",
      "블로그 글 작성",
    ],
    profileImage:
      "https://s3-alpha-sig.figma.com/img/e223/2669/f5acc1421ab983285005f3855fea261f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARe9i53iz8~-bDtpndqI9~QXX1ygDwi5X02LIpz1irljgRPosj6tak4tDpnZmPgZz1upO~NM7DiYb5x6YqCTFcPVBHn~UHrA-xkJaOkPAPu5mNbdKGrHbrcKaTHcuY2Pa2avlgIiSfP6Pdfs2t~xv1HtJWETR5sN7GuMS2eZTi8-Q6MUQxwZe09eNNwNRclkdbRb9nBpabVMqj2B3knRz40SoEdGhrNqVOUgj~SVYg57Am2ArjOynR8IFxsLoSxH5eHcdHMH8ULRCPucjuiWODnCe5gR1HFxvjsAb3Kc~NDx3g31v4yGwYxugiaITVJAvhQLxnRYkQWa7M0KcG6zQA__",
    flagImage:
      "https://s3-alpha-sig.figma.com/img/fe4c/5714/071ca88d9d6e607dff42c41cfe41a595?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKYHBaa3TGw6ZEFFs2Nm7NUoxXtqkoMWhS2C2XVI9jP7ihfnjgalfSnaSbb3un~u3iFpCCJix5TWZ1c1Bb5gv26oXKyoPXB2aydfMsgAA8u4VrRci2yixWC143dJJQ7pEAbgHrW4rY-ToNnKfdcmMPRppQpB66FR5brWHKphufQJHEFJPs-AS~VOhZImlzd0NWuBr87TiBwLddr-Dyf6-bla1ickMibEe5pw52~uozGWhP4GpqKRqYuomdX-UHTkPCZOexBgi3zpGvde2FICHzVOVyp1bxJisrNqmLLR8x0hyjXh7sJMShIav11LnJNKFF9~5NRAkgP1Dv-fllo8JA__",
  },
  {
    name: "Abhishek Gupta",
    role: "마케팅",
    experience: "2",
    skills: [
      "마케팅 콘텐츠 제작",
      "인스타그램 관리",
      "트위터 관리",
      "블로그 글 작성",
    ],
    profileImage:
      "https://s3-alpha-sig.figma.com/img/e223/2669/f5acc1421ab983285005f3855fea261f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARe9i53iz8~-bDtpndqI9~QXX1ygDwi5X02LIpz1irljgRPosj6tak4tDpnZmPgZz1upO~NM7DiYb5x6YqCTFcPVBHn~UHrA-xkJaOkPAPu5mNbdKGrHbrcKaTHcuY2Pa2avlgIiSfP6Pdfs2t~xv1HtJWETR5sN7GuMS2eZTi8-Q6MUQxwZe09eNNwNRclkdbRb9nBpabVMqj2B3knRz40SoEdGhrNqVOUgj~SVYg57Am2ArjOynR8IFxsLoSxH5eHcdHMH8ULRCPucjuiWODnCe5gR1HFxvjsAb3Kc~NDx3g31v4yGwYxugiaITVJAvhQLxnRYkQWa7M0KcG6zQA__",
    flagImage:
      "https://s3-alpha-sig.figma.com/img/fe4c/5714/071ca88d9d6e607dff42c41cfe41a595?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKYHBaa3TGw6ZEFFs2Nm7NUoxXtqkoMWhS2C2XVI9jP7ihfnjgalfSnaSbb3un~u3iFpCCJix5TWZ1c1Bb5gv26oXKyoPXB2aydfMsgAA8u4VrRci2yixWC143dJJQ7pEAbgHrW4rY-ToNnKfdcmMPRppQpB66FR5brWHKphufQJHEFJPs-AS~VOhZImlzd0NWuBr87TiBwLddr-Dyf6-bla1ickMibEe5pw52~uozGWhP4GpqKRqYuomdX-UHTkPCZOexBgi3zpGvde2FICHzVOVyp1bxJisrNqmLLR8x0hyjXh7sJMShIav11LnJNKFF9~5NRAkgP1Dv-fllo8JA__",
  },
];

export default function ResponsiveCarousel() {
  const ref = useRef();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      ref.current?.goNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[600px] relative">
      {!isDesktopOrLaptop ? (
        <div style={{ height: "320px" }}>
          <ResponsiveContainer
            carouselRef={ref}
            render={(parentWidth, carouselRef) => {
              let currentVisibleSlide = 3;
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={Card}
                  slideWidth={220}
                  carouselWidth={315} // Adjust width for mobile
                  data={data}
                  currentVisibleSlide={currentVisibleSlide}
                  maxVisibleSlide={3}
                  useGrabCursor
                />
              );
            }}
          />
          <>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "-10px",
                zIndex: 10,
              }}
              size="small"
              color="primary"
              onClick={() => {
                ref.current?.goBack();
              }}
            >
              <LeftArrow />
            </div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "-10px",
                zIndex: 10,
              }}
              size="small"
              color="primary"
              onClick={() => {
                ref.current?.goNext(6);
              }}
            >
              <RightArrow />
            </div>
          </>
        </div>
      ) : (
        <div style={{ height: "400px" }}>
          <ResponsiveContainer
            carouselRef={ref}
            render={(parentWidth, carouselRef) => {
              let currentVisibleSlide = 3;
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={Card}
                  slideWidth={292}
                  carouselWidth={600} // Adjust width for mobile
                  data={data}
                  currentVisibleSlide={currentVisibleSlide}
                  maxVisibleSlide={3}
                  useGrabCursor
                />
              );
            }}
          />
          <>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "44px",
                zIndex: 10,
              }}
              size="small"
              color="primary"
              onClick={() => {
                ref.current?.goBack();
              }}
            >
              <LeftArrow />
            </div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "44px",
                zIndex: 10,
              }}
              size="small"
              color="primary"
              onClick={() => {
                ref.current?.goNext(6);
              }}
            >
              <RightArrow />
            </div>
          </>
        </div>
      )}
    </div>
  );
}

export const Card = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { name, skills, experience, role, profileImage, flagImage } =
    data[dataIndex];
  return (
    <ProfileCard
      name={name}
      skills={skills}
      experience={experience}
      role={role}
      profileImage={profileImage}
      flagImage={flagImage}
    />
  );
});

Card.displayName = "Card";
