const btns = document.getElementsByClassName("btn");
const rate = document.getElementById('rate');
const form = document.querySelector('.form-container');
const modal = document.getElementById("modal");
const rates = document.getElementById("rates");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const rating = form.rating.value;
  rate.textContent = rating;
  modal.classList.remove("modal");
  rates.classList.add("display-hidden");
})
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', function () {
//     const current = document.getElementsByClassName('active')
//     if (current.length > [0]) {
//       current[0].className = current[0].className.replace(' active', '')
//     }
//     this.className += ' active';
//     rate.textContent = this.textContent;
//   })
// }
