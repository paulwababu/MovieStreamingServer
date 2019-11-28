//function to validate password. For prototyping purposes
function validate() {
    //read values from inout in sign in page
    var user = document.getElementById('userName').value;
    var passcode = document.getElementById('password').value;

    //check passcode and grant access
    if(user == 'PaulWababu' && passcode == '443556126216621' || user == 'TimMaina' && passcode == '1970really?!' || user == 'AlexNyaga' && passcode == '0706330463' || user == 'Kim' && passcode == 'mimo_wa_nani?' || user == 'Jew' && passcode == '0719446155' ){
        window.open('./clone.html');
    } else {
        alert('wrong credentials');    
    }
}