const app = angular.module ('BreweryApp', []);
app.controller('MainController', ['$http', function($http){
this.brewery = '';
this.createForm = {};

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
this.getBreweries = () => {
    $http({
        method:'GET',
        url: '/holidays'
    }).then( response => {
        this.brewery =  response.data ;
        this.oneBrewery = this.brewery[0];
    }, error => {
        console.error( error.message );
    }).catch( err => console.error('Catch: ' , err ));
};
//load immediately on page load
this.getBreweries();
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
  
