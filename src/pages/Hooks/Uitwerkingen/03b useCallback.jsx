import { Button, Col, Divider, Input, Row, Typography } from 'antd';
import React from 'react';
import { HelloWhoThis } from '../../FunctioneleComponenten/Oefeningen/02 HelloWhoThis';

export const HandleCallback = ({ handleCallback }) => {
  const [name, setName] = React.useState("");

  const handleChange = (event: any) => {
    setName(event.target.value);
  };

  React.useEffect(() => {
    handleCallback(name);
  }, [handleCallback, name]);

  return (
    <Row>
      <Col span={8}>
        <Typography.Title level={5}>Who this?</Typography.Title>
        <Input type='text' value={name} onChange={handleChange} />
        <Divider />
        <HelloWhoThis name={name} />
      </Col>
    </Row>)
};

export const UseCallback = () => {
  const [count, setCount] = React.useState(0);

  const handleCallback = React.useCallback((param) => {
    console.log("Callback called:", param);
  }, []);

  return (
    <>
      <Button onClick={() => setCount((previousValue) => previousValue + 1)}>{count}</Button>
      <Divider />
      <HandleCallback handleCallback={handleCallback} />
    </>
  );
};
