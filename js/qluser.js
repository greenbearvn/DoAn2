function user(){
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var pass = document.getElementById('password').value;
    var role = document.getElementById('role').value;
    var user= {
        email:email,
        username:username,
        pass:pass,
        role:role
    }
    return user
}

function AddUser(user) {
    // debugger;
   
    var list;
    if (localStorage.getItem('user') == null) {
        list = [user];
    } else {
        list = JSON.parse(localStorage.getItem('user')) || [];
        list.push(user);
        alert("Đã thêm vao yeu thich thanh cong!");
        window.location.reload();
    }
    localStorage.setItem('user', JSON.stringify(list));
    console.log(JSON.stringify(list))
    
}

function LoadDataUser() {
    var infor =  "";
    var data = JSON.parse(localStorage.getItem('user')) || [];
    data.map((value,index)=>{
        infor += 
                    `
                    <tr>
                        <td >${index+1}</td>
                        <td>${value.email}</td>
                        <td>${value.username}</td>
                        <td>${value.role}</td>
                        <td >
                            <div id="show" ><i class="fa-solid fa-pen-to-square" onclick="getInforUser(${index})" ></i></div>
                        </td>
                        <td><i onclick="XoaUser(${index+1})" class="fa fa-remove" ></i></td>
                  
                    </tr>
                    `;
    })
    
    $('#render_data_user').html(infor);
    
} 
LoadDataUser()  


function getInforUser(index){
    list = JSON.parse(localStorage.getItem('user')) || [];
    document.getElementById('index_user').value = index;
    document.getElementById('email').value = list[index].email;
    document.getElementById('username').value = list[index].username;
    document.getElementById('password').value = list[index].pass;
    document.getElementById('role').value = list[index].role;

    document.getElementById('update_user').style.display ="inline-block";
    document.getElementById('add_user').style.display = "none";
}

function updateUser(){
    list = JSON.parse(localStorage.getItem('user')) || [];
    var index = document.getElementById('index_user').value;
    list[index] = {
        id : index+1,
        email:document.getElementById('email').value,
        username:document.getElementById('username').value ,
        pass:document.getElementById('password').value,
        role: document.getElementById('role').value
    }
    localStorage.setItem('user', JSON.stringify(list));
    
    window.location.reload();
    LoadDataUser()  

}

function XoaUser(id) {
    var list = JSON.parse(localStorage.getItem('user'));

    if(confirm('Bạn có chắc chắn muốn xóa người dùng này?')){
        var index = list.findIndex(x => x.id == id);
        list.splice(index,1);
        localStorage.setItem('user', JSON.stringify(list));
        window.location.reload();
    }
    LoadData();
}

function XoaUsers() {
    if (confirm("Bạn muốn xóa tất cả người dùng đã có?")) {
        localStorage.setItem('user', null);
        location.reload();
    }
}