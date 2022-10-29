import "../styles/Header.scss";

import { Linkedin, Facebook } from "react-bootstrap-icons";
import { Component } from "react";

// function Header() {
//     return(
//         <header>
//             <div className="logo">
//                 <img className="site-logo" 
//                 src={require('../logo.png')} 
//                 alt="Logo" />
//             </div>
//             <div className="outer-links">
//                 <ul>
//                     <li>
//                         <a 
//                         href="https://www.linkedin.com/in/jem-arianne-salvacion-020499232/" 
//                         target="_blank"
//                         rel="noreferrer">
//                             <Linkedin className="contact-logo"/>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="https://www.facebook.com/jmrnnryslvcn/"
//                         target="_blank"
//                         rel="noreferrer">
//                             <Facebook className="contact-logo"/>
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </header>
//     );
// }

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <img className="site-logo" 
                    src={require('../logo.png')} 
                    alt="Logo" />
                </div>
                {/* <div className="test test-reveal">
                    Test
                </div> */}
                <div className="outer-links">
                    <ul>
                        <li>
                            <a 
                            href="https://www.linkedin.com/in/jem-arianne-salvacion-020499232/" 
                            target="_blank"
                            rel="noreferrer">
                                <Linkedin className="contact-logo"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/jmrnnryslvcn/"
                            target="_blank"
                            rel="noreferrer">
                                <Facebook className="contact-logo"/>
                            </a>
                        </li>
                        <li>
                            <a className="resume-btn"
                            href="/resume.pdf"
                            // download="SALVACION_JEM.pdf"
                            target="_blank"
                            rel="noreferrer noopener"
                            >Resume</a>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header;