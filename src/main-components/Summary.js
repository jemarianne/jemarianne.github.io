import { Component } from "react";

import "../styles/Summary.scss";

// const Summary = () => {
//     return (
//         <div className="outer">
//             <div className="inner">
//                 <div className="welcome">
//                     Welcome
//                 </div>
//                 <div className="summary">
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                     <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

class Summary extends Component {
    render() {
        return (
            <div className="outer">
                <div className="inner">
                    <div className="welcome">
                        Welcome!
                    </div>
                    <div className="summary">
                        <p>My name is Jem Arianne Salvacion, an aspiring front-end developer based in the Philippines. </p>
                        <p>Whenever I'm not coding, I usually read manga/manhwa, play video games, or create digital arts.</p>
                        <p>I'm currently learning ReactJS and made this portfolio to put what I'm learning to use.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Summary;