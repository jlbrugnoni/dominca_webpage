import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" type="image/png" href="/images/dominca-favicon.png?v=20260625" />
        <link rel="apple-touch-icon" href="/images/dominca-favicon.png?v=20260625" />
        <link rel="shortcut icon" href="/images/dominca-favicon.png?v=20260625" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
