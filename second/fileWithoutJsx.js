import React from "react";
import PhotoBox from "./photobox.jsx.js";
import './home.css'

export const Home = () => {
    return React.createElement("div", { id: "homepage" },
        React.createElement("img", { src: "/src/assets/BackgroundImage.png", id: "backgroundImg" }),
        React.createElement("div", { id: "navbar-home" },
            React.createElement("div", { id: "right-homebar-area" },
                React.createElement("img", { src: "/src/assets/Logo.svg", id: "logo-svg-homebar" }),
                React.createElement("p", null, "AllPhotos")), React.createElement("div", { id: "left-homebar-area" },
                    React.createElement("button", { id: "photosUpload" }, "+"),
                    React.createElement("p", { id: "username-navbar" }, "Username"),
                    React.createElement("button", { id: "btn-profile" },
                        React.createElement("img", { src: "/src/assets/imgProfile.jpeg", id: "imgProfile" })))),
        React.createElement("div", { id: "photos-display" })
    );
};