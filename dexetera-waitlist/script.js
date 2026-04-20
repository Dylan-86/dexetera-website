const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxrZLGIhr-B3Il4uey2a1WARQta-Zb8YI1t3EQ_Su2XlaFjJr0Je_WTqZzIq23WVKFVuA/exec';

document.getElementById('waitlist-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = document.getElementById('user-email').value;
    const responseMsg = document.getElementById('response-msg');
    const submitBtn = document.getElementById('submit-btn');

    // Validazione base
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        responseMsg.innerText = "Use a valid email address";
        responseMsg.className = "error";
        responseMsg.classList.remove('hidden');
        return;
    }

    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";
    responseMsg.classList.add('hidden');

    try {
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `email=${encodeURIComponent(email)}`
        });
        
        const result = await response.json();

        if (result.result === "success") {
            responseMsg.innerText = "Great! You've been added to the priority list.";
            responseMsg.className = "success";
            document.getElementById('waitlist-form').reset();
            document.getElementById('discord-cta').classList.remove('hidden');

            // Submit to Mautic via hidden form (avoids CORS — plain form POSTs are not restricted)
            document.getElementById('mautic-email').value = email;
            document.getElementById('mautic-form').submit();
        } else {
            throw new Error('Invalid response from server');
        }
    } catch (error) {
        console.error('Error:', error);
        responseMsg.innerText = "Error during registration. Please try again later.";
        responseMsg.className = "error";
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = "Join the Waitlist";
        responseMsg.classList.remove('hidden');
    }
});