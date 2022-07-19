let userImage = document.querySelector('.newimage')
let userInput = document.querySelector('#input')
        let dishSearch = document.querySelector('#dishSearch')
        let gridSection = document.querySelector('.mainSection')
        userInput.addEventListener("change",(e)=>{
            let Mvalue = e.target.value
            apisearch(Mvalue)
            })
        async function apisearch(value){

            let data = await window.fetch(`http://localhost:3000/${value}`)
            let rawdata = await data.json();
            dishSearch.addEventListener('keyup',(e)=>{

                        if(e.key == "Enter"){

                            for(i=0;i<rawdata.length;i++){
                               if(rawdata[i].strMeal === dishSearch.value ){
                                    let raw = []
                                    window.sessionStorage.setItem("value",dishSearch.value)
                                   raw.push(rawdata[i])
                                 raw.map((rawdata) => {
                                      gridSection.innerHTML+=`
                                  
                                                                     
                                                                      <a href="./rupe.html">
                                                                      <div class="imageSection">
                                                                    <aside>
                                                                        <div class="imageSubsection"> 
                                                                            <img src="${rawdata.strMealThumb}" alt="" class="newimage">
                                                                        </div>
                                                                    </aside>
                                                                <aside class="dataSubsection">
                                                                    <h4> Fast  Dilivery</h4>
                                                                   <p> <a>${rawdata.strMeal} <a></p> 
                                                                </aside>
                                                                </div>
                                                         
                                                         
                                                                </div>
                                                            </div>
                                                            </a>

                                                            
                                     ` })
                                
    }}
               }
            
            
            
            
            })
}

        async function filter_data(value){
            let data = await window.fetch(`http://localhost:3000/${value}`)
            let rawdata = await data.json()
        }


          