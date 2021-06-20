import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

useMagicColor.propTypes = {};

function randomColor(currentColor) {
    const COLOR_LIST = ['red', 'green', 'yellow'];
    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;
    console.log(newIndex);
    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 3);
    }
    return COLOR_LIST[newIndex];
}

function useMagicColor(props) {
    const [color, setColor] = useState('transparent');
    const colorRed = useRef('transparent');

    /*Change color every 1 second*/
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(colorRed.current);
            setColor(newColor);

            colorRed.current = newColor;
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        }
    }, []);

    return color;
}

export default useMagicColor;