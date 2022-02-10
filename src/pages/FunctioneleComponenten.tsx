/* eslint-disable import/no-webpack-loader-syntax */
import { Card, Col, Row, Tabs } from 'antd';
import React from 'react';
import { HelloWorld } from './FunctioneleComponenten/Oefeningen/01 HelloWorld';
import { HelloWhoThis } from './FunctioneleComponenten/Oefeningen/02 HelloWhoThis';
import { WhoThis } from './FunctioneleComponenten/Oefeningen/03 WhoThis';
import { WhoThis as WhoThisB } from './FunctioneleComponenten/Uitwerkingen/03b WhoThis';
import { WhoThis as WhoThisC } from './FunctioneleComponenten/Uitwerkingen/03c WhoThis';
import { HookFlows } from './FunctioneleComponenten/Oefeningen/05 HookFlows';
import { WhoThisLocalStorageAContainer } from './FunctioneleComponenten/Oefeningen/06a WhoThisLocalStorage';
import { WhoThisLocalStorageBContainer } from './FunctioneleComponenten/Uitwerkingen/06b WhoThisLocalStorage';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import TicTacToeA from './FunctioneleComponenten/Oefeningen/04a TicTacToe';
import TicTacToeB from './FunctioneleComponenten/Uitwerkingen/04b TicTacToe';

import HelloWorldCode from '!!raw-loader!!./FunctioneleComponenten/Oefeningen/01 HelloWorld';
import HelloWhoThisCode from '!!raw-loader!!./FunctioneleComponenten/Oefeningen/02 HelloWhoThis';
import WhoThisACode from '!!raw-loader!!./FunctioneleComponenten/Oefeningen/03 WhoThis';
import WhoThisBCode from '!!raw-loader!!./FunctioneleComponenten/Uitwerkingen/03b WhoThis';
import WhoThisCCode from '!!raw-loader!!./FunctioneleComponenten/Uitwerkingen/03c WhoThis';
import HookFlowsCode from '!!raw-loader!!./FunctioneleComponenten/Oefeningen/05 HookFlows';
import WhoThisLocalStorageACode from '!!raw-loader!!./FunctioneleComponenten/Oefeningen/06a WhoThisLocalStorage';
import WhoThisLocalStorageBCode from '!!raw-loader!!./FunctioneleComponenten/Uitwerkingen/06b WhoThisLocalStorage';
import TicTacToeACode from '!!raw-loader!!./FunctioneleComponenten/Oefeningen/04a TicTacToe';
import TicTacToeBCode from '!!raw-loader!!./FunctioneleComponenten/Uitwerkingen/04b TicTacToe';

import { ErrorCatcher } from '../Components/ErrorBoundary';

const { TabPane } = Tabs;

export const FunctioneleComponentenPage = () => {
  return (
    <>
      <Card title={<h1>FunctioneleComponenten</h1>} bodyStyle={{ padding: 0 }}>
        <Tabs type='card'>
          <TabPane tab='Oefeningen &amp; Voorbeelden' key='1'>
            <Tabs tabPosition='left' centered>
              <TabPane tab='01 Hello World' key='1'>
                <Row gutter={16}>
                  <Col span={10}>
                    <SyntaxHighlighter style={dracula} language='jsx' showLineNumbers={true}>
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
                  <Col span={10}>
                    <SyntaxHighlighter style={dracula} language='jsx' showLineNumbers={true}>
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
                  <Col span={10}>
                    <SyntaxHighlighter style={dracula} language='jsx' showLineNumbers={true}>
                      {WhoThisACode}
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
                  <Col span={10}>
                    <SyntaxHighlighter style={dracula} language='jsx' showLineNumbers={true}>
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
              <TabPane tab='05 TicTacToe.jsx' key='5'>
                <Row gutter={16}>
                  <Col span={12}>
                    <SyntaxHighlighter style={dracula} language='jsx' showLineNumbers={true}>
                      {TicTacToeACode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <TicTacToeA />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab='06a WhoThisLocalStorage' key='6a'>
                <Row gutter={16}>
                  <Col span={10}>
                    <SyntaxHighlighter style={dracula} language='jsx' showLineNumbers={true}>
                      {WhoThisLocalStorageACode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <WhoThisLocalStorageAContainer />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab='Uitwerkingen' key='2'>
            <Tabs tabPosition='left' centered>
              <TabPane tab='03b WhoThis' key='3a'>
                <Row gutter={16}>
                  <Col span={10}>
                    <SyntaxHighlighter style={dracula} language='jsx' showLineNumbers={true}>
                      {WhoThisBCode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <WhoThisB />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab='03c WhoThis' key='3b'>
                <Row gutter={16}>
                  <Col span={10}>
                    <SyntaxHighlighter style={dracula} language='jsx' showLineNumbers={true}>
                      {WhoThisCCode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <WhoThisC />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab='05b TicTacToe.jsx' key='5b'>
                <Row gutter={16}>
                  <Col span={12}>
                    <SyntaxHighlighter style={dracula} language='jsx' showLineNumbers={true}>
                      {TicTacToeBCode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <TicTacToeB />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab='06b WhoThisLocalStorage' key='6b'>
                <Row gutter={16}>
                  <Col span={10}>
                    <SyntaxHighlighter style={dracula} language='jsx' showLineNumbers={true}>
                      {WhoThisLocalStorageBCode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <WhoThisLocalStorageBContainer />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </TabPane>
        </Tabs>
      </Card>
    </>
  );
};
