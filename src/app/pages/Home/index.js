import jss from '@app/jss';
import themeVars from '@app/theme/variables';
import StateManager from '@app/services/StateManager';
import Form from './components/Form';
import Sidebar from './components/Sidebar';

const styles = {
  home: {
    background: themeVars.white,
    border: [1, 'solid', '#D1DCE3'],
    borderRadius: themeVars.radius,
    display: 'flex',
    flexDirection: 'row',
    height: 389,
    width: 608,
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

const Home = () => {
  const container = document.createElement('div');
  const stateManager = new StateManager([
    { label: 'Amanhã', value: '0,00' },
    { label: 'Em 15 dias', value: '0,00' },
    { label: 'Em 30 dias', value: '0,00' },
    { label: 'Em 90 dias', value: '0,00' },
  ]);

  container.className = classes.home;
  container.appendChild(Form(stateManager));
  container.appendChild(Sidebar(stateManager));

  return container;
};

export default Home;
