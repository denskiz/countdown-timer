import { useEffect, useState } from "react";
import "./Clock.css";

interface AppProps {
  date: string;
}

interface AppState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Clock = ({ date }: AppProps): JSX.Element => {
  const [time, setTime] = useState<AppState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    getTimeUntill(date);
    const timer = setInterval(() => {
      getTimeUntill(date);
    }, 1000);
    return () => clearInterval(timer);
  }, [date]);

  function getTimeUntill(date: string): void {
    const time = Date.parse(date) - Date.parse(String(new Date()));
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / 1000 / 60) % 60);
    let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    let days = Math.floor(time / (1000 * 60 * 60 * 24));

    setTime({ seconds, minutes, hours, days });
  }

  function leading0(num: number) {
    return num < 10 ? "0" + num : num;
  }

  return (
    <div className="clock">
      <div className="clock-days">{leading0(time.days)} days</div>
      <div className="clock-hours">{leading0(time.hours)} hours</div>
      <div className="clock-minutes">{leading0(time.minutes)} minutes</div>
      <div className="clock-seconds">{leading0(time.seconds)} seconds</div>
    </div>
  );
};

export default Clock;
