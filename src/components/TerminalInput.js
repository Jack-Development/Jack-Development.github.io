import React, { useState, useEffect } from 'react';

const TerminalInput = () => {
    const [text, setText] = useState('Jack');

    useEffect(() => {
        const interval = setInterval(() => {
            setText(prevText => prevText === 'Jack_' ? 'Jack\u00A0' : 'Jack_');
        }, 500);

        return () => clearInterval(interval);  // clean up interval on unmount
    }, []);

    return (
        <div style={{fontFamily: 'monospace'}}>
            {text}
        </div>
    );
}

export default TerminalInput;