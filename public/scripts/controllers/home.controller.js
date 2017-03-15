myApp.controller('HomeController',['DataFactory', function(DataFactory) {
  var self = this;
  console.log('home controller running');
  self.testMessage = 'Hello World, this is the home controller test message';
  self.endpoint = {};


  self.sendSMS = function(number){
    console.log('send text request sent to Factory to this number:',number);
    DataFactory.sendSMS(number);

  }

  self.makeCall = function(number){
    DataFactory.makeCall(number);
    console.log('make call request sent to Factory');
  }

}]); // end controller code block
