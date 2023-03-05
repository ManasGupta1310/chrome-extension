/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/button-has-type */
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';

import './App.css';
import Main from './components/main';

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
      if (title) setPageTitle(title);
      if (url) setPageUrl(url);
      console.log(pageTitle);
    });
  }, [pageURL]);

  return (
    <div className="App">
      <div className="App-content">
        <Stack direction="column" spacing={2}>
          <Typography variant="h6" component="h2" gutterBottom> Mookit Downloader</Typography>
          <Main />
        </Stack>
      </div>
    </div>
  );
}

export default App;
