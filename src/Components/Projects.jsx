import React from "react";
import ScreenHeading from "./Utilities/ScreenHeading";

export default function Projects(props) {
  return (
    <section>
      <div className="content">
        <ScreenHeading
          title={"Projects"}
          subHeading={"Realised during 2021-2022"}
        />

        <div class="projects-sec">
          {/* <!-- Left section - Descriptions --> */}

          <div class="description one">
            <h3>ViSound</h3>
            <p>Loud-speakers shop</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              necessitatibus enim ipsum in tempora debitis nam eius recusandae
              dolorem vitae!
            </p>
          </div>

          <div class="description two">
            <h3>Free Line</h3>
            <p>Design studio landing page</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              cupiditate quis quos rem veritatis explicabo debitis assumenda
              quod, nesciunt delectus.
            </p>
          </div>

          <div class="description three">
            <h3>MonsterCat</h3>
            <p>Album release page</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur id reiciendis qui commodi iusto quas minus soluta! Rem,
              neque quisquam?
            </p>
          </div>

          <div class="description four">
            <h3>Travel Around</h3>
            <p>Travel agency page</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              minima fugiat maiores molestiae asperiores dolores reprehenderit
              voluptates iste praesentium nemo.
            </p>
          </div>

          {/* <!-- Right section - Projects images --> */}

          <div class="projects-right image-one">
            <div class="project-item">
              <div class="container-btns">
                <a href="">Github</a>
                <a href="">Visit website</a>
              </div>
            </div>
            <img src="./images/project1.jpg" alt="" />
          </div>

          <div class="projects-right image-two">
            <div class="project-item">
              <div class="container-btns">
                <a href="">GitHub</a>
                <a href="">Visit website</a>
              </div>
            </div>
            <img src="./images/project2.jpg" alt="" />
          </div>

          <div class="projects-right image-three ">
            <div class="project-item">
              <div class="container-btns">
                <a href="">GitHub</a>
                <a href="">Visit website</a>
              </div>
            </div>
            <img src="./images/project3.jpg" alt="" />
          </div>

          <div class="projects-right image-four">
            <div class="project-item">
              <div class="container-btns">
                <a href="">GitHub</a>
                <a href="">Visit website</a>
              </div>
            </div>
            <img src="./images/project4.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
