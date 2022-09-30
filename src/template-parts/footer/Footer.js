import React from 'react';
import FooterFour from '../../components/footer-modules/FooterFour';
import FooterOne from '../../components/footer-modules/FooterOne';
import FooterThree from '../../components/footer-modules/FooterThree';
import FooterTwo from '../../components/footer-modules/FooterTwo';
import ScheduleAppointment from '../../components/schedule-appointment/ScheduleAppointment';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <ScheduleAppointment />
      <div className='footer__main'>
        <FooterOne />
        <FooterTwo />
        <FooterThree />
        <FooterFour />
      </div>
    </div>
  );
};

export default Footer;
