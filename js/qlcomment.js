function comment(){
    var filmName = document.getElementById("filmName").value;
    var username = document.getElementById("publisher").value;
    var content = document.getElementById('content').value;
    var time = new Date();
    var day = time.getDate();
    var month = time.getMonth()+1;
    var year = time.getFullYear();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var second = time.getSeconds();
    var timeline = `${hour}:${minutes}:${second} - ${day}/${month}/${year}`
    var comment= {
        filmName:filmName,
        username:username,
        content:content,
        time:timeline
    }
    return comment
}

function addComment(comment) {
    // debugger;
   
    var list;
    if (localStorage.getItem('comments') == null) {
        list = [comment];
    } else {
        list = JSON.parse(localStorage.getItem('comments')) || [];
        list.push(comment);
        alert("Đã thêm vao yeu thich thanh cong!");
        window.location.reload();
    }
    localStorage.setItem('comments', JSON.stringify(list));
    console.log(JSON.stringify(list))
    
}

function LoadDataComment() {
    var infor =  "";
    var data = JSON.parse(localStorage.getItem('comments')) || [];
    data.map((value,index)=>{
        infor += 
                    `
                    <tr>
                        <td >${index+1}</td>
                        <td>${value.filmName}</td>
                        <td>${value.username}</td>
                        <td>${value.content}</td>
                        <td>${value.time}</td>
                        <td >
                            <div id="show" ><i class="fa-solid fa-pen-to-square" onclick="getInforComment(${index})" ></i></div>
                        </td>
                        <td><i onclick="XoaComment(${index+1})" class="fa fa-remove" ></i></td>
                  
                    </tr>
                    `;
    })
    
    $('#render_data_comment').html(infor);
    
} 
LoadDataComment()  

function GetFilms() {
    var f =  "";
    var list = JSON.parse(localStorage.getItem('films')) || [];
    list.map((value,index)=>{
        f += 
                    `
                    <option value="${value.names}">${value.names}</option>
                    `;
    })
    
    $('#filmName').html(f);
    
} 
GetFilms() 

function getInforComment(index){
    list = JSON.parse(localStorage.getItem('comments')) || [];
    document.getElementById('index_comment').value = index;
    document.getElementById('filmName').value = list[index].filmName;
    document.getElementById('publisher').value = list[index].username;
    document.getElementById('content').value = list[index].content;

    document.getElementById('update_comment').style.display ="inline-block";
    document.getElementById('add_comment').style.display = "none";
}

function updateComment(){
    list = JSON.parse(localStorage.getItem('comments')) || [];
    var index = document.getElementById('index_comment').value;
    list[index] = {
        id : index+1,
        filmName:document.getElementById('filmName').value,
        username:document.getElementById('publisher').value ,
        content:document.getElementById('content').value,
    }
    localStorage.setItem('comments', JSON.stringify(list));
    
    window.location.reload();
    LoadDataComment()  

}

function XoaComment(id) {
    var list = JSON.parse(localStorage.getItem('comments'));

    if(confirm('Bạn có chắc chắn muốn xóa bình luận này?')){
        var index = list.findIndex(x => x.id == id);
        list.splice(index,1);
        localStorage.setItem('comments', JSON.stringify(list));
        window.location.reload();
    }
    LoadData();
}

function XoaComments() {
    if (confirm("Bạn muốn xóa tất cả bình luận đã có?")) {
        localStorage.setItem('comments', null);
        location.reload();
    }
}