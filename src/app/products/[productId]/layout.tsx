import ProductFeatures from '@/app/products/[productId]/ProductFeatures'
import RelevantProducts from '@/app/products/[productId]/RelevantProducts'
import { ReactNode } from 'react'

interface ProductDetailsLayoutProps {
  children: ReactNode
}

export default function ProductDetailsLayout({ children }: ProductDetailsLayoutProps) {
  return (
    <>
      {children}
      <ProductFeatures />
      <RelevantProducts />
    </>
  )
}
