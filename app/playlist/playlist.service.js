(function() {
	'use strict'

	angular
		.module('app')
		.service('playlistService', service)

	service.$inject = ['$http']

	function service($http) {
		this.getPlaylists = getPlaylists
		this.getPlaylist = getPlaylist

		function getPlaylists() {
			return $http.get('https://wedj.herokuapp.com/playlist').then(playlistsResponse => {
				const playlists = playlistsResponse.data
				return playlists
			})
		}

		function getPlaylist(id) {
			return $http.get(`https://wedj.herokuapp.com/playlist/${id}`).then(playlistResponse => {
				const playlist = playlistResponse.data
				console.log(playlist)
				return playlist
			})
		}
	}
}())