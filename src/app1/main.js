import './main.css'



let view = document.querySelector('#app1 > div > .view')

view.textContent=window.localStorage.getItem('view')
add1.addEventListener('click',()=>{
    view.textContent=parseInt(view.textContent) + 1
    window.localStorage.setItem('view',view.textContent)
})
sub1.addEventListener('click',()=>{
    view.textContent=parseInt(view.textContent) - 1
    window.localStorage.setItem('view',view.textContent)
})
mul2.addEventListener('click',()=>{
    view.textContent=parseInt(view.textContent) * 2
    window.localStorage.setItem('view',view.textContent)
})
div2.addEventListener('click',()=>{
    view.textContent=parseInt(view.textContent) / 2
    window.localStorage.setItem('view',view.textContent)
})