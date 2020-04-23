
var firebaseConfig = {
    apiKey: "AIzaSyAy_-YUMnW2Ng5y4Ba5vM9SYPNYOLtmu1Y",
    authDomain: "js-lab4.firebaseapp.com",
    databaseURL: "https://js-lab4.firebaseio.com",
    projectId: "js-lab4",
    storageBucket: "js-lab4.appspot.com",
    messagingSenderId: "427284355732",
    appId: "1:427284355732:web:fd4b138a0ee1226afbf281"
};

firebase.initializeApp(firebaseConfig);



function GoToDataBase() {
    firebase.database().ref().push({
        Name: Yname.value,
        Number: number.value,
        Email: email.value,
        Message: message.value
    }, function (error) {
        if (error) {
            alert("Ошибка! Возможны неполадки соединения или данные введены неверно!")
        } else {
            alert("Данные отправлены успешно!")
        }
    });
}