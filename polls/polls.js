import {
    logout,
    checkAuth,
    getPolls,
    createPoll,
} from '../fetch-utils.js';
import { renderPoll } from '../render-utils.js';

const pollForm = document.getElementById('poll-form');

const currentPollEl = document.getElementById('current-poll-container');
const pastPollsEl = document.getElementById('past-polls-container');
const logoutButton = document.getElementById('logout');

const optionAAddButton = document.getElementById('option-a-add-button');
const optionBAddButton = document.getElementById('option-b-add-button');
const optionAUndoButton = document.getElementById('option-a-undo-button');
const optionBUndoButton = document.getElementById('option-b-undo-button');

const closePollButton = document.getElementById('close-poll-button');
const questionEl = document.getElementById('poll-question');

const optionATitleEl = document.getElementById('option-a-title');
const optionBTitleEl = document.getElementById('option-b-title');
const optionAVotesEl = document.getElementById('option-a-votes');
const optionBVotesEl = document.getElementById('option-b-votes');

let question = '';
let optionATitle = '';
let optionBTitle = '';
let optionAVotes = 0;
let optionBVotes = 0;

optionAAddButton.addEventListener('click', () => {
    optionAVotes++;

    optionAVotesEl.textContent = optionAVotes;
});
optionBAddButton.addEventListener('click', () => {
    optionBVotes++;

    optionBVotesEl.textContent = optionBVotes;
});
optionAUndoButton.addEventListener('click', () => {
    optionAVotes--;

    optionAVotesEl.textContent = optionAVotes;
});
optionBUndoButton.addEventListener('click', () => {
    optionBVotes--;

    optionBVotesEl.textContent = optionAVotes;
});

pollForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(pollForm);

    question = data.get('booger-question');
    optionATitle = data.get('booger-option-a');
    optionBTitle = data.get('booger-option-b');

    displayCurrentPollEl();
});