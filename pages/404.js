import React from "react"
import Image from "next/image"
import Link from "next/link"


export default function Custom404() {
    


    return (
        <div>
            <Error />
            <h1>Упс... Страница не найдена</h1>
            <p>Что-то пошло не по плану, но мы обязательно разберемся с этим недоразумением!</p>
            <Link href="/">Вернуться на главную</Link>
        </div>
        
)}