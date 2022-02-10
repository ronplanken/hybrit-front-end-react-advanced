import { Button, Col, Divider, Input, Row, Typography } from 'antd';
import React from 'react';
import { HelloWhoThis } from './02 HelloWhoThis';

export const WhoThisLocalStorageAContainer = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Button onClick={() => setCount((previousValue) => previousValue + 1)}>{count}</Button>
      <Divider />
      <WhoThisLocalStorage />
    </>
  );
};

export const WhoThisLocalStorage = () => {
  const [name, setName] = React.useState("");

  const handleChange = (event: any) => {
    setName(event.target.value);
  };

  /*
  Druk op de knop op het bovenliggende component
  en kijk hoe vaak hij iets weg schrijft naar localStorage.
  Los dat op door de dependencies correct toe te passen op de useEffect.
   */
  React.useEffect(() => {
    console.log('setLocalstorage', name);
    localStorage.setItem('name', name);
  });

  return (
    <Row>
      <Col span={8}>
        <Typography.Title level={5}>Who this?</Typography.Title>
        <Input type='text' value={name} onChange={handleChange} />
        <Divider />
        <HelloWhoThis name={name} />
      </Col>
    </Row>
  );
};
