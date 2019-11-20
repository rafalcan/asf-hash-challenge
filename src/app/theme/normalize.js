/*! Inspired normalize.css v8.0.1 | github.com/necolas/normalize.css */
export default {
  // Document
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  html: {
    lineHeight: 1.15,
    textSizeAdjust: '100%',
  },

  // Sections
  body: {
    margin: 0,
    tapHighlightColor: 'rgba(0, 0, 0, 0)',
  },
  main: {
    display: 'block',
  },
  h1: {
    fontSize: '2em',
    margin: ['0.67em', 0],
  },
  '[tabindex="-1"]:focus:not(:focus-visible)': {
    outline: '0 !important',
  },

  // Grouping content
  hr: {
    boxSizing: 'content-box',
    height: 0,
    overflow: 'visible',
  },
  pre: {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },

  // Text-level semantics
  a: {
    backgroundColor: 'transparent',
    textDecorationSkip: 'objects',
  },
  'abbr[title]': {
    borderBottom: 'none',
    textDecoration: 'underline dotted',
  },
  'b, strong': {
    fontWeight: 'bolder',
  },
  'code, kbd, samp': {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },
  small: {
    fontSize: '80%',
  },
  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },
  sub: {
    bottom: '-0.25em',
  },
  sup: {
    top: '-0.5em',
  },

  // Embedded content
  img: {
    borderStyle: 'none',
  },

  // Forms
  'button, input, optgroup, select, textarea': {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: 0,
  },
  'button, input': {
    overflow: 'visible',
  },
  'button, select': {
    textTransform: 'none',
  },
  'button, [type="button"], [type="reset"], [type="submit"]': {
    appearance: 'button',
  },
  'button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner': {
    borderStyle: 'none',
    padding: 0,
  },
  'button::-moz-focusring, [type="button"]::-moz-focusring, [type="reset"]::-moz-focusring, [type="submit"]::-moz-focusring': {
    outline: [1, 'dotted', 'ButtonText'],
  },
  fieldset: {
    padding: ['0.35em', '0.75em', '0.625em'],
  },
  legend: {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: 0,
    whiteSpace: 'normal',
  },
  progress: {
    verticalAlign: 'baseline',
  },
  textarea: {
    overflow: 'auto',
  },
  '[type="checkbox"], [type="radio"]': {
    boxSizing: 'border-box',
    padding: 0,
  },
  '[type="number"]::-webkit-inner-spin-button, type="number"]::-webkit-outer-spin-button': {
    height: 'auto',
  },
  '[type="search"]': {
    appearance: 'textfield',
    outlineOffset: '-2px',
  },
  '[type="search"]::-webkit-search-decoration': {
    appearance: 'none',
  },
  '::-webkit-file-upload-button': {
    appearance: 'button',
    font: 'inherit',
  },

  // Interactive
  details: {
    display: 'block',
  },
  summary: {
    display: 'list-item',
  },

  // Misc
  template: {
    display: 'none',
  },
  '[hidden]': {
    display: 'none',
  },
};
