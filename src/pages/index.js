// Step 1: Import React
import * as React from 'react'
import Seo from '../components/seo'
import HeroSection from '../components/homepage/HeroSection'
import FeaturedBlogs from '../components/homepage/FeaturedBlogs'

// Step 2: Define your component
const IndexPage = () => <>
    <Seo 
    title="Home"
    description="Atlansec Blog de Ciberseguridad">
    </Seo>
    <HeroSection></HeroSection>
    <div className='container'>
    <FeaturedBlogs></FeaturedBlogs>
    </div>
</>

// Step 3: Export your component
export default IndexPage