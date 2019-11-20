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

const Form = () => {
  const container = document.createElement('div');

  container.className = classes.form;
  container.innerHTML = `
    <h1 class="${classes.title}">Simule sua Antecipação</h1>
    <fieldset class="${classes.fieldset}">
      <label class="${classes.label}">Informe o valor da venda *</label>
      <input class="${classes.field}" name="sale" type="text" value="" />
    </fieldset>
    <fieldset class="${classes.fieldset}">
      <label class="${classes.label}">Em quantas parcelas *</label>
      <input class="${classes.field}" name="installments" type="number" value="" />
      <p class="${classes.obs}">Máximo de 12 parcelas</p>
    </fieldset>
    <fieldset class="${classes.fieldset}">
      <label class="${classes.label}">Informe o percentual de MDR *</label>
      <input class="${classes.field}" name="mdr" type="number" maxlength="3" value="" />
    </fieldset>
  `;

  return container;
};

export default Form;
