const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};
const changeBtnStatus = (remove, add) => {
  refs.btnStart.disabled = add;
  refs.btnStop.disabled = remove;
};
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let colorSwitch = null;
refs.btnStart.addEventListener('click', () => {
  changeBtnStatus(false, true);

  colorSwitch = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
});
refs.btnStop.addEventListener('click', () => {
  clearInterval(colorSwitch);
  changeBtnStatus(true, false);
});
