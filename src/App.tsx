/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { ChromeMessage, Sender } from './types';
import './App.css';

export function App() {
  const [pageURL, setPageUrl] = useState<string>('');
  const [pageTitle, setPageTitle] = useState<string>('');
  /**
     * Get current URL
     */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs && chrome.tabs.query(queryInfo, (tabs) => {
      const { url, title } = tabs[0];
      console.log(pageURL);
      if (title) setPageTitle(title);
      if (url) setPageUrl(url);
    });
  }, [pageURL]);

  /**
     * Send message to the content script
     */
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

  return (
    <div className="App">
      <header className="App-header">
        <p>{pageTitle}</p>
        <Button variant="contained" onClick={sendTestMessage}>Download</Button>
      </header>
    </div>
  );
}

export default App;
