var config = {
	apiKey: "AIzaSyDUC42w92EC89iXHVYN9zSX6I_Az3ETYbw",
	authDomain: "blog-contact-3d092.firebaseapp.com",
	databaseURL: "https://blog-contact-3d092.firebaseio.com",
	projectId: "blog-contact-3d092",
	storageBucket: "",
	messagingSenderId: "327339492725"
};
firebase.initializeApp(config);


var messageRef = firebase.database().ref('Contact');
//Listen form
document.getElementById("contactInfo").addEventListener('submit', submitForm);

//Submit from
function submitForm() {


	//get values
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var msg = document.getElementById("message").value;

	//save info
	saveData(name, email, msg);


	console.log('submitForm ran!');
}

//to save the info to firebase
function saveData(name, email, msg) {
	var newmessageRef = messageRef.push();
	newmessageRef.set({
		Name: name,
		Email: email,
		Message: msg

	});
	console.log('saveData ran!');
}
