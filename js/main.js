/* global angular, console */
'use strict';

angular.module('rdgithub', [])

	.config(['$locationProvider', function ($locationProvider) {
		$locationProvider.html5Mode(true);
	}])

	.constant('ghUrls', {
		'user': 'https://api.github.com/users/:username',
		'repos': 'https://api.github.com/users/:username/repos',
		'repoStream': 'https://api.github.com/repositories'
	})

	.constant('username', 'rosadurante')

	.factory('ghService', ['$http', '$q', 'username', 'ghUrls', function ($http, $q, username, urls) {

		var _parseUserDetails = function (data) {
				return {
					name: data.name,
					githubUrl: data.html_url,
					avatar: data.avatar_url,
					publicRepos: data.public_repos,
					publicGists: data.public_gists,
					followers: data.followers,
					following: data.following,
					location: data.location,
					email: data.email,
					url: data.blog,
					updated: data.updated_at
				};
			},

			_parseRepos = function (data) {
				var d = new Date(), repos = [], dataFiltered;

				// Select repos that aren't forks and has 2 years old or less.
				d.setYear(d.getFullYear() - 2);
				dataFiltered = data.filter(
					function (repo) {
						return !repo.fork && (new Date(repo.pushed_at) > d);
					});

				dataFiltered.sort(function (repo1, repo2) {
					var dateRepo1 = new Date(repo1.pushed_at),
						dateRepo2 = new Date(repo2.pushed_at);

					if (dateRepo2 > dateRepo1) { return 1; }
					if (dateRepo2 < dateRepo1) { return -1; }

					return 0;
				});

				dataFiltered.forEach(function (repo) {
					repos.push({
						url: repo.has_pages ? 'http://' + username + '.github.com/' + repo.name : repo.html_url,
						created: repo.created_at,
						updated: repo.pushed_at,
						description: repo.description,
						githubUrl: repo.html_url,
						language: repo.language,
						name: repo.name
					});
				});

				return repos;

			},

			_getUserDetails = function () {
				return $http.get(urls.user.replace(':username', username)).then(function (response) {
					return _parseUserDetails(response.data);
				}, function (response) { console.log('$http to users/' + username + ' return an error.'); });
			},

			_getRepos = function () {
				return $http.get(urls.repos.replace(':username', username)).then(function (response) {
					return _parseRepos(response.data);
				}, function (response) { console.log('$http to users/' + username + '/repos return an error.'); });
			};

		return {
			'getRepos': _getRepos,
			'getUserDetails': _getUserDetails
		};
	}])

	.controller('ghCntrl', ['$scope', 'ghService', function ($scope, ghService) {
		
		ghService.getUserDetails().then(function (userDetails) {
			$scope.user = userDetails;
		});

		ghService.getRepos().then(function (repos) {
			$scope.repos = repos;
		});
	}]);