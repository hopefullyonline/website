import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

import {Icon} from '@types';

const Logo: Icon = ({fill = "white"}) => {
    return (
        <LogoContainer>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                 x="0px" y="0px"
                 viewBox="0 0 260 64"
                 width="260"
                 height="64"
                 className="Logo__Desktop">
                <path d="M16.7,53h30" transform="translate(-5.7 -6)" fill="none" stroke="#4bbcf4" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="1.98"/>
                <path d="M51.7,13a1,1,0,1,1,1-1A1,1,0,0,1,51.7,13Z" transform="translate(-5.7 -6)" fill="none"
                      stroke="#6cbf84" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path
                    d="M54.7,8a.94.94,0,0,1,1,1V55a.94.94,0,0,1-1,1H8.7a.94.94,0,0,1-1-1V9a.94.94,0,0,1,1-1Zm0-2H8.7a3,3,0,0,0-3,3V55a3,3,0,0,0,3,3h46a3,3,0,0,0,3-3V9A3,3,0,0,0,54.7,6Z"
                    transform="translate(-5.7 -6)" fill="#a2aab0"/>
                <path d="M55.7,51h-2l-2-2h-40l-2,2h-2" transform="translate(-5.7 -6)" fill="none" stroke="#a2aab0"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path d="M55.7,17h-2l-2,2h-40l-2-2h-2" transform="translate(-5.7 -6)" fill="none" stroke="#a2aab0"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path d="M11.7,13a1,1,0,1,1,1-1A1,1,0,0,1,11.7,13Z" transform="translate(-5.7 -6)" fill="none"
                      stroke="#a2aab0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path d="M45.7,13h-28a1,1,0,0,1,0-2h28a.94.94,0,0,1,1,1A1,1,0,0,1,45.7,13Z"
                      transform="translate(-5.7 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.03"/>
                <path d="M15.7,35v8" transform="translate(-5.7 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.31"/>
                <path d="M23.7,37v6" transform="translate(-5.7 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path d="M19.7,29v8" transform="translate(-5.7 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.31"/>
                <path d="M19.7,41v2" transform="translate(-5.7 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path d="M23.7,31v2" transform="translate(-5.7 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path d="M27.7,35v8" transform="translate(-5.7 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.31"/>
                <path d="M31.7,29v8" transform="translate(-5.7 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.31"/>
                <path d="M31.7,41v2" transform="translate(-5.7 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path d="M47.7,35v8" transform="translate(-5.7 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.31"/>
                <path d="M39.7,37v6" transform="translate(-5.7 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path d="M43.7,29v8" transform="translate(-5.7 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.31"/>
                <path d="M43.7,41v2" transform="translate(-5.7 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path d="M39.7,31v2" transform="translate(-5.7 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path d="M35.7,35v8" transform="translate(-5.7 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.31"/>
                <path d="M75.6,28.7h7.8V21.6h2.7V39.7H83.4V31.3H75.6v8.4H72.9V21.6h2.7Z" transform="translate(-5.7 -6)"
                      fill="#a2aab0"/>
                <path
                    d="M89.4,33.9a5.6,5.6,0,0,1,1.8-4.2,6.29,6.29,0,0,1,8.6,0,6,6,0,0,1,0,8.6A6.2,6.2,0,0,1,95.4,40a5.82,5.82,0,0,1-4.3-1.8A5.44,5.44,0,0,1,89.4,33.9ZM92,34a4,4,0,0,0,.9,2.7,3,3,0,0,0,2.5,1,3.17,3.17,0,0,0,2.5-1,4.5,4.5,0,0,0,0-5.4,3,3,0,0,0-2.5-1,3,3,0,0,0-2.4,1A4.06,4.06,0,0,0,92,34Z"
                    transform="translate(-5.7 -6)" fill="#a2aab0"/>
                <path
                    d="M106.9,45.9h-2.6V28.3h2.6v1.2a5,5,0,0,1,3.5-1.6,5.07,5.07,0,0,1,3.9,1.7,6.26,6.26,0,0,1,1.5,4.3,6.44,6.44,0,0,1-1.5,4.3,5,5,0,0,1-3.8,1.7,5,5,0,0,1-3.6-1.6Zm6.3-11.8a4,4,0,0,0-.9-2.7,2.9,2.9,0,0,0-2.3-1,3,3,0,0,0-2.4,1,3.92,3.92,0,0,0-.9,2.6,3.57,3.57,0,0,0,.9,2.6,3.14,3.14,0,0,0,4.6,0A3.17,3.17,0,0,0,113.2,34.1Z"
                    transform="translate(-5.7 -6)" fill="#a2aab0"/>
                <path
                    d="M129.1,34.6h-8.2a3.69,3.69,0,0,0,.9,2.2,2.86,2.86,0,0,0,2.1.8,2.54,2.54,0,0,0,1.6-.5,6.61,6.61,0,0,0,1.4-1.7l2.2,1.2a5.83,5.83,0,0,1-1.1,1.5,5.3,5.3,0,0,1-1.2,1,5.91,5.91,0,0,1-1.4.6,8.81,8.81,0,0,1-1.7.2,5.28,5.28,0,0,1-4.1-1.6,6.35,6.35,0,0,1-1.5-4.4,6.35,6.35,0,0,1,1.5-4.4,5.13,5.13,0,0,1,4-1.7,5.06,5.06,0,0,1,4,1.6,6.18,6.18,0,0,1,1.5,4.4Zm-2.7-2.1a2.59,2.59,0,0,0-2.7-2.1,2.77,2.77,0,0,0-.9.1,3,3,0,0,0-.8.4,2,2,0,0,0-.6.7,3.55,3.55,0,0,0-.4.9Z"
                    transform="translate(-5.7 -6)" fill="#a2aab0"/>
                <path
                    d="M134.7,30.8v9H132v-9h-.9V28.3h.9V23.9c0-1.4.2-2.5.8-3a3.77,3.77,0,0,1,3-1.2,4.54,4.54,0,0,1,1.8.4v2.7l-.3-.1a3,3,0,0,0-1.4-.4c-.5,0-.8.2-.9.5a4.47,4.47,0,0,0-.2,1.9v3.8h2.9V31h-3Z"
                    transform="translate(-5.7 -6)" fill="#a2aab0"/>
                <path
                    d="M142,28.3v6.6c0,1.9.7,2.8,2.2,2.8s2.2-.9,2.2-2.8V28.3H149v6.6a8.75,8.75,0,0,1-.3,2.4,4.19,4.19,0,0,1-1.1,1.6,5.42,5.42,0,0,1-6.8,0,6.1,6.1,0,0,1-1.2-1.6,7,7,0,0,1-.3-2.4V28.3Z"
                    transform="translate(-5.7 -6)" fill="#a2aab0"/>
                <path d="M155.1,19.9V39.7h-2.6V19.9Z" transform="translate(-5.7 -6)" fill="#a2aab0"/>
                <path d="M161.1,19.9V39.7h-2.6V19.9Z" transform="translate(-5.7 -6)" fill="#a2aab0"/>
                <path d="M168.1,37.6,163,28.3h3.1l3.5,6.6,3.3-6.6h3l-9.1,17.6h-3Z" transform="translate(-5.7 -6)"
                      fill="#a2aab0"/>
                <path
                    d="M177.5,30.6a9,9,0,0,1,2.8-6.6,9.37,9.37,0,0,1,6.7-2.7,8.7,8.7,0,0,1,6.6,2.8,8.85,8.85,0,0,1,2.8,6.6,8.7,8.7,0,0,1-2.8,6.6,9.43,9.43,0,0,1-6.8,2.7,9.55,9.55,0,0,1-6.3-2.4A8.93,8.93,0,0,1,177.5,30.6Zm2.7,0a6.63,6.63,0,0,0,2,4.9,6.35,6.35,0,0,0,4.6,1.9,6.83,6.83,0,0,0,6.8-6.9,6.87,6.87,0,0,0-1.9-4.9,6.76,6.76,0,0,0-9.6,0,7.78,7.78,0,0,0-1.9,5Z"
                    transform="translate(-5.7 -6)" fill="#a2aab0"/>
                <path
                    d="M199.4,28.3H202v1.1a4.44,4.44,0,0,1,3.1-1.4,3.74,3.74,0,0,1,3.1,1.3,5.41,5.41,0,0,1,1,3.5v7h-2.6V33.4a4.11,4.11,0,0,0-.5-2.3,2.44,2.44,0,0,0-3.6.2,5.78,5.78,0,0,0-.5,3v5.5h-2.6Z"
                    transform="translate(-5.7 -6)" fill="#a2aab0"/>
                <path d="M215.2,19.9V39.7h-2.6V19.9Z" transform="translate(-5.7 -6)" fill="#a2aab0"/>
                <path d="M218.3,23.6a1.71,1.71,0,1,1,.5,1.2A1.66,1.66,0,0,1,218.3,23.6Zm3,4.7V39.7h-2.6V28.3Z"
                      transform="translate(-5.7 -6)" fill="#a2aab0"/>
                <path
                    d="M224.7,28.3h2.6v1.1a4.44,4.44,0,0,1,3.1-1.4,3.74,3.74,0,0,1,3.1,1.3,5.41,5.41,0,0,1,1,3.5v7h-2.6V33.4a4.11,4.11,0,0,0-.5-2.3,2.44,2.44,0,0,0-3.6.2,5.78,5.78,0,0,0-.5,3v5.5h-2.6Z"
                    transform="translate(-5.7 -6)" fill="#a2aab0"/>
                <path
                    d="M248.2,34.6H240a3.69,3.69,0,0,0,.9,2.2,2.86,2.86,0,0,0,2.1.8,2.54,2.54,0,0,0,1.6-.5,6.61,6.61,0,0,0,1.4-1.7l2.2,1.2a5.83,5.83,0,0,1-1.1,1.5,5.3,5.3,0,0,1-1.2,1,5.91,5.91,0,0,1-1.4.6,8.81,8.81,0,0,1-1.7.2,5.28,5.28,0,0,1-4.1-1.6,6.35,6.35,0,0,1-1.5-4.4,6.35,6.35,0,0,1,1.5-4.4,5.13,5.13,0,0,1,4-1.7,5.06,5.06,0,0,1,4,1.6,6.18,6.18,0,0,1,1.5,4.4Zm-2.7-2.1a2.59,2.59,0,0,0-2.7-2.1,2.77,2.77,0,0,0-.9.1,3,3,0,0,0-.8.4,2,2,0,0,0-.6.7,3.55,3.55,0,0,0-.4.9Z"
                    transform="translate(-5.7 -6)" fill="#a2aab0"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" viewBox="0 0 64 64"
                 width="64"
                 height="64"
                 className="Logo__Mobile">
                <path d="M17,53H47" transform="translate(-6 -6)" fill="none" stroke="#4bbcf4" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="1.98"/>
                <path d="M52,13a1,1,0,1,1,1-1A.94.94,0,0,1,52,13Z" transform="translate(-6 -6)" fill="none"
                      stroke="#6cbf84" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path
                    d="M55,8a.94.94,0,0,1,1,1V55a.94.94,0,0,1-1,1H9a.94.94,0,0,1-1-1V9A.94.94,0,0,1,9,8Zm0-2H9A3,3,0,0,0,6,9V55a3,3,0,0,0,3,3H55a3,3,0,0,0,3-3V9A3,3,0,0,0,55,6Z"
                    transform="translate(-6 -6)" fill="#a2aab0"/>
                <path d="M56,51H54l-2-2H12l-2,2H8" transform="translate(-6 -6)" fill="none" stroke="#a2aab0"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path d="M56,17H54l-2,2H12l-2-2H8" transform="translate(-6 -6)" fill="none" stroke="#a2aab0"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path d="M12,13a1,1,0,1,1,1-1A.94.94,0,0,1,12,13Z" transform="translate(-6 -6)" fill="none"
                      stroke="#a2aab0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path d="M46,13H18a1,1,0,0,1,0-2H46a1,1,0,0,1,0,2Z" transform="translate(-6 -6)" fill="none"
                      stroke="#a2aab0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.03"/>
                <path d="M16,35v8" transform="translate(-6 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.31"/>
                <path d="M24,37v6" transform="translate(-6 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path d="M20,29v8" transform="translate(-6 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.31"/>
                <path d="M20,41v2" transform="translate(-6 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path d="M24,31v2" transform="translate(-6 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path d="M28,35v8" transform="translate(-6 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.31"/>
                <path d="M32,29v8" transform="translate(-6 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.31"/>
                <path d="M32,41v2" transform="translate(-6 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path d="M48,35v8" transform="translate(-6 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.31"/>
                <path d="M40,37v6" transform="translate(-6 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path d="M44,29v8" transform="translate(-6 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.31"/>
                <path d="M44,41v2" transform="translate(-6 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path d="M40,31v2" transform="translate(-6 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"/>
                <path d="M36,35v8" transform="translate(-6 -6)" fill="none" stroke="#a2aab0" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.31"/>
            </svg>

        </LogoContainer>
    );
};

export default Logo;

const LogoContainer = styled.div`
.Logo__Mobile {
    display: none;
}

${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;
