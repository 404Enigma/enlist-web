// Supabase import
import { createClient } from 'https://jspm.dev/@supabase/supabase-js';

// Supabase initialization
const supaURL = '';
const supaKEY = '';
const supabase = createClient(supaURL, supaKEY);

// Supaviews implementation
const reviewsEl = document.querySelector('.supaviews__list');

function renderError(error) {
	console.warn(error);
	reviewsEl.innerHTML = `<div class="supaerror">${error}</div>`;
}

function renderStars(rate) {
	let rating = '';
	for (let i = 0; i < 5; i++) {
		rating += `<i class="fas fa-star ${i < rate ? 'checked' : ''}"></i>`;
	}
	return rating;
}

function renderReview(review) {
	const { name, message, created } = review;
	const stars = renderStars(review.rate);
	
	const element = document.createElement("DIV");
	element.classList.add('supaview');
	element.innerHTML = `
		<div class="supaview__stars">${stars}</div>
		<div class="supaview__name">${name}</div>
		<div class="supaview__message">${message}</div>
		<div class="supaview__date">${created}</div>
	`;
	
	return element;
}

async function renderReviews() {
	// GET all reviews
	const { data: supaviews, error } = await supabase.from('supaviews').select('*');
	
	if(error) {
		renderError(`ERROR: ${error.message}`);
		return;
	}
	
	reviewsEl.innerHTML = '';
	supaviews.forEach(supaview => {
		reviewsEl.prepend(renderReview(supaview));
	});
}

function handleForm() {
	const form = document.getElementById('review');
	const obj = {};
	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		
		const formData = new FormData(form);
		for (let key of formData.keys()) {
			obj[key] = formData.get(key);
		}
		
		// INSERT a new review
		const { error } = await supabase.from('supaviews').insert([obj]);		
		if(error) {
			renderError(`ERROR: ${error.message}`);
			return;
		}
		
		form.reset();
		renderReviews();
	});
}

renderReviews();
handleForm();

	

