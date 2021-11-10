class Login {
    constructor() {

    }
    login() {
        const usernameInput = document.getElementById('username');
        console.log('from login() usernameInput', usernameInput);
        const passwordInput = document.getElementById('password');
        const username = usernameInput.innerHTML;
    }
}
const login = new Login();