import React from "react";
import ScreenHeading from "./Utilities/ScreenHeading";
import { FaUniversity } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { RiHandHeartLine } from "react-icons/ri";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = React.useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = React.useState({});

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-sub-heading-next">
          <span>{props.subHeadingNext ? props.subHeadingNext : ""}</span>
        </div>

        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    {
      label: "Education",
      logo: (
        <div>
          <FaUniversity />
        </div>
      ),
    },
    {
      label: "Programming Skills",
      logo: (
        <div>
          <FaLaptopCode />
        </div>
      ),
    },
    {
      label: "Soft Skills",
      logo: (
        <div>
          <FaHistory />
        </div>
      ),
    },

    {
      label: "Interests",
      logo: (
        <div>
          <RiHandHeartLine />
        </div>
      ),
    },
  ];

  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "Bootstrap", ratingPercentage: 75 },
    { skill: "Bootstrap", ratingPercentage: 75 },
    { skill: "Javascript", ratingPercentage: 80 },
    { skill: "React", ratingPercentage: 75 },
    { skill: "Node JS", ratingPercentage: 65 },
    { skill: "Mongo Db", ratingPercentage: 75 },
  ];

  const resumeDetails = [
    /* EDUCATION */
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Digital Career Institute"}
        subHeading={"Full Stack developer"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"NY Institute of Photography"}
        subHeading={"Accreditated photographer (PressAccreditation.com)"}
        fromDate={"2015"}
        toDate={"2016"}
      />

      <ResumeHeading
        heading={"Sevastopol State University"}
        subHeading={"Bachelor of Economics and Entrepreneurship "}
        fromDate={"1999"}
        toDate={"2003"}
      />
      <ResumeHeading
        heading={"Additional Skills"}
        subHeading={"Languages: English, Russian - fluent; German - A2;"}
        subHeadingNext={" Photo editing programms: Photoshop, Lightroom"}
      />
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span className="resume-sub-heading">{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* SOFT SKILLS */
    <div className="resume-screen-container" key="work-experience">
      <ul className="soft-skills">
        <li>Team work and cultural fit</li>
        <li>Patience & Curiosity</li>
        <li>Time management</li>
        <li>Eagerness to learn</li>
        <li>Problem-solving skills</li>
        <li>Adaptability & Approachability</li>
      </ul>
    </div>,

    /* Interests */

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Photography"
        description="Like to capture emotions of people and bring them into lovely memories."
      />
      <ResumeHeading
        heading="Sport and Nutrition"
        description="Dive with my head into Yoga and meditation, enjoy riding bike, swimming and hiking"
      />
      <ResumeHeading
        heading="Sewing clothes and hame decorations"
        description="Have tried to sew everything: from underwear to furcoat. Enjoy greatly to decorate home with the selfmade items"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <div className="bullet-logo">{bullet.logo}</div>
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <section>
      <div class="card ">
        <div class="row g-0 align-items-center ">
          <ScreenHeading
            title={"Resume"}
            subHeading={"My formal Bio Details"}
          />
          <div className="resume-card">
            <div className="resume-bullets">
              <div className="bullet-container">
                <div className="bullet-icons"></div>
                <div className="bullets">{getBullets()}</div>
              </div>
            </div>
            <div className="resume-bullet-details">{getResumeScreens()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
