import Project2_Background from "../Images/Project2/Background.png"
import Project2_Thumbnail from "../Images/Project2/Thumbnail.png"

import Project2_Cover_Image from "../Images/Project2/Cover.png"

import Project2_Abstract_Image1 from "../Images/Project2/Abstract_Image1.svg"
import Project2_Abstract_Image3 from "../Images/Project2/Abstract_Image3.png"
import Project2_Abstract_Image4 from "../Images/Project2/Abstract_Image4.png"

import Project2_Gallery_Image1 from "../Images/Project2/Gallery_Image1.png"
import Project2_Gallery_Image2 from "../Images/Project2/Gallery_Image2.png"
import Project2_Gallery_Image3 from "../Images/Project2/Gallery_Image3.png"
import Project2_Gallery_Image4 from "../Images/Project2/Gallery_Image4.png"
import Project2_Gallery_Image5 from "../Images/Project2/Gallery_Image5.png"
import Project2_Gallery_Image6 from "../Images/Project2/Gallery_Image6.png"
import Project2_Gallery_Image7 from "../Images/Project2/Gallery_Image7.png"
import Project2_Gallery_Image8 from "../Images/Project2/Gallery_Image8.png"
import Project2_Gallery_Image9 from "../Images/Project2/Gallery_Image9.png"
import Project2_Gallery_Image10 from "../Images/Project2/Gallery_Image10.png"


import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export const Project2 = {
    id: "Biped_Servo_Robot",
    title: "Biped Servo Robot",
    content: (
        <p>
            In May 2022, I participated in a biped servo robot contest, where I designed, built, and programmed a 6-servo human-like robot.
            <br />
            <br />
            Participants were asked to create and program their two-legged robot to climb up and down stairs, walk, and somersault.
            <br />
            <br />
            The fastest robot to finish all tasks wins!
            <br />
            <br />
            In addition to the two-legged design of the robot, I designed a device that could adjust the robot's center of mass, thereby stabilizing its body.
        </p>),
    thumbnail: Project2_Thumbnail,
    backgroundImage: Project2_Background,
    tags: ["#3D-DESIGN", "#Servo_Controller", "#carbon_fiber", "#3D-printing", "#Human-like_Robot", "Human-Like Robot"],
    detail_of_the_project_url: "https://drive.google.com/file/d/1gG0PZJBXxGht2iPvNIRpUsod5JoEk_WE/view?usp=sharing",
    details_BTN_text: (<div><PictureAsPdfIcon /> Details</div>),
    embed_video: (
        <iframe allowFullScreen src="https://drive.google.com/file/d/1hBEX7X_lhfGl-FbVYsqfoaYAjJbshS1m/preview" width="100%" height="320" allow="autoplay"></iframe>
    ),
    //======================================================================================================
    explaination: "Design, build and program a biped robot from scratch",
    time: "May-June 2022",
    about_this_Project: (
        <div>
            <h1>About this project</h1>
            <p>In this project, I designed and assembled a biped servo robot from scratch. The dimensions of the robot are 170mm x 160mm x 251mm. The robot consists of 7 servo motors, a servo commander, and a frame. There are 6 joints for each of the 2 legs of the robot, providing the robot with the ability to “walk” on 2 legs step by step. Each of the joints is driven by a servo motor.
            </p>
        </div>
    ),
    abstract: (
        <div>
            <h1>Introduction</h1>
            <p>
                In recent years, biped robots have received considerable attention due to their unique human-like movements. Biped robots are able to tackle complex real-world terrains by using the same types of movements as humans, such as jumping, running, or even climbing stairs.
            </p>
            <br />
            <p>
                In this project, I aimed to create a biped robot that could climb stairs, walk, and perform somersaults with human-like motion.</p>
        </div>
    ),

    Cover: Project2_Cover_Image,
    Abstract_Images: [Project2_Abstract_Image1, Project2_Abstract_Image3, Project2_Abstract_Image4],
    Gallery_Images: [Project2_Gallery_Image1, Project2_Gallery_Image2, Project2_Gallery_Image3, Project2_Gallery_Image4, Project2_Gallery_Image5, Project2_Gallery_Image6, Project2_Gallery_Image7, Project2_Gallery_Image8, Project2_Gallery_Image9, Project2_Gallery_Image10]
}

export default { Project2 };