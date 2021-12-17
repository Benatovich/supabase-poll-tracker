import {
    logout,
    checkAuth,
    getPolls,
    createPoll,
} from '../fetch-utils.js';
import { renderPoll } from '../render-utils.js';

const currentPollEl = document.getElementById('current-poll-container');
const pastPollsEl = document.getElementById('past-polls-container');
const logoutButton = document.getElementById('logout');

const pollForm = document.getElementById('poll-form');
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

checkAuth();

let currentPoll = {
    question: '',
    optionATitle: '',
    optionBTitle: '',
    optionAVotes: 0,
    optionBVotes: 0,
};

pollForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(pollForm);
    const question = data.get('booger-question');
    const optionATitle = data.get('booger-option-a');
    const optionBTitle = data.get('booger-option-b');

    currentPoll.question = question;
    currentPoll.optionATitle = optionATitle;
    currentPoll.optionBTitle = optionBTitle;

    pollForm.reset();

    displayCurrentPollEl();
});

optionAAddButton.addEventListener('click', () => {
    currentPoll.optionAVotes++;
    displayCurrentPollEl();
});
optionBAddButton.addEventListener('click', () => {
    currentPoll.optionBVotes++;
    displayCurrentPollEl();
});
optionAUndoButton.addEventListener('click', () => {
    currentPoll.optionAVotes--;
    displayCurrentPollEl();
});
optionBUndoButton.addEventListener('click', () => {
    currentPoll.optionBVotes--;
    displayCurrentPollEl();
});


closePollButton.addEventListener('click', async() => {
    await createPoll(currentPoll);
    const allPolls = await getPolls();

    pastPollsEl.textContent = '';
    for (let poll of allPolls) {
        const pastPolls = renderPoll(poll);
        pastPollsEl.append(pastPolls);
    }
    displayAllPolls();

    currentPoll = {
        question: '',
        optionATitle: '',
        optionBTitle: '',
        optionAVotes: 0,
        optionBVotes: 0,
    };

    displayCurrentPollEl();
});

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async() => {
    // do I need this...?
});


function displayCurrentPollEl() {
    currentPollEl.textContent = '';
    // questionEl.textContent = currentPoll.question;
    // optionATitleEl.textContent = currentPoll.optionATitle;
    // optionBTitleEl.textContent = currentPoll.optionBTitle;
    // optionAVotesEl.textContent = currentPoll.optionAVotes;
    // optionBVotesEl.textContent = currentPoll.optionBVotes;

    const pollEl = renderPoll(currentPoll);
    pollEl.classList.add('current');

    currentPollEl.append(pollEl);
}

async function displayAllPolls() {
    pastPollsEl.textContent = '';
    const pastPolls = await getPolls();
    // console.log(pastPolls);
    for (let poll of pastPolls) {
        const pollEl = renderPoll(poll);
        pollEl.classList.add('past');
        pastPollsEl.append(pollEl);
    }
}

displayAllPolls();
displayCurrentPollEl();