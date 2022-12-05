import React from "react";
import { fetchAPI } from "../lib/api";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Headof from "../components/Headof";
import WorkItem from "../components/WorkItem";

const Work = ({ global, work, ecoticles, ingticles, labticles, workticles, eco, ing, lab }) => {

    console.log(ing)
    // console.log(ingticles)
    // console.log(labticles)
    // console.log(workticles)

  return (
    <Layout global={global} ecoticles={ecoticles} ingticles={ingticles} labticles={labticles} workticles={workticles}>
        <Head>

        </Head>
        <div className="works">
            <Headof 
                pic={work.attributes.Headof.Pic}
                title={work.attributes.Headof.Title}
            />
            <div className="works__container">
                <div className="works__block">
                    <h2>{ing.attributes.Title}</h2>
                    <div className="works__items">
                        {ingticles.map((item, index) => (
                            <WorkItem Title={item.attributes.Title} Pic={item.attributes.Pic} key={`${item.id}__${index}`} Text={item.attributes.Description} />
                        ))}
                        
                    </div>
                    <Link href={ing.attributes.href}>{ing.attributes.hrefText}</Link>
                </div>
                <div className="works__block">
                    <h2>{lab.attributes.Title}</h2>
                    <div className="works__items">
                        {labticles.map((item, index) => (
                            <WorkItem Title={item.attributes.Title} Pic={item.attributes.Pic} key={`${item.id}__${index}`} Text={item.attributes.Description} />
                        ))}
                        
                    </div>
                    <Link href={lab.attributes.href}>{lab.attributes.hrefText}</Link>
                </div>
                <div className="works__block">
                    <h2>{eco.attributes.Title}</h2>
                    <div className="works__items">
                        {ecoticles.map((item, index) => (
                            <WorkItem Title={item.attributes.Title} Pic={item.attributes.Pic} key={`${item.id}__${index}`} Text={item.attributes.Description} />
                        ))}
                        
                    </div>
                    <Link href={eco.attributes.href}>{eco.attributes.hrefText}</Link>
                </div>
                <div className="works__block">
                    <h2>{work.attributes.Title}</h2>
                    <div className="works__items">
                        {workticles.map((item, index) => (
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

    const workRes = await fetchAPI("/work", {
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

    const [ecoRes, ingRes, labtRes] = await Promise.all([
        fetchAPI("/eco", { populate: "deep,5", }),
        fetchAPI("/ing", { populate: "deep,5", }),
        fetchAPI("/lab", { populate: "deep,5", }),
    ]);


    return {
        props: {
            global: globalRes.data,
            work: workRes.data,
            ecoticles: ecoticlesRes.data,
            ingticles: ingticlesRes.data,
            labticles: labticlesRes.data,
            workticles: workticlesRes.data,
            eco: ecoRes.data,
            ing: ingRes.data,
            lab: labtRes.data,
        },
        revalidate: 1,
    };
}

export default Work;