function items(){
    var names = document.getElementById("udtname").value;
    var img = document.getElementById('imgxx').src;
    var decr = document.getElementById("udtdes").value;
    var category = document.getElementById("udtcat").value;
    var actress = document.getElementById("udtcas").value;
    var year = document.getElementById("udtyear").value;
    var items= {
        names:names,
        img:img,
        decr:decr,
        category:category,
        actress:actress,
        year:year
    }
    return items
}

function Add(items) {
    // debugger;
   
    var list;
    if (localStorage.getItem('films') == null) {
        list = [items];
    } else {
        list = JSON.parse(localStorage.getItem('films')) || [];
        list.push(items);
        alert("Đã thêm bộ phim mới thành công!");
        window.location.reload();
    }
    localStorage.setItem('films', JSON.stringify(list));
    console.log(JSON.stringify(list))
    
}
function LoadData() {
    var infor =  "";
    var data = JSON.parse(localStorage.getItem('films')) || [];
    data.map((value,index)=>{
        infor += 
                    `
                    <tr>
                        <td >${index+1}</td>
                        <td>${value.names}</td>
                        <td style="width:15%"><img src="${value.img}" alt="" srcset="" width="100%"></td>
                        <td>${value.category}</td>
                        <td>${value.actress}</td>
                        <td>${value.year}</td>
                        <td >
                            <div id="show" ><i class="fa-solid fa-pen-to-square" onclick="getContent(${index})" ></i></div>

                            <!-- The Modal -->
                                
                            </td>
                        <td><i onclick="Xoa(${index+1})" class="fa fa-remove" ></i></td>
                  
                    </tr>
                    `;
    })
    
    $('#render_data').html(infor);
    
} 
LoadData()  

function Xoa(id) {
    var list = JSON.parse(localStorage.getItem('films'));

    if(confirm('Bạn có chắc chắn muốn xóa bộ phim này?')){
        var index = list.findIndex(x => x.id == id);
        list.splice(index,1);
        localStorage.setItem('films', JSON.stringify(list));
        window.location.reload();
    }
    LoadData();
}

function updateFilms(){
    list = JSON.parse(localStorage.getItem('films')) || [];
    var index = document.getElementById('index').value;
    list[index] = {
        id : index+1,
        names:document.getElementById('udtname').value,
        img : document.getElementById('imgxx').src,
        decr:document.getElementById('udtdes').value,
        category:document.getElementById('udtcat').value,
        actress:document.getElementById('udtcas').value,
        year:document.getElementById('udtyear').value


    }
    localStorage.setItem('films', JSON.stringify(list));
    window.location.reload();
    LoadData()  

}

function getContent(index){
    list = JSON.parse(localStorage.getItem('films')) || [];
    document.getElementById('index').value = index;
    document.getElementById('udtname').value = list[index].names;
    document.getElementById('udtdes').value = list[index].decr;
    document.getElementById('udtcat').value = list[index].category;
    document.getElementById('udtcas').value = list[index].actress;
    document.getElementById('udtyear').value = list[index].year

    document.getElementById('update').style.display ="inline-block";
    document.getElementById('add').style.display = "none";
}


function XoaFilms() {
    if (confirm("Bạn muốn xóa tất cả bộ phim đã có?")) {
        localStorage.setItem('films', null);
        location.reload();
    }
}

function upload(fileInput){
    if(fileInput.files && fileInput.files[0]){
    var reader = new FileReader();
    reader.onload = function(e){
        $('#imgxx').attr('src',e.target.result)
        document.getElementById('imgUpload').style.display ="none";
    }
    reader.readAsDataURL(fileInput.files[0])
    }
}

