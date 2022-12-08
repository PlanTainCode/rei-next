// standart imports
import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Head from "next/head";
import axios from "axios";
// for data
import { fetchAPI } from "../lib/api";
// Components
import Layout from "../components/Layout";
import Headof from "../components/Headof";
// Fons



export default function Contacts({contacts, global, ecoticles, ingticles, labticles, workticles}) {

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
                    title={contacts.attributes.Headof.Title}
                    pic={contacts.attributes.Headof.Pic}
                />
                <div className="contacts__f-b">
                    <h2>{contacts.attributes.title_1}</h2>
                    <div className="contacts__f-b--grid">
                        <div className="contacts__f-b--item">
                            <h3>{contacts.attributes.Item_1_1.Title}</h3>
                            <p>{contacts.attributes.Item_1_1.Description}</p>
                        </div>
                        <div className="contacts__f-b--item">
                            <h3>{contacts.attributes.Item_1_2.Title}</h3>
                            <p>{contacts.attributes.Item_1_2.Description}</p>
                        </div>
                    </div>
                </div>
                <div className="contacts__s-b">
                    <div className="contacts__s-b--block">
                        <h2>{contacts.attributes.title_2}</h2>
                        <div className="contacts__s-b--item">
                            <h3>{contacts.attributes.item_2_1.Title}</h3>
                            {contacts.attributes.item_2_1.ItemHref.map((item, index) => item.href === null ? (
                                <p>{item.title}</p>
                            ) : (
                                <a href={item.href}>item.Title</a>
                            ))}
                        </div>
                        <div className="contacts__s-b--item">
                            <h3>{contacts.attributes.item_2_2.Title}</h3>
                            {contacts.attributes.item_2_2.ItemHref.map((item, index) => item.href === null ? (
                                <p>{item.title}</p>
                            ) : (
                                <a href={item.href}>item.Title</a>
                            ))}
                        </div>
                    </div>
                    <div className="contacts__s-b--block">
                        <h2>{contacts.attributes.title_3}</h2>
                        <div className="contacts__s-b--item">
                            <h3>{contacts.attributes.item_3_1.Title}</h3>
                            {contacts.attributes.item_3_1.ItemHref.map((item, index) => item.href === null ? (
                                <p>{item.title}</p>
                            ) : (
                                <a href={item.href}>item.Title</a>
                            ))}
                        </div>
                        <div className="contacts__s-b--item">
                            <h3>{contacts.attributes.item_3_2.Title}</h3>
                            {contacts.attributes.item_3_2.ItemHref.map((item, index) => item.href === null ? (
                                <p>{item.title}</p>
                            ) : (
                                <a href={item.href}>item.Title</a>
                            ))}
                        </div>
                        <div className="contacts__s-b--item">
                            <h2>Технические вопросы:</h2>
                            <h3>{contacts.attributes.item_3_3.Title}</h3>
                            {contacts.attributes.item_3_3.ItemHref.map((item, index) => item.href === null ? (
                                <p>{item.title}</p>
                            ) : (
                                <a href={item.href}>item.Title</a>
                            ))}
                        </div>
                        <div className="contacts__s-b--item">
                            <h3>{contacts.attributes.item_3_4.Title}</h3>
                            {contacts.attributes.item_3_4.ItemHref.map((item, index) => item.href === null ? (
                                <p>{item.title}</p>
                            ) : (
                                <a href={item.href}>item.Title</a>
                            ))}
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
                <div className="contacts__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2677.589397142531!2d37.48742555556458!3d55.64420170453517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54d65f9463b67%3A0x42eeafc4a94b4ecf!2z0YPQuy4g0J7RgdGC0YDQvtCy0LjRgtGP0L3QvtCy0LAsIDYsINCc0L7RgdC60LLQsCwgMTE3NTEz!5e0!3m2!1sru!2sru!4v1670439694533!5m2!1sru!2sru" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {


  const contactsRes = await fetchAPI("/contacts", {
      populate: "deep,5",
  })

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
      contacts: contactsRes.data,
      global: globalRes.data,
      ecoticles: ecoticlesRes.data,
      ingticles: ingticlesRes.data,
      labticles: labticlesRes.data,
      workticles: workticlesRes.data,
    },
    revalidate: 1,
  };
}