 
function auth(event) {
      event.preventDefault();

      var tel = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      /*username and password data 1*/
      if (tel === "hasni" && password === "123") {
          window.location.replace("pages/page1.html"); return;
      }

      /*username and password data 2*/
      if (tel === "subhan" && password === "3030"){
          window.location.replace("pages/page2.html"); return;
      }

      else {
          alert("Invalid username or password");
          return;
      }
}

