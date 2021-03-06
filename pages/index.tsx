import Head from 'next/head'
import Footer from '../components/footer/Footer'
import Main from '../components/main/Main'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Head>
        <title>Nguyễn Đổ Quốc Dự</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main/>
      <Footer/>
    </div>
  )
}
