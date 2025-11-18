/**
 * Contact Form Validation
 * Provides client-side validation for the contact form with accessibility support
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        // Get form elements
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const companyInput = document.getElementById('company');
        const projectTypeSelect = document.getElementById('projectType');
        const messageTextarea = document.getElementById('message');
        const successMessage = document.getElementById('successMessage');

        // Validation patterns
        const validators = {
            name: {
                validate: (value) => {
                    if (!value.trim()) {
                        return 'Name is required';
                    }
                    if (value.trim().length < 2) {
                        return 'Name must be at least 2 characters';
                    }
                    if (!/^[a-zA-Z\s'-]+$/.test(value)) {
                        return 'Name can only contain letters, spaces, hyphens, and apostrophes';
                    }
                    return '';
                }
            },
            email: {
                validate: (value) => {
                    if (!value.trim()) {
                        return 'Email is required';
                    }
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(value)) {
                        return 'Please enter a valid email address';
                    }
                    return '';
                }
            },
            company: {
                validate: (value) => {
                    // Company is optional, so only validate if provided
                    if (value.trim() && value.trim().length < 2) {
                        return 'Company name must be at least 2 characters';
                    }
                    return '';
                }
            },
            projectType: {
                validate: (value) => {
                    if (!value) {
                        return 'Please select a project type';
                    }
                    return '';
                }
            },
            message: {
                validate: (value) => {
                    if (!value.trim()) {
                        return 'Message is required';
                    }
                    if (value.trim().length < 10) {
                        return 'Message must be at least 10 characters';
                    }
                    if (value.trim().length > 1000) {
                        return 'Message must not exceed 1000 characters';
                    }
                    return '';
                }
            }
        };

        /**
         * Show error message for a field
         */
        function showError(input, message) {
            const errorElement = document.getElementById(`${input.id}-error`);
            if (errorElement) {
                errorElement.textContent = message;
            }
            input.classList.add('invalid');
            input.classList.remove('valid');
            input.setAttribute('aria-invalid', 'true');
        }

        /**
         * Clear error message for a field
         */
        function clearError(input) {
            const errorElement = document.getElementById(`${input.id}-error`);
            if (errorElement) {
                errorElement.textContent = '';
            }
            input.classList.remove('invalid');
            input.classList.add('valid');
            input.setAttribute('aria-invalid', 'false');
        }

        /**
         * Validate a single field
         */
        function validateField(input) {
            const validator = validators[input.id];
            if (!validator) return true;

            const errorMessage = validator.validate(input.value);
            
            if (errorMessage) {
                showError(input, errorMessage);
                return false;
            } else {
                clearError(input);
                return true;
            }
        }

        /**
         * Validate all form fields
         */
        function validateForm() {
            let isValid = true;
            
            const fields = [nameInput, emailInput, companyInput, projectTypeSelect, messageTextarea];
            
            fields.forEach(field => {
                if (!validateField(field)) {
                    isValid = false;
                }
            });

            return isValid;
        }

        /**
         * Handle form submission
         */
        function handleSubmit(event) {
            event.preventDefault();

            // Hide success message if shown
            successMessage.classList.remove('show');

            // Validate form
            if (!validateForm()) {
                // Focus on first invalid field
                const firstInvalid = form.querySelector('.invalid');
                if (firstInvalid) {
                    firstInvalid.focus();
                }
                return false;
            }

            // If validation passes, simulate form submission
            // In a real application, this would submit to a server
            console.log('Form submitted successfully!');
            console.log({
                name: nameInput.value,
                email: emailInput.value,
                company: companyInput.value,
                projectType: projectTypeSelect.value,
                message: messageTextarea.value
            });

            // Show success message
            successMessage.classList.add('show');
            
            // Reset form
            form.reset();
            
            // Clear validation states
            const fields = [nameInput, emailInput, companyInput, projectTypeSelect, messageTextarea];
            fields.forEach(field => {
                field.classList.remove('valid', 'invalid');
                field.removeAttribute('aria-invalid');
            });

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // Announce to screen readers
            successMessage.focus();

            return false;
        }

        // Add event listeners for real-time validation
        nameInput.addEventListener('blur', () => validateField(nameInput));
        emailInput.addEventListener('blur', () => validateField(emailInput));
        companyInput.addEventListener('blur', () => validateField(companyInput));
        projectTypeSelect.addEventListener('change', () => validateField(projectTypeSelect));
        messageTextarea.addEventListener('blur', () => validateField(messageTextarea));

        // Add input event listeners to clear errors as user types (after initial validation)
        [nameInput, emailInput, companyInput, messageTextarea].forEach(input => {
            input.addEventListener('input', function() {
                if (this.classList.contains('invalid') || this.classList.contains('valid')) {
                    validateField(this);
                }
            });
        });

        // Form submission
        form.addEventListener('submit', handleSubmit);
    }
})();
