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
			return Promise.all([$http.get(`https://wedj.herokuapp.com/playlist/${id}`), $http.get(`https://wedj.herokuapp.com/playlist_song/playlist/${id}`)])
				.then(response => {
					const playlist = response[0].data
					const playlistSongs = response[1].data
					playlist.songs = []
					const songs = playlistSongs.map(song => {
						return $http.get(`https://wedj.herokuapp.com/song/${song.s_id}`).then(songResponse => {
							playlist.songs.push(songResponse.data)
						})
					})
					return playlist
				})
		}
	}
}())