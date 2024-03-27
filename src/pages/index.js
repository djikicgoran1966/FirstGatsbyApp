import * as React from "react"

import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home page" >
        
       <p>I'm making this by following the Gatsby Tutorial. I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage src="../images/photo.jpg" alt="Computer analyst" />
        {/* <img src={photo} alt="Computer analyst" /> */}
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXJsfGVufDB8fDB8fHww"
      />
      {/* <img
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXJsfGVufDB8fDB8fHww"
      /> */}
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home page </title>
