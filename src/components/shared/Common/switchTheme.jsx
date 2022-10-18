const switchableColors = {
  "--color-day-black": { light: "#000000", dark: "#BCC4CC" },
  "--color-day-white": { light: "#FFFFFF", dark: "#2B2D33" },
  "--color-day-light-blue": { light: "#BAD8F5", dark: "#454E52" },
  "--color-day-white-blue": { light: "#EBF0F5", dark: "#171B1F" },
};

export const colorThemes = {
  dark: "dark",
  light: "light",
};

export const isDarkTheme = (theme) => theme === colorThemes.dark;

const switchTheme = (theme) => {
  for (const switchableColor in switchableColors) {
    if ({}.hasOwnProperty.call(switchableColors, switchableColor)) {
      document.body.style.setProperty(
        switchableColor,
        switchableColors[switchableColor][
          theme === colorThemes.dark ? "dark" : "light"
        ]
      );
    }
  }
};

export default switchTheme;
