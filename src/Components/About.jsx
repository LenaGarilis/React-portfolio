import React from "react";
import ScreenHeading from "./Utilities/ScreenHeading";
import { NavLink } from "react-router-dom";

export default function About(props) {
  return (
    <section>
      <div class="card ">
        <div class="row g-0 align-items-center ">
          <ScreenHeading title={"About me"} subHeading={"Hire & benefit"} />
          <div class="col-md-6">
            <img
              src="./images/undraw_react_re_g3ui.svg"
              class="img-fluid rounded-start "
              alt="..."
            />
          </div>

          <div class="col-md-6 my-4 ">
            <div class="card-body aboutme">
              <h5>
                I am result-oriented and community-focused web developer,
                passionate about building user-friendly and thoughtful products.
              </h5>

              <h5>
                My experience of building effective and sustainable
                international business made from me and real team player, fast
                learner, able to pick up new skills and juggle different
                projects and roles with relative ease.
              </h5>
              <h5>I take my work seriously but not myself.</h5>
              <div className="buttons-about">
                <NavLink className="btn button mt-5 " to="/contact">
                  <h4>Contact</h4>
                </NavLink>
                <a
                  className="hover-btn"
                  href="CV-Elena_Garilis.pdf"
                  download="CV-Elena_Garilis.pdf"
                >
                  <button className="btn button mt-5">
                    <h4>Get CV</h4>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
