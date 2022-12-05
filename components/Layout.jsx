import React from 'react'

import Footer from './Footer'
import Header from './Header'

const Layout = ({children, global, ecoticles, ingticles, labticles, workticles}) => {
  return (
    <div className="wrapper">
        <Header logo={global.attributes.logo} eco={ecoticles} ing={ingticles} lab={labticles} work={workticles} />
        <div className="page">
            {children}
        </div>
        <Footer logo={global.attributes.logo} />
    </div>
  )
}

export default Layout