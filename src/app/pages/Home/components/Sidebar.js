import jss from '@app/jss';
import themeVars from '@app/theme/variables';

const styles = {
  sidebar: {
    background: themeVars.backgroundSide,
    padding: [83, 35],
    width: 231,
  },
  title: {
    color: themeVars.blue,
    fontStyle: 'italic',
    textTransform: 'uppercase',
    marginBottom: 0,
  },
  line: {
    border: 0,
    borderTop: [1, 'solid', themeVars.blueLight],
    opacity: 0.3,
    margin: [6, 0, 28],
  },
  values: {
    color: themeVars.blueLight,
    fontStyle: 'italic',
    marginBottom: 28,
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

const Sidebar = () => {
  const container = document.createElement('div');

  container.className = classes.sidebar;
  container.innerHTML = `
    <h2 class="${classes.title}">Você receberá:</h2>
    <hr class="${classes.line}"/>
    <p class="${classes.values}">Amanhã: <strong>R$ 0,00</strong></p>
    <p class="${classes.values}">Em 15 dias: <strong>R$ 0,00</strong></p>
    <p class="${classes.values}">Em 30 dias: <strong>R$ 0,00</strong></p>
    <p class="${classes.values}">Em 90 dias: <strong>R$ 0,00</strong></p>
  `;

  return container;
};

export default Sidebar;
