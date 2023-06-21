import React, { useEffect, useRef } from 'react';

const Animation = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        const path = svgRef.current.querySelector('path');
        const length = path.getTotalLength();

        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;

        // Animate the drawing of the path
        path.style.animation = 'dash 6s ease-in-out forwards';

        // Define the animation keyframes
        const keyframes = `@keyframes dash {
      0% { stroke-dashoffset: ${length}; }
      100% { stroke-dashoffset: 0; }
    }`;

        // Create a style element and append the keyframes
        const styleEl = document.createElement('style');
        styleEl.innerHTML = keyframes;

        // Append the style element to the document head
        document.head.appendChild(styleEl);
    }, []);

    return (
        <div className='absolute top-[-90px] bottom-auto left-[35%] right-auto transform rotate-180'>
            <div style={{}}>
                <svg
                    ref={svgRef}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 84"
                    width="150"
                    height="84"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        <clipPath id="__lottie_element_5">
                            <rect width="150" height="84" x="0" y="0"></rect>
                        </clipPath>
                    </defs>
                    <g clipPath="url(#__lottie_element_5)">
                        <g
                            transform="matrix(1.203660011291504,0,0,1.203660011291504,78.125,34.75)"
                            opacity="1"
                        >
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="miter"
                                    fill-opacity="0"
                                    stroke-miterlimit="4"
                                    stroke="rgb(0,0,0)"
                                    stroke-opacity="1"
                                    stroke-width="4"
                                    d=" M55.5,31.5 C55.5,31.5 -11.319000244140625,37.178001403808594 -9.857999801635742,-2.484999895095825 C-9.092000007629395,-23.27400016784668 24.405000686645508,-27.20800018310547 29.908000946044922,-5.761000156402588 C31.027999877929688,-1.3949999809265137 32.67499923706055,20.930999755859375 -1.75,24.5 C-31.881999969482422,27.624000549316406 -52.4640007019043,-9.656000137329102 -51.5,-18.334999084472656 C-51.375,-18.834999084472656 -36.25,-9.375 -36.25,-9.375"
                                ></path>
                            </g>
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    fill-opacity="0"
                                    stroke="rgb(0,0,0)"
                                    stroke-opacity="1"
                                    stroke-width="4"
                                    d=" M-59.96900177001953,-3.303999900817871 C-59.96900177001953,-3.303999900817871 -51.46900177001953,-18.304000854492188 -51.46900177001953,-18.304000854492188"
                                ></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Animation;
