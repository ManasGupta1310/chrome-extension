/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useMemo, useState } from 'react';
import { ChromeMessage, Sender } from '../types';
import Modes from './modes';
import Options from './options';

function Main() {
  /**
     * Send message to the content script
     */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sendTestMessage = () => {
    const message: ChromeMessage = {
      from: Sender.React,
      message: 'Download Links',
    };

    const queryInfo: chrome.tabs.QueryInfo = {
      active: true,
      currentWindow: true,
    };

    chrome.tabs && chrome.tabs.query(queryInfo, (tabs) => {
      const currentTabId = tabs[0].id;
      if (currentTabId) {
        chrome.tabs.sendMessage(
          currentTabId,
          message,
          (response) => {
            if (!chrome.runtime.lastError) console.log(response);
            else console.log('Chrome Runtime Error in sending message');
          },
        );
      }
    });
  };

  const [currentScreen, setCurrentScreen] = useState('Main');

  const Screen = useMemo(() => {
    switch (currentScreen) {
      case 'Lectures / Resources':
        return <Options />;
      case 'Main':
        return <Modes setCurrentScreen={setCurrentScreen} />;
      default:
        return <Modes setCurrentScreen={setCurrentScreen} />;
    }
  }, [currentScreen]);

  return (
    <div>
      {Screen}
    </div>
  );
}

export default Main;
