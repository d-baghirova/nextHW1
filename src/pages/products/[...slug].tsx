import React from 'react'

interface Props {
  slug: string[]
}

const ProductsScreen = ({slug}: Props) => {
  console.log('slug', slug)

  if (slug.length >2){
    return (
      <div>
        <h1>Viewing products screen with params more than 2</h1>
      </div>
    )
  }

  if (slug.length >1){
    return (
      <div>
        <h1>Viewing products screen with params more than one</h1>
      </div>
    )
  }

  return (
    <div>
        <h1>Products Screen</h1>
    </div>
  )
}

export default ProductsScreen

export function getServerSideProps(context: any) {
  return {
    props: {
      slug: context.params.slug
    }
  }
}