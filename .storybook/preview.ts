import "@/index.scss";
import { withThemeByClassName } from "@storybook/addon-themes";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    // backgrounds: {
    //   default: { current: "dark" },
    //   values: [
    //     {
    //       name: "light",
    //       value: "#ffffff",
    //     },
    //     {
    //       name: "dark",
    //       value: "#242424",
    //     },
    //   ],
    // },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
  }),
];

export default preview;
