import "../styles/ProjectItem.scss";

const ProjectItem = ({title,  description, link}) => {
    return (
        <div className="project-item-outer">
            <div className="project-item-main">
                <h1>{title}</h1>
                <div className="about">
                    <p>{description}</p>
                    <a className="project-link" href={link} target="_blank" rel="noreferrer">
                        <span className="view">
                            View
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;