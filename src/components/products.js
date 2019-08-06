import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Product from "./product"
const PRODUCTS_QUERY = graphql`
  query AllProducts {
    allStripeSku {
      edges {
        node {
          id
          product {
            id
            name
          }
          id
          attributes {
            name
          }
          price
        }
      }
    }
  }
`

const Products = () => {
  return (
    <StaticQuery
      query={PRODUCTS_QUERY}
      render={({ allStripeSku }) => {
        //ToDo
        return <Product />
      }}
    />
  )
}

export default Products
