document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;

    const serviceID = 'service_oi3x0wm';
    const templateID = 'template_x2eodcw';

    const templateParams = {
        name: name,
        email: email,
        number: number,
        message: `${name} is willing to contact you through emails.`
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(response => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
        }, error => {
            console.error('FAILED...', error);
            alert('Failed to send email.');
        });
});
