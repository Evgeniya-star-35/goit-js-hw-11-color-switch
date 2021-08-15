// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

// const refs = {
//   btnStart: document.querySelector('[data-action="start"]'),
//   btnStop: document.querySelector('[data-action="stop"]'),
// };
// const changeBtnStatus = (remove, add) => {
//   refs.btnStart.disabled = add;
//   refs.btnStop.disabled = remove;
// };
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// let colorSwitch = null;
// refs.btnStart.addEventListener('click', () => {
//   changeBtnStatus(false, true);

//   colorSwitch = setInterval(() => {
//     document.body.style.backgroundColor =
//       colors[randomIntegerFromInterval(0, colors.length - 1)];
//   }, 1000);
// });
// refs.btnStop.addEventListener('click', () => {
//   clearInterval(colorSwitch);
//   changeBtnStatus(true, false);
// });
class ColorSwitch {
  constructor(selector, colors) {
    this.colors = colors;
    this.container = document.querySelector(selector);
    this.startBtn = this.container.querySelector('.start');
    this.stopBtn = this.container.querySelector('.stop');
    this.intervalId = null;
  }
  randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  getRandomColor() {
    return `rgb(${this.randomIntegerFromInterval(
      0,
      255,
    )}, ${this.randomIntegerFromInterval(
      0,
      255,
    )}, ${this.randomIntegerFromInterval(0, 255)})`;
  }
  changeColor() {
    this.startBtn.disabled = true;
    this.intervalId = setInterval(() => {
      document.body.style.background = this.getRandomColor();
      // this.colors[
      //   this.randomIntegerFromInterval(0, this.colors.length - 1)
      // ];
    }, 1000);
  }
  stopChangeColor() {
    this.startBtn.disabled = false;
    clearInterval(this.intervalId);
  }
  addListeners() {
    this.startBtn.addEventListener('click', this.changeColor.bind(this));
    this.stopBtn.addEventListener('click', this.stopChangeColor.bind(this));
  }
}
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const switcher = new ColorSwitch('.container', colors);
switcher.addListeners();
