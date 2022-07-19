let data = localStorage.getItem('life');
let imgdata1 = document.querySelector('#imgdata')
let imgdata2 = document.querySelector('#imgdata1')
let imgdata3 = document.querySelector('#imgdata3')
let imgdata4 = document.querySelector('#imgdata4')
let title = document.querySelector('.titleName')


async function newfetch(value){

let data1 = await window.fetch(`http://localhost:3005/${value}`)
let rawdata = await  data1.json();

rawdata.map((data)=>{
    console.log(data);
    imgdata1.src= data.image1
    imgdata2.src = data.image2
    imgdata3.src = data.image3
    imgdata4.src = data.image4
    title.innerHTML
    = data.hotelName
})

// imgdata.setAttribute('src', rawdata.image1)
}

newfetch(data);


setInterval(() => { 

    if(localStorage.length>0){
        localStorage.clear()
    }
})