async function login() {
  var payload = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  var response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  
    var data = await response.json();
    localStorage.setItem("authToken",data.token);
 
  console.log(response, data);
  console.log(data.token);
}
