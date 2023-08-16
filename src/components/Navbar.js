import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const style = {
    color: "black",
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div class="container-fluid">
        <Link
          class="navbar-brand"
          to="/"
          style={{ fontFamily: " Vesper Libre", fontSize: "1.5rem" }}
        >
          {" "}
          News Block
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0 "
            style={{ fontSize: "1.2rem" }}
          >
            <li class="nav-item">
              <Link class="nav-link text-xl-start" to="/">
                general
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/entertainment">
                entertainment
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/business">
                business
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/health">
                health
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/science">
                science
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/sports">
                sports
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/technology">
                technology
              </Link>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggle}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {props.mode === "dark" ? "light" : "dark"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
