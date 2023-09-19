function register() {
    // Lấy giá trị từ các trường đăng ký
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;
    var username = document.getElementById("register-username").value;
  
    // Kiểm tra nếu bất kỳ trường nào không được nhập
    if (email === "" || password === "" || username === "") {
      alert("Hãy điền đây đủ các mục trống");
    } 
    // Kiểm tra email đã tồn tại
    else if (checkExistingEmail(email)) {
      alert("Email đã đăng ký");
    } 
    // Đăng ký thành công
    else {
      alert("Đăng ký thành công");
      registerSuccess();
    }
  }
  
  function checkExistingEmail(email) {
    // Kiểm tra email đã tồn tại trong hệ thống
    // Trả về true nếu email đã tồn tại, ngược lại trả về false
    return false;
  }
  function registerSuccess(){
    // Chuyển hướng sang file main.html
    window.location.href = "main.html";
  }
