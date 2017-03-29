(function() {
	
	angular
		.module('app')
		.service('userService', service)
	
	service.$inject = ['$http']

	function service($http) {
		this.getUsers = getUsers
		this.getUser = getUser
		
		function getUsers() {
			return $http.get('https://wedj.herokuapp.com/user').then(usersResponse => {
				const users = usersResponse.data
				return users
			})
		}

		function getUser(id) {
			return $http.get(`https://wedj.herokuapp.com/user/${id}`).then(userResponse => {
				const user = userResponse.data
				return user
			})
		}
	}
}())