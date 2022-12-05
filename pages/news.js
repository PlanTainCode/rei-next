import React from "react";
import { fetchAPI } from "../lib/api";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Headof from "../components/Headof";


const News = ({ articles, global, news, ecoticles, ingticles, labticles, workticles }) => {

    // console.log(news)

  return (
    <Layout global={global} ecoticles={ecoticles} ingticles={ingticles} labticles={labticles} workticles={workticles}>
        <Head>

        </Head>
        <main>
            
            <Headof 
                pic={news.attributes.Headof.Pic}
                title={news.attributes.Headof.Title}
            />
            <div className="h-news">
                <div className="h-news__container">
                    <h2>{news.attributes.Title}</h2>
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
                </div>
            </div>
        </main>
    </Layout>
  );
};

export async function getStaticProps() {

    const articlesRes = await fetchAPI("/articles", {
        populate: "deep,5",
        sort: "publishedAt:desc",
    })

    const globalRes = await fetchAPI("/global", {
        populate: "deep,5",
    })

    const newsRes = await fetchAPI("/news", {
        populate: "deep,5",
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
            news: newsRes.data,
            ecoticles: ecoticlesRes.data,
            ingticles: ingticlesRes.data,
            labticles: labticlesRes.data,
            workticles: workticlesRes.data,
        },
        revalidate: 1,
    };
}

export default News;