import React, { useEffect } from 'react';
import { scroller } from 'react-scroll';

const Therapists = () => {

  useEffect(() => {
    //chatbot initialization
   
    function initTileDesk(){
      window.tiledeskSettings =
     {
          projectid: "66d3c0875bed5d0013ef5337",
          fullscreenMode: true
     };
     (function(d, s, id) {
          var w=window; var i=function() { i.c(arguments); };
          i.q=[]; i.c=function(args){ i.q.push(args); }; w.Tiledesk=i;
          var js, fjs=d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js=d.createElement(s); js.id=id; js.async=true;
          js.src="https://widget.tiledesk.com/v6/launch.js";
          fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'tiledesk-jssdk'));
    };

    initTileDesk();

  }, [])
  useEffect(() => {
    scroller.scrollTo('therapist-section', {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }, []);

  return (
    <div className="therapist">
      <h1>Our Therapists</h1>
      <div id="therapist-section">
        <p>here is the content</p>
      </div>
    </div>
  );
};

export default Therapists;