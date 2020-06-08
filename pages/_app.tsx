import App, { AppProps, AppInitialProps, AppContext } from "next/app"

export class MyApp extends App {
  public static async getInitialProps({
    Component,
    ctx,
  }: AppContext): Promise<AppInitialProps> {
    const req: any = ctx.req
    console.log("_app req/user", `${!!req}/${!!(req && req.user)}`)
    return {
      pageProps: {
        user: req.user,
      },
    }
  }

  public render() {
    const { Component, pageProps } = this.props
    console.log("user", pageProps.user)
    return (
      <>
        <div>Test</div>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
