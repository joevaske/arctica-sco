import React from 'react';
import Button from '../button/Button';
import './ScheduleAppointment.scss';

const ScheduleAppointment = () => {
  return (
    <div className='schedule-appointment'>
      <h3>
        <span>LETS TALK!</span> Schedule an appointment.{' '}
      </h3>
      <Button color={`#fff`} text={`GET IN TOUCH WITH US!`} />
    </div>
  );
};

export default ScheduleAppointment;
