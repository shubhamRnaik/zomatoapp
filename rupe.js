let display =  document.querySelector('#displayData')
console.log(display)
let sort = document.querySelector('.sort-filter')
console.log(sort)
let sortedData = document.querySelector("#sortedData")
let rating = document.querySelector(".Rating")
let ratedData = document.querySelector('#ratedData')
console.log(ratedData)
sort.onclick = function()
{
if(display.style.display != "none")
{
    display.style.display = "none" 
    sortedData.style.display = "grid" 
    ratedData.style.display = "none" 

}else
{
    display.style.display = "grid"
    sortedData.style.display = "none" 
    ratedData.style.display = "none" 
}
   

    
    let divChildren = document.querySelectorAll(".price")
    let stored =[]
    divChildren.forEach(ele=>
        {

           stored.push(ele)
})


let stored1 = stored.map(ele =>
    {
        return ele
    })

let stored2 = stored1.sort((a,b)=>
{

   return b.getAttribute("price") - a.getAttribute("price")
})
let stored3 =""
stored2.forEach(ele =>
{
    stored3 += ele.innerHTML
})
sortedData.innerHTML = stored3
}







rating.onclick = function()
{


    if(display.style.display != "none")
{
    display.style.display = "none" 
    ratedData.style.display = "grid" 
    sortedData.style.display = "none" 

}else
{
    display.style.display = "grid"
    ratedData.style.display = "none" 
    sortedData.style.display = "none" 

}


    let divChildren = document.querySelectorAll(".price")
    let stored =[]
    divChildren.forEach(ele=>
        {

           stored.push(ele)
})


let stored1 = stored.map(ele =>
    {
        return ele
    })

    let stored2 = stored1.filter(ele =>
        {
            return ele.getAttribute("rating") > 4
        })
        console.log(stored2)   
        
        let stored3 =""
        stored2.forEach(ele =>
        {
            stored3 += ele.innerHTML
        })
        ratedData.innerHTML = stored3
}


//  shubham edit from here 


let gettingdata =  document.querySelector('#displayData')

console.log(gettingdata);

gettingdata.addEventListener('click',(e)=>{
   
    
    e.target.setAttribute("href","./zomato3.html");
   
if(e.target.nodeName ==='H1'){
    let life = e.target.innerHTML
    localStorage.setItem('life',life);
    location.href = "./zomato_nextPage.html";

}


})