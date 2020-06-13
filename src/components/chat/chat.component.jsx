import React from 'react';
import './chat.styles.css';

export const Chat = (props) => (
  <div className="chat">
    <iframe title="streaming-chat" frameBorder="0"
        scrolling="true"
        id="prensacenerc"
        src="https://www.twitch.tv/embed/prensacenerc/chat?parent=enercseproyecta.com.ar"
        height="500"
        width="100%">
    </iframe>
  </div>
);