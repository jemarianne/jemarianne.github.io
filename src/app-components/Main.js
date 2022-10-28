import Summary  from "../main-components/Summary.js";
import ProjectItem from "../main-components/ProjectItem.js";

//import { Animated } from "react-native";

import "../styles/Main.scss";

import { Component } from "react";

class Main extends Component {
    constructor( props ){
        super( props )
        this.state = {
            currentContent: 0,
            content: <Summary />
        };
    }

    updateSummary = () => 
    {
        if(this.state.currentContent === 0) {
            return;
        }

        this.setState(
            {
                currentContent: 0,
                content: <Summary />
            });
    }

    updateContent = (num, title, description, link) => {
        if(this.state.currentContent === num) {
            this.updateSummary();
            return;
        }

        this.setState(
            {
                currentContent: num,
                content: <ProjectItem 
                title={ title }
                description={ description }
                link={ link }
                />
            });
    }
     
    render() {
        return(
            <div className="main">
                <div className="content">
                    { this.state.content }
                </div>
                <div className="space"></div>
                <div className="projects">
                    <h2>Projects</h2>
                    <div className="project-wrapper">
                        <button className="project-item" 
                        onClick={ () => this.updateContent(1, "Crafty Creative",
                        "Crafty Creative is a web-based application developed to promote and sell local Filipino products. Customers can discover products, shop around using a cart, and then check out using the website.",
                        "https://drive.google.com/drive/folders/1SF3ej53U_J_s7VhYRdhYwOOg09I2BmQ7?usp=sharing") }>
                            <span className="project-name">Crafty Creative</span>
                        </button>
                        <button className="project-item" 
                        onClick={ () => this.updateContent(2, "The Food Place",
                        "The Food Place is a crowdsourcing web-based application where users can search nearby restaurants (around Metro Manila) with the help of GPS integrated with Google Maps. It can also locate restaurants wherein seniors and/or kids are allowed and can get information like where it is, what it is, on-going event info and etc.",
                        "https://drive.google.com/drive/folders/1hZZcR2Lt29OTBbxK_7xS7zF1SuLAg8JE?usp=sharing") }>
                            <span className="project-name">The Food Place</span>
                        </button>
                        <button className="project-item"
                        onClick={ () => this.updateContent(3, "Lakbay",
                        "Lakbay is a mobile application developed to promote Philippine landmarks and tourist attractions and serve as a guide to safe and fun travels around the country",
                        "https://drive.google.com/drive/folders/1a9_J1egT3phniiBFMuD0GvXaAQ2xCO0G?usp=sharing") }>
                            <span className="project-name">Lakbay</span>
                        </button>
                        <button className="project-item"
                        onClick={ () => this.updateContent(4, "Pillbox Hill Hospital",
                        "Pillbox Hill Hospital Patient Medical System is a web-based platform where patients and hospital staff can connect and provide an improved management system to assist the staff to perform their functions successfully.",
                        "https://drive.google.com/drive/folders/15YMm5hfpdKs_l-LttJhCvI1b1583h8TG?usp=sharing") }>
                            <span className="project-name">Pillbox Hill Hospital</span>
                        </button>
                        <button className="project-item"
                        onClick={ () => this.updateContent(5, "Underworld Quest",
                        "Underworld Quest: Song of Souls is a puzzle platformer game based on the story of Orpheus and Eurydice. The player will go through several areas containing puzzles that require to be solved to activate the gate.",
                        "https://drive.google.com/drive/folders/1u6PiU6oIpNO1nhijj-fDgFpE_ndhpI8k?usp=sharing") }>
                            <span className="project-name">Underworld Quest</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;