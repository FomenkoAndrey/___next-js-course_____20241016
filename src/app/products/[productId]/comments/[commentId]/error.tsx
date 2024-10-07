'use client'

export default function Error({ error }: { error: Error }) {
  return <h1 className="header">{error.message}</h1>
}
