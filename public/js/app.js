// console.log("WORKING")

const app = angular.module ('BreweryApp', []);
app.controller('MainController', ['$http', function($http){
this.brewery = [];
this.createForm = {};
this.test="HELLLOOOOO";

this.createBrewery = () => {
  console.log('Submit button works');
$http({
  method: 'POST',
  url: '/brewery',
  data: this.createForm
}).then(response => {
  this.brewery.push(response.data);
  console.table(response.data);
  this.createForm={};
} , error => {
  console.error(error)
}).catch( err => console.log('Catch', err ))
}

this.getBrewery = () => {
  $http({ method: 'GET',
   url: '/brewery'
 }).then(response=>{
   this.brewery=response.data
   this.breweries = this.brewery[0];
 }).catch(err=> console.log(err));
}
this.getBrewery();

this.deleteBrewery= (id) => {
console.log('Deleting....');
  $http({
    method: 'DELETE',
    url: '/brewery/' + id
  }).then(response => {
    console.table(response.data);
    const removeByIndex = this.brewery.findIndex(brewery => brewery._id === id)

    this.brewery.splice(removeByIndex, 1);


    console.log('this is the array index number of the destination i want to delete: ', removeByIndex);
  }, error => { console.error(err.message)
  }).catch( err => console.error('Catch', err));
  }
}]);
