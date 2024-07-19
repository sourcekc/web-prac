import React from 'react'
import {ReactComponent as Logo} from '../assets/svg/hero.svg';
import Title from './components/Title';
import Content from './components/Content';
import OurValues from './components/OurValues';
import OurTeams from './components/OurTeams';

const ContactUs = () => {
  return (
    <div>
    {/* Hero section */}
    <Logo className="px-[16] w-full h-full"> </Logo>


    {/* Our History */}
    <Title title="Our History"></Title>
    <Content content="Vista Construction was founded in 1999 by Tony and Rachel Johnson. The company began as a small, family-owned business with a focus on residential construction. Over the years, Vista has expanded its services to include commercial and industrial projects, and has become one of the leading construction companies in the region."/>
     
    {/* Our Mossion */}
    <Title title="Our Mission"/>
    <Content content="To provide our clients with the highest quality construction services, delivered on time and within budget, while maintaining the highest standards of safety and sustainability."/>
    

     {/* Our Value*/}
     <Title title="Our Values"/>
     <Content content=<OurValues/>/>
    

     {/* Our Teams */}
     <Title title="Our Teams"/>
     <Content content=<OurTeams/>/>
    

     </div>
  
  )
}

export default ContactUs
