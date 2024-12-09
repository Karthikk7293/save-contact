document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const messageDiv = document.getElementById('message');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value
        };

        try {
            // Simulate saving contact
            const savedContact = await saveContact(formData);

            // Show success message
            showMessage('Contact saved successfully!', 'success');

            // Redirect after a short delay
            setTimeout(() => {
                redirectToContactList(savedContact);
            }, 1500);
        } catch (error) {
            // Show error message
            showMessage('Failed to save contact. Please try again.', 'error');
            console.error('Save contact error:', error);
        }
    });

    // Simulated contact save function
    function saveContact(contactData) {
        return new Promise((resolve, reject) => {
            // Simulate async operation
            setTimeout(() => {
                // In a real app, this would be an API call
                const savedContact = {
                    ...contactData,
                    id: Date.now() // Simple unique ID
                };
                resolve(savedContact);
            }, 1000);
        });
    }

    // Redirect function
    function redirectToContactList(contact) {
        // In a real app, you might pass contact data via query params or state
        window.location.href = `contact-list.html?savedContact=${JSON.stringify(contact)}`;
    }

    // Message display function
    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = `message ${type}`;
    }
});