myApp.factory('DataFactory',['$http',function($http) {
console.log('Data Factory running');

  function sendSMS(number){
    $http({
      method: 'POST',
      url: '/connect/sms',
      data: number
    }).then(function(response){
      console.log('I think we sent a text, this is what the server says', response);
    })
  }

  function makeCall(number){
    $http({
      method: 'POST',
      url: '/connect/call',
      data: number
    }).then(function(response){
      console.log('I think we made a call, this is what the server says',response);
    })
  }


  return {
    sendSMS: sendSMS,
    makeCall: makeCall
  }
}]);
