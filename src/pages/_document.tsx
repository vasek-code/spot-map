import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div id="menu" className="z-20 absolute w-full" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
