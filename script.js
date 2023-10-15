let BUTTON = document.querySelector("button")
// let proItem = document.getElementById("pro-item")




const catchpro = async() => {
                
const respons = await fetch('https://dummyjson.com/products/1')
const data   = await respons.json()
console.log(data)







document.querySelector(".one").innerHTML = `
    
<h3>${data.category}</h3>
 <P>${data.description}</P>
<span class="price">${data.price}</span>
`

    



document.querySelector(".two").innerHTML = `
    
    <h3>${data.category}</h3>
     <P>${data.description}</P>
    <span class="price">${data.price}</span>
    `


document.querySelector(".three").innerHTML = `
    
    <h3>${data.category}</h3>
     <P>${data.description}</P>
    <span class="price">${data.price}</span>
    `


document.querySelector(".four").innerHTML = `
    
    <h3>${data.category}</h3>
     <P>${data.description}</P>
    <span class="price">${data.price}</span>
    `


document.querySelector(".five").innerHTML = `
    
    <h3>${data.category}</h3>
     <P>${data.description}</P>
    <span class="price">${data.price}</span>
    `


document.querySelector(".six").innerHTML = `
    
    <h3>${data.category}</h3>
     <P>${data.description}</P>
    <span class="price">${data.price}</span>
    `


document.querySelector(".seven").innerHTML = `
    
    <h3>${data.category}</h3>
     <P>${data.description}</P>
    <span class="price">${data.price}</span>
    `


    document.querySelector(".ten").innerHTML = `
    
    <h3>${data.category}</h3>
     <P>${data.description}</P>
    <span class="price">${data.price}</span>
    `


} 

catchpro()




// productContainer.forEach((proItem) => {

    
  

//     proItem.innerHTML += `
//     <img>${data.images}</img>
//     <h3>${data.category}</h3>
//     <P>${data.description}</P>
//     <span>${data.price}</span>
//     `



// }) 
    





// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);
