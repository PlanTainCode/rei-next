import React from 'react'
import ReactMarkdown from 'react-markdown'
import Shur from '../assets/works/shur.png'
import Image from 'next/image'

const WorkItem = ({Pic, Title, Text}) => {

    const [tooglePopup, setTooglePopup] = React.useState(false)

    React.useEffect(() => {
        if (tooglePopup) {
            document.querySelector("body").classList.add("body--overlay")
        } else {
            document.querySelector("body").classList.remove("body--overlay")
        }
    })
    return (
    <>
        <div className="works__items--item" onClick={() => setTooglePopup(true)}>
            <div className="works__items--shur">
                <Image src={Shur} alt="" />
            </div>
            <Image 
                width={Pic.data.attributes.width}
                height={Pic.data.attributes.height}
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + Pic.data.attributes.url} 
                alt={Pic.data.attributes.alternativeText || ""}
            />
            <h3>{Title}</h3>
        </div>
        <div className={tooglePopup ? "work-popup active" : "work-popup"}>
            <div className={tooglePopup ? "work-popup__area active" : "work-popup__area"}></div>
            <div className="work-popup__body">
                <div className="work-popup__body--close" onClick={() => setTooglePopup(false)}>
                    <span></span>
                    <span></span>
                </div>
                <div className="work-popup__body--container">
                    <div className="work-popup__body--shur-1">
                        <Image src={Shur} alt="" />
                    </div>
                    <div className="work-popup__body--shur-2">
                        <Image src={Shur} alt="" />
                    </div>
                    <h2>{Title}</h2>
                    <ReactMarkdown children={Text} />
                    <button>Оставить заявку</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default WorkItem