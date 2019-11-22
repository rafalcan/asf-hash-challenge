import jss from '@app/jss';
import themeVars from '@app/theme/variables';

const styles = {
  form: {
    padding: [42, 54],
    width: 377,
  },
  title: {
    color: themeVars.gray,
    marginBottom: 24,
  },
  label: {
    color: themeVars.gray,
    display: 'block',
    fontSize: 14,
    marginBottom: 7,
  },
  obs: {
    color: themeVars.grayLight,
    display: 'block',
    fontSize: 11,
    fontWeight: 'bold',
    margin: [4, 0, 0],
  },
  fieldset: {
    marginBottom: 28,
  },
  field: {
    border: [1, 'solid', themeVars.borderField],
    borderRadius: themeVars.radius,
    display: 'block',
    fontSize: 14,
    outline: 0,
    padding: [10, 14, 9],
    width: 250,
    '&:focus': {
      border: [1, 'solid', themeVars.borderFieldFocus],
    },
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

const Form = (stateManager) => {
  const { getState, setState } = stateManager;
  const fieldsValidation = [];

  const renderField = (props) => {
    const fieldSet = document.createElement('fieldset');
    const field = document.createElement('input');

    field.className = classes.field;
    field.id = props.id;
    field.name = props.name;
    field.type = props.type;
    field.value = props.value;
    field.addEventListener('keyup', props.keyup, false);

    fieldSet.className = classes.fieldset;
    fieldSet.innerHTML = `
      <label class="${classes.label}" for="${props.id}">${props.label} *</label>
    `;
    fieldSet.appendChild(field);

    if (props.obs) {
      fieldSet.insertAdjacentHTML('beforeend', `
        <p class="${classes.obs}">${props.obs}</p>
      `);
    }

    fieldsValidation.push(field);

    return fieldSet;
  };

  const renderForm = () => {
    const container = document.createElement('form');

    const fieldSetSale = renderField({
      label: 'Informe o valor da venda',
      id: 'sale',
      name: 'sale',
      type: 'text',
      value: '',
      keyup() {
        const state = getState();
        state[1].value = this.value;
        setState(state);
      },
    });
    const fieldSetInstallments = renderField({
      label: 'Em quantas parcelas',
      obs: 'Máximo de 12 parcelas',
      id: 'installments',
      name: 'installments',
      type: 'number',
      value: '',
      keyup() {
        const state = getState();
        state[2].value = this.value;
        setState(state);
      },
    });
    const fieldSetMDR = renderField({
      label: 'Informe o percentual de MDR',
      id: 'mdr',
      name: 'mdr',
      type: 'number',
      value: '',
      keyup() {
        const state = getState();
        state[3].value = this.value;
        setState(state);
      },
    });

    container.appendChild(fieldSetSale);
    container.appendChild(fieldSetInstallments);
    container.appendChild(fieldSetMDR);

    return container;
  };

  const render = () => {
    const container = document.createElement('div');

    container.className = classes.form;
    container.innerHTML = `
      <h1 class="${classes.title}">Simule sua Antecipação</h1>
    `;
    container.appendChild(renderForm());

    return container;
  };

  return render();
};

export default Form;
