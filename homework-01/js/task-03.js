const ADMIN_PASSWORD = 'jqueryismyjam';
let message;


if (prompt('ADMIN_PASSWORD') === 'jqueryismyjam') {
    message = 'Добро пожаловать!';

} else if (prompt('ADMIN_PASSWORD') === null) {
    message = 'Отменено пользователем';

} else {
    message = 'Доступ запрещен, неверный пароль!';

}
alert(message);