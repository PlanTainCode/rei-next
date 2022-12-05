import React from "react";
import { fetchAPI } from "../lib/api";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Headof from "../components/Headof";
import WorkItem from "../components/WorkItem";

const Eco = ({ global, ecoticles, eco, ingticles, labticles, workticles }) => {


  return (
    <Layout global={global} ecoticles={ecoticles} ingticles={ingticles} labticles={labticles} workticles={workticles}>
        <Head>

        </Head>
        <div className="works">
            <Headof 
                pic={eco.attributes.Headof.Pic}
                title={eco.attributes.Headof.Title}
                prehref={eco.attributes.Headof.preHref}
                pretitle={eco.attributes.Headof.preTitle}
            />
            <div className="works__container">
                <div className="works__block">
                    <h2>{eco.attributes.Title}</h2>
                    <div className="works__items">
                        {ecoticles.map((item, index) => (
                            <WorkItem Title={item.attributes.Title} Pic={item.attributes.Pic} key={`${item.id}__${index}`} Text={item.attributes.Description} />
                        ))}
                        
                    </div>
                </div>
                
            </div>
        </div>
    </Layout>
  );
};

export async function getStaticProps() {

    const globalRes = await fetchAPI("/global", {
        populate: "deep,5",
    })

    const ecoticlesRes = await fetchAPI("/ecoticles", { 
            populate: "deep,5", 
            filters: { 
                Main: true, 
            },
    })


    const ecoRes = await fetchAPI("/eco", { 
        populate: "deep,5", 
    })

    const [ingticlesRes, labticlesRes, workticlesRes] = await Promise.all([
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
            global: globalRes.data,
            ecoticles: ecoticlesRes.data,
            eco: ecoRes.data,
            ingticles: ingticlesRes.data,
            labticles: labticlesRes.data,
            workticles: workticlesRes.data,
        },
        revalidate: 1,
    };
}

export default Eco;