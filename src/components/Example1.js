import React, { useEffect, useRef } from 'react';

export default function Example1() {
    const element = useRef(null)
    useEffect(() => {
        element.current.focus(); // always selected
    }, []);
    return (
        <div>
            <input ref={element} type="text"/>
        </div>
    )
}
