import React from "react";
import ScreenHeading from "./Utilities/ScreenHeading";
import { NavLink } from "react-router-dom";

export default function About(props) {
  return (
    <section>
      <div className="content">
        <ScreenHeading title={"About me"} subHeading={"Hire & benefit"} />
        <div class="card ">
          <div class="row g-0 align-items-center ">
            <div class="col-md-6">
              <img
                src="./images/undraw_react_re_g3ui.svg"
                class="img-fluid rounded-start "
                alt="..."
              />
            </div>

            <div class="col-md-6 my-4 ">
              <div class="card-body ">
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  architecto eveniet autem earum beatae quisquam, eum laboriosam
                  dolorum. Corporis at odio consequatur? At, harum incidunt nam
                  iure, itaque inventore saepe porro aut perferendis quo facere
                  repudiandae numquam rem asperiores ducimus voluptate laborum
                  corrupti quae nihil eveniet, qui laboriosam! Alias, quisquam?
                </h5>
                <div className="text-center">
                  {" "}
                  <NavLink className="btn button mt-5 me-5" to="/contact">
                    <h4>Contact me</h4>
                  </NavLink>
                  <button className="btn button mt-5">
                    <h4>Get CV</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
