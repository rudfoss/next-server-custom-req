import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document"

export default class Doc extends Document {
  public static async getInitialProps(ctx: DocumentContext) {
    const req: any = ctx.req
    console.log("_document req/user", `${!!req}/${!!(req && req.user)}`)
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      user: req?.user || "no user",
    }
  }

  public render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
