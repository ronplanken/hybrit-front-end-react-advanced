import { Col, Divider, Input, Row, Typography } from 'antd';
import React from 'react';
import { HelloWhoThis } from './02 HelloWhoThis';

export const WhoThis = () => {
  const [name, setName] = React.useState();

  const handleChange = (event: any) => {
    setName(event.target.value);
  };

  /*
  Voer hier een side effect toe die de naam in localstorage zet
  */

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
