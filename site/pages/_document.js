import Document, { Head, Main, NextScript } from 'next/document'
import "../styles.scss"

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Raketa Style Starter</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}