import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {};

function formatDate(date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}

function Clock(props) {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            //hh:mm:ss
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000);

        return () => {
            clearInterval(clockInterval);
        }
    }, []);

    return (
        <div style={{frontSize: '42px'}}>{timeString}</div>
    );
}

export default Clock;