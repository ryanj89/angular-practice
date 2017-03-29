(function() {
	'use strict'

	angular.module('app').config(config)

	config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

	function config ($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true)

		$stateProvider
			.state({
				name: 'list-playlists',
				url: '/playlist',
				component: 'playlistList'
			})

			.state({
				name: 'show-playlist',
				url: '/playlist/:id',
				component: 'playlistShow'
			})
	}
}())