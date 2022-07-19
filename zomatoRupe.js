// let dropdown=document.querySelector("#first_Zomato_section")

// let doc=document.querySelector(".locationDropDown")
// doc.style.display="block"
// dropdown.addEventListener("click",e=>
// {console.log(e.target.className);
    
//     console.log(e.target);
//     if(e.target=="dropdown")
//     {
//         console.log(e.target);
// //         console.log("haai ");
// // e.style.display="block"
// //e.style.display="block"
// }
    

// })
let select = document.querySelector('#selectType')
let search = document.querySelector('#searchBox')
let display =  document.querySelector('#displayData')
let food = document.querySelector('#searchFood')
console.log(food)
console.log(search)





let login= document.querySelector("#loginP")
console.log(login)

let loginBox = document.querySelector('#loginPopup article')
console.log(loginBox)

let cancel = document.querySelector('#hideLogin')
let signup=document.querySelector("#signup")
let signupBox=document.querySelector("#signupBox article")
let calcelsignUp=document.getElementById("hidesignup");
let sign=document.querySelector(".sign")
let log=document.querySelector(".login")



login.onclick = function()
{
    loginBox.style.display = 'block';
}

cancel.onclick = function()
{
    loginBox.style.display = 'none'

}

signup.onclick=function(){
    signupBox.style.display="block";
}
calcelsignUp.onclick=function(){
    signupBox.style.display="none";
}
// log.onclick=function(){
//     loginBox.style.display="block";
//     // signupBox.style.display="none";
//     // loginBox.style.zindex="1"
// }
// sign.addEventListener("click",e=>{
//     signupBox.style.display="block";
//     // loginBox.style.display="none"
// })




//  rupesh js code 

async function getFood()
{
    let data = await fetch("./data22.json")
    let res = await data.json()
    // console.log(res.bangalore)
    let bglr = Object.keys(res).join("") 
    let catArr =[]
    
    for(let area of res.bangalore)
    {
      catArr.push(area.strCategory)
 
    }
   
    let set = Array.from(new Set(catArr))
    
    let selectOpt = ""
    for(let i=0;i<set.length;i++){
        selectOpt += `<option value="${set[i]}">${set[i]}</option>`
    }
    select.innerHTML = selectOpt
    let dispContent = ""

    let filtered
    select.addEventListener('click', e=>
    {
        // console.log(e.target.value)
        filtered = res.bangalore.filter(ele =>
            {
                
                return ele.strCategory == e.target.value
                          
            })
    // console.log(filtered)
 
    
    // search.addEventListener('keyup', e=>
    // {
    //     console.log(e)
    //     let city = e.target.value
    //    if(e.key == "Enter")
    //    {
    //     if(city == bglr  )
    //     {
    //         for(let disp of filtered)
    //      {
    //         console.log(disp)
    //         dispContent += `<h1>${disp.strMeal}</h1>`
            
    //         }
    
            
    //     }
        
    //    }
    //    display.innerHTML = dispContent  
    // })

    search.addEventListener('keyup', e=>
    {
        // console.log(e)
        let city = e.target.value
       
        if(city == bglr  )
        {
            
    food.addEventListener('keyup', e=>
    {
        let foodDisplay = ""
        let foodFiltered 
        if(e.key =="Enter")
        {
            foodFiltered = filtered.filter((ele,ind)=>
            {
                // console.log(ele)
               console.log(ele.strMeal["last"]== "Dosa")
                    if(ele.strMeal.first == e.target.value || ele.strMeal.last == e.target.value)
                    {
                       return e.target.value
                    }
                    else if(ele.strMeal == e.target.value)
                    {
                       return e.target.value
                    }
                    else if(ele.strMealFull == e.target.value)
                    {
                       return e.target.value
                    }
                    
                
                
                
            })
         
           let completeFilter = foodFiltered.map(ele => {
                 return ele
            })
            console.log(completeFilter)
            // console.log(foodFiltered[0].strTags)
            for(let i=0;i<completeFilter.length;i++)
            {
                foodDisplay += `<div id="divFoodDisplayed" >
            <img src="${completeFilter[i].strMealThumb}" id="foodDisplayed"/>
            <h1>${completeFilter[i].strTags}
            </div>
            `
            }
            
        }
        display.innerHTML = foodDisplay

        
          
    })  
    
            
        }
        
       
    })

          
    

        
       
    //    display.innerHTML = dispContent  
    // })

    // food.addEventListener('keyup', e=>
    // {
    //     let foodDisplay = ""
    //     let foodFiltered 
    //     if(e.key =="Enter")
    //     {
    //         foodFiltered = res.bangalore.filter((ele,ind)=>
    //         {
    //             console.log(ele.strMeal.toLowerCase())
    //             return ele.strMeal.toLowerCase() == e.target.value
    //         })
    //         console.log(foodFiltered[0].strMealThumb)
    //         console.log(foodFiltered[0].strTags)

            
    //     }
    //     foodDisplay += `<div>
    //         <img src="${foodFiltered[0].strMealThumb}" />
    //         <h1>${foodFiltered[0].strTags}
    //         </div>
    //         `
    //      display.innerHTML += foodDisplay
    // })  
    
    
    })
  



    

}
getFood()