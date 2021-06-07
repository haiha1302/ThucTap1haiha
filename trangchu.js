// Selectors
let header=document.querySelector('.header')
let hamburgerMenu=document.querySelector('.hamburger-menu')
let grid = document.getElementById('grid')
grid.innerHTML = ''
for(let i = 0; i < 7; i+=3) {
    let ele = `
    <div class="grid-item featured-hotels" data-aos="fade-right" data-aos-duration="2000">
        <img src="${dataHotel[i].image}" alt="" class="hotel-image">
        <h5 class="hotel-name">${dataHotel[i].tenKS}</h5>
        <span class="hotel-price">From ${dataHotel[i].giaThue}/Night</span>
        <div class="hotel-rating">
            <i class="fas fa-star rating"></i>
            <i class="fas fa-star rating"></i>
            <i class="fas fa-star rating"></i>
            <i class="fas fa-star rating"></i>
            <i class="fas fa-star-half rating"></i>
        </div>
        <a id="${dataHotel[i].idKS}" href="booking.html" class="btn bookBtn btn-gradient">Book now
            <span class="dots"><i class="fas fa-ellipsis-h"></i></span>
        </a>
    </div>`
    grid.innerHTML += ele
}
let bookBtn=document.getElementsByClassName('bookBtn')


for(let btn of bookBtn){
    btn.addEventListener('click',() => {
        event.preventDefault()
        for(let data of dataHotel) {
            if(data.idKS == btn.id) {
                localStorage.setItem('infoCheck',JSON.stringify(data))
                location.href='booking.html'
            }
        }
    })
}


window.addEventListener('scroll',function(){
    let windowPosition=window.scrollY>0
    header.classList.toggle('active',windowPosition)
})

hamburgerMenu.addEventListener('click',function(){
    header.classList.toggle('menu-open')
})


//Login Logout
let newData = JSON.parse(localStorage.getItem('user'))
var nameId = document.getElementById('nameId')
var clearLocal = document.getElementById('clear-local')
renderUser()
//login
function renderUser() {
    if (newData) {
        nameId.innerHTML = `<a href="login/login.html" class="sm-link"><i class="fas fa-user-circle"></i></a>
        <h5 class="userName" id="nameId">${newData.userName}</h5>`
    }
}
//logout
clearLocal.addEventListener('click', clear)

function clear() {
    location.href = 'trangchu.html'
    localStorage.clear()
}


// SEARCH FILTER

// let checkIn=document.getElementById("check-in")
// checkIn.addEventListener('change',() => {
//     console.dir(checkIn)
// })

function filtersearch(){
    event.preventDefault()
    let inputName =document.getElementById('destination');
    let filter=inputName.value.toUpperCase();
    let dataNeeded = []
    for(let item of dataHotel){
        let nameKS=item.tenKS.toUpperCase();
            if(filter==nameKS){
            dataNeeded.push(item)
        }
    }
    localStorage.setItem('KS',JSON.stringify(dataNeeded))
    location.href='filterbook.html'
}

let searchButton=document.getElementById('search')
searchButton.addEventListener('click',filtersearch);



//

let bookSpace=document.getElementById('book')

for(let room of dataHotel){
    let space=`
    <div class="grid-item featured-rooms" data-aos="fade-down-right" data-aos-duration="2000">
                        <div class="image-wrap">
                            <img class="room-image" src="${room.image}" alt="">
                            <h5 class="room-name">${room.tenKS}</h5>
                        </div>
                        <div class="room-info-wrap">
                            <span class="room-price">${room.giaThue} <span class="per-night">Per night</span> </span>
                            <p class="paragraph">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo temporibus tempore qui
                                aperiam, perferendis quibusdam eius, sunt provident vel pariatur dolore unde,
                                necessitatibus quaerat. Temporibus rerum earum corporis a quisquam!
                            </p>
                            <a href="booking.html" id="${room.idKS}" class="btn rooms-btn bookBtn">Book now &rrarr;</a>
                        </div>
    </div>
    `
    bookSpace.innerHTML+=space
}


for(let btn of bookBtn){
    btn.addEventListener('click',() => {
        event.preventDefault()
        for(let item of dataHotel){
            if(item.idKS == btn.id) {
                localStorage.setItem('infoCheck',JSON.stringify(item))
                location.href = "booking.html"
            }
        }
    })
}


// function sendEmail(){
//     var subject=document.getElementById('subject').value;
//     var message=document.getElementById('message').value;

//     Email.send({
//         SecureToken : " 1051cc25-43f3-4aab-adbc-e0d742387a52",
//         To : 'thedat237@gmail.com',
//         From : "dat9d3@gmail.com",
//         Subject : subject,
//         Body : message
//     }).then(function(message){
//         alert('your email sent successfully')
//     });
// }






