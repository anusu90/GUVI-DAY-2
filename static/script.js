var imp,imp2,tt, urlList=[];

let xhr = new XMLHttpRequest();
let url = 'https://restcountries.eu/rest/v2/all'
xhr.open('GET', url, true);
xhr.send();

xhr.onload = function (){
    // var stuff = JSON.parse(this.response);
    // console.log(stuff);
    const data = JSON.parse(xhr.response)
    imp2 = data;
    let myObject = {'a': imp2};
    w3.displayObject("drop-down-countries", myObject);


    myFunction = function(){
        console.log('hell0')
    }

    newFunction = function(){
        selectElement = document.querySelector('#drop-down-countries');
        country = selectElement.value;
        flag_url = imp2.filter(v=>v.name === country)[0].flag;

        console.log(flag_url);

        var flagImage = document.createElement('img');
        flagImage.src = flag_url;
        flagImage.width = "640";
        flagImage.height = "400";

        document.getElementById('flag-show').innerHTML=""
        document.getElementById('flag-show').appendChild(flagImage);
    }


}

// myFunction = function(){
//     let xhr = new XMLHttpRequest();
//     let url = 'https://restcountries.eu/rest/v2/all'
//     xhr.open('GET', url, true);
//     xhr.send();
//     xhr.onload = function (){
//         // var stuff = JSON.parse(this.response);
//         // console.log(stuff);
//         const data = JSON.parse(xhr.response)
//         console.log(data);
//         imp = data;
//     }
// }



// const getButton2 = document.getElementById('get-button-2')
// const getButton3 = document.getElementById('get-button-3');

// const getData2 = function(){
//     for (var [i,x] of imp.entries()){
//         urlList[i] = x.flag;
//     }
// };

// const getData3 = function(){
//     console.log(urlList);
// };

// getButton2.addEventListener("click", getData2);
// getButton3.addEventListener('click', getData3);


