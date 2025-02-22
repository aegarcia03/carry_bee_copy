import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavComponent from '../components/bottomNavComponent';
import NavbarComponent from '../components/NavbarComponent';
import CalendarComponent from '../components/CalendarComponent';
import TimePickerComponent from '../components/TimePickerComponent';
import NextButtonComponent from '../components/nextButton';
import PrevButtonComponent from '../components/previousButton';
import '../css/Schedule.css';
import useOrderStore from '../store/orderStore'; // Import the order store


const Schedule: React.FC = () => {
  const navigate = useNavigate();
  const [displayDate, setDisplayDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeMode, setTimeMode] = useState<'AM' | 'PM'>('AM');
  const [hour, setHour] = useState<string>('02');
  const [minute, setMinute] = useState<string>('00');
  
  const setSchedule = useOrderStore((state) => state.setSchedule); // Get setSchedule from the store

  const handlePrevMonth = () => {
    setDisplayDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setDisplayDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handlePrevClick = () => {
    navigate('/'); // Navigate to homepage
  };

  const handleNextClick = () => {
    navigate('/form'); // Navigate to form page
  };

  //ombines the selected date and time into a
// proper Date object and updates the store with setSchedule
useEffect(() => {
  if (selectedDate) {
    console.log(selectedDate, "This is from the useEffect")
    const hour24 = timeMode === 'PM' && hour !== '12' ? parseInt(hour) + 12 : parseInt(hour);
    const finalHour = timeMode === 'AM' && hour === '12' ? 0 : hour24;

    const scheduledDate = new Date(selectedDate);
    scheduledDate.setHours(finalHour, parseInt(minute), 0, 0);

    setSchedule(scheduledDate); // Update the store with the new schedul
  }
}, [selectedDate, hour, minute, timeMode]);

  return (
    <div className="h-screen flex justify-center bg-gray-50">
      <div className="app-container">
        <NavbarComponent />
        <div className="content-wrapper">
          <div className="schedule-container">
            <CalendarComponent
              currentDate={displayDate}
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
              onPrevMonth={handlePrevMonth}
              onNextMonth={handleNextMonth}
            />
            <TimePickerComponent
              hour={hour}
              minute={minute}
              timeMode={timeMode}
              selectedDate={selectedDate}
              onHourChange={setHour}
              onMinuteChange={setMinute}
              onTimeModeChange={setTimeMode}
            />
            <div className="navigation-buttons">
              <PrevButtonComponent onClick={handlePrevClick} />
              <NextButtonComponent onClick={handleNextClick} />
            </div>
          </div>
        </div>
        <div className="bottom-nav-wrapper">
          <BottomNavComponent />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
