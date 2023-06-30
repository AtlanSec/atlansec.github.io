// Step 1: Import React
import * as React from 'react'
import Seo from '../components/seo'
import HeroSection from '../components/homepage/HeroSection'

// Step 2: Define your component
const IndexPage = () => <>
    <HeroSection></HeroSection>
</>

export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage