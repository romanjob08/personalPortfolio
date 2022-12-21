import React from "react";
import {NavigationDots, SocialMedia} from '../components'

const AppWrap = (Component: React.FC<any>, idName: string, classNames?: string) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia/>

            <div className="app__wrapper app__flex">
                <Component/>
                <div className="copyright">
                    <p className="p-text">@2022 Roma</p>
                </div>
            </div>

            <NavigationDots active={idName} />
        </div>
    )
}

export default AppWrap