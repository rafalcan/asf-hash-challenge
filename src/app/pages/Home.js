import jss from '@app/jss';
import logo from '@assets/logo.png';

const styles = {
  page: {
    border: [1, 'solid', '#D1DCE3'],
    height: 300,
    padding: 25,
    textAlign: 'center',
    width: 300,
  },
  image: {
    display: 'inline-block',
    width: 150,
  },
  title: {
    fontSize: 22,
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

const Home = () => {
  const element = document.createElement('div');

  element.className = classes.page;
  element.innerHTML = `
    <img class="${classes.image}" src="${logo}" />
    <h1 class="${classes.title}">Formulário de Simulação da Antecipação</h1>
    <p itemprop="description">Everything starting from here</p>
  `;

  return element;
};

export default Home;
