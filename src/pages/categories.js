// Step 1: Import React
import * as React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'
// Step 2: Define your component
const CategoriesPage = () => {
  return (
    <Layout pageTitle="Categorias">
      <p>Categorias...</p>
    </Layout>
  )
  }

  export const Head = () => (
    <>
      <Seo title="Categorias" />
      <meta name="description" content="Seccion de categorias" />
    </>
  )
export default CategoriesPage