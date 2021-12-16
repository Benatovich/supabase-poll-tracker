import {
    redirectToPolls,
    signInUser,
    signUpUser,
} from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

redirectToPolls();

signUpForm.addEventListener('submit', async(event)=>{
    event.preventDefault();
    const user = await signUpUser(signUpEmail.ariaValueMax, signUpPassword.value);

    if (user){
        redirectToPolls();
    } else {
        console.error(user);
    }
});

signInForm.addEventListener('submit', async(event)=>{
    event.preventDefault();
    const user = await signInUser(signInEmail.value, signInPassword.value);

    if (user){
        redirectToPolls();
    } else {
        console.error(user);
    }
});