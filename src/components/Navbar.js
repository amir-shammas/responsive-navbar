import { links , socials } from "./Database"
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../images/global-icon.png"
import { useEffect, useRef, useState } from "react";


function Navbar(){

    const [showLinks, setShowLinks] = useState(false);

    const navHandler = () => {
        setShowLinks(!showLinks);
    }

    const navlinksRef = useRef(null);

    const listRef = useRef(null);

    useEffect(() => {
        const listHeight = listRef.current.getBoundingClientRect().height;
        // console.log(listHeight);
        if(showLinks){
            navlinksRef.current.style.height = `${listHeight}px`;
        }else{
            navlinksRef.current.style.height = 0;
        }
    }, [showLinks]);

    return(
        <>
            <nav>
               <div className="container">
                    <div className="nav-logo">
                         <button className="nav-toggle" onClick={navHandler}>
                            {/* <FaBars /> */}
                            { !showLinks ? <FaBars /> : <FaTimes /> }
                         </button>
                         <img src={logo} alt="" />
                    </div>
                    <div className="nav-links" ref={navlinksRef}>
                         <ul className="list" ref={listRef}>
                         {

                            // links.map((link, index) => {
                            //     return (
                            //         <li key={index}>
                            //             <a href={link.url}>
                            //                 {link.text}
                            //             </a>
                            //         </li>
                            //     );
                            // })


                            links.map((link) => {
                                const { id , url , text } = link;
                                return (
                                    <li key={id}>
                                        <a href={url}>
                                            {text}
                                        </a>
                                    </li>
                                );
                            })

                         }
                         </ul>
                    </div>
                    <ul className="nav-social">
                         {


                            // socials.map((social, index) => {
                            //     return(
                            //         <li key={index}>
                            //             <a href={social.url}>{social.icon}</a>
                            //         </li>
                            //     );
                            // })


                            socials.map((social) => {
                                const { id , url , icon } = social;
                                return(
                                    <li key={id}>
                                        <a href={url}>{icon}</a>
                                    </li>
                                );
                            })


                         }
                    </ul>
               </div>
          </nav>
        </>
    );
}

export default Navbar;
