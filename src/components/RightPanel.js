import React, { useEffect, useRef, useState } from 'react';
import './RightPanel.css';

function RightPanel(props) {
  const [activeLink, setActiveLink] = useState(props.activeLink);
  const rightPanelRef = useRef(null);

  useEffect(() => {
    if (props.activeLink !== activeLink) {
      const rightPanel = rightPanelRef.current;
      rightPanel.classList.add('fade-out');
      setTimeout(() => {
        setActiveLink(props.activeLink);
        rightPanel.classList.remove('fade-out');
        rightPanel.classList.add('fade-in');
        setTimeout(() => {
          rightPanel.classList.remove('fade-in');
        }, 500);
      }, 500);
    }
  }, [props.activeLink]);

  return (
    <div className="right-panel" ref={rightPanelRef}>
      {activeLink === 'link1' &&

    
            <p>Parágrafo 1</p>

      }
      {activeLink === 'link2' &&
        <p>BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB</p>
      }
      {activeLink === 'link3' &&
        <p>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</p>
      }
    </div>
  );
}

export default RightPanel;
