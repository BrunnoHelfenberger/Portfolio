import React, { useState, useEffect } from 'react';
import './LeftPanel.css';

function LeftPanel(props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  function handleLinkClick(event, link) {
    event.preventDefault();
    props.handleLinkClick(link);
  }

  return (


      <div className={`left-panel ${show ? 'show' : ''}`}>
        <a href="#" onClick={(event) => handleLinkClick(event, 'link1')}>VBA</a>
        <a href="#" onClick={(event) => handleLinkClick(event, 'link2')}>.NET</a>
        <a href="#" onClick={(event) => handleLinkClick(event, 'link3')}>SPFX</a>
      </div>

  );
}

export default LeftPanel;
