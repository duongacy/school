import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";

function parseCookies(cookieHeader?: string | null) {
  const cookies: Record<string, string> = {};
  if (!cookieHeader) return cookies;
  for (const pair of cookieHeader.split(";")) {
    const [k, ...v] = pair.split("=");
    if (!k) continue;
    cookies[k.trim()] = decodeURIComponent((v || []).join("=").trim());
  }
  return cookies;
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & { colorMode?: string }> {
    const initialProps = await Document.getInitialProps(ctx as DocumentContext);
    // Read cookie from request headers (Pages Router)
    const cookieHeader = ctx?.req?.headers?.cookie ?? null;
    const cookies = parseCookies(cookieHeader);
    const colorMode = cookies["chakra-ui-color-mode"]; // may be undefined
    return { ...initialProps, colorMode };
  }

  render() {
    // colorMode added to props in getInitialProps
    const props = this.props as DocumentInitialProps & { colorMode?: string };
    const colorMode = props.colorMode as string | undefined;
    return (
      <Html lang="en" {...(colorMode ? { "data-theme": colorMode, style: { colorScheme: colorMode } } : {})}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
