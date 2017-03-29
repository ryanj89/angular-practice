(function () {
	'use strict'

	angular
		.module('app')
		.component('userList', {
			templateUrl: 'app/users/user-list.template.html',
			controller: controller
		})
	
	controller.$inject = ['userService']

	function controller(userService) {
		const vm = this
		const id = 'ryanj89@gmail.com'

		vm.$onInit = function () {
			userService.getUsers()
				.then(users  => vm.users = users)
		}
	}
}())