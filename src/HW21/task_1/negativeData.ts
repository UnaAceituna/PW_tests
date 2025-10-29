
enum errorMessageText {
    wrongCreds = "Invalid credentials",
    noPass = "Password is required",
    noLogin = "Username is required",
    noCredentials = "Credentials are required"
}


interface ICredentialsNegative {
    username: string;
    password: string;
}

interface IUserData {
    credentials: ICredentialsNegative;
    errorMessage: errorMessageText;
    title: string;
}


const credentialsNegative: IUserData[] = [  

    //Пеустые поля
    {
        credentials: 
        { username: "", password: ""}, 
        errorMessage: errorMessageText.noCredentials, 
        title: "Empty_Inputs"
    },
    //логин 6 символов, пароль - нет
    {
        credentials: 
        { username: "Google", password: ""}, 
        errorMessage: errorMessageText.noPass, 
        title: "No_Password"
    },
    //логин - нет, парол 9 символов
    {
        credentials: 
        { username: "", password: "1234567Qq"}, errorMessage: errorMessageText.noLogin, title: "NoLogin"},
    //логин 2 символа, парол 9 символов
    {
        credentials: 
        { username: "Go", password: "1234567Qq"}, 
        errorMessage: errorMessageText.wrongCreds, 
        title: "Wrong_Login"
    },
     //логин 6 символов, пароль 7 символов
    {
        credentials: 
        { username: "Google", password: "12345Qq"}, 
        errorMessage: errorMessageText.wrongCreds, 
        title: "Wrong_Password"},
    //логин с пробелами в начале, пароль 9 символов
    {
        credentials: 
        { username: " Google", password: "1234567Qq"}, 
        errorMessage: errorMessageText.wrongCreds, 
        title: "Login_WithSpace"},
    //логин  пробелами, пароль 9 символов
    {
        credentials: 
        { username: "          ", password: "1234567Qq"}, 
        errorMessage: errorMessageText.noLogin, 
        title: "Login_AsSpace"},
    //логин 41 символ, пароль 10 символов
    {
        credentials: 
        { username: "GoogleGoogleGoogleGoogleGoogleGoogleGoogl", password: "1234567Qq"}, 
        errorMessage: errorMessageText.wrongCreds, 
        title: "Too_Long_Login"},
    //логин 6 смволов, пароль без букв в вехнем регистре
    {
        credentials: 
        { username: "Google", password: "1234567qq"}, 
        errorMessage: errorMessageText.wrongCreds, 
        title: "No_Upper_Case_Password"},
    //логин 6 символов, пароль из 10 пробелов
    {
        credentials: 
        { username: "Google", password: "          "}, 
        errorMessage: errorMessageText.noPass, 
        title: "Password_As_Space"},
]

export default credentialsNegative;