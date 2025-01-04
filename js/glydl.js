function button(){
    var login="15107529841";
    var possword="yh2698287603";
    var id=document.getElementById("id").value;
    var pwd=document.getElementById("pwd").value;
    if(login==id&&possword==pwd){
        alert("登录成功");
    }else {
        alert("登录失败");
    }
}