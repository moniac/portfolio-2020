const React = require(`react`)

exports.onRenderBody = ({ setBodyAttributes, setHeadComponents }) => {
  setBodyAttributes({
    className: "no-js",
  })
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove('no-js');
  })`,
      }}
    />,
    <style
      dangerouslySetInnerHTML={{
        __html: `.no-js .BlogLayout * {
      opacity: 1 !important;
      transform: rotate(0) !important;
    }
    
    .no-js .BlogLayout input {
      display: none;
    }`,
      }}
    />,
  ])
}
