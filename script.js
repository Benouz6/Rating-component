const btns = document.getElementsByClassName("btn");
const rate = document.getElementById('rate')
// let note;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('active')
    if (current.length > [0]) {
      current[0].className = current[0].className.replace(' active', '')
    }
    this.className += ' active';
    rate.textContent = this.textContent;
  })
}

function submit() {
  const modal = document.getElementById('modal');
  const rates = document.getElementById('rates');
  modal.classList.toggle('modal');
  rates.classList.toggle('modal');
  modal.addEventListener('click', function () {
  })
};
