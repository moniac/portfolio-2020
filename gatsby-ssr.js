const React = require(`react`)

exports.onRenderBody = ({ setBodyAttributes, setHeadComponents }) => {
  setBodyAttributes({
    className: "no-js",
  })
  setHeadComponents([
    <script
      key="no-js"
      dangerouslySetInnerHTML={{
        __html: `window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove('no-js');
  })`,
      }}
    />,
    <style
      key="no-js-css"
      dangerouslySetInnerHTML={{
        __html: `.no-js .BlogLayout * {
      opacity: 1 !important;
      transform: rotate(0) !important;
      filter: grayscale(0);
    }
    
    .no-js .BlogLayout input {
      display: none;
    }`,
      }}
    />,
  ])
}
