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
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  item: {
    color: themeVars.blueLight,
    fontStyle: 'italic',
    marginBottom: 28,
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

const Sidebar = (stateManager) => {
  const { subscribe, getState } = stateManager;

  const updateItems = (container, state) => {
    container.innerHTML = state.map(item => `
      <li class="${classes.item}">
        ${item.label}: <strong>R$ ${item.value}</strong>
      </li>
    `).join('\n');

    return container;
  };

  const renderItems = () => {
    const container = document.createElement('ul');

    container.className = classes.list;

    subscribe((state) => {
      requestAnimationFrame(() => {
        updateItems(container, state);
      });
    });

    return updateItems(container, getState());
  };

  const render = () => {
    const container = document.createElement('div');

    container.className = classes.sidebar;
    container.innerHTML = `
      <h2 class="${classes.title}">Você receberá:</h2>
      <hr class="${classes.line}"/>
    `;
    container.appendChild(renderItems());

    return container;
  };

  return render();
};

export default Sidebar;
