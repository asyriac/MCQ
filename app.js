const res = document.querySelector('.feedback');
const op = document.querySelector('.result');
const answers = ['A','A','B','B'];
res.addEventListener('submit',(e)=>{
  e.preventDefault();
  score = 0;
  const userAnswers = [res.q1.value,res.q2.value,res.q3.value,res.q4.value];
  userAnswers.forEach((a,b)=>{
    if(a===answers[b]) score++;
  });
  op.innerText = `You scored ${score}!`
});
