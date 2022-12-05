// standart imports
import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Head from "next/head";
// for data
import { fetchAPI } from "../../lib/api";

// Components
import Layout from "../../components/Layout";
import ReactMarkdown from "react-markdown";
// Fons


const Article = ({ article, global, ecoticles, ingticles, labticles, workticles }) => {


    return (
        <Layout global={global} ecoticles={ecoticles} ingticles={ingticles} labticles={labticles} workticles={workticles}>
            <Head>

            </Head>
            <div className="article">
                <div className="article__container">
                    <div className="article__container--pic">
                        <Image 
                            width={article.attributes.Pic.data.attributes.width}
                            height={article.attributes.Pic.data.attributes.height}
                            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + article.attributes.Pic.data.attributes.url} 
                            alt={article.attributes.Pic.data.attributes.alternativeText || ""}
                        />
                    </div>
                    <div className="article__container--title">
                        <h1>{article.attributes.Title}</h1>
                    </div>
                    
                    <article>
                        <ReactMarkdown children={article.attributes.Text} />
                    </article>
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticPaths() {
    const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

    return {
        paths: articlesRes.data.map((article) => ({
            params: {
                slug: article.attributes.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {

    const articlesRes = await fetchAPI("/articles", {
        filters: {
            slug: params.slug,
        },
        populate: "deep,5"
    });

    const globalRes = await fetchAPI("/global", {
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
            article: articlesRes.data[0],
            global: globalRes.data,
            ecoticles: ecoticlesRes.data,
            ingticles: ingticlesRes.data,
            labticles: labticlesRes.data,
            workticles: workticlesRes.data,
        },
        revalidate: 1,
    };
}

export default Article;