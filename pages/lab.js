import React from "react";
import { fetchAPI } from "../lib/api";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Headof from "../components/Headof";
import WorkItem from "../components/WorkItem";

const Lab = ({ global, labticles, lab, ecoticles, ingticles, workticles }) => {


  return (
    <Layout global={global} ecoticles={ecoticles} ingticles={ingticles} labticles={labticles} workticles={workticles}>
        <Head>

        </Head>
        <div className="works">
            <Headof 
                pic={lab.attributes.Headof.Pic}
                title={lab.attributes.Headof.Title}
                prehref={lab.attributes.Headof.preHref}
                pretitle={lab.attributes.Headof.preTitle}
            />
            <div className="works__container">
                <div className="works__block">
                    <h2>{lab.attributes.Title}</h2>
                    <div className="works__items">
                        {labticles.map((item, index) => (
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

    const labticlesRes = await fetchAPI("/labticles", { 
            populate: "deep,5", 
            filters: { 
                Main: true, 
            },
    })


    const labRes = await fetchAPI("/lab", { 
        populate: "deep,5", 
    })

    const [ecoticlesRes, ingticlesRes, workticlesRes] = await Promise.all([
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
            labticles: labticlesRes.data,
            lab: labRes.data,
            ecoticles: ecoticlesRes.data,
            ingticles: ingticlesRes.data,
            workticles: workticlesRes.data,
        },
        revalidate: 1,
    };
}

export default Lab;