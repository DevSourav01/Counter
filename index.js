const count=document.querySelector('.count')
const minusBtn= document.querySelector('.min-Btn')
const plusBtn= document.querySelector('.pls-Btn')
const changeBy=document.querySelector('.changeBy')
const resetBtn=document.querySelector('.resetBtn')

plusBtn.addEventListener('click', ()=>{
    const Value=parseInt(count.innerText);
    const changeByValue=parseInt(changeBy.value);
    count.innerText=Value+changeByValue
})

minusBtn.addEventListener('click', ()=>{
    const Value=parseInt(count.innerText);
    const changeByValue=parseInt(changeBy.value);
    count.innerText=Value-changeByValue
    
})
resetBtn.addEventListener('click',()=>{
    count.innerText=0
})