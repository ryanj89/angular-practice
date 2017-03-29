(function() {
	'use strict'

	angular
		.module('app')
		.component('playlistList', {
			templateUrl: 'app/playlist/playlist-list.template.html',
			controller: controller
		})
	
	controller.$inject = ['playlistService']

	function controller (playlistService) {
		const vm = this

		vm.$onInit = function() {
			playlistService.getPlaylists()
				.then(playlists => vm.playlists = playlists)
		}
	}
}())