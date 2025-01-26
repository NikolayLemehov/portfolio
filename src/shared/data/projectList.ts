import eventboosterScreen from "@assets/eventbooster-screen.jpg";
import slimmomScreen from "@assets/slimmom-screen.jpg";
import walletScreen from "@assets/wallet-screen.jpg";
import weatherScreen from "@assets/weather.jpg";

type Project = {
  name: string;
  stack: string;
  link?: {
    site: string;
    github: string;
  };
  links?: Array<{
    name: string;
    url: string;
  }>;
  ps?: string;
  screen?: string;
  type: "box" | "detail";
};

export const projectList: Project[] = [
  {
    name: "Weather",
    stack: "React TypeScript",
    links: [
      {
        name: "Site",
        url: "https://nikolaylemehov.github.io/weather/",
      },
      {
        name: "GitHub",
        url: "https://github.com/NikolayLemehov/weather",
      },
    ],
    screen: weatherScreen,
    type: "box",
  },
  {
    name: "Wallet",
    stack: "React, Node, Express, MongoDB, Swagger, i18next",
    links: [
      {
        name: "Site",
        url: "https://nikolaylemehov.github.io/wallet_front",
      },
      {
        name: "Front-end GitHub",
        url: "https://github.com/NikolayLemehov/wallet_front",
      },
      {
        name: "Back-end GitHub",
        url: "https://github.com/NikolayLemehov/wallet_end",
      },
      {
        name: "Api Docs",
        url: "https://goit-wallet-back.onrender.com/api-docs/",
      },
    ],
    screen: walletScreen,
    ps: "The first call to the API is long (about a minute).",
    type: "box",
  },
  {
    name: "Slimmom",
    stack: "React, Redux Toolkit, Chakra-UI, Emotion, Formik, Axios",
    links: [
      {
        name: "Site",
        url: "https://nikolaylemehov.github.io/slimmom/",
      },
      {
        name: "GitHub",
        url: "https://github.com/NikolayLemehov/slimmom",
      },
    ],
    screen: slimmomScreen,
    type: "box",
  },
  {
    name: "Event booster",
    stack: "JS, AJAX, Postman, HTML, SASS, Parcel",
    links: [
      {
        name: "Site",
        url: "https://nikolaylemehov.github.io/team-js/",
      },
      {
        name: "GitHub",
        url: "https://github.com/NikolayLemehov/team-js",
      },
    ],
    screen: eventboosterScreen,
    type: "box",
  },
];
