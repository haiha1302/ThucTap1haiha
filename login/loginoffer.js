let btnLoginClick = document.getElementById('btn-login')
// console.log(dataUsers)

function checkUser() {
    event.preventDefault()
    var userNameInput = document.getElementById('user-name').value
    var passWordInput = document.getElementById('pass-word').value
   
    var check
    for (i = 0; i < dataUsers.length; i++) {
        if(userNameInput == dataUsers[i].userName && passWordInput == dataUsers[i].passWord) {
            check = true
            dataUsers[i].isLogin = true
            console.log(dataUsers)
            break
        }
    }
    if(check === true) {
        location.href='../bookingoffer/bookingoffer.html'
        for(let user of dataUsers) {
            if(user.isLogin === true) {
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('infoCheck', JSON)
            }
        }   
        // localStorage.clear()
    }
    else {
        alert(`Đăng nhập thất bại`)
    }
    // let nameId = document.getElementById('nameId')
    // console.log(dataUsers)

    // for(data of dataUsers) {
    //     if(data.isLogin == true) {
    //         nameId.innerHTML = `<a href="login/login.html" class="sm-link"><i class="fas fa-user-circle"></i></a>
    //                                 <h5 class="userName" id="nameId">${newData.value}</h5>`
    //     }
    // }
}




