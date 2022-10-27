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
    constructor(props) {
        super(props)
        this.state = {
            animate: false
        };
    }

    componentDidMount(){
        window.onbeforeunload = function() {
            this.setState({
                animate: true
            })
        };
    }

    render() {
        return (
            <div className="outer">
                <div className="inner">
                    <div className="welcome">
                        Welcome!
                    </div>
                    <div className="summary">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Summary;