import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import profile from "../../templates/profile.png";
import icon from "../../templates/person-icon.svg";
import Calender from "../../components/Calender";
import NavBar from "../../components/NavBar";
import SideBar from "./../../components/SideBar";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="aside">
          <SideBar />
        </div>

        <div className="wrapper__body">
          
          <NavBar />

          <div className="main-container">
            <div className="main-container__left">
              <div className="main-container__left__profile">
                <img src={profile} alt="profile" className="profile-img" />
                <h3>John Doe</h3>
                <p>I am a JOan Doe, work as software Engineer</p>
              </div>
              <div className="main-container__left__leave-chart">
                <h4 className="">Total leave</h4>
                <div className="pi-chart">
                  <div className="pi-chart__circle">
                    <h1>Pi-chart</h1>
                    <div className="pi-chart__indicator">
                      <p>
                        <span className="pi-chart__color"></span>Used Leave
                      </p>
                      <p>
                        <span className="pi-chart__color"></span>Remaining Leave
                      </p>
                    </div>
                  </div>
                  <div className="pi-chart__data">
                    <ul className="pi-chart__list">
                      <li className="pi-chart__item">
                        Annual Leave
                        <span className="pi-chart__fraction">1.0/5.0</span>
                      </li>
                      <li className="pi-chart__item">
                        Floating Leave
                        <span className="pi-chart__fraction">1.0/5.0</span>
                      </li>
                      <li className="pi-chart__item">
                        Sick Leave
                        <span className="pi-chart__fraction">1.0/5.0</span>
                      </li>
                      <li className="pi-chart__item">
                        Substitute Leave
                        <span className="pi-chart__fraction">1.0/5.0</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-container__right">
              <div className="main-container__right__calender">
                <Calender />
              </div>
              <div className="main-container__right__holidays">
                <div className="holiday__head">
                  <div className="holiday__head__left">
                    <h6>Upcoming Holidays</h6>
                  </div>
                  <div className="holiday__head__right">
                    <div>View More</div>
                    <div className="holiday__head__icon">
                      <i class="fas fa-sort-down"></i>
                    </div>
                  </div>
                </div>
                <div className="holiday__body">
                  <div className="holiday__list">
                    <div className="holiday__date">
                      <h6>1/1/2022</h6>
                    </div>
                    <div className="holiday__detail">
                      <h6>New Year's Day</h6>
                    </div>
                  </div>
                  <div className="holiday__list">
                    <div className="holiday__date">
                      <h6>1/1/2022</h6>
                    </div>
                    <div className="holiday__detail">
                      <h6>New Year's Day</h6>
                    </div>
                  </div>
                  <div className="holiday__list">
                    <div className="holiday__date">
                      <h6>1/1/2022</h6>
                    </div>
                    <div className="holiday__detail">
                      <h6>New Year's Day</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-container__right__leave">
                <div className="leave__head">
                  <div className="leave__head__left">
                    <h6>Employees On Leave Today</h6>
                  </div>
                  <div className="leave__head__right">
                    <div>View More</div>
                    <div className="leave__head__icon">
                      <i class="fas fa-sort-down"></i>
                    </div>
                  </div>
                </div>
                <div className="leave__body">
                  <div className="leave__list">
                    <div className="leave__icon">
                      <img src={icon} />
                    </div>
                    <div className="leave__detail">
                      <h6>Ravi Verma</h6>
                      <h6>Front End Developer</h6>
                    </div>
                  </div>
                  <div className="leave__list">
                    <div className="leave__icon">
                      <img src={icon} />
                    </div>
                    <div className="leave__detail">
                      <h6>Ravi Verma</h6>
                      <h6>Front End Developer</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
