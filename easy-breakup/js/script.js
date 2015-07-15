var sendText = function() {
  var phoneInput = document.getElementById('phone-number');
  var phoneNumber = phoneInput.value;
  var nameInput = document.getElementById('name')
  var name = nameInput.value;
  maestro.Twilio.sendSms (phoneNumber, "hey it's " + name + "." );
  document.getElementById('message').value='';};