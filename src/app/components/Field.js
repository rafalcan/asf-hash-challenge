import VMasker from 'vanilla-masker';
import jss from '@app/jss';
import { components } from '@app/theme/variables';

const styles = {
  field: {
    border: [1, 'solid', components.borderField],
    borderRadius: components.radius,
    display: 'block',
    fontSize: 14,
    outline: 0,
    padding: [10, 14, 9],
    width: 250,
    '&:focus': {
      border: [1, 'solid', components.borderFieldFocus],
    },
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

const Field = (props) => {
  if (typeof props === 'undefined') throw new Error('missing required props');
  if (!props.id || !props.name || !props.type) {
    throw new Error('id, name and type are required');
  }

  const container = document.createElement('input');

  container.className = classes.field;
  container.id = props.id;
  container.name = props.name;
  container.type = props.type;
  container.value = props.value ? props.value : '';

  container.required = true;
  container.number = true;
  container.mask = props.mask ? props.mask : false;
  container.min = props.min ? props.min : false;
  container.max = props.max ? props.max : false;

  if (props.mask) {
    VMasker(container).maskMoney({
      precision: 2,
      delimiter: '.',
      separator: ',',
      unit: 'R$',
    });
  }

  if (props.keyup) {
    container.addEventListener('keyup', function delay() {
      setTimeout(() => {
        props.keyup.call(this);
      }, 150);
    }, false);
  }

  return container;
};

export default Field;
