window.addEventListener('scroll', ()=>{
    let x = this.pageYOffset;
    if(x>30){
        document.querySelector('header').classList.add('active')
    }else{
        document.querySelector('header').classList.remove('active')
    }
})

window.addEventListener('scroll', ()=>{
    let x = this.pageYOffset;
    if(x>30){
        document.querySelector('.mobile').classList.add('active')
    }else{
        document.querySelector('.mobile').classList.remove('active')
    }
})

document.querySelector('.exit-btn').addEventListener('click', () =>{
    document.querySelector('.menu-list').style = "display: none;"
})

document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.menu-list').style = "display: block;"
    
})