// js/app.js
import { db } from './firebase.js';
import {
  collection,
  addDoc,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js';

const form = document.getElementById('rsvp-form');
const statusDiv = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      await addDoc(collection(db, 'rsvps'), {
        name: data.name,
        email: data.email,
        address: data.address,
        rsvpStatus: data.rsvpStatus,
        guests: Number(data.guests),
        notes: data.notes || '',
        timestamp: serverTimestamp()
      });

      statusDiv.textContent = 'Thank you! Your RSVP has been submitted 💛';
      statusDiv.classList.remove('text-red-600');
      statusDiv.classList.add('text-green-600');
      form.reset();
    } catch (err) {
      console.error(err);
      statusDiv.textContent = 'Something went wrong — please try again.';
      statusDiv.classList.add('text-red-600');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit RSVP';
    }
  });
}
