import React, { useState } from "react";
import "./API.css"

import ProjectTile from "./Project_Tile";
import Project_Card from "./Project_Card";

const Project_Page = ({ id, title, content, thumbnail, backgroundImage, tags }) => {
    const [PageScrolledIn, setPageScrolledIn] = useState("");

    const ScrolledIn_Func = () => {
        var reveals = document.querySelectorAll(".Project_Page_container");
        var Is_Any_Scrolled_In = false;

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = windowHeight / 2;

            if (elementTop < windowHeight - elementVisible) {
                Is_Any_Scrolled_In = true;
                setPageScrolledIn(reveals[i].id);
            }

        }
        if (Is_Any_Scrolled_In !== true) {
            setPageScrolledIn("");
        }
    }

    window.addEventListener("scroll", ScrolledIn_Func);


    return (
        <div className="Project_Page_container" style={{
            backgroundImage: `url(${backgroundImage})`,
        }} id={id}>
            <div className="NProject_Section">
                <ProjectTile
                    id={id}
                    title={title}
                    content={content}
                    thumbnail={thumbnail}
                    tags={tags}
                />

            </div>
            <div className="MProject_Section">
                <Project_Card
                    IsSrolledTo={PageScrolledIn == id ? false : true}
                    className="MProject_Section"
                    key={id}
                    id={id}
                    title={title}
                    content={content}
                    thumbnail={thumbnail}
                    tags={tags}
                />
            </div>
        </div >
    )
}

export default Project_Page;