import { notFound } from 'next/navigation'

interface CommentDetailsProps {
  params: {
    productId: string
    commentId: string
  }
}

function randomNum(max: number) {
  return Math.floor(Math.random() * max)
}

export default function CommentDetails({ params }: CommentDetailsProps) {
  const random = randomNum(2)
  const { productId, commentId } = params

  if (random) {
    throw new Error('Random error message')
  }

  if (+commentId > 100) {
    notFound()
  }

  return (
    <h1>
      Comment {commentId} for product {productId}
    </h1>
  )
}
