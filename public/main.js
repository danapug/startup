function login() {
    const usernameEl = document.querySelector("#name");
    const passwordEl = document.querySelector("#pass");
    const userExists = localStorage.getItem(JSON.stringify(usernameEl.value));
    if (userExists == null) {
        const user = {
            username: usernameEl.value,
            password: passwordEl.value
        };
        localStorage.setItem("username", usernameEl.value);
        const userString = JSON.stringify(user);
        localStorage.setItem("user", userString);
        window.location.href = "budget.html";
    }
    else {
        const a = passwordEl.value;
        const b = localStorage.getItem(JSON.stringify (usernameEl.value));
        const c = JSON.parse(b);
        const d = c.password;
        if (passwordEl.value == d) {
            window.location.href = "budget.html";
        }
    }
}