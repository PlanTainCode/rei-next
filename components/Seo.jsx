import Head from 'next/head'
import React from 'react'

function Seo({siteName, metaTitle, href, metaDescription, pic}) {
  return (
    <Head>
        <title>{siteName}</title>
        <meta property="og:title" content={metaTitle} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:url" content={href} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + pic} />
    </Head>
  )
}

export default Seo