function category(){
    var name = document.getElementById("catname").value;
    var decr = document.getElementById("catdes").value;
    var category= {
        names:name,
        decr:decr,
    }
    return category
}

function AddCat(category) {
    // debugger;
   
    var list;
    if (localStorage.getItem('category') == null) {
        list = [category];
    } else {
        list = JSON.parse(localStorage.getItem('category')) || [];
        list.push(category);
        alert("Đã thêm thể loại mới thành công!");
        window.location.reload();
    }
    localStorage.setItem('category', JSON.stringify(list));
    console.log(JSON.stringify(list))
    
}

function LoadDataCat() {
    var infor =  "";
    var data = JSON.parse(localStorage.getItem('category')) || [];
    data.map((value,index)=>{
        infor += 
                    `
                    <tr>
                        <td >${index+1}</td>
                        <td>${value.names}</td>
                        <td>${value.decr}</td>
                        <td >
                            <div id="show" ><i class="fa-solid fa-pen-to-square" onclick="getContentCat(${index})" ></i></div>
                        </td>
                        <td><i onclick="XoaCat(${index+1})" class="fa fa-remove" ></i></td>
                  
                    </tr>
                    `;
    })
    
    $('#render_data_cat').html(infor);
    
} 
LoadDataCat()  

function getContentCat(index){
    list = JSON.parse(localStorage.getItem('category')) || [];
    document.getElementById('index_cat').value = index;
    document.getElementById('catname').value = list[index].names;
    document.getElementById('catdes').value = list[index].decr;

    document.getElementById('update_cat').style.display ="inline-block";
    document.getElementById('add_cat').style.display = "none";
}

function updateCat(){
    list = JSON.parse(localStorage.getItem('category')) || [];
    var index = document.getElementById('index_cat').value;
    list[index] = {
        id : index+1,
        names:document.getElementById('catname').value,
        decr:document.getElementById('catdes').value,
    }
    localStorage.setItem('category', JSON.stringify(list));
    
    window.location.reload();
    LoadDataCat()  

}

function XoaCat(id) {
    var list = JSON.parse(localStorage.getItem('category'));

    if(confirm('Bạn có chắc chắn muốn xóa thể loại này?')){
        var index = list.findIndex(x => x.id == id);
        list.splice(index,1);
        localStorage.setItem('category', JSON.stringify(list));
        window.location.reload();
    }
    LoadData();
}

function XoaCats() {
    if (confirm("Bạn muốn xóa tất cả thể loại đã có?")) {
        localStorage.setItem('category', null);
        location.reload();
    }
}