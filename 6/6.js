var btn= document.getElementById("btn").addEventListener("click",getPost);
var con=0;
var div= document.getElementById("cardDiv");
var ids = [];

function getPost(){
    fetch('https://jsonplaceholder.typicode.com/photos').then((res)=> {
        return res.json();
    })
        .then((post)=> {
            for (let i = 0; i < 4; i++) {
                let a = 1.5;
                let b = 200.5;
                con=getRandomInt(a, b);
                ids.push(con);
                div.innerHTML+=`
                    <div class="card col-3 m-1 mx-auto">
                        <img class="card-img-top" src="${post[con].thumbnailUrl}">
                        <div class="card-body">
                            <h5 class="card-title">${post[con].id}</h5>
                            <p class="card-text">${post[con].title}</p>
                        </div>
                    </div>
                    
                `
            }

        })
        .catch((e) => {
            console.log('Error: ' + e.message);
            console.log(e.response);
        });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    x = Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    while (poisc(x) === 1) {
        x = Math.floor(Math.random() * (max - min)) + min;
    }
    return x;
}

function poisc(x) {
    for (var i = 0; i < ids.length; i++) {
        if (x === ids[i]) {
            return 1;
        }
    }
    return 0;
}