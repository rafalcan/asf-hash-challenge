import jss from '@app/jss';
import themeVars from '@app/theme/variables';
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

  container.className = classes.home;
  container.appendChild(Form());
  container.appendChild(Sidebar());

  return container;
};

export default Home;
