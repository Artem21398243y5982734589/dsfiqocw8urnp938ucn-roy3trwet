const btnProducts = document.getElementById('li1')
const blockProducts = document.getElementById('block1')
const btnLogIn = document.getElementById('li2')
const blockLogIn = document.getElementById('block2')
const card = document.getElementById('card')
const btnCard = document.getElementById('buybtn1')







let prChcek = false

















function btnProductsF(){
    if(prChcek === false){
    blockProducts.style.display = 'block'
    prChcek = true
    } else {
        blockProducts.style.display = 'none'
        prChcek = false
    }
}
function btnLogInF(){
    if(prChcek === false){
    blockLogIn.style.display = 'block'
    prChcek = true
    } else {
        blockLogIn.style.display = 'none'
        prChcek = false
    }
}



btnProducts.addEventListener('click', btnProductsF)
btnLogIn.addEventListener('click', btnLogInF)