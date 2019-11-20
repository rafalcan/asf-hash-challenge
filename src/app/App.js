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
  const container = document.createElement('div');

  container.className = classes.app;
  container.appendChild(Home());

  return container;
};

export default App;
