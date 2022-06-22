import React from "react";

import { NavLink } from "react-router-dom";
import { BsFillCameraFill } from "react-icons/bs";

export default function Home() {
  return (
    <section>
      <div class="card ">
        <div class="row g-0 align-items-center ">
          <div class="col-md-6 my-4 ">
            <div class="card-body ">
              <h1 class="card-title py-5">Hello, I am </h1>
              <h1 class="card-title pb-5"> Elena Garilis!</h1>
              <div class="info">
                <div class="info-icon">
                  <BsFillCameraFill className="info-icon" />
                </div>
                <img class="info-img" src="./images/icon.jpg" alt="" />
              </div>
              <div className="intro-title py-3">
                <div className="intro-title-wrapper">
                  <div className="intro-title-item">
                    <h2>Front-end Developer</h2>
                  </div>
                  <div className="intro-title-item">
                    <h2>Based in Hamburg</h2>
                  </div>
                </div>
              </div>
              <NavLink className="btn button mt-5" to="/contact">
                <h4>Contact me</h4>
              </NavLink>
            </div>
          </div>

          <div class="col-md-6">
            <img
              src="./images/undraw_remotely_-2-j6y.svg"
              class="img-fluid rounded-start "
              alt="..."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
