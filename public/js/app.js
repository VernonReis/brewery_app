const app = angular.module('BreweryApp', []);

app.controller('MainController', ['$http', function ($http) {

}]);



app.controller('AuthController', ['$http', function ($http) {

    this.loginUser = () => {
        $http({ url: '/sessions/login', method: 'post', data: this.loginForm })
            .then(response => {
                console.log('Log in successful!');
                this.user = response.data.user;
            }, err => {
                console.log(err.data.err);
                this.error = err.statusText;
            })
            .catch(err => this.error = 'Server broke?');
    };

    this.registerUser = () => {
        $http({ url: '/user', method: 'post', data: this.newUserForm })
            .then(response => {
                console.log('Register successful!');
                this.user = response.data.user;
            }, err => {
                console.log(err.data.err);
                this.error = err.statusText;
            })
            .catch(err => this.error = 'Something went wrong');
    };

}]);