import React from "react";
import ScreenHeading from "./Utilities/ScreenHeading";
import data from "./Utilities/project.js";

export default function Projects(props) {
  return (
    <section>
      <div class="card ">
        <div class="row g-0 align-items-center ">
          <ScreenHeading
            title={"Projects"}
            subHeading={"Realised during 2021-2022"}
          />
          <div className="container project_container">
            {data.map(({ id, image, title, content, text, demo }) => {
              return (
                <article key={id} className="project_item">
                  <div className="project_item_image">
                    <img key={image} src={image} alt={title} />
                  </div>
                  <h3 key={title}>{title}</h3>
                  <p key={content}>{content}</p>
                  <p key={text}>{text}</p>
                  <div className="project_item_button">
                    <a
                      className="hover-btn"
                      key={demo}
                      href={demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn live-demo mt-5">
                        <h4>Live demo</h4>
                      </button>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
