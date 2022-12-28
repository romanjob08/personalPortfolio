import React from "react";
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';
import {SiCodewars} from "react-icons/si";

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://www.linkedin.com/in/roman-mykhasiv-806862255/" target="_blank">
                    <BsLinkedin/>
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/mykhasivroman/" target="_blank">
                    <BsInstagram/>
                </a>
            </div>
            <div>
                <a href="https://github.com/romanjob08" target="_blank">
                    <BsGithub/>
                </a>
            </div>
            <div>
                <a href="https://www.codewars.com/users/%20Last%20Chance" target="_blank">
                    <SiCodewars/>
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;