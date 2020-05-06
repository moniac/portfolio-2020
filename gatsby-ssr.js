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
  ])
}
