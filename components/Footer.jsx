import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

function Footer({ logo }) {
  return (
    <footer className="footer">
      <span></span>
      <div className="footer__container">
        <div className="footer__logo">
          <a href='/'> 
            <Image 
                width={logo.data.attributes.width}
                height={logo.data.attributes.height}
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + logo.data.attributes.url} 
                alt={logo.data.attributes.alternativeText || ""}
            />
          </a>
        </div>
        <div className="footer__links">
          <ul>
            <li><Link href='/'>О нас</Link></li>
            <li><Link href='/work'>Работы</Link></li>
            <li><Link href='/'>Контакты</Link></li>
            <li><Link href='/'>Документация</Link></li>
          </ul>
          <ul>
            <li><Link href='/work'>Услуги</Link></li>
            <li><Link href='/ing'>Инженерные изыскания</Link></li>
            <li><Link href='/lab'>Лабораторный центр</Link></li>
            <li><Link href='/eco'>Экологическое проектирование</Link></li>
            
          </ul>
        </div>
        <button>Оставить заявку</button>
      </div>
    </footer>
  )
}

export default Footer