import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Header = ({ logo, eco, ing, lab, work }) => {

    // console.log(ing)

    // useStatы
    const [scroll, setScroll] = React.useState(0);
    const [toggle, setToggle] = React.useState(false);


    // Отслеживание по скроллу
    const handleScroll = () => {
            setScroll(window.scrollY);
        
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Тугл бургера

    React.useEffect(() => {
        if (toggle) {
            document.querySelector("body").classList.add("body--overlay")
        } else {
            document.querySelector("body").classList.remove("body--overlay")
        }
    })

    const classHeader = () => {
        if (scroll > 250 && !toggle) {
            return 'header scrolled';
        } else {
            return 'header';
        }
    }

    // 
    return (
        // <header className={scroll > 250 ? 'header scrolled' : 'header'}>
        <header className={classHeader()}>
            <div className="header__container">
                <div className={toggle ? 'header__logo hidden' : 'header__logo'}>
                    <a href="/">
                        <Image 
                            width={logo.data.attributes.width}
                            height={logo.data.attributes.height}
                            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}` + logo.data.attributes.url} 
                            alt={logo.data.attributes.alternativeText || ""}
                        />
                    </a>
                </div>
                <div className="header__spisk">
                    <div className="header__spisk--ul">
                        <li><Link href="/">О нас</Link></li>
                        <li>
                            <Link href="/work" className='trigger'>Услуги и работы</Link>
                            <div className="submenu">
                                <div className="submenu__container">
                                    <div className="submenu__container--col">
                                        <p>Инженерные изыскания:</p>
                                        <ul>
                                            {ing.map((item) => (
                                                <li>
                                                    <Link href="/ing">{item.attributes.Title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="submenu__container--col">
                                        <p>Лабораторный центр:</p>
                                        <ul>
                                            {lab.map((item) => (
                                                <li>
                                                    <Link href="/lab">{item.attributes.Title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="submenu__container--col">
                                        <p>Экологическое проектирование: </p>
                                        <ul>
                                            {eco.map((item) => (
                                                <li>
                                                    <Link href="/eco">{item.attributes.Title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="submenu__container--col">
                                        <p>Услуги:</p>
                                        <ul>
                                            {work.map((item) => (
                                                <li>
                                                    <Link href="/work">{item.attributes.Title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><Link href="/">Контакты</Link></li>
                    </div>
                    <button>Оставить заявку</button>
                </div>
                <div className={toggle ? 'header__icon active' : 'header__icon'} onClick={() => setToggle(!toggle)}>
                    <span className='header__icon--f'></span>
                    <span className='header__icon--s'></span>
                    <span className='header__icon--t'></span>
                </div>
            </div>
            <div className={toggle ? "menu-mob active" : "menu-mob"}>
                <div className="menu-mob__fone1">
                    <svg width="114" height="110" viewBox="0 0 114 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.3">
                        <mask id="mask0_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="11" height="10">
                        <path d="M5.00106 9.97171C7.76307 9.97171 10.0021 7.73942 10.0021 4.98582C10.0021 2.23222 7.76307 0 5.00106 0C2.23905 0 0 2.23222 0 4.98582C0 7.73942 2.23905 9.97171 5.00106 9.97171Z" fill="url(#paint0_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask0_421_3280)">
                        <path d="M5.00106 9.97171C7.76307 9.97171 10.0021 7.73942 10.0021 4.98582C10.0021 2.23222 7.76307 0 5.00106 0C2.23905 0 0 2.23222 0 4.98582C0 7.73942 2.23905 9.97171 5.00106 9.97171Z" fill="url(#paint1_linear_421_3280)"/>
                        </g>
                        <mask id="mask1_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="28" y="0" width="11" height="10">
                        <path d="M33.9654 9.97171C36.7274 9.97171 38.9665 7.73942 38.9665 4.98582C38.9665 2.23222 36.7274 0 33.9654 0C31.2034 0 28.9644 2.23222 28.9644 4.98582C28.9644 7.73942 31.2034 9.97171 33.9654 9.97171Z" fill="url(#paint2_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask1_421_3280)">
                        <path d="M33.9654 9.97171C36.7274 9.97171 38.9665 7.73942 38.9665 4.98582C38.9665 2.23222 36.7274 0 33.9654 0C31.2034 0 28.9644 2.23222 28.9644 4.98582C28.9644 7.73942 31.2034 9.97171 33.9654 9.97171Z" fill="url(#paint3_linear_421_3280)"/>
                        </g>
                        <mask id="mask2_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="57" y="0" width="11" height="10">
                        <path d="M62.9303 9.97171C65.6923 9.97171 67.9313 7.73942 67.9313 4.98582C67.9313 2.23222 65.6923 0 62.9303 0C60.1683 0 57.9292 2.23222 57.9292 4.98582C57.9292 7.73942 60.1683 9.97171 62.9303 9.97171Z" fill="url(#paint4_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask2_421_3280)">
                        <path d="M62.9303 9.97171C65.6923 9.97171 67.9313 7.73942 67.9313 4.98582C67.9313 2.23222 65.6923 0 62.9303 0C60.1683 0 57.9292 2.23222 57.9292 4.98582C57.9292 7.73942 60.1683 9.97171 62.9303 9.97171Z" fill="url(#paint5_linear_421_3280)"/>
                        </g>
                        <mask id="mask3_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="86" y="0" width="11" height="10">
                        <path d="M91.8939 9.97171C94.6559 9.97171 96.895 7.73942 96.895 4.98582C96.895 2.23222 94.6559 0 91.8939 0C89.1319 0 86.8928 2.23222 86.8928 4.98582C86.8928 7.73942 89.1319 9.97171 91.8939 9.97171Z" fill="url(#paint6_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask3_421_3280)">
                        <path d="M91.8939 9.97171C94.6559 9.97171 96.895 7.73942 96.895 4.98582C96.895 2.23222 94.6559 0 91.8939 0C89.1319 0 86.8928 2.23222 86.8928 4.98582C86.8928 7.73942 89.1319 9.97171 91.8939 9.97171Z" fill="url(#paint7_linear_421_3280)"/>
                        </g>
                        <mask id="mask4_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="25" width="11" height="11">
                        <path d="M5.00106 35.0048C7.76307 35.0048 10.0021 32.7726 10.0021 30.019C10.0021 27.2654 7.76307 25.0332 5.00106 25.0332C2.23905 25.0332 0 27.2654 0 30.019C0 32.7726 2.23905 35.0048 5.00106 35.0048Z" fill="url(#paint8_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask4_421_3280)">
                        <path d="M5.00106 35.0048C7.76307 35.0048 10.0021 32.7726 10.0021 30.019C10.0021 27.2654 7.76307 25.0332 5.00106 25.0332C2.23905 25.0332 0 27.2654 0 30.019C0 32.7726 2.23905 35.0048 5.00106 35.0048Z" fill="url(#paint9_linear_421_3280)"/>
                        </g>
                        <mask id="mask5_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="28" y="25" width="11" height="11">
                        <path d="M33.9654 35.0048C36.7274 35.0048 38.9665 32.7726 38.9665 30.019C38.9665 27.2654 36.7274 25.0332 33.9654 25.0332C31.2034 25.0332 28.9644 27.2654 28.9644 30.019C28.9644 32.7726 31.2034 35.0048 33.9654 35.0048Z" fill="url(#paint10_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask5_421_3280)">
                        <path d="M33.9654 35.0048C36.7274 35.0048 38.9665 32.7726 38.9665 30.019C38.9665 27.2654 36.7274 25.0332 33.9654 25.0332C31.2034 25.0332 28.9644 27.2654 28.9644 30.019C28.9644 32.7726 31.2034 35.0048 33.9654 35.0048Z" fill="url(#paint11_linear_421_3280)"/>
                        </g>
                        <mask id="mask6_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="57" y="25" width="11" height="11">
                        <path d="M62.9303 35.0048C65.6923 35.0048 67.9313 32.7726 67.9313 30.019C67.9313 27.2654 65.6923 25.0332 62.9303 25.0332C60.1683 25.0332 57.9292 27.2654 57.9292 30.019C57.9292 32.7726 60.1683 35.0048 62.9303 35.0048Z" fill="url(#paint12_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask6_421_3280)">
                        <path d="M62.9303 35.0048C65.6923 35.0048 67.9313 32.7726 67.9313 30.019C67.9313 27.2654 65.6923 25.0332 62.9303 25.0332C60.1683 25.0332 57.9292 27.2654 57.9292 30.019C57.9292 32.7726 60.1683 35.0048 62.9303 35.0048Z" fill="url(#paint13_linear_421_3280)"/>
                        </g>
                        <mask id="mask7_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="86" y="25" width="11" height="11">
                        <path d="M91.8939 35.0048C94.6559 35.0048 96.895 32.7726 96.895 30.019C96.895 27.2654 94.6559 25.0332 91.8939 25.0332C89.1319 25.0332 86.8928 27.2654 86.8928 30.019C86.8928 32.7726 89.1319 35.0048 91.8939 35.0048Z" fill="url(#paint14_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask7_421_3280)">
                        <path d="M91.8939 35.0048C94.6559 35.0048 96.895 32.7726 96.895 30.019C96.895 27.2654 94.6559 25.0332 91.8939 25.0332C89.1319 25.0332 86.8928 27.2654 86.8928 30.019C86.8928 32.7726 89.1319 35.0048 91.8939 35.0048Z" fill="url(#paint15_linear_421_3280)"/>
                        </g>
                        <mask id="mask8_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="50" width="11" height="10">
                        <path d="M5.00106 59.986C7.76307 59.986 10.0021 57.7538 10.0021 55.0001C10.0021 52.2465 7.76307 50.0143 5.00106 50.0143C2.23905 50.0143 0 52.2465 0 55.0001C0 57.7538 2.23905 59.986 5.00106 59.986Z" fill="url(#paint16_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask8_421_3280)">
                        <path d="M5.00106 59.986C7.76307 59.986 10.0021 57.7538 10.0021 55.0001C10.0021 52.2465 7.76307 50.0143 5.00106 50.0143C2.23905 50.0143 0 52.2465 0 55.0001C0 57.7538 2.23905 59.986 5.00106 59.986Z" fill="url(#paint17_linear_421_3280)"/>
                        </g>
                        <mask id="mask9_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="28" y="50" width="11" height="10">
                        <path d="M33.9654 59.986C36.7274 59.986 38.9665 57.7538 38.9665 55.0001C38.9665 52.2465 36.7274 50.0143 33.9654 50.0143C31.2034 50.0143 28.9644 52.2465 28.9644 55.0001C28.9644 57.7538 31.2034 59.986 33.9654 59.986Z" fill="url(#paint18_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask9_421_3280)">
                        <path d="M33.9654 59.986C36.7274 59.986 38.9665 57.7538 38.9665 55.0001C38.9665 52.2465 36.7274 50.0143 33.9654 50.0143C31.2034 50.0143 28.9644 52.2465 28.9644 55.0001C28.9644 57.7538 31.2034 59.986 33.9654 59.986Z" fill="url(#paint19_linear_421_3280)"/>
                        </g>
                        <mask id="mask10_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="57" y="50" width="11" height="10">
                        <path d="M62.9303 59.986C65.6923 59.986 67.9313 57.7538 67.9313 55.0001C67.9313 52.2465 65.6923 50.0143 62.9303 50.0143C60.1683 50.0143 57.9292 52.2465 57.9292 55.0001C57.9292 57.7538 60.1683 59.986 62.9303 59.986Z" fill="url(#paint20_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask10_421_3280)">
                        <path d="M62.9303 59.986C65.6923 59.986 67.9313 57.7538 67.9313 55.0001C67.9313 52.2465 65.6923 50.0143 62.9303 50.0143C60.1683 50.0143 57.9292 52.2465 57.9292 55.0001C57.9292 57.7538 60.1683 59.986 62.9303 59.986Z" fill="url(#paint21_linear_421_3280)"/>
                        </g>
                        <mask id="mask11_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="86" y="50" width="11" height="10">
                        <path d="M91.8939 59.986C94.6559 59.986 96.895 57.7538 96.895 55.0001C96.895 52.2465 94.6559 50.0143 91.8939 50.0143C89.1319 50.0143 86.8928 52.2465 86.8928 55.0001C86.8928 57.7538 89.1319 59.986 91.8939 59.986Z" fill="url(#paint22_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask11_421_3280)">
                        <path d="M91.8939 59.986C94.6559 59.986 96.895 57.7538 96.895 55.0001C96.895 52.2465 94.6559 50.0143 91.8939 50.0143C89.1319 50.0143 86.8928 52.2465 86.8928 55.0001C86.8928 57.7538 89.1319 59.986 91.8939 59.986Z" fill="url(#paint23_linear_421_3280)"/>
                        </g>
                        <mask id="mask12_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="75" width="11" height="11">
                        <path d="M5.00106 85.0188C7.76307 85.0188 10.0021 82.7865 10.0021 80.0329C10.0021 77.2793 7.76307 75.0471 5.00106 75.0471C2.23905 75.0471 0 77.2793 0 80.0329C0 82.7865 2.23905 85.0188 5.00106 85.0188Z" fill="url(#paint24_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask12_421_3280)">
                        <path d="M5.00106 85.0188C7.76307 85.0188 10.0021 82.7865 10.0021 80.0329C10.0021 77.2793 7.76307 75.0471 5.00106 75.0471C2.23905 75.0471 0 77.2793 0 80.0329C0 82.7865 2.23905 85.0188 5.00106 85.0188Z" fill="url(#paint25_linear_421_3280)"/>
                        </g>
                        <mask id="mask13_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="28" y="75" width="11" height="11">
                        <path d="M33.9654 85.0188C36.7274 85.0188 38.9665 82.7865 38.9665 80.0329C38.9665 77.2793 36.7274 75.0471 33.9654 75.0471C31.2034 75.0471 28.9644 77.2793 28.9644 80.0329C28.9644 82.7865 31.2034 85.0188 33.9654 85.0188Z" fill="url(#paint26_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask13_421_3280)">
                        <path d="M33.9654 85.0188C36.7274 85.0188 38.9665 82.7865 38.9665 80.0329C38.9665 77.2793 36.7274 75.0471 33.9654 75.0471C31.2034 75.0471 28.9644 77.2793 28.9644 80.0329C28.9644 82.7865 31.2034 85.0188 33.9654 85.0188Z" fill="url(#paint27_linear_421_3280)"/>
                        </g>
                        <mask id="mask14_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="57" y="75" width="11" height="11">
                        <path d="M62.9303 85.0188C65.6923 85.0188 67.9313 82.7865 67.9313 80.0329C67.9313 77.2793 65.6923 75.0471 62.9303 75.0471C60.1683 75.0471 57.9292 77.2793 57.9292 80.0329C57.9292 82.7865 60.1683 85.0188 62.9303 85.0188Z" fill="url(#paint28_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask14_421_3280)">
                        <path d="M62.9303 85.0188C65.6923 85.0188 67.9313 82.7865 67.9313 80.0329C67.9313 77.2793 65.6923 75.0471 62.9303 75.0471C60.1683 75.0471 57.9292 77.2793 57.9292 80.0329C57.9292 82.7865 60.1683 85.0188 62.9303 85.0188Z" fill="url(#paint29_linear_421_3280)"/>
                        </g>
                        <mask id="mask15_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="86" y="75" width="11" height="11">
                        <path d="M91.8939 85.0188C94.6559 85.0188 96.895 82.7865 96.895 80.0329C96.895 77.2793 94.6559 75.0471 91.8939 75.0471C89.1319 75.0471 86.8928 77.2793 86.8928 80.0329C86.8928 82.7865 89.1319 85.0188 91.8939 85.0188Z" fill="url(#paint30_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask15_421_3280)">
                        <path d="M91.8939 85.0188C94.6559 85.0188 96.895 82.7865 96.895 80.0329C96.895 77.2793 94.6559 75.0471 91.8939 75.0471C89.1319 75.0471 86.8928 77.2793 86.8928 80.0329C86.8928 82.7865 89.1319 85.0188 91.8939 85.0188Z" fill="url(#paint31_linear_421_3280)"/>
                        </g>
                        <mask id="mask16_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="100" width="11" height="10">
                        <path d="M5.00106 110C7.76307 110 10.0021 107.768 10.0021 105.014C10.0021 102.261 7.76307 100.028 5.00106 100.028C2.23905 100.028 0 102.261 0 105.014C0 107.768 2.23905 110 5.00106 110Z" fill="url(#paint32_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask16_421_3280)">
                        <path d="M5.00106 110C7.76307 110 10.0021 107.768 10.0021 105.014C10.0021 102.261 7.76307 100.028 5.00106 100.028C2.23905 100.028 0 102.261 0 105.014C0 107.768 2.23905 110 5.00106 110Z" fill="url(#paint33_linear_421_3280)"/>
                        </g>
                        <mask id="mask17_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="28" y="100" width="11" height="10">
                        <path d="M33.9654 110C36.7274 110 38.9665 107.768 38.9665 105.014C38.9665 102.261 36.7274 100.028 33.9654 100.028C31.2034 100.028 28.9644 102.261 28.9644 105.014C28.9644 107.768 31.2034 110 33.9654 110Z" fill="url(#paint34_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask17_421_3280)">
                        <path d="M33.9654 110C36.7274 110 38.9665 107.768 38.9665 105.014C38.9665 102.261 36.7274 100.028 33.9654 100.028C31.2034 100.028 28.9644 102.261 28.9644 105.014C28.9644 107.768 31.2034 110 33.9654 110Z" fill="url(#paint35_linear_421_3280)"/>
                        </g>
                        <mask id="mask18_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="57" y="100" width="11" height="10">
                        <path d="M62.9303 110C65.6923 110 67.9313 107.768 67.9313 105.014C67.9313 102.261 65.6923 100.028 62.9303 100.028C60.1683 100.028 57.9292 102.261 57.9292 105.014C57.9292 107.768 60.1683 110 62.9303 110Z" fill="url(#paint36_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask18_421_3280)">
                        <path d="M62.9303 110C65.6923 110 67.9313 107.768 67.9313 105.014C67.9313 102.261 65.6923 100.028 62.9303 100.028C60.1683 100.028 57.9292 102.261 57.9292 105.014C57.9292 107.768 60.1683 110 62.9303 110Z" fill="url(#paint37_linear_421_3280)"/>
                        </g>
                        <mask id="mask19_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="86" y="100" width="11" height="10">
                        <path d="M91.8939 110C94.6559 110 96.895 107.768 96.895 105.014C96.895 102.261 94.6559 100.028 91.8939 100.028C89.1319 100.028 86.8928 102.261 86.8928 105.014C86.8928 107.768 89.1319 110 91.8939 110Z" fill="url(#paint38_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask19_421_3280)">
                        <path d="M91.8939 110C94.6559 110 96.895 107.768 96.895 105.014C96.895 102.261 94.6559 100.028 91.8939 100.028C89.1319 100.028 86.8928 102.261 86.8928 105.014C86.8928 107.768 89.1319 110 91.8939 110Z" fill="url(#paint39_linear_421_3280)"/>
                        </g>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear_421_3280" x1="52.6049" y1="125.432" x2="-15.6924" y2="-48.467" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_421_3280" x1="52.6049" y1="125.432" x2="-15.6924" y2="-48.467" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_421_3280" x1="77.67" y1="115.589" x2="9.37271" y2="-58.3108" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_421_3280" x1="77.67" y1="115.589" x2="9.37271" y2="-58.3108" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_421_3280" x1="102.735" y1="105.745" x2="34.4382" y2="-68.1547" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear_421_3280" x1="102.735" y1="105.745" x2="34.4382" y2="-68.1547" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint6_linear_421_3280" x1="127.799" y1="95.9004" x2="59.5022" y2="-77.9991" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint7_linear_421_3280" x1="127.799" y1="95.9004" x2="59.5022" y2="-77.9991" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint8_linear_421_3280" x1="44.0515" y1="128.791" x2="-24.2446" y2="-45.1067" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint9_linear_421_3280" x1="44.0515" y1="128.791" x2="-24.2446" y2="-45.1067" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint10_linear_421_3280" x1="69.1163" y1="118.947" x2="0.820298" y2="-54.9512" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint11_linear_421_3280" x1="69.1163" y1="118.947" x2="0.820298" y2="-54.9512" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint12_linear_421_3280" x1="94.1817" y1="109.103" x2="25.8857" y2="-64.795" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint13_linear_421_3280" x1="94.1817" y1="109.103" x2="25.8857" y2="-64.795" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint14_linear_421_3280" x1="119.246" y1="99.2591" x2="50.9497" y2="-74.639" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint15_linear_421_3280" x1="119.246" y1="99.2591" x2="50.9497" y2="-74.639" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint16_linear_421_3280" x1="35.4978" y1="132.151" x2="-32.7995" y2="-41.7481" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint17_linear_421_3280" x1="35.4978" y1="132.151" x2="-32.7995" y2="-41.7481" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint18_linear_421_3280" x1="60.5627" y1="122.307" x2="-7.73449" y2="-51.5922" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint19_linear_421_3280" x1="60.5627" y1="122.307" x2="-7.73449" y2="-51.5922" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint20_linear_421_3280" x1="85.6281" y1="112.463" x2="17.3309" y2="-61.4362" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint21_linear_421_3280" x1="85.6281" y1="112.463" x2="17.3309" y2="-61.4362" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint22_linear_421_3280" x1="110.692" y1="102.619" x2="42.395" y2="-71.2804" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint23_linear_421_3280" x1="110.692" y1="102.619" x2="42.395" y2="-71.2804" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint24_linear_421_3280" x1="26.9442" y1="135.51" x2="-41.3531" y2="-38.389" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint25_linear_421_3280" x1="26.9442" y1="135.51" x2="-41.3531" y2="-38.389" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint26_linear_421_3280" x1="52.0092" y1="125.666" x2="-16.2881" y2="-48.2331" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint27_linear_421_3280" x1="52.0092" y1="125.666" x2="-16.2881" y2="-48.2331" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint28_linear_421_3280" x1="77.0745" y1="115.822" x2="8.77731" y2="-58.0771" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint29_linear_421_3280" x1="77.0745" y1="115.822" x2="8.77731" y2="-58.0771" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint30_linear_421_3280" x1="102.139" y1="105.978" x2="33.8414" y2="-67.9213" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint31_linear_421_3280" x1="102.139" y1="105.978" x2="33.8414" y2="-67.9213" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint32_linear_421_3280" x1="18.3906" y1="138.87" x2="-49.9066" y2="-35.0297" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint33_linear_421_3280" x1="18.3906" y1="138.87" x2="-49.9066" y2="-35.0297" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint34_linear_421_3280" x1="43.4556" y1="129.026" x2="-24.8417" y2="-44.8737" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint35_linear_421_3280" x1="43.4556" y1="129.026" x2="-24.8417" y2="-44.8737" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint36_linear_421_3280" x1="68.5209" y1="119.182" x2="0.223761" y2="-54.7176" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint37_linear_421_3280" x1="68.5209" y1="119.182" x2="0.223761" y2="-54.7176" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint38_linear_421_3280" x1="93.5851" y1="109.338" x2="25.2878" y2="-64.5618" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint39_linear_421_3280" x1="93.5851" y1="109.338" x2="25.2878" y2="-64.5618" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="menu-mob__fone2">
                    <svg width="114" height="110" viewBox="0 0 114 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.3">
                        <mask id="mask0_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="11" height="10">
                        <path d="M5.00106 9.97171C7.76307 9.97171 10.0021 7.73942 10.0021 4.98582C10.0021 2.23222 7.76307 0 5.00106 0C2.23905 0 0 2.23222 0 4.98582C0 7.73942 2.23905 9.97171 5.00106 9.97171Z" fill="url(#paint0_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask0_421_3280)">
                        <path d="M5.00106 9.97171C7.76307 9.97171 10.0021 7.73942 10.0021 4.98582C10.0021 2.23222 7.76307 0 5.00106 0C2.23905 0 0 2.23222 0 4.98582C0 7.73942 2.23905 9.97171 5.00106 9.97171Z" fill="url(#paint1_linear_421_3280)"/>
                        </g>
                        <mask id="mask1_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="28" y="0" width="11" height="10">
                        <path d="M33.9654 9.97171C36.7274 9.97171 38.9665 7.73942 38.9665 4.98582C38.9665 2.23222 36.7274 0 33.9654 0C31.2034 0 28.9644 2.23222 28.9644 4.98582C28.9644 7.73942 31.2034 9.97171 33.9654 9.97171Z" fill="url(#paint2_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask1_421_3280)">
                        <path d="M33.9654 9.97171C36.7274 9.97171 38.9665 7.73942 38.9665 4.98582C38.9665 2.23222 36.7274 0 33.9654 0C31.2034 0 28.9644 2.23222 28.9644 4.98582C28.9644 7.73942 31.2034 9.97171 33.9654 9.97171Z" fill="url(#paint3_linear_421_3280)"/>
                        </g>
                        <mask id="mask2_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="57" y="0" width="11" height="10">
                        <path d="M62.9303 9.97171C65.6923 9.97171 67.9313 7.73942 67.9313 4.98582C67.9313 2.23222 65.6923 0 62.9303 0C60.1683 0 57.9292 2.23222 57.9292 4.98582C57.9292 7.73942 60.1683 9.97171 62.9303 9.97171Z" fill="url(#paint4_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask2_421_3280)">
                        <path d="M62.9303 9.97171C65.6923 9.97171 67.9313 7.73942 67.9313 4.98582C67.9313 2.23222 65.6923 0 62.9303 0C60.1683 0 57.9292 2.23222 57.9292 4.98582C57.9292 7.73942 60.1683 9.97171 62.9303 9.97171Z" fill="url(#paint5_linear_421_3280)"/>
                        </g>
                        <mask id="mask3_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="86" y="0" width="11" height="10">
                        <path d="M91.8939 9.97171C94.6559 9.97171 96.895 7.73942 96.895 4.98582C96.895 2.23222 94.6559 0 91.8939 0C89.1319 0 86.8928 2.23222 86.8928 4.98582C86.8928 7.73942 89.1319 9.97171 91.8939 9.97171Z" fill="url(#paint6_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask3_421_3280)">
                        <path d="M91.8939 9.97171C94.6559 9.97171 96.895 7.73942 96.895 4.98582C96.895 2.23222 94.6559 0 91.8939 0C89.1319 0 86.8928 2.23222 86.8928 4.98582C86.8928 7.73942 89.1319 9.97171 91.8939 9.97171Z" fill="url(#paint7_linear_421_3280)"/>
                        </g>
                        <mask id="mask4_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="25" width="11" height="11">
                        <path d="M5.00106 35.0048C7.76307 35.0048 10.0021 32.7726 10.0021 30.019C10.0021 27.2654 7.76307 25.0332 5.00106 25.0332C2.23905 25.0332 0 27.2654 0 30.019C0 32.7726 2.23905 35.0048 5.00106 35.0048Z" fill="url(#paint8_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask4_421_3280)">
                        <path d="M5.00106 35.0048C7.76307 35.0048 10.0021 32.7726 10.0021 30.019C10.0021 27.2654 7.76307 25.0332 5.00106 25.0332C2.23905 25.0332 0 27.2654 0 30.019C0 32.7726 2.23905 35.0048 5.00106 35.0048Z" fill="url(#paint9_linear_421_3280)"/>
                        </g>
                        <mask id="mask5_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="28" y="25" width="11" height="11">
                        <path d="M33.9654 35.0048C36.7274 35.0048 38.9665 32.7726 38.9665 30.019C38.9665 27.2654 36.7274 25.0332 33.9654 25.0332C31.2034 25.0332 28.9644 27.2654 28.9644 30.019C28.9644 32.7726 31.2034 35.0048 33.9654 35.0048Z" fill="url(#paint10_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask5_421_3280)">
                        <path d="M33.9654 35.0048C36.7274 35.0048 38.9665 32.7726 38.9665 30.019C38.9665 27.2654 36.7274 25.0332 33.9654 25.0332C31.2034 25.0332 28.9644 27.2654 28.9644 30.019C28.9644 32.7726 31.2034 35.0048 33.9654 35.0048Z" fill="url(#paint11_linear_421_3280)"/>
                        </g>
                        <mask id="mask6_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="57" y="25" width="11" height="11">
                        <path d="M62.9303 35.0048C65.6923 35.0048 67.9313 32.7726 67.9313 30.019C67.9313 27.2654 65.6923 25.0332 62.9303 25.0332C60.1683 25.0332 57.9292 27.2654 57.9292 30.019C57.9292 32.7726 60.1683 35.0048 62.9303 35.0048Z" fill="url(#paint12_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask6_421_3280)">
                        <path d="M62.9303 35.0048C65.6923 35.0048 67.9313 32.7726 67.9313 30.019C67.9313 27.2654 65.6923 25.0332 62.9303 25.0332C60.1683 25.0332 57.9292 27.2654 57.9292 30.019C57.9292 32.7726 60.1683 35.0048 62.9303 35.0048Z" fill="url(#paint13_linear_421_3280)"/>
                        </g>
                        <mask id="mask7_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="86" y="25" width="11" height="11">
                        <path d="M91.8939 35.0048C94.6559 35.0048 96.895 32.7726 96.895 30.019C96.895 27.2654 94.6559 25.0332 91.8939 25.0332C89.1319 25.0332 86.8928 27.2654 86.8928 30.019C86.8928 32.7726 89.1319 35.0048 91.8939 35.0048Z" fill="url(#paint14_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask7_421_3280)">
                        <path d="M91.8939 35.0048C94.6559 35.0048 96.895 32.7726 96.895 30.019C96.895 27.2654 94.6559 25.0332 91.8939 25.0332C89.1319 25.0332 86.8928 27.2654 86.8928 30.019C86.8928 32.7726 89.1319 35.0048 91.8939 35.0048Z" fill="url(#paint15_linear_421_3280)"/>
                        </g>
                        <mask id="mask8_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="50" width="11" height="10">
                        <path d="M5.00106 59.986C7.76307 59.986 10.0021 57.7538 10.0021 55.0001C10.0021 52.2465 7.76307 50.0143 5.00106 50.0143C2.23905 50.0143 0 52.2465 0 55.0001C0 57.7538 2.23905 59.986 5.00106 59.986Z" fill="url(#paint16_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask8_421_3280)">
                        <path d="M5.00106 59.986C7.76307 59.986 10.0021 57.7538 10.0021 55.0001C10.0021 52.2465 7.76307 50.0143 5.00106 50.0143C2.23905 50.0143 0 52.2465 0 55.0001C0 57.7538 2.23905 59.986 5.00106 59.986Z" fill="url(#paint17_linear_421_3280)"/>
                        </g>
                        <mask id="mask9_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="28" y="50" width="11" height="10">
                        <path d="M33.9654 59.986C36.7274 59.986 38.9665 57.7538 38.9665 55.0001C38.9665 52.2465 36.7274 50.0143 33.9654 50.0143C31.2034 50.0143 28.9644 52.2465 28.9644 55.0001C28.9644 57.7538 31.2034 59.986 33.9654 59.986Z" fill="url(#paint18_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask9_421_3280)">
                        <path d="M33.9654 59.986C36.7274 59.986 38.9665 57.7538 38.9665 55.0001C38.9665 52.2465 36.7274 50.0143 33.9654 50.0143C31.2034 50.0143 28.9644 52.2465 28.9644 55.0001C28.9644 57.7538 31.2034 59.986 33.9654 59.986Z" fill="url(#paint19_linear_421_3280)"/>
                        </g>
                        <mask id="mask10_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="57" y="50" width="11" height="10">
                        <path d="M62.9303 59.986C65.6923 59.986 67.9313 57.7538 67.9313 55.0001C67.9313 52.2465 65.6923 50.0143 62.9303 50.0143C60.1683 50.0143 57.9292 52.2465 57.9292 55.0001C57.9292 57.7538 60.1683 59.986 62.9303 59.986Z" fill="url(#paint20_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask10_421_3280)">
                        <path d="M62.9303 59.986C65.6923 59.986 67.9313 57.7538 67.9313 55.0001C67.9313 52.2465 65.6923 50.0143 62.9303 50.0143C60.1683 50.0143 57.9292 52.2465 57.9292 55.0001C57.9292 57.7538 60.1683 59.986 62.9303 59.986Z" fill="url(#paint21_linear_421_3280)"/>
                        </g>
                        <mask id="mask11_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="86" y="50" width="11" height="10">
                        <path d="M91.8939 59.986C94.6559 59.986 96.895 57.7538 96.895 55.0001C96.895 52.2465 94.6559 50.0143 91.8939 50.0143C89.1319 50.0143 86.8928 52.2465 86.8928 55.0001C86.8928 57.7538 89.1319 59.986 91.8939 59.986Z" fill="url(#paint22_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask11_421_3280)">
                        <path d="M91.8939 59.986C94.6559 59.986 96.895 57.7538 96.895 55.0001C96.895 52.2465 94.6559 50.0143 91.8939 50.0143C89.1319 50.0143 86.8928 52.2465 86.8928 55.0001C86.8928 57.7538 89.1319 59.986 91.8939 59.986Z" fill="url(#paint23_linear_421_3280)"/>
                        </g>
                        <mask id="mask12_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="75" width="11" height="11">
                        <path d="M5.00106 85.0188C7.76307 85.0188 10.0021 82.7865 10.0021 80.0329C10.0021 77.2793 7.76307 75.0471 5.00106 75.0471C2.23905 75.0471 0 77.2793 0 80.0329C0 82.7865 2.23905 85.0188 5.00106 85.0188Z" fill="url(#paint24_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask12_421_3280)">
                        <path d="M5.00106 85.0188C7.76307 85.0188 10.0021 82.7865 10.0021 80.0329C10.0021 77.2793 7.76307 75.0471 5.00106 75.0471C2.23905 75.0471 0 77.2793 0 80.0329C0 82.7865 2.23905 85.0188 5.00106 85.0188Z" fill="url(#paint25_linear_421_3280)"/>
                        </g>
                        <mask id="mask13_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="28" y="75" width="11" height="11">
                        <path d="M33.9654 85.0188C36.7274 85.0188 38.9665 82.7865 38.9665 80.0329C38.9665 77.2793 36.7274 75.0471 33.9654 75.0471C31.2034 75.0471 28.9644 77.2793 28.9644 80.0329C28.9644 82.7865 31.2034 85.0188 33.9654 85.0188Z" fill="url(#paint26_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask13_421_3280)">
                        <path d="M33.9654 85.0188C36.7274 85.0188 38.9665 82.7865 38.9665 80.0329C38.9665 77.2793 36.7274 75.0471 33.9654 75.0471C31.2034 75.0471 28.9644 77.2793 28.9644 80.0329C28.9644 82.7865 31.2034 85.0188 33.9654 85.0188Z" fill="url(#paint27_linear_421_3280)"/>
                        </g>
                        <mask id="mask14_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="57" y="75" width="11" height="11">
                        <path d="M62.9303 85.0188C65.6923 85.0188 67.9313 82.7865 67.9313 80.0329C67.9313 77.2793 65.6923 75.0471 62.9303 75.0471C60.1683 75.0471 57.9292 77.2793 57.9292 80.0329C57.9292 82.7865 60.1683 85.0188 62.9303 85.0188Z" fill="url(#paint28_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask14_421_3280)">
                        <path d="M62.9303 85.0188C65.6923 85.0188 67.9313 82.7865 67.9313 80.0329C67.9313 77.2793 65.6923 75.0471 62.9303 75.0471C60.1683 75.0471 57.9292 77.2793 57.9292 80.0329C57.9292 82.7865 60.1683 85.0188 62.9303 85.0188Z" fill="url(#paint29_linear_421_3280)"/>
                        </g>
                        <mask id="mask15_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="86" y="75" width="11" height="11">
                        <path d="M91.8939 85.0188C94.6559 85.0188 96.895 82.7865 96.895 80.0329C96.895 77.2793 94.6559 75.0471 91.8939 75.0471C89.1319 75.0471 86.8928 77.2793 86.8928 80.0329C86.8928 82.7865 89.1319 85.0188 91.8939 85.0188Z" fill="url(#paint30_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask15_421_3280)">
                        <path d="M91.8939 85.0188C94.6559 85.0188 96.895 82.7865 96.895 80.0329C96.895 77.2793 94.6559 75.0471 91.8939 75.0471C89.1319 75.0471 86.8928 77.2793 86.8928 80.0329C86.8928 82.7865 89.1319 85.0188 91.8939 85.0188Z" fill="url(#paint31_linear_421_3280)"/>
                        </g>
                        <mask id="mask16_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="100" width="11" height="10">
                        <path d="M5.00106 110C7.76307 110 10.0021 107.768 10.0021 105.014C10.0021 102.261 7.76307 100.028 5.00106 100.028C2.23905 100.028 0 102.261 0 105.014C0 107.768 2.23905 110 5.00106 110Z" fill="url(#paint32_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask16_421_3280)">
                        <path d="M5.00106 110C7.76307 110 10.0021 107.768 10.0021 105.014C10.0021 102.261 7.76307 100.028 5.00106 100.028C2.23905 100.028 0 102.261 0 105.014C0 107.768 2.23905 110 5.00106 110Z" fill="url(#paint33_linear_421_3280)"/>
                        </g>
                        <mask id="mask17_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="28" y="100" width="11" height="10">
                        <path d="M33.9654 110C36.7274 110 38.9665 107.768 38.9665 105.014C38.9665 102.261 36.7274 100.028 33.9654 100.028C31.2034 100.028 28.9644 102.261 28.9644 105.014C28.9644 107.768 31.2034 110 33.9654 110Z" fill="url(#paint34_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask17_421_3280)">
                        <path d="M33.9654 110C36.7274 110 38.9665 107.768 38.9665 105.014C38.9665 102.261 36.7274 100.028 33.9654 100.028C31.2034 100.028 28.9644 102.261 28.9644 105.014C28.9644 107.768 31.2034 110 33.9654 110Z" fill="url(#paint35_linear_421_3280)"/>
                        </g>
                        <mask id="mask18_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="57" y="100" width="11" height="10">
                        <path d="M62.9303 110C65.6923 110 67.9313 107.768 67.9313 105.014C67.9313 102.261 65.6923 100.028 62.9303 100.028C60.1683 100.028 57.9292 102.261 57.9292 105.014C57.9292 107.768 60.1683 110 62.9303 110Z" fill="url(#paint36_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask18_421_3280)">
                        <path d="M62.9303 110C65.6923 110 67.9313 107.768 67.9313 105.014C67.9313 102.261 65.6923 100.028 62.9303 100.028C60.1683 100.028 57.9292 102.261 57.9292 105.014C57.9292 107.768 60.1683 110 62.9303 110Z" fill="url(#paint37_linear_421_3280)"/>
                        </g>
                        <mask id="mask19_421_3280" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="86" y="100" width="11" height="10">
                        <path d="M91.8939 110C94.6559 110 96.895 107.768 96.895 105.014C96.895 102.261 94.6559 100.028 91.8939 100.028C89.1319 100.028 86.8928 102.261 86.8928 105.014C86.8928 107.768 89.1319 110 91.8939 110Z" fill="url(#paint38_linear_421_3280)"/>
                        </mask>
                        <g mask="url(#mask19_421_3280)">
                        <path d="M91.8939 110C94.6559 110 96.895 107.768 96.895 105.014C96.895 102.261 94.6559 100.028 91.8939 100.028C89.1319 100.028 86.8928 102.261 86.8928 105.014C86.8928 107.768 89.1319 110 91.8939 110Z" fill="url(#paint39_linear_421_3280)"/>
                        </g>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear_421_3280" x1="52.6049" y1="125.432" x2="-15.6924" y2="-48.467" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_421_3280" x1="52.6049" y1="125.432" x2="-15.6924" y2="-48.467" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_421_3280" x1="77.67" y1="115.589" x2="9.37271" y2="-58.3108" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_421_3280" x1="77.67" y1="115.589" x2="9.37271" y2="-58.3108" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_421_3280" x1="102.735" y1="105.745" x2="34.4382" y2="-68.1547" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear_421_3280" x1="102.735" y1="105.745" x2="34.4382" y2="-68.1547" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint6_linear_421_3280" x1="127.799" y1="95.9004" x2="59.5022" y2="-77.9991" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint7_linear_421_3280" x1="127.799" y1="95.9004" x2="59.5022" y2="-77.9991" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint8_linear_421_3280" x1="44.0515" y1="128.791" x2="-24.2446" y2="-45.1067" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint9_linear_421_3280" x1="44.0515" y1="128.791" x2="-24.2446" y2="-45.1067" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint10_linear_421_3280" x1="69.1163" y1="118.947" x2="0.820298" y2="-54.9512" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint11_linear_421_3280" x1="69.1163" y1="118.947" x2="0.820298" y2="-54.9512" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint12_linear_421_3280" x1="94.1817" y1="109.103" x2="25.8857" y2="-64.795" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint13_linear_421_3280" x1="94.1817" y1="109.103" x2="25.8857" y2="-64.795" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint14_linear_421_3280" x1="119.246" y1="99.2591" x2="50.9497" y2="-74.639" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint15_linear_421_3280" x1="119.246" y1="99.2591" x2="50.9497" y2="-74.639" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint16_linear_421_3280" x1="35.4978" y1="132.151" x2="-32.7995" y2="-41.7481" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint17_linear_421_3280" x1="35.4978" y1="132.151" x2="-32.7995" y2="-41.7481" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint18_linear_421_3280" x1="60.5627" y1="122.307" x2="-7.73449" y2="-51.5922" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint19_linear_421_3280" x1="60.5627" y1="122.307" x2="-7.73449" y2="-51.5922" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint20_linear_421_3280" x1="85.6281" y1="112.463" x2="17.3309" y2="-61.4362" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint21_linear_421_3280" x1="85.6281" y1="112.463" x2="17.3309" y2="-61.4362" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint22_linear_421_3280" x1="110.692" y1="102.619" x2="42.395" y2="-71.2804" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint23_linear_421_3280" x1="110.692" y1="102.619" x2="42.395" y2="-71.2804" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint24_linear_421_3280" x1="26.9442" y1="135.51" x2="-41.3531" y2="-38.389" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint25_linear_421_3280" x1="26.9442" y1="135.51" x2="-41.3531" y2="-38.389" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint26_linear_421_3280" x1="52.0092" y1="125.666" x2="-16.2881" y2="-48.2331" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint27_linear_421_3280" x1="52.0092" y1="125.666" x2="-16.2881" y2="-48.2331" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint28_linear_421_3280" x1="77.0745" y1="115.822" x2="8.77731" y2="-58.0771" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint29_linear_421_3280" x1="77.0745" y1="115.822" x2="8.77731" y2="-58.0771" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint30_linear_421_3280" x1="102.139" y1="105.978" x2="33.8414" y2="-67.9213" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint31_linear_421_3280" x1="102.139" y1="105.978" x2="33.8414" y2="-67.9213" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint32_linear_421_3280" x1="18.3906" y1="138.87" x2="-49.9066" y2="-35.0297" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint33_linear_421_3280" x1="18.3906" y1="138.87" x2="-49.9066" y2="-35.0297" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint34_linear_421_3280" x1="43.4556" y1="129.026" x2="-24.8417" y2="-44.8737" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint35_linear_421_3280" x1="43.4556" y1="129.026" x2="-24.8417" y2="-44.8737" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint36_linear_421_3280" x1="68.5209" y1="119.182" x2="0.223761" y2="-54.7176" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint37_linear_421_3280" x1="68.5209" y1="119.182" x2="0.223761" y2="-54.7176" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        <linearGradient id="paint38_linear_421_3280" x1="93.5851" y1="109.338" x2="25.2878" y2="-64.5618" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                        <linearGradient id="paint39_linear_421_3280" x1="93.5851" y1="109.338" x2="25.2878" y2="-64.5618" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#97C3F9"/>
                        <stop offset="1" stopColor="#93C1F9"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="menu-mob__ul">
                    <li>
                        <Link href="/">О нас</Link>
                    </li>
                    <li>
                        <Link href="/">Контакты</Link>
                    </li>
                    <li>
                        <Link href="/">Документация</Link>
                    </li>
                    <li>
                        <Link href="/work">Услуги и работы</Link>
                    </li>
                </div>
                <span></span>
                <div className="menu-mob__social">
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#292D32" strokeWidth="2" strokeMiterlimit="10"/>
                        </svg>
                        <a href="tel:+79104469790">7 (910) 446 97 90</a>
                    </li>
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#292D32" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#292D32" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <a href="mailto:info@rei.ru">info@rei.ru</a>
                    </li>
                </div>
                <button>Оставить заявку</button>
            </div>
        </header>
    )
}

export default Header