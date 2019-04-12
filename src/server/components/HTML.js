/* eslint-disable react/no-danger */
import React from 'react';
import Helmet from 'react-helmet';
import propTypes from 'prop-types';

export default function HTML({ children, css, scripts, state }) {
  const head = Helmet.renderStatic();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        {css.map((href) => {
          return <link key={href} rel="stylesheet" href={href} />;
        })}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = ${state}`,
          }}
        />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        {scripts.map((src) => {
          return <script key={src} src={src} />;
        })}
      </body>
    </html>
  );
}

HTML.defaultProps = {
  css: [],
  scripts: [],
  state: '{}',
  children: null,
};

HTML.propTypes = {
  children: propTypes.any,
  css: propTypes.arrayOf(propTypes.string),
  scripts: propTypes.arrayOf(propTypes.string),
  state: propTypes.string,
};
