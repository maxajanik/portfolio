import React, {useState, useEffect} from 'react';

const Events = ({event}) => {
    return(
    <div>
        <div>
            <p>{event.text}</p>
            <p>{event.tags}</p>
        </div>
    </div>
    );
}

export default Events;