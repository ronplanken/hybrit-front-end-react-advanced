/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Card, Col, Row, Tabs } from 'antd';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { CustomHookContainer } from './Hooks/Examples/01 CustomHook';
import { CustomReducerContainer } from './Hooks/Examples/02 CustomReducer';

import CustomHookCode from '!!raw-loader!!./Hooks/Examples/01 CustomHook.jsx';
import CustomReducerCode from '!!raw-loader!!./Hooks/Examples/02 CustomReducer.jsx';
import { ErrorCatcher } from '../Components/ErrorBoundary';

const { TabPane } = Tabs;

export const HooksPage = () => {
  return (
    <>
      <Card title={<h1>Hooks</h1>} bodyStyle={{ padding: 0 }}>
        <Tabs type='card'>
          <TabPane tab='Voorbeelden' key='1'>
            <Tabs tabPosition='left' centered>
              <TabPane tab='01 CustomHook' key='1'>
                <Row gutter={16}>
                  <Col span={6}>
                    <SyntaxHighlighter style={dracula} language='jsx'>
                      {CustomHookCode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <CustomHookContainer />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab='02 CustomReducer' key='2'>
                <Row gutter={16}>
                  <Col span={6}>
                    <SyntaxHighlighter style={dracula} language='jsx'>
                      {CustomReducerCode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <CustomReducerContainer />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>
              {/* <TabPane tab='03 WhoThis' key='3'>
                <Row gutter={16}>
                  <Col span={6}>
                    <SyntaxHighlighter style={dracula} language='jsx'>
                      {WhoThisCode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <WhoThis />
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
                    <HookFlows />
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
                    <WhoThisLocalStorageContainer />
                  </Col>
                </Row>
              </TabPane> */}
            </Tabs>
          </TabPane>
          <TabPane tab='Oefeningen' key='2'>
            {/* <Tabs tabPosition='left' centered style={{ height: '400px' }}>
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
            </Tabs> */}
          </TabPane>
        </Tabs>
      </Card>
    </>
  );
};
