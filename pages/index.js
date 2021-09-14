import Head from 'next/head'
import Link from 'next/link'

export default function Home({ data }) {
  return (
    <div className="container">
    <Link href="/menu">
      <a>menu</a>
    </Link>
    </div>
  )
}
