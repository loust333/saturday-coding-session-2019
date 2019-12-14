console.log('JQuery custom by loust333');

function alertMe(){
    alert('Working!');
};

function addParticipant(){
    var textFullName = $('#fullName').val();
    var tableBody = $('#awesomeTable').find('tbody');
    
    if (textFullName == '') {
        alert('Please enter a name');
    } else {
        tableBody.append('<tr><td>' + textFullName + '</td></tr>');
    }
    $('#fullName').val('');

    Toastify({
        text: "You added a participant!",
        duration: 3000,
        newWindow: true,
        gravity: "top", // `top` or `bottom`
        position: 'right', // `left`, `center` or `right`
        backgroundColor: "yellow",
        stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
};

$('#addParticipant').click(addParticipant);
