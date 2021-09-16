import Head from 'next/head'
import Link from 'next/link'
import Footer from './components/footer'
import Header from './components/header'

export default function Home({ data }) {
  return (
    <div className="container">
    <Header />
    <Link href="/menu">
      <a>menu</a>
    </Link>
    <Footer/>
    </div>
  )
}
