// Step 1: Import React
import * as React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>About us...</p>
    </Layout>
  )
}

export const Head = () => (
    <>
      <Seo title="About" />
      <meta name="description" content="Your description" />
    </>
  )

// Step 3: Export your component
export default AboutPage