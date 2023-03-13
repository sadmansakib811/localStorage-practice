let count =parseInt(localStorage.getItem('count')) || 0;
console.log(count);

const defaultCountValue = document.getElementById('counter-value');
defaultCountValue.innerHTML = `${count}`;
document.getElementById('increase-one').addEventListener('click', ()=>{

  
    increaseValueByOne();

})

document.getElementById('decrease-one').addEventListener('click', ()=>{

  
    decreaseValuebyOne();

})

const increaseValueByOne = ()=>{
    count++;
    localStorage.setItem('count',count);
    const showCount = document.getElementById('counter-value')
    showCount.innerText= `${count}`;
    
 }

const decreaseValuebyOne =()=>{
    count--;
    localStorage.setItem('count',count);
    const DisplayCount = document.getElementById('counter-value')
    DisplayCount.innerText= `${count}`;
    
}
localStorage.setItem('count',count);