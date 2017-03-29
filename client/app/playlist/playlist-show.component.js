(function() {
	'use strict'

	angular
		.module('app')
		.component('playlistShow', {
			templateUrl: 'app/playlist/playlist-show.template.html',
			controller: controller
		})
	
	controller.$inject = ['$stateParams', 'playlistService']

	function controller ($stateParams, playlistService) {
		const vm = this

		vm.$onInit = function() {
			const playlistId = $stateParams.id

			playlistService.getPlaylist(playlistId).then(playlist => {
				vm.playlist = playlist
				// console.log(vm.playlist)
			})
				// .then(playlist => vm.playlist = playlist)
		}
	}
}())