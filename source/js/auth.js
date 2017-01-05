/*
	Для работы модуля:
		* Подключить angular
		* Подключить модуль
		* Присвоить тегу html атрибут ng-app="app"
		* Обернуть форму в div c атрибутом ng-controller="sendFormData as sendFormData"
		* Присвоить input атрибут ng-model
		* Присвоить форме ng-submit="sendFormData.submit(user, formName, '/path-to'), где user - массив из данных input, formName - имя формы, '/path-to' - путь запроса
		* Сформировать div с ответом сервера с атрибутом ng-show="formName.$submitted" - данные в этом блоке будут появляться в случае ошибок в форме при отправке
		* В вышеуказанном блоке создать дополнительные div с ответами на разные ошибки:
			- ng-show="formName.inputName.$error.required" - обязательное для заполнения поле, где inputName - input.name
			- ng-show="formName.inputName.$error.email" - проверка поля с email на верную форму email
			- ng-show="formName.inputName.$error.minlength" - минимальная длинна введенного значения в input, в этом случае для input указать ng-minlength
		* В пределах контроллера вывести блок с переменной status, куда будет выводится ответ сервера об успехе или ошибке.
	Демо: http://rainjeck.tmweb.ru/sendFormData.html
*/
app.controller('sendFormData', ['$scope', '$http', function ($scope, $http) {
	this.submit = function (inputs, form, url) {
		if ( form.$valid ) {
			var data = angular.toJson(inputs);
			$http.post(url, data).then(function successCallback(response) {
				$scope.status = response.data.status;
				return status;
			}, function errorCallback(response) {
				$scope.status = response.data.status;
			});
		}
	}
}]);