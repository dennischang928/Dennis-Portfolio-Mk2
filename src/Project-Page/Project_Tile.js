import React from 'react';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Nstyles from './Project-Tile.module.css';

const ProjectTile = ({ id, title, content, thumbnail, tags }) => {
    return (
        <div className={Nstyles.Project_Section} id="NProject_Section">
            <div className={Nstyles.left}>
                <a href={`/${id}`} style={{ textDecoration: "none" }}>
                    <img loading="lazy" src={thumbnail} alt={title} />
                </a>
            </div>
            <div className={Nstyles.right}>
                <div className={Nstyles.title}>
                    <h1>{title}</h1>
                </div>
                <div className={Nstyles.content}>
                    {content}
                </div>
                <div className={Nstyles.Tag_Section}>
                    <ul>
                        {tags.map((e) => <li key={e}>{e}</li>)}
                    </ul>
                </div>
                <a href={`/${id}`} style={{ textDecoration: "none", color: "#000" }}>
                    <Button startIcon={<RemoveRedEyeIcon />} variant="contained" size="large" className={Nstyles.View_Project_Button}>
                        View Project
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default ProjectTile;