import Link from 'next/link'

export const metadata = {
  title: 'Posts',
  description: 'Posts page'
}

export default function Posts() {
  return (
    <div>
      <Link href="/" className="menu-link">
        Home
      </Link>
      <h1>Posts Page</h1>
    </div>
  )
}
