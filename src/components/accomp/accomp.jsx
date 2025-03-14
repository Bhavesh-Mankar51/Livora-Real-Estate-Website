import React from 'react';
import './accomp.css';
import { Accordion, Stack } from 'rsuite';
import data from '../../utils/accordian'; 

const Header = props => {
  const { icon, title, subtitle, ...rest } = props;
  return (
    <Stack {...rest} spacing={10} alignItems="flex-start">
      <div className='icon-style'>{icon}</div> {/* Render the passed icon */}
      <Stack spacing={2} direction="column" alignItems="flex-start">
        <div className=" header-title">{title}</div>
        <div style={{ color: 'var(--rs-text-secondary)', fontSize: 12 }}>{subtitle}</div>
      </Stack>
    </Stack>
  );
};

const Accomp = () => (
  <Accordion bordered defaultActiveKey={1}  className="accordian">
    {data.map((item, index) => (
      <Accordion.Panel 
        key={index}
        header={<Header icon={item.icon} title={item.heading} subtitle={item.subtitle} />}
        eventKey={index + 1}
      >
        <p className="secondaryText">{item.detail}</p>
      </Accordion.Panel>
    ))}
  </Accordion>
);

export default Accomp;
