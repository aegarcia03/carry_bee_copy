// import React, { useState, useCallback } from 'react';
// import '../css/Schedule.css';
// import CalendarComponent from './CalendarComponent';
// import TimePickerComponent from './TimePickerComponent';

// const ScheduleComponent = () => {
//   const [displayDate, setDisplayDate] = useState(() => new Date());
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [timeMode, setTimeMode] = useState<'AM' | 'PM'>('AM');
//   const [hour, setHour] = useState<string>('02');
//   const [minute, setMinute] = useState<string>('00');

//   const handlePrevMonth = useCallback(() => {
//     setDisplayDate(prevDate => {
//       console.log('Previous month clicked', prevDate);
//       const newDate = new Date(prevDate);
//       newDate.setMonth(newDate.getMonth() - 1);
//       console.log('New date will be', newDate);
//       return newDate;
//     });
//   }, []);

//   const handleNextMonth = useCallback(() => {
//     setDisplayDate(prevDate => {
//       console.log('Next month clicked', prevDate);
//       const newDate = new Date(prevDate);
//       newDate.setMonth(newDate.getMonth() + 1);
//       console.log('New date will be', newDate);
//       return newDate;
//     });
//   }, []);

//   const handleDateSelect = useCallback((date: Date) => {
//     setSelectedDate(date);
//   }, []);

//   return (
//     <div className="schedule-container">
//       <div className="calendar-and-time">
//         <CalendarComponent
//           currentDate={displayDate}
//           selectedDate={selectedDate}
//           onDateSelect={handleDateSelect}
//           onPrevMonth={handlePrevMonth}
//           onNextMonth={handleNextMonth}
//         />
//         <TimePickerComponent
//           hour={hour}
//           minute={minute}
//           timeMode={timeMode}
//           onHourChange={setHour}
//           onMinuteChange={setMinute}
//           onTimeModeChange={setTimeMode}
//         />
//       </div>
//     </div>
//   );
// };

// export default ScheduleComponent;

import React, { useState, useCallback, useEffect } from 'react';
import '../css/Schedule.css';
import CalendarComponent from './CalendarComponent';
import TimePickerComponent from './TimePickerComponent';
import useOrderStore from '../store/orderStore'; // Import the order store

const ScheduleComponent = () => {
  const [displayDate, setDisplayDate] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeMode, setTimeMode] = useState<'AM' | 'PM'>('AM');
  const [hour, setHour] = useState<string>('02');
  const [minute, setMinute] = useState<string>('00');

  const setSchedule = useOrderStore((state) => state.setSchedule); // Get setSchedule from the store

  const handlePrevMonth = useCallback(() => {
    setDisplayDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  }, []);

  const handleNextMonth = useCallback(() => {
    setDisplayDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  }, []);

  const handleDateSelect = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);
//ombines the selected date and time into a
// proper Date object and updates the store with setSchedule
  useEffect(() => {
    if (selectedDate) {
      const hour24 = timeMode === 'PM' && hour !== '12' ? parseInt(hour) + 12 : parseInt(hour);
      const finalHour = timeMode === 'AM' && hour === '12' ? 0 : hour24;

      const scheduledDate = new Date(selectedDate);
      scheduledDate.setHours(finalHour, parseInt(minute), 0, 0);

      setSchedule(scheduledDate); // Update the store with the new schedule
    }
  }, [selectedDate, hour, minute, timeMode, setSchedule]);

  return (
    <div className="schedule-container">
      <div className="calendar-and-time">
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
      </div>
    </div>
  );
};

export default ScheduleComponent;
