import React, {useState} from 'react';
import './ColorBox.scss'

function getRandomColor() {
    const COLOR_LIST = ['green', 'red', 'yellow', 'blue', 'pink'];
    let randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {

    const [color, setColor] = useState(() => {
        let initColor;
        initColor = localStorage.getItem('box_color') || 'yellow';
        return initColor;
    });

    function handleBoxClick() {
        //get random color
        let newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }
    
    return (
        <div
            className="color-box"
            style={{ backgroundColor: color}}
            onClick={handleBoxClick}
        >
            Color Box
        </div>
    );
}

export default ColorBox;