import Project5_Background from "../Images/Project5/Background.png"
import Project5_Thumbnail from "../Images/Project5/Thumbnail.jpeg"

import Project5_Cover_Image from "../Images/Project5/Cover.jpeg"

import Project5_Abstract_Image1 from "../Images/Project5/Abstract_Image1.jpeg"
import Project5_Abstract_Image2 from "../Images/Project5/Abstract_Image2.jpeg"
import Project5_Abstract_Image3 from "../Images/Project5/Abstract_Image3.jpeg"
import Project5_Abstract_Image4 from "../Images/Project5/Abstract_Image4.jpeg"
import Project5_Abstract_Image5 from "../Images/Project5/Abstract_Image5.jpeg"
import Project5_Abstract_Image6 from "../Images/Project5/Abstract_Image6.jpeg"
import Project5_Abstract_Image7 from "../Images/Project5/Abstract_Image7.jpeg"
import Project5_Abstract_Image8 from "../Images/Project5/Abstract_Image8.jpeg"



import Project5_Gallery_Image1 from "../Images/Project5/Gallery_Image1.jpeg"
import Project5_Gallery_Image2 from "../Images/Project5/Gallery_Image2.jpeg"
import Project5_Gallery_Image3 from "../Images/Project5/Gallery_Image3.jpeg"
import Project5_Gallery_Image4 from "../Images/Project5/Gallery_Image4.jpeg"
import Project5_Gallery_Image5 from "../Images/Project5/Gallery_Image5.jpeg"
import Project5_Gallery_Image6 from "../Images/Project5/Gallery_Image6.jpeg"
import Project5_Gallery_Image7 from "../Images/Project5/Gallery_Image7.jpeg"
import Project5_Gallery_Image8 from "../Images/Project5/Gallery_Image8.jpeg"
import Project5_Gallery_Image9 from "../Images/Project5/Gallery_Image9.jpeg"
import Project5_Gallery_Image10 from "../Images/Project5/Gallery_Image10.jpeg"
import Project5_Gallery_Image11 from "../Images/Project5/Gallery_Image11.jpeg"

import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';




export const Project5 = {
    id: "Line_Following_Robot",
    title: "Line Following Robot",
    content: (
        <p>
            This is a group project for my DAT (<a href="https://sites.google.com/ism.edu.mo/dat/%E5%B8%AB%E7%94%9F%E5%84%AA%E7%A7%80%E4%BD%9C%E5%93%81%E8%88%87%E5%88%86%E4%BA%AB/2324-linefollower" target="_blank">Design and Application of Technology</a>) class.
            <br />
            <br />
            I learned a lot from this project. I became more familiar with I2C communication, PID control, gear design and modular design. I also learned how to split a large project into smaller jobs, and collaborate with my partner.
            <br />
            <br />
            In this project, my partner, Dareo, and I built a line-following robot using a modular design, where the sensor part and the engine part are modularized, and communicate with each other throught I2C.
            <br />
            <br />
            The sensor part consists of a custom Arduino PCB with 15 reflective optical sensors, and a simple calibration algorithm to determine the threshold of the sensors.
            <br />
            <br />
            The engine part is an Arduino-controlled differential drive robot with two motors and silicone wheels, with a 3D-printed gear set for speed reduction and torque enhancement
            <br />
            <br />
            We also made a remote control system for the robot, which uses a custom website to control the robot using WASD for debugging <a href="https://youtube.com/shorts/3SBiyDnazpo" target="_blank">DEMO</a>
            <br />
            <br />
            After days and nights of debugging and testing, we eventually approach our goal of building a line following robot that can follow the track for one cycle within 10 seconds.
        </p>
    ),
    thumbnail: Project5_Thumbnail,
    backgroundImage: Project5_Background,
    tags: ["#NRF24L01", "#Built-In_Buck_Converter", "#I2C", "#Customized-Circuit-Board", "#PID_Control", "#3D-Printed_Gears", "#Modular_Design"],
    detail_of_the_project_url: "https://drive.google.com/file/d/18AncnilATEoZ7LwbvpFWJHxNeqn_QllF/view?usp=sharing",
    details_BTN_text: (<div><PictureAsPdfIcon />Detailed Report</div>),
    embed_video: (
        <iframe allowFullScreen src="https://youtube.com/embed/ls6QVpIVgzk" width="100%" height="320" allow="autoplay"></iframe>
    ),
    //======================================================================================================

    explaination: "A  PID closed loop controlled line-following robot made from scratch",
    time: "2023",
    about_this_Project: (
        <div>
            <h1>About this project</h1>
            <p>
                In general, line follower robot follows a ‘line’ or ‘path’ already predetermined by the user. This line or path may be as simple as a physical white line on the floor or as complex path marking schemes e.g. embedded lines, magnetic markers and laser guide markers.
                <br />
                <br />
                In this project we are using 15 reflective optical sensors to detect these specific lines. Below documents the design construction and testing of our line follower robot.
                <br />
                <br />
            </p>
        </div>
    ),
    abstract: (
        <div>
            <h1>Design Goal</h1>
            <p>
                We aimed to build a line-following robot with the following specifications:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;1. Time to travel one cycle: under 10 seconds<br />
                &nbsp;&nbsp;&nbsp;&nbsp;2. Speed: over 2 m/s (7.2 km/h)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;3. Weight: under 2.5 kg<br />
                &nbsp;&nbsp;&nbsp;&nbsp;4. Dimensions: within 200 x 200 x 150 mm<br />
                &nbsp;&nbsp;&nbsp;&nbsp;5. Number of Infrared sensors: 15<br />
                &nbsp;&nbsp;&nbsp;&nbsp;6. Power supply: 11.1V lithium-ion battery (3 cell Li-po Battery)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;7. Easy monitoring, PID tuning, and debugging<br />
            </p>
            <h1>Design Process</h1>
            <p>
                Once we established our ultimate goal and the required speed for the robot, we began selecting suitable components and defining the project specifications.
                <br /><br />
                For instance, we considered several motors for our project and ultimately chose the <strong>Nidec 24H</strong> as the actuator due to its advantages:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;• Brushless design ensures longer lifespan<br />
                &nbsp;&nbsp;&nbsp;&nbsp;• Higher efficiency<br />
                &nbsp;&nbsp;&nbsp;&nbsp;• Reduces wear<br />
                &nbsp;&nbsp;&nbsp;&nbsp;• Lowers energy consumption<br />
                <br />
                Moreover, we calculated the gear ratio of the motor to match our desired speed.
                <br /><br />
                After the mechanical design, we started to work on the electronics part:
                <br />
                1. We customized a PCB for:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;• BLDC motor control
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;• Handling the sensor data
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;• Communication with our remote debug console
                <br /><br />
                2. Another separate PCB for the sensor array, which has 15 sensors to detect the lines.
                <br /><br />
                We used two PCBs to simplify debugging and modifications by separating sensor data processing from motor control.

            </p>
            <div>
                <p>Check out the report below or <a href="https://drive.google.com/file/d/1U1D1FPiMNzMoUcI4M5nCP7_849gZSAJi/preview" target="_blank">click here</a>.</p>
                <iframe src="https://drive.google.com/file/d/1U1D1FPiMNzMoUcI4M5nCP7_849gZSAJi/preview" width="100%" height="600" allow="autoplay"></iframe>
            </div>
        </div >

    ),

    Cover: Project5_Cover_Image,
    Abstract_Images: [
        Project5_Abstract_Image1,
        Project5_Abstract_Image2,
        Project5_Abstract_Image7,
        Project5_Abstract_Image8,
        Project5_Abstract_Image3,
        Project5_Abstract_Image4,
        Project5_Abstract_Image5,
        Project5_Abstract_Image6,


    ],
    Gallery_Images: [
        Project5_Gallery_Image1,
        Project5_Gallery_Image2,
        Project5_Gallery_Image3,
        Project5_Gallery_Image4,
        Project5_Gallery_Image5,
        Project5_Gallery_Image6,
        Project5_Gallery_Image7,
        Project5_Gallery_Image8,
        Project5_Gallery_Image9,
        Project5_Gallery_Image10,
        Project5_Gallery_Image11
    ]
}