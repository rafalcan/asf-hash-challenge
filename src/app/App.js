import jss from '@app/jss';
import Home from '@app/pages/Home';

const styles = {
  app: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

const App = () => {
  const element = document.createElement('div');

  element.className = classes.app;
  element.appendChild(Home());

  return element;
};

export default App;
