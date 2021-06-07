// document.getElementById('submit').onclick = function(){
//         swal("Here's a message!");
// };

// document.getElementById('form1').addEventListener('submit',myFunction)

// function myFunction(e){
//     let formData={
//         name:document.getElementById('name').value,
//         email:document.getElementById('email').value,
//         phone:document.getElementById('phone').value,
//         request:document.getElementById('request').value
//     }
//     localStorage.setItem('formData',JSON.stringify(formData));
//     e.preventDefault();
// }



// let nameInput=document.getElementById('name')
// let submitBtn=document.getElementById('submit')
// function update(params) {
//     let newName=nameInput.value;
//     console.log(newName);
// }
// submitBtn.addEventListener('click',update())





//add thông tin khách hàng vào localstorage
var submitBtn=document.getElementById('submit');


function booking(){
    event.preventDefault()
    var nameInput=document.getElementById('name').value
    var emailInput=document.getElementById('email').value
    var phoneInput=document.getElementById('phone').value
    var requestInput=document.getElementById('request').value

    dataCustomer.push({
        name:`${nameInput}`,
        email:`${emailInput}`,
        phoneNumber:`${phoneInput}`,
        request:`${requestInput}`

        
    })
    localStorage.setItem('Customer',JSON.stringify(dataCustomer))
    let data=JSON.parse(localStorage.getItem('Customer'))
    console.log(data);
}

// ấn submit hiện thông báo
const openButton=document.querySelectorAll('[data-modal-target]')
const closeButton=document.querySelectorAll('[data-close-button]')
const overlay=document.getElementById('overlay')

openButton.forEach(button =>{
    button.addEventListener('click', () =>{
        const modal=document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeButton.forEach(button =>{
    button.addEventListener('click', () =>{
        const modal=button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal){
    if(modal==null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if(modal==null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// hiện thông tin ngày check
let info=document.getElementById('infoDateCheck')
let dateCheck=JSON.parse(localStorage.getItem('infoCheck'))

let form =`
                <div class="name-info">
                <i class="far fa-building"></i></a>
                <h3>${dateCheck.tenKS}</h3>
                <h3>${dateCheck.giaThue}</h3>
            </div>
            <div class="date">
                <div class="check">Check In:
                    <div class="date-check1">${dateCheck.checkin}</div>
                </div>
                <div class="check">Check Out:
                    <div class="date-check2">${dateCheck.checkout}</div>
                </div>
            </div>
            <div class="number">
                <div class="customer">Guests per room:</div>
                <div class="number-customer">${dateCheck.guest} Guests</div>
            </div>
            <div class="book-img">
                <img src="${dateCheck.image}" alt="">
                <div class="icon">
                    <div class="eat">
                        <i class="fas fa-utensils"></i>
                        <div class="name-icon1">Breakfast</div>
                    </div>
                    <div class="wifi">
                            <i class="fas fa-wifi"></i>
                            <div class="name-icon2"> Wifi</div>
                    </div>
                </div>
            </div>     
    `
    info.innerHTML += form












