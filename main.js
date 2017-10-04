// Initialize Firebase
var config = {
	apiKey: "AIzaSyBckNTr-yN1m1VPdNTSd22ZcxEBRBJK6lI",
	authDomain: "myapp-65511.firebaseapp.com",
	databaseURL: "https://myapp-65511.firebaseio.com",
	projectId: "myapp-65511",
	storageBucket: "myapp-65511.appspot.com",
	messagingSenderId: "636118888892"
};
firebase.initializeApp(config);
var messageRef = firebase.database().ref('Contact');
//Listen form
document.getElementById("contactInfo").addEventListener('submit', submitForm);

//Submit from
function submitForm(e) {


	//get values
	var name = document.getElementById("name").value;
	var company = document.getElementById("company").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;

	//save info
	saveData(name, company, email, phone);
}

//to save the info to firebase
function saveData(name, company, email, phone) {
	var newmessageRef = messageRef.push();
	newmessageRef.set({
		Name: name,
		Company: company,
		Email: email,
		Phone: phone
	});
}
