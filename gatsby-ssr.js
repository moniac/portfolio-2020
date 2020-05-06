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
      transform: none !important;
      filter: grayscale(0) !important;
    }
    
    .no-js .BlogLayout > label {
      display: none;
    }`,
      }}
    />,
  ])
}
