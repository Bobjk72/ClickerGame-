function toggleQuiz() {
  document.querySelectorAll('.quiz').forEach( el => {
    el.style.visibility = 'visible';
  });
  document.getElementById('startQuiz').style.visibility = 'hidden';
}
function textBoxValue() {
  alert(
    document.frmOne.tb1.value);
}
