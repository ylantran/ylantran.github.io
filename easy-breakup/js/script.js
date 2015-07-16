var sendText = function () {
  var phoneInput = document.getElementById('phone-number');
  var phoneNumber = phoneInput.value;
  var nameInput = document.getElementById('yourname');
  var name = nameInput.value;
  var hisOrHerNameInput = document.getElementById('hisorhername');
  var hisOrHerName = hisOrHerNameInput.value;
  maestro.Twilio.sendSms(phoneNumber, "Hey, it's " + name + ". I'm breaking up with you. Things just arent working..." );
  document.getElementById('message').value='';
};

var checkresponse = function () {
  alert('Watching for a response...')
  maestro.Twilio.recieveSms(function(reply) {
  var hisOrHerNameInput = document.getElementById('hisorhername');
  var hisOrHerName = hisOrHerNameInput.value;
  document.write("(" + reply.From + ")" + hisOrHerName + ": " + reply.Body);
  var list = document.getElementById('demo')  
  var firstname = document.getElementById('firstname').value
  entry.appendChild(document.createTextNode(firstname));
  list.appendChild(entry);
  });
  
};

var x = document.getElementById("mySelect");
var option = document.createElement("option");
option.text = "Kiwi";
x.add(option);