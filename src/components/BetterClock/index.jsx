import React, {useState, useEffect} from 'react';
import useClock from "../../hooks/useClock";

function BetterClock(props) {

    const {timeString} = useClock();

    return (
        <div style={{frontSize: '42px', color: 'blue'}}>{timeString}</div>
    );
}

export default BetterClock;