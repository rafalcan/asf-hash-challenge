import jss from '@app/jss';
import { colors } from '@app/theme/variables';
import Field from '@app/components/Field';

const styles = {
  fieldset: {
    marginBottom: 28,
  },
  label: {
    color: colors.gray,
    display: 'block',
    fontSize: 14,
    marginBottom: 7,
  },
  obs: {
    color: colors.grayLight,
    display: 'block',
    fontSize: 11,
    fontWeight: 'bold',
    margin: [4, 0, 0],
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

const FieldSet = (props) => {
  if (typeof props === 'undefined') throw new Error('missing required props');
  if (!props.label || !props.id || !props.name || !props.type) {
    throw new Error('label, id, name and type are required');
  }

  const container = document.createElement('fieldset');

  container.className = classes.fieldset;
  container.innerHTML = `
    <label class="${classes.label}" for="${props.id}">${props.label} *</label>
  `;
  container.appendChild(Field(props));

  if (props.obs) {
    container.insertAdjacentHTML('beforeend', `
      <p class="${classes.obs}">${props.obs}</p>
    `);
  }

  return container;
};

export default FieldSet;
