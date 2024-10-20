import Project6_Background from "../Images/Project6/Background.jpg";
import Project6_Thumbnail from "../Images/Project6/Thumbnail.jpeg";

import Project6_Cover_Image from "../Images/Project6/Cover.png";

import Project6_Gallery_Image1 from "../Images/Project6/Gallery_Image1.jpeg";
import Project6_Gallery_Image2 from "../Images/Project6/Gallery_Image2.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Project6 = {
  id: "Denniss_Portfolio_Website",
  title: "Dennis's Portfolio Website",
  content: (
    <p>
      In June 2022, I was cooped up in my room, just me, my restless thoughts,
      and a global pandemic.
      <br />
      <br />
      I craved to do anything other than watch another Netflix series. You know
      how a four-week lockdown during the zero-COVID phase can transform your
      perspective? You start doing trivial things you normally wouldn’t because
      of how busy life usually is.
      <br />
      <br />
      I tried to cross off items on my to-do list, and one thing that had always
      been there was creating a website portfolio.
      <br />
      <br />
      Last year, I learned ReactJS, a JavaScript library for building web UI,
      through a Udemy course. I gained hands-on experience with web development,
      but I never made a portfolio to showcase my projects and myself.
      <br />
      <br />
      Determined to change that, I set out to design and develop a portfolio
      that would document my growth and future projects.
      <br />
      <br />
      It was finally time to check that off my list. And here it is, right in
      front of you!
      <br />
      <br />
    </p>
  ),
  thumbnail: Project6_Thumbnail,
  backgroundImage: Project6_Background,
  tags: [
    "#ReactJS",
    "#MUI",
    "#MobileFriendly",
    "#DesktopFirst",
    "#Portfolio",
    "#DuringCovid",
    "#DesignedwithFigma",
    "#EverythingAboutMe",
  ],
  detail_of_the_project_url:
    "https://github.com/dennischang928/Dennis-Portfolio-Mk2",
  details_BTN_text: (
    <div>
      <GitHubIcon />
      Source Code
    </div>
  ),
  //======================================================================================================

  explaination: "A website that stores and documents myself",
  time: "2022",
  about_this_Project: (
    <div>
      <h1>About this Project</h1>
      <p>
        In June 2022, I was cooped up in my room, just me, my restless thoughts,
        and a global pandemic.
        <br />
        <br />
        I craved to do anything other than watch another Netflix series. You
        know how a four-week lockdown during the zero-COVID phase can transform
        your perspective? You start doing trivial things you normally wouldn’t
        because of how busy life usually is.
        <br />
        <br />
        I tried to cross off items on my to-do list, and one thing that had
        always been there was creating a website portfolio.
        <br />
        <br />
        Last year, I learned ReactJS, a JavaScript library for building web UI,
        through a Udemy course. I gained hands-on experience with web
        development, but I never made a portfolio to showcase my projects and
        myself.
        <br />
        <br />
        Determined to change that, I set out to design and develop a portfolio
        that would document my growth and future projects.
        <br />
        <br />
        It was finally time to check that off my list. And here it is, right in
        front of you!
        <br />
        <br />
      </p>
      
    </div>
  ),

  Cover: Project6_Cover_Image,
  Abstract_Images: [
  ],
  Gallery_Images: [
    Project6_Gallery_Image1,
    Project6_Gallery_Image2,
    Project6_Cover_Image,
    Project6_Background,
    Project6_Thumbnail,
  ],
};
