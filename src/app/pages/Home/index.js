import jss from '@app/jss';
import { createState } from '@app/helpers';
import { colors, components } from '@app/theme/variables';
import StateManager from '@app/services/StateManager';
import Form from './components/Form';
import Sidebar from './components/Sidebar';

const styles = {
  home: {
    background: colors.white,
    border: [1, 'solid', '#D1DCE3'],
    borderRadius: components.radius,
    display: 'flex',
    flexDirection: 'row',
    height: 389,
    width: 608,
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

const Home = () => {
  const container = document.createElement('div');
  const stateManager = new StateManager(createState([0, 0, 0, 0]));

  container.className = classes.home;
  container.appendChild(Form(stateManager));
  container.appendChild(Sidebar(stateManager));

  return container;
};

export default Home;
