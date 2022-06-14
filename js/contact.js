const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const form = document.getElementById('form');
const email = document.getElementById('email');






form.addEventListener('submit' ,(e) => {
    let messages = [];
    if(fname.value === '' || fname.value ===null) {
        alert('First Name is required');
    }
    if(lname.value === '' || lname.value ==null) {
        alert("Last Name is required");
    }
    if(email.value === '' || email.value ==null) {
        alert("Email is required");
    }
    


});

