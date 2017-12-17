const app = angular.module('BreweryApp', []);

app.controller('MainController', ['$http', function ($http) {

}]);



app.controller('AuthController', ['$http', function ($http) {

    this.loginUser = () => {
        $http({ url: '/sessions/login', method: 'post', data: this.loginForm })
            .then(response => {
                //console.log('Log in successful!');
                this.user = response.data.user;
            }, ex => {
                console.log(ex.data.err);
                this.error = ex.statusText;
            })
            //.catch(err => this.error = 'Server broke?');
    };

}]);