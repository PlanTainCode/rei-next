// standart imports
import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Head from "next/head";
// for data
import { fetchAPI } from "../lib/api";
// Components
import Layout from "../components/Layout";
import Slider from "react-slick";
// Fons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShurMis from '../assets/home/shur-mis.png';
import ShurC1 from '../assets/home/values/shur-1.png'
import ShurC2 from '../assets/home/values/shur-2.png'
import Seo from "../components/Seo";


export default function Home({home, global, articles, ecoticles, ingticles, labticles, workticles}) {



  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  var settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <Layout global={global} ecoticles={ecoticles} ingticles={ingticles} labticles={labticles} workticles={workticles}>
      <main>
          {/* Слайдер главный */}
          <Slider {...settings1} className='slider'>
              
              {home.attributes.Mainslider.Mainslide.map((item) => (
                  <div className='slider__list'>
                      <Image 
                            width={item.Pic.data.attributes.width}
                            height={item.Pic.data.attributes.height}
                            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + item.Pic.data.attributes.url} 
                            alt={item.Pic.data.attributes.alternativeText || ""}
                      />
                      <h2>{item.Title}</h2>
                      <p>{item.Description}</p>
                      <Link href={item.href}>Перейти</Link>
                  </div>
              ))}
          </Slider>
          {/*  */}
          {/* Миссия компании */}
          <div className="mission">
            <div className="mission__fone-1">
            </div>
            <div className="mission__fone-2">
              <Image src={ShurMis} alt="shur" />
            </div>
            <div className="mission__container">
              

              <h2>{home.attributes.misTitle}</h2>
              <span></span>
              <p>{home.attributes.misText}</p>

              <div className="mission__block">
                {home.attributes.Missiont.Mission.map((item, index) => (
                  <div className="mission__block--item" key={`${item.id}__${index}`}>
                    <Image 
                      width={item.Pic.data.attributes.width}
                      height={item.Pic.data.attributes.height}
                      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + item.Pic.data.attributes.url} 
                      alt={item.Pic.data.attributes.alternativeText || ""}
                    />
                    <h3>{item.Title}</h3>
                    <p>{item.Description}</p>
                  </div>
                ))}
              </div>

              <Link href={home.attributes.hrefMis}>Читать больше</Link>
            </div>
          </div>
          {/*  */}
          {/* Новости */}
          <div className="h-news">
            <div className="h-news__container">
              <h2>{home.attributes.newsTitle}</h2>
              <span></span>
              <div className="h-news__block">
                {articles.map((item, index) => (
                  <Link href={`/article/` + item.attributes.slug} className='h-news__block--item' key={`${item.id}__${index}`}>
                    <span>{item.attributes.Date}</span>
                    <Image 
                      width={item.attributes.Pic.data.attributes.width}
                      height={item.attributes.Pic.data.attributes.height}
                      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + item.attributes.Pic.data.attributes.url} 
                      alt={item.attributes.Pic.data.attributes.alternativeText || ""}
                    />
                    <h3>{item.attributes.Title}</h3>
                    <p>{item.attributes.Description}</p>
                  </Link>
                ))}
              </div>
              <Link href={home.attributes.newsHref}>Читать больше</Link>
            </div>
          </div>
          {/*  */}
          {/* Ценности */}
          <div className="values">
            <div className="values__container">
              <div className="values__container--shur-1">
                  <Image src={ShurC1} alt="" />
              </div>
              <div className="values__container--shur-2">
                  <Image src={ShurC2} alt="" />
              </div>
              <span></span>
              <h2>{home.attributes.valuesTitle}</h2>
              <div className="values__block-slider">
                <Slider {...settings2} className="values__block-slider--slider">
                  {home.attributes.valueSlider.valueSlide.map((item, index) => (
                    <div className="values__block-slider--slider-list" key={`${item.id}__${index}`}>
                      <h3>{item.Title}</h3>
                      <p>{item.Description}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          {/*  */}
          {/* Тех экспертизы */}
          <div className="tech">
            <div className="tech__container">
              <h2>{home.attributes.techTitle}</h2>
              <div className="tech__block">
                {home.attributes.techSlider.techSlide.map((item, index) => (
                  <div className="tech__block--item" key={`${item.id}__${index}`}>
                    <Image 
                      width={item.Pic.data.attributes.width}
                      height={item.Pic.data.attributes.height}
                      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + item.Pic.data.attributes.url} 
                      alt={item.Pic.data.attributes.alternativeText || ""}
                    />
                    <p>{item.Title}</p>
                  </div>
                ))}
                
              </div>
            </div>
          </div>
          {/*  */}
      </main>
    </Layout>
  )
}

export async function getStaticProps() {

  const articlesRes = await fetchAPI("/articles", {
    sort: "publishedAt:desc",
    populate: "deep,5",
    pagination: {
      page: 1,
      pageSize: 3,
    },
  });

  const globalRes = await fetchAPI("/global", {
    populate: "deep,5",
  })

  const homeRes = await fetchAPI("/home", {
    populate: "deep,5"
  })

  const [ecoticlesRes, ingticlesRes, labticlesRes, workticlesRes] = await Promise.all([
      fetchAPI("/ecoticles", { 
          populate: "deep,5", 
          filters: { 
              Main: true, 
          }, 
      }),
      fetchAPI("/ingticles", { 
          populate: "deep,5", 
          filters: { 
              Main: true, 
          },
      }),
      fetchAPI("/labticles", { 
          populate: "deep,5",
          filters: { 
              Main: true, 
          }, 
      }),
      fetchAPI("/workticles", { 
          populate: "deep,5", 
          filters: { 
              Main: true, 
          },
      }),
  ]);


  return {
    props: {
      articles: articlesRes.data,
      global: globalRes.data,
      home: homeRes.data,
      ecoticles: ecoticlesRes.data,
      ingticles: ingticlesRes.data,
      labticles: labticlesRes.data,
      workticles: workticlesRes.data,
    },
    revalidate: 1,
  };
}