import React from 'react';
import withTimer from './withTimer';

function DisplayTime({time}) {
    return <div>Current time: {time.toLocaleTimeString()}</div>;
}

export default withTimer(DisplayTime);