module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["var(--font-poppins)"],
      inter: ["var(--font-inter)"],
      pretendard: ["var(--font-pretendard)"],
    },
    extend: {
      display: ["group-hover"],
      screens: {
        mobile: "400px",
        extraSmall: "375px",
        midLarge: "1022px",
        largeBreak: "1039px",
        large: "1215px",
        larger: "1145px",

        qMobile: { min: "300px", max: "535px" },
        m: { min: "1021px", max: "1035px" },
        mTwo: { min: "1036px", max: "1050px" },
        mThree: { min: "1051px", max: "1080px" },
        mFour: { min: "1081px", max: "1215px" },
      },
      colors: {
        "color-1": "#343741",
        "color-4": "#344054",
        "color-f": "#5e626f",
        "color-2f": "#24252f",
        "color-ff": "#4a77ff",
        "color-8": "#40e2e8",
        "color-fb": "#FBFBFB",
        "color-f6": "#EFF1F6",
        "color-cf": "#C1C5CF",
        "color-96": "#00C696",
        "color-ef": "#E9F7EF",
        "color-4ff": "#8BC4FF",
        "color-23": "#FBFF23",
        "color-f7": "#F2F4F7",
        badge: {
          success: "#39B990",
          profit: "#39B990",
          pending: "#E68619",
          error: "#E34850",
          margincall: "#F9A43F",
          liquidation: "#F76D74",
          initialltv: "#EE6240",
        },
        neutral: {
          50: "#F2F2F9",
          150: "#DDDDE3",
          200: "#D2D2D9",
          300: "#BDBDC3",
          400: "#A8A8AE",
          500: "#6E6E72",
          550: "#646467",
          600: "#59595D",
          650: "#4F4F52",
          700: "#444447",
          750: "#3A3A3C",
          800: "#2F2F32",
          850: "#252527",
          900: "#1A1A1C",
          950: "#101010",
          1000: "#F1C4A4",
        },
        error: {
          50: "#E34850",
        },
        accent: {
          apricot: "#F1C4A4",
          electric: "#00E599",
        },
        yellow: {
          300: "#F9A43F",
        },
        orange: {
          300: "#EE6240",
        },
        red: {
          500: "#E34850",
        },
      },
    },
    fontSize: {
      12: [
        "0.75rem",
        {
          lineHeight: "150%",
          letterSpacing: "0rem",
        },
      ],
      14: [
        "0.875rem",
        {
          lineHeight: "146%",
          letterSpacing: "0rem",
        },
      ],
      16: [
        "1rem",
        {
          lineHeight: "150%",
          letterSpacing: "0rem",
        },
      ],
      20: [
        "1.25rem",
        {
          lineHeight: "150%",
          letterSpacing: "0rem",
        },
      ],
      21: [
        "1.3125rem",
        {
          lineHeight: "150%",
          letterSpacing: "0rem",
        },
      ],
      24: [
        "1.5rem",
        {
          lineHeight: "150%",
          letterSpacing: "0rem",
        },
      ],
      28: [
        "1.75rem",
        {
          lineHeight: "140%",
          letterSpacing: "0rem",
        },
      ],
      32: [
        "2rem",
        {
          lineHeight: "130%",
          letterSpacing: "0rem",
        },
      ],
      38: [
        "2.375rem",
        {
          lineHeight: "130%",
          letterSpacing: "0rem",
        },
      ],
      40: [
        "2.5rem",
        {
          lineHeight: "140%",
          letterSpacing: "0rem",
        },
      ],
      48: [
        "3rem",
        {
          lineHeight: "140%",
          letterSpacing: "0rem",
        },
      ],
      50: [
        "3.125rem",
        {
          lineHeight: "110%",
          letterSpacing: "-0.02em",
        },
      ],
      52: [
        "3.25rem",
        {
          lineHeight: "136%",
          letterSpacing: "0rem",
        },
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
