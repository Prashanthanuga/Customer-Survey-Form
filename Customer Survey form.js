const form = document.getElementById('survey-form');
 const popup = document.getElementById('popup');
 const results = document.getElementById('results');
 const submitButton = document.getElementById('submit-button');
 const resetButton = document.getElementById('reset-button');
 const closePopupButton = document.getElementById('close-popup');

 form.addEventListener('submit', function(e) {
     e.preventDefault();
     // Validate and collect form data here

     // ... (collect and validate form data)

     // Display the results in a popup
     results.innerHTML = `
                First Name: ${firstName}<br>
                Last Name: ${lastName}<br>
                Date of Birth: ${dateOfBirth}<br>
                Country: ${country}<br>
                Gender: ${gender}<br>
                Profession: ${profession}<br>
                Email: ${email}<br>
                Mobile Number: ${mobile}<br>
                First Time: ${firstTime}<br>
                Recommend: ${recommend}<br>
                Satisfaction: ${satisfaction}
            `;
     popup.classList.remove('hidden');
 });

 resetButton.addEventListener('click', function() {
     form.reset();
 });

 closePopupButton.addEventListener('click', function() {
     popup.classList.add('hidden');
     form.reset();
 });