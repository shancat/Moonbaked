var x = document.getElementById("form_sample");
var createform = document.createElement('form'); 
createform.setAttribute("action", ""); 
createform.setAttribute("method", "post"); 
x.appendChild(createform);


var line = document.createElement('hr'); 
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var heading = document.createElement('h2'); 
heading.innerHTML = "Leave us a message";
createform.appendChild(heading);

var namelabel = document.createElement('label'); 
namelabel.innerHTML = "Name : "; 
createform.appendChild(namelabel);

var inputelement = document.createElement('input');
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); 
emaillabel.innerHTML = "Email : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); 
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var subjectlabel = document.createElement('label'); 
subjectlabel.innerHTML = "Subject : "; 
createform.appendChild(subjectlabel);

var subjectelement = document.createElement('input');
subjectelement.setAttribute("type", "text");
subjectelement.setAttribute("name", "dsubject");
createform.appendChild(subjectelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var messagelabel = document.createElement('label');
messagelabel.innerHTML = "Message : ";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); 
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);