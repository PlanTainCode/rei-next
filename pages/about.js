// standart imports
import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Head from "next/head";
// for data
import { fetchAPI } from "../lib/api";
// Components
import Layout from "../components/Layout";
import Headof from "../components/Headof";
import ReactMarkdown from "react-markdown";
// Fons
import Shur from '../assets/about/Shur.png'


export default function About({about, global, ecoticles, ingticles, labticles, workticles}) {

    console.log(about)

    const [name, setName] = React.useState("") 
    const [email, setEmail] = React.useState("") 
    const [tel, setTel] = React.useState("") 
    const [text, setText] = React.useState("") 
    

    const url = "https://for-strapi-test.online/api/form-alts";
    
    const sendData = () => {
        axios.post(url, {
            data: {
                name: name,
                email: email,
                tel: tel,
                text: text,
            },
        }).catch(function(error) {
            if (error.response) {

            }
        })

        document.location.reload();
    }

    return (
    <Layout global={global} ecoticles={ecoticles} ingticles={ingticles} labticles={labticles} workticles={workticles}>
        <div className="about">
            <Headof 
                title={about.attributes.Headof.Title}
                pic={about.attributes.Headof.Pic}
            />
            {/*  */}
            <div className="about__f-b">
                <div className="about__f-b--shur1">
                    <Image src={Shur} alt="" />
                </div>
                <div className="about__f-b--shur2">
                    <Image src={Shur} alt="" />
                </div>
                <h2>{about.attributes.aboutTitle}</h2>
                <span></span>
                <article>
                    <ReactMarkdown children={about.attributes.Text1} />
                </article>
            </div>
            {/*  */}
            {/*  */}
            <div className="about__s-b">
                <div className="about__s-b--container">
                    {about.attributes.AboutFbs.map((item, index) => (
                        <div className="about__s-b--item" key={`${item.id}__${index}`}>
                            <h3>{item.Title}</h3>
                            <p>{item.Description}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/*  */}
            <div className="about__t-b">
                <div className="about__t-b--l">
                    <ReactMarkdown children={about.attributes.Text2} />
                </div>
                <div className="about__t-b--r">
                    <div className="about__t-b--shurt1">
                        <Image src={Shur} alt="" />
                    </div>
                    <div className="about__t-b--shurt2">
                        <Image src={Shur} alt="" />
                    </div>
                    <div className="about__t-b--pic">
                        {/* <img src={Pic2} alt="" /> */}
                        <Image 
                            width={about.attributes.Pic.data.attributes.width}
                            height={about.attributes.Pic.data.attributes.height}
                            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + about.attributes.Pic.data.attributes.url} 
                            alt={about.attributes.Pic.data.attributes.alternativeText || ""}
                        />
                    </div>
                </div>
            </div>

            <div className="form-alt">
                <h2>Связаться с нами</h2>
                <form>
                    <div className="form-alt__inputs">
                        <input type="text" placeholder="Имя" name="name" onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder="E-mail*" name="email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="tel" placeholder="Номер телефона*" name="tel" onChange={(e) => setTel(e.target.value)} />
                    </div>
                    <textarea name="text" id="" placeholder="Сообщение" onChange={(e) => setText(e.target.value)}></textarea>
                    <button onClick={(e) => {e.preventDefault(); sendData();}}>Отправить</button>
                </form>
            </div>
        </div>
    </Layout>
    )
}

export async function getStaticProps() {


  const globalRes = await fetchAPI("/global", {
    populate: "deep,5",
  })

  const aboutRes = await fetchAPI("/about", {
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
      about: aboutRes.data,
      global: globalRes.data,
      ecoticles: ecoticlesRes.data,
      ingticles: ingticlesRes.data,
      labticles: labticlesRes.data,
      workticles: workticlesRes.data,
    },
    revalidate: 1,
  };
}