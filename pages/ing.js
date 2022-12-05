import React from "react";
import { fetchAPI } from "../lib/api";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Headof from "../components/Headof";
import WorkItem from "../components/WorkItem";

const Ing = ({ global, ingticles, ing, ecoticles, labticles, workticles }) => {


  return (
    <Layout global={global} ecoticles={ecoticles} ingticles={ingticles} labticles={labticles} workticles={workticles}>
        <Head>

        </Head>
        <div className="works">
            <Headof 
                pic={ing.attributes.Headof.Pic}
                title={ing.attributes.Headof.Title}
                prehref={ing.attributes.Headof.preHref}
                pretitle={ing.attributes.Headof.preTitle}
            />
            <div className="works__container">
                <div className="works__block">
                    <h2>{ing.attributes.Title}</h2>
                    <div className="works__items">
                        {ingticles.map((item, index) => (
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

    const ingticlesRes = await fetchAPI("/ingticles", { 
            populate: "deep,5", 
            filters: { 
                Main: true, 
            },
    })


    const ingRes = await fetchAPI("/ing", { 
        populate: "deep,5", 
    })

    const [ecoticlesRes, labticlesRes, workticlesRes] = await Promise.all([
        fetchAPI("/ecoticles", { 
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
            ingticles: ingticlesRes.data,
            ing: ingRes.data,
            ecoticles: ecoticlesRes.data,
            labticles: labticlesRes.data,
            workticles: workticlesRes.data,
        },
        revalidate: 1,
    };
}

export default Ing;