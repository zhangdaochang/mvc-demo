import './main.css'

let tabBar = document.querySelector('#app2 > .tabBar > ol')
let tabContent = document.querySelector('#app2 > .tabContent > ol').children


tabBar.addEventListener('click',(e)=>{
    let child = e.target.parentNode.children
    for(let i=0;i<child.length;i++){
        child.item(i).classList.remove('active')
        tabContent.item(i).classList.remove('active')
        if(child.item(i)=== e.target){
            child.item(i).classList.add('active')
            tabContent.item(i).classList.add('active')
        }
    }
})

document.querySelector('#app2 > .tabBar > ol > li:nth-child(1)').click()