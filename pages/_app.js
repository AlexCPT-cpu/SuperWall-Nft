import "../styles/globals.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { configureChains, createClient } from "wagmi";
import { bsc, mainnet } from 'wagmi/chains'
import { publicProvider } from "wagmi/providers/public";
import { WagmiConfig } from 'wagmi'
const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
        primaryLight: "$green200",
        primaryLightHover: "$green300",
        primaryLightActive: "$green400",
        primaryLightContrast: "$green600",
        primary: "#4ADE7B",
        primaryBorder: "$green500",
        primaryBorderHover: "$green600",
        primarySolidHover: "$green700",
        primarySolidContrast: "$white",
        primaryShadow: "$green500",

        gradient:
          "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
        link: "#5E1DAD",

        // you can also create your own color
        myColor: "#ff4ecd",

        // ...  more colors
      },
      space: {},
      fonts: {},
    },
  });

  return (
  <WagmiConfig client={client}>
  <NextUIProvider theme={theme}>
    <Component {...pageProps} />
  </NextUIProvider>
  </WagmiConfig>
  );
}

export default MyApp;
