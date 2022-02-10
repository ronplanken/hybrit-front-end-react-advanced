/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Card, Col, Row, Tabs } from 'antd';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { CustomHookContainer as CustomHookContainerA } from './Hooks/Oefeningen/01a CustomHook';
import { CustomHookContainer as CustomHookContainerB } from './Hooks/Uitwerkingen/01b CustomHook';
import { CustomReducerContainer } from './Hooks/Oefeningen/02 CustomReducer';
import { UseCallback as UseCallbackA } from './Hooks/Oefeningen/03a useCallback';
import { UseCallback as UseCallbackB } from './Hooks/Uitwerkingen/03b useCallback';

import { MemoTester as MemoTesterA } from './Hooks/Oefeningen/04a useMemo';
import { MemoTester as MemoTesterB } from './Hooks/Uitwerkingen/04b useMemo';

import CustomHookACode from '!!raw-loader!!./Hooks/Oefeningen/01a CustomHook.jsx';
import CustomHookBCode from '!!raw-loader!!./Hooks/Uitwerkingen/01b CustomHook.jsx';
import CustomReducerCode from '!!raw-loader!!./Hooks/Oefeningen/02 CustomReducer.jsx';
import UseCallbackACode from '!!raw-loader!!./Hooks/Oefeningen/03a useCallback.jsx';
import UseCallbackBCode from '!!raw-loader!!./Hooks/Uitwerkingen/03b useCallback.jsx';
import MemoTesterACode from '!!raw-loader!!./Hooks/Oefeningen/04a useMemo.jsx';
import MemoTesterBCode from '!!raw-loader!!./Hooks/Uitwerkingen/04b useMemo.jsx';

import { ErrorCatcher } from '../Components/ErrorBoundary';

const { TabPane } = Tabs;

export const HooksPage = () => {
  return (
    <>
      <Card title={<h1>Hooks</h1>} bodyStyle={{ padding: 0 }}>
        <Tabs type='card'>
          <TabPane tab='Oefeningen &amp; Voorbeelden' key='1'>
            <Tabs tabPosition='left' centered>
              <TabPane tab='01a CustomHook' key='1a'>
                <Row gutter={16}>
                  <Col span={10}>
                    <SyntaxHighlighter style={dracula} language='jsx' showLineNumbers={true}>
                      {CustomHookACode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <CustomHookContainerA />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab='02 CustomReducer' key='2'>
                <Row gutter={16}>
                  <Col span={10}>
                    <SyntaxHighlighter style={dracula} language='jsx' showLineNumbers={true}>
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
              <TabPane tab='03a useCallback' key='3a'>
                <Row gutter={16}>
                  <Col span={10}>
                    <SyntaxHighlighter style={dracula} language='jsx' showLineNumbers={true}>
                      {UseCallbackACode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <UseCallbackA />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab='04a useMemo' key='4a'>
                <Row gutter={16}>
                  <Col span={10}>
                    <SyntaxHighlighter style={dracula} language='jsx' showLineNumbers={true}>
                      {MemoTesterACode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <MemoTesterA />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab='Uitwerkingen' key='2'>
            <Tabs tabPosition='left' centered>
              <TabPane tab='01b CustomHook' key='1b'>
                <Row gutter={16}>
                  <Col span={10}>
                    <SyntaxHighlighter style={dracula} language='jsx' showLineNumbers={true}>
                      {CustomHookBCode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <CustomHookContainerB />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab='03b useCallback' key='3b'>
                <Row gutter={16}>
                  <Col span={10}>
                    <SyntaxHighlighter style={dracula} language='jsx' showLineNumbers={true}>
                      {UseCallbackBCode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <UseCallbackB />
                    </ErrorCatcher>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab='04b useMemo' key='4b'>
                <Row gutter={16}>
                  <Col span={10}>
                    <SyntaxHighlighter style={dracula} language='jsx' showLineNumbers={true}>
                      {MemoTesterBCode}
                    </SyntaxHighlighter>
                  </Col>
                  <Col span={6}>
                    <ErrorCatcher>
                      <MemoTesterB />
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
