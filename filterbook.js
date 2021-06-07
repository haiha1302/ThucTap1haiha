let filterContainer = document.getElementById('filter')
let dataKhachsan=JSON.parse(localStorage.getItem('KS'))


for (let data of dataKhachsan) {
    let div = `
    <div class="grid-item featured-rooms">
    <div class="image-wrap">
        <img class="room-image" src="${data.image}" alt="">
        <h5 class="room-name">${data.tenKS}</h5>
    </div>
    <div class="room-info-wrap">
        <span class="room-price">${data.giaThue} <span class="per-night">Per night</span> </span>
        <p class="paragraph">
            Check In:${data.checkin}<br>
            Check Out:${data.checkout}<br>
            Guests per room:${data.guest}
        </p>
        <a href="booking.html" id="${data.idKS}" class="btn rooms-btn bookBtn">Book now &rrarr;</a>
    </div>
    </div>
    `
    filterContainer.innerHTML += div
}


let bookBtn=document.getElementsByClassName('bookBtn')


for(let btn of bookBtn){
    btn.addEventListener('click',() => {
        event.preventDefault()
        for(let data of dataKhachsan) {
            if(data.idKS == btn.id) {
                localStorage.setItem('infoCheck',JSON.stringify(data))
                location.href='booking.html'
            }
        }
    })
}


