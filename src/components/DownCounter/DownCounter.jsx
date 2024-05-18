import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import './DownCounter.css';

function DownCounter({ fecha }) {

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(fecha));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(fecha));
    }, 1000);

    return () => clearInterval(timer);
  }, [fecha]);

  function calculateTimeLeft(endDate) {
    const difference = dayjs(endDate).diff(dayjs(), 'second');
    if (difference <= 0) return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    const secondsInADay = 86400; // 24 * 60 * 60
    const secondsInAnHour = 3600; // 60 * 60
    const secondsInAMinute = 60;

    const days = Math.floor(difference / secondsInADay);
    const hoursLeft = difference - days * secondsInADay;
    const hours = Math.floor(hoursLeft / secondsInAnHour);
    const minutesLeft = hoursLeft - hours * secondsInAnHour;
    const minutes = Math.floor(minutesLeft / secondsInAMinute);
    const seconds = minutesLeft - minutes * secondsInAMinute;

    const timeLeft = {
      days,
      hours,
      minutes,
      seconds,
    };

    return timeLeft;
  }

  return (
    <section className='downcounter'>
      <section className='downcounter_item'>
        <p>{timeLeft.days}</p>
        <span>D</span>
      </section>
      <section className='downcounter_item'>
        <p>{timeLeft.hours}</p>
        <span>H</span>
      </section>
      <section className='downcounter_item'>
        <p>{timeLeft.minutes}</p>
        <span>M</span>
      </section>
      <section className='downcounter_item'>
        <p>{timeLeft.seconds}</p>
        <span>S</span>
      </section>
    </section>
  );
}

// Definición de propTypes para el componente DownCounter
DownCounter.propTypes = {
  fecha: PropTypes.string.isRequired,
};

export default DownCounter;
