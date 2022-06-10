function bookMark(item) {
    // debugger;
   
    var list;
    if (localStorage.getItem('bookmark') == null) {
        list = [item];
    } else {
        list = JSON.parse(localStorage.getItem('bookmark')) || [];
        let ok = true;
        for (let x of list) {
            if (x.id == item.id) {
                alert("Phim đã tồn tại trong danh sách");
                ok = false;
                break;
            }
        }
        if (ok) {
            list.push(item);
            alert("Đã thêm vào danh sách yêu thích thành công");
        }
    }
    localStorage.setItem('bookmark', JSON.stringify(list));
    console.log(JSON.stringify(list))
    
}



function deleteAll() {
    if (confirm("Bạn muốn xóa tất cả danh sách yêu thích này không? ")) {
        localStorage.setItem('bookmark', null);
        location.reload();
    }
}

function deleteItem(id) {
    if (confirm("Bạn muốn xóa bộ phim yêu thích này không ? ")) {
        var index = list.findIndex(x => x.id == id);
        if (index >= 0) {
            list.splice(index, 1);
        }
        localStorage.setItem('films', JSON.stringify(list));
        window.location.reload();
    }
}

function refresh() {
    localStorage.setItem('bookmark', JSON.stringify(list));
    alert("Đã lam moi yeu thich thành công!");
}