import jss from '@app/jss';
import { colors } from '@app/theme/variables';
import {
  findById,
  fromCurrency,
  validation,
  calculation,
} from '@app/helpers';
import { createStateByDays } from '@app/services/StateManager';
import FieldSet from '@app/components/FieldSet';

const styles = {
  form: {
    padding: [42, 54],
    width: 377,
  },
  title: {
    color: colors.gray,
    marginBottom: 24,
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

const Form = (stateManager) => {
  if (typeof stateManager === 'undefined') throw new Error('missing state manager');

  const { setState } = stateManager;

  const renderForm = () => {
    const container = document.createElement('form');
    let fields = [];

    const keyup = function keyup() {
      if (validation(fields)) {
        const sale = fromCurrency(findById(fields, 'sale').value);
        const installments = findById(fields, 'installments').value;
        const mdr = findById(fields, 'mdr').value;

        return setState({
          items: createStateByDays(calculation(sale, installments, mdr)),
        });
      }

      return setState({
        items: createStateByDays([0, 0, 0, 0]),
      });
    };

    const fieldSetSale = FieldSet({
      label: 'Informe o valor da venda',
      id: 'sale',
      name: 'sale',
      type: 'text',
      value: '',
      min: 1,
      mask: true,
      keyup,
    });
    const fieldSetInstallments = FieldSet({
      label: 'Em quantas parcelas',
      obs: 'Máximo de 12 parcelas',
      id: 'installments',
      name: 'installments',
      type: 'number',
      value: '',
      min: 1,
      max: 12,
      keyup,
    });
    const fieldSetMDR = FieldSet({
      label: 'Informe o percentual de MDR',
      id: 'mdr',
      name: 'mdr',
      type: 'number',
      value: '',
      min: 1,
      max: 100,
      keyup,
    });

    container.novalidate = true;
    container.appendChild(fieldSetSale);
    container.appendChild(fieldSetInstallments);
    container.appendChild(fieldSetMDR);
    fields = container.querySelectorAll('input');

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
