import jss from '@app/jss';
import { colors, components } from '@app/theme/variables';
import StateManager from '@app/services/StateManager';

const styles = {
  sidebar: {
    background: components.backgroundSide,
    padding: [83, 35],
    width: 231,
  },
  title: {
    color: colors.blue,
    fontStyle: 'italic',
    textTransform: 'uppercase',
    marginBottom: 0,
  },
  line: {
    border: 0,
    borderTop: [1, 'solid', colors.blueLight],
    opacity: 0.3,
    margin: [6, 0, 28],
  },
  item: {
    color: colors.blueLight,
    fontStyle: 'italic',
    marginBottom: 28,
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

const Sidebar = (stateManager) => {
  if (typeof stateManager === 'undefined') throw new Error('missing state manager');

  const { subscribe, getState } = stateManager;

  const updateItems = (container, items) => {
    container.innerHTML = items.map(item => `
      <li class="${classes.item}">
        ${item.label}: <strong>${item.value}</strong>
      </li>
    `).join('\n');

    return container;
  };

  const renderItems = () => {
    const container = document.createElement('ul');

    subscribe((state) => {
      requestAnimationFrame(() => {
        updateItems(container, state.items);
      });
    });

    return updateItems(container, getState().items);
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
