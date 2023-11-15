// const btn4 = document.querySelector('.arrow');
const btn4 = document.getElementById('arrow4');

btn4.addEventListener("click", () => {
  document.getElementById('txt4').classList.toggle('invis');

  if (btn4.src.indexOf('up.svg')!=-1) {
      document.getElementById('arrow4').src  = 'down.svg';
  }
    else {
      document.getElementById('arrow4').src = 'up.svg';
  }
});

const btn3 = document.getElementById('arrow3');

btn3.addEventListener("click", () => {
  document.getElementById('txt3').classList.toggle('invis');

  if (btn3.src.indexOf('up.svg')!=-1) {
      document.getElementById('arrow3').src  = 'down.svg';
  }
    else {
      document.getElementById('arrow3').src = 'up.svg';
  }
});

const btn2 = document.getElementById('arrow2');

btn2.addEventListener("click", () => {
  document.getElementById('txt2').classList.toggle('invis');

  if (btn2.src.indexOf('up.svg')!=-1) {
      btn2.src  = 'down.svg';
  }
    else {
      btn2.src = 'up.svg';
  }
});

const btn1 = document.getElementById('arrow1');

btn1.addEventListener("click", () => {
  document.getElementById('txt1').classList.toggle('invis');

  if (btn1.src.indexOf('up.svg')!=-1) {
      document.getElementById('arrow1').src  = 'down.svg';
  }
    else {
      document.getElementById('arrow1').src = 'up.svg';
  }
});