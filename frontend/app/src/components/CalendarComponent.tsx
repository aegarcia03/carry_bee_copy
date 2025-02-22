import React, { useMemo } from 'react';
import '../css/Calendar.css';

interface CalendarDate {
  day: number;
  isCurrentMonth: boolean;
  date: Date;
}

interface CalendarProps {
  currentDate?: Date;
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarComponent = ({
  currentDate = new Date(), // Provide default value
  selectedDate,
  onDateSelect,
  onPrevMonth,
  onNextMonth,
}: CalendarProps) => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const calendarData = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const prevMonthDays = new Date(year, month, 0).getDate();

    const totalDays: CalendarDate[] = [];

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, prevMonthDays - i);
      totalDays.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        date
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      totalDays.push({
        day: i,
        isCurrentMonth: true,
        date
      });
    }

    // Next month days
    const remainingDays = 42 - totalDays.length;
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(year, month + 1, i);
      totalDays.push({
        day: i,
        isCurrentMonth: false,
        date
      });
    }

    return totalDays;
  }, [currentDate]);

  const isSameDate = (date1: Date, date2: Date) => {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  };

  const handlePrevClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onPrevMonth();
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNextMonth();
  };

  const handleDateSelect = (date: Date) => {
    console.log(onDateSelect,"handleDateSelect", date)
    onDateSelect(date)
  }

  return (
    <div className="calendar-section">
      <div className="text-center">
        <h2 className="section-heading">Choose date</h2>

        <div className="month-navigation">
          <button
            type="button"
            className="nav-button"
            onClick={() => onPrevMonth()}
          >
            ←
          </button>
          <h2 className="month-label">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button
            type="button"
            className="nav-button"
            onClick={() => onNextMonth()}
          >
            →
          </button>
        </div>

        <div className="calendar-header">
          {days.map(day => (
            <div key={day} className="calendar-header-cell">
              {day}
            </div>
          ))}
        </div>

        <div className="calendar-grid">
          {calendarData.map((date: CalendarDate, index) => (
            <div
              key={index}
              onClick={() => date.isCurrentMonth && handleDateSelect(date.date)}
              className={`
                calendar-date-cell
                ${!date.isCurrentMonth ? 'calendar-date-other-month' : ''}
                ${selectedDate && date.isCurrentMonth && isSameDate(date.date, selectedDate)
                  ? 'date-selection-active'
                  : ''}
              `}
            >
              {date.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
