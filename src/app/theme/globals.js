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
  'h1, h2, h3, input, label, p': {
    fontFamily: themeVars.fontFamily,
  },
};

const styles = {
  '@global': deepmerge(
    normalize,
    app,
  ),
};

jss.createStyleSheet(styles).attach();
