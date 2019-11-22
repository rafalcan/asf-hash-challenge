import * as deepmerge from 'deepmerge';
import jss from '@app/jss';
import themeVars from './variables';
import normalize from './normalize';

const app = {
  'html, body': {
    color: themeVars.black,
    height: '100%',
    width: '100%',
  },
  'h1, h2, input, label, p, li': {
    fontFamily: themeVars.fontFamily,
    marginTop: 0,
  },
  h1: {
    fontSize: themeVars.fontSizeH1,
  },
  'h2, p, li': {
    fontSize: themeVars.fontSizeBase,
  },
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  fieldset: {
    border: 0,
    display: 'block',
    padding: 0,
  },
};

const styles = {
  '@global': deepmerge(
    normalize,
    app,
  ),
};

jss.createStyleSheet(styles).attach();
