/* eslint-disable import/no-webpack-loader-syntax */
import { Card, Col, Row, Tabs } from 'antd';
import React from 'react';
import { HelloWorld } from './FunctioneleComponenten/Examples/01 HelloWorld';
import { HelloWhoThis } from './FunctioneleComponenten/Examples/02 HelloWhoThis';
import { WhoThis } from './FunctioneleComponenten/Examples/03 WhoThis';
import { HookFlows } from './FunctioneleComponenten/Examples/04 HookFlows';
import { WhoThisLocalStorageContainer } from './FunctioneleComponenten/Examples/05 WhoThisLocalStorage';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import HelloWorldCode from '!!raw-loader!!./FunctioneleComponenten/Examples/01 HelloWorld';
import HelloWhoThisCode from '!!raw-loader!!./FunctioneleComponenten/Examples/02 HelloWhoThis';
import WhoThisCode from '!!raw-loader!!./FunctioneleComponenten/Examples/03 WhoThis';
import HookFlowsCode from '!!raw-loader!!./FunctioneleComponenten/Examples/04 HookFlows';
import WhoThisLocalStorageCode from '!!raw-loader!!./FunctioneleComponenten/Examples/05 WhoThisLocalStorage';
import { ErrorCatcher } from '../Components/ErrorBoundary';

const { TabPane } = Tabs;

export const FunctioneleComponentenPage = () => {
  return (
    <>
      <Card title={<h1>FunctioneleComponenten</h1>} bodyStyle={{ padding: 0 }}>
        <Tabs type='card'>
          <TabPane tab='Voorbeelden' key='1'>
            <Tabs tabPosition='left' centered>
              <TabPane tab='01 Hello World' key='1'>
                <Row gutter={16}>
                  <Col span={6}>
                    <SyntaxHighlighter style={dracula} language='jsx'>
                      {HelloWorldCode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <HelloWorld />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab='02 HelloWhoThis' key='2'>
                <Row gutter={16}>
                  <Col span={6}>
                    <SyntaxHighlighter style={dracula} language='jsx'>
                      {HelloWhoThisCode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <HelloWhoThis />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab='03 WhoThis' key='3'>
                <Row gutter={16}>
                  <Col span={6}>
                    <SyntaxHighlighter style={dracula} language='jsx'>
                      {WhoThisCode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <WhoThis />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab='04 HookFlows' key='4'>
                <Row gutter={16}>
                  <Col span={8}>
                    <SyntaxHighlighter style={dracula} language='jsx'>
                      {HookFlowsCode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <HookFlows />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab='05 WhoThisLocalStorage' key='5'>
                <Row gutter={16}>
                  <Col span={8}>
                    <SyntaxHighlighter style={dracula} language='jsx'>
                      {WhoThisLocalStorageCode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <WhoThisLocalStorageContainer />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab='Oefeningen' key='2'>
            <Tabs tabPosition='left' centered style={{ height: '400px' }}>
              <TabPane tab='01 Hello World' key='1'>
                <HelloWorld />
              </TabPane>
              <TabPane tab='02 HelloWhoThis' key='2'>
                <HelloWhoThis />
              </TabPane>
              <TabPane tab='03 WhoThis' key='3'>
                <WhoThis />
              </TabPane>
              <TabPane tab='04 HookFlows' key='4'>
                <HookFlows />
              </TabPane>
              <TabPane tab='05 WhoThisLocalStorage' key='5'>
                <WhoThisLocalStorageContainer />
              </TabPane>
            </Tabs>
          </TabPane>
        </Tabs>
      </Card>
    </>
  );
};
