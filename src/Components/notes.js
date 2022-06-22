export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = React.useState(0);
  const [carouselOffSetStyle, setCarouselOffSetStyle] = React.useState({});

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>

            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>

          <div className="resume-heading-description">
            <span> {props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoScr: "education.svg" },
    { label: "Work Experience", logoScr: "work-history.svg" },
    { label: "Programming Skills", logoScr: "programming-skills.svg" },
    { label: "Interests", logoScr: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Bootstrap", ratingPercentage: 55 },
  ];

  const resumeDetails = [
    // Education
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Digital Career Institute"}
        subHeading={"Full Stack developer"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"New York Institute of Photography"}
        subHeading={"Accreditated photographer(PressAccreditation.com)"}
        fromDate={"2015"}
        toDate={"2016"}
      />

      <ResumeHeading
        heading={"Sevastopol State University"}
        subHeading={"BACHELOR OF ECONOMICS AND ENTREPRENEURSHIP"}
        fromDate={"1999"}
        toDate={"2003"}
      />
      <ResumeHeading
        heading={"Additional Skills"}
        subHeading={"Languages: English, Russian - fluent; German - A2"}
        subHeading={"Photo editing programms: Photoshop, Lightroom"}
      />
    </div>,

    // Work Experience

    <div className="resume-screen-container" key="workExperience"></div>,

    // Programming skills

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skll-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    // Interests

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

  const handleCarousel = (index) => {
    let offsetHeight = 360;

    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarouselOffSetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../assets/Resume/${bullet.logoScr}`).default}
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carouselOffSetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container">
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"Formal Bio Details"} />
      </div>

      <div className="resume-card">
        <div className="resume-bullets">
          <div className="bullet-container">
            <div className="bullet-icons"></div>
            <div className="bullets">{getBullets()}</div>
          </div>
        </div>

        <div className="resume-bullet-details">{getResumeScreen()}</div>
      </div>
    </div>
  );
}
