function login() {
    // Lấy giá trị từ các trường đăng ký
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;
  
    // Kiểm tra nếu bất kỳ trường nào không được nhập
    if (email === "" || password === "") {
      alert("Hãy điền đây đủ các mục trống");
    } 
    // Kiểm tra email đã tồn tại
    else if (Checklogin(email,password)==true) {
      alert("Đăng nhập thành công");
      loginSuccess();
    }

    else {
      alert("Tài khoản hoặc mật khẩu sai");
    }
  }
  
function Checklogin(email,password) {
    // Kiểm tra email và password đã tồn tại trong hệ thống
    // Trả về true nếu thông tin đăng nhập đúng, ngược lại trả về false
    return true;
  }
function loginSuccess() {
    // Chuyển hướng sang file main.html
    window.location.href = "main.html";
  }

