import React, {useState, useEffect} from 'react';

// Higher Order Component
const withTimer = (WrappedComponent) => {
  return () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }, []);

    return <WrappedComponent time={time} />;
  };
};

export default withTimer;