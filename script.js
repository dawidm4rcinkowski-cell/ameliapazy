document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Pobieranie danych z formularza
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;

    // Symulacja wysyłania (w przyszłości możesz tu podpiąć np. EmailJS)
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.style.color = "green";
    responseMessage.innerText = `Dziękujemy ${name}! Twoje zgłoszenie na ${service} zostało przyjęte. Oddzwonimy na numer ${phone}.`;

    // Reset formularza
    document.getElementById('bookingForm').reset();
});
