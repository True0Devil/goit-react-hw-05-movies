import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const [countdown, setCountdown] = useState(3);
  const timerId = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(countdown);
    if (countdown === -1) {
      clearInterval(timerId.current);
      navigate('/');
    }
  }, [countdown, navigate]);

  return (
    <div>
      <h1>The page you are trying to access doesn't exist</h1>
      <p>Redirecting in {countdown}... </p>
    </div>
  );
};

export default PageNotFound;
