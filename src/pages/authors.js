// Step 1: Import React
import * as React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'

// Step 2: Define your component
const AuthorsPage = () => {
  return (
    <Layout pageTitle="Autores">
      <p>Autores..</p>
    </Layout>
  )
  }

  export const Head = () => (
    <>
      <Seo title="Autores" />
      <meta name="description" content="Autores de los Posts" />
    </>
  )

export default AuthorsPage