import { ChromeMessage, Sender } from '../types';

const messagesFromReactAppListener = (message: ChromeMessage, sender:any) => {
  if (
    sender.id === chrome.runtime.id
        && message.from === Sender.React
        && message.message === 'Download Links') {
    const links = document.querySelectorAll('a[href^="https://hello.iitk.ac.in/sites/default/files"]');
    links.forEach((link) => {
      const url = link.attributes.getNamedItem('href')?.value;
      window.open(url, '_blank');
    });
  }
};
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
