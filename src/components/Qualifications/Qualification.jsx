import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>
          <div className="qualification__sections">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    B.Tech (Bio-technology)
                  </h3>
                  <span className="qualification__subtitle">
                    Bengal Institute of Technology (MAKAUT)
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2017 - 2021
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">High School</h3>
                  <span className="qualification__subtitle">
                    Salt Lake Point School
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2012 - 2014
                  </div>
                </div>
              </div>

              {/* <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web Development</h3>
                  <span className="qualification__subtitle">
                    Bengal Institute of Technology (MAKAUT)
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2017 - 2021
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div> */}

              {/* <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">UX Expert</h3>
                  <span className="qualification__subtitle">
                    Bengal Institute of Technology (MAKAUT)
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2017 - 2021
                  </div>
                </div>
              </div> */}
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Ijona Technologies</h3>
                  <span className="qualification__subtitle">
                    Front-End Developer
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2023-Present
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                {/* <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div> */}
                {/* <div>
                  <h3 className="qualification__title">Byjus's </h3>
                  <span className="qualification__subtitle">
                    Business Development Associate
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2021-2022
                  </div>
                </div> */}
              </div>

              {/* <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web</h3>
                  <span className="qualification__subtitle">(MAKAUT)</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>2021
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">UX</h3>
                  <span className="qualification__subtitle">Bengal</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2017 - 2021
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
