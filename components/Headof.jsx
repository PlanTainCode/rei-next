import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Headof = ({pic, title, pretitle, prehref}) => {
  return (
    <div className="headof">
        <div className="headof__pic">
            <Image 
                width={pic.data.attributes.width}
                height={pic.data.attributes.height}
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + pic.data.attributes.url} 
                alt={pic.data.attributes.alternativeText || ""}
            />
        </div>
        <div className="headof__container">
            <h1>{title}</h1>
            <div className="headof__container--breadcrumbs">
                <li>
                    <Link href="/">Главная</Link>
                </li>
                {pretitle ? (
                    <li>
                        <span></span>
                        <Link href={prehref}>{pretitle}</Link>
                    </li>
                ) : ''}
                {title ? (
                    <li>
                        <span></span>
                        <p>{title}</p>
                    </li>
                ) : ''}
            </div>
        </div>
    </div>
  )
}

export default Headof;