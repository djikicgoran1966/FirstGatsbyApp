import React from 'react'

import Layout from '../components/layout'


const Aboutpage = () => {
  return (
    <Layout pageTitle="About me">
       <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export default Aboutpage

export const Head=()=><title>About me</title>