module.exports = {
  darkMode: "class",
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Epilogue", "sans-serif;"],
      },
      colors: {
        primary: "#1DC071",
        secondary: "#6F49FD",
        text1: "#171725",
        text2: "#4B5264",
        text3: "#808191",
        iconColor: "#A2A2A8",
        text4: "#B2B3BD",
        white1: "#ffffff",
        whiteSoft: "#FCFBFF",
        graySoft: "#FCFCFC",
        strock: "#F1F1F3",
        lite: "#FCFCFD",
        error: "#EB5757",
        darkBg: "#13131A",
        darkSecond: "#1C1C24",
        softDark: "#22222C",
        darkSoft: "#24242C",
        darkStroke: "#3A3A43",
        darkRed: "#422C32",
        redSoft: "#F9E3E3",
        "icon-color": "#A2A2A8",
      },
      boxShadow: {
        sprimary: "10px 10px 20px 0px rgba(218,213,213,0.15)",
        ssecondary: "1px 0px 1px 0px rgba(0, 0, 0, 0.25)",
        sthirty:
          "4px 4px 8px 0px rgba(226, 226, 226, 0.20), -4px 4px 8px 0px rgba(226, 226, 226, 0.20)",
        sperk:
          "4px 4px 8px 0px rgba(226, 226, 226, 0.20), -4px 4px 8px 0px rgba(226, 226, 226, 0.20)",
      },
      borderRadius: {
        default: "10px",
      },
    },
  },
  plugins: [],
};
