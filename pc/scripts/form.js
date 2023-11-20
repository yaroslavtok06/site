function submitForm() {
    var name = document.getElementById('name').value;
    var problem = document.getElementById('problem').value;
    var phone = document.getElementById('phone').value;

    var requestNumber = Math.floor(Math.random() * 1000000); //number request

    //check phone
    var phoneRegex = /^\+\d{1,3}\d{9,}$/;
    //check form
    if (!name || !problem || !phone) {
        showMessage('Пожалуйста, заполните все поля формы.');
        return;
    }else if (!phoneRegex.test(phone)) {
        showMessage('Пожалуйста, введите корректный номер телефона.');
        return;
    }

    var message = "Заявка №" + requestNumber + "\n\nИмя: " + name + "\nПроблема: " + problem + "\nТелефон: " + phone;

    var botToken = '6853050061:AAGpRdXzyGMiLlOZqumKwL1y06jPHce2QGU';
    var chatId = '1603011041';

    axios.post('https://api.telegram.org/bot' + botToken + '/sendMessage', {
        chat_id: chatId,
        text: message
    })
    .then(function (response) {
        console.log(response.data);
        showMessage('Сообщение успешно отправлено!');
    })
    .catch(function (error) {
        console.error(error);
        showMessage('Произошла ошибка при отправке сообщения.');
    });
}

function showMessage(text) {
    var messageElement = document.getElementById('message');
    messageElement.style.display = "block";
    messageElement.innerHTML = '<p>' + text + '</p>';
}