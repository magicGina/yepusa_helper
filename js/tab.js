function openTab(evt, tabName) {
// 获取所有tab内容
var tabcontent = document.getElementsByClassName("pages");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // 获取所有tab链接
    var tablinks = document.getElementsByClassName("page_labels");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("page_labels_active", "page_labels_gray");
    }
    // 显示当前选中的tab内容
    document.getElementById(tabName).style.display = "block";
    // 为当前选中的tab链接添加active类
    var aa = evt.currentTarget.className;
    evt.currentTarget.className = aa.replace("page_labels_gray", "page_labels_active");
}