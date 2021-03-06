export function renderPoll(poll) {
    const container = document.createElement('div');
    const questionEl = document.createElement('p');
    const optionADiv = renderOption(poll.optionATitle, poll.optionAVotes);
    const optionBDiv = renderOption(poll.optionBTitle, poll.optionBVotes);
    const optionContainer = document.createElement('div');
    
    container.classList.add('poll');
    optionContainer.classList.add('options');
    questionEl.classList.add('question');
    questionEl.textContent = poll.question;
    optionContainer.append(optionADiv, optionBDiv);
    container.append(questionEl, optionContainer);

    return container;
}

export function renderOption(title, votes) {
    const container = document.createElement('div');
    const titleEl = document.createElement('p');
    const votesEl = document.createElement('p');
    
    container.classList.add('option');
    titleEl.classList.add('title');
    votesEl.classList.add('votes');
    
    titleEl.textContent = title;
    votesEl.textContent = votes;
    
    container.append(titleEl, votesEl);
    
    return container;
}

// export function renderPoll(poll) {
//     const container = document.createElement('div');
//     const questionEl = document.createElement('p');
//     const optionADiv = document.createElement('div');
//     const optionBDiv = document.createElement('div');
    
//     container.classList.add('poll');
//     questionEl.textContent = poll.question;
//     optionADiv.textContent = renderOption(optionATitle, optionAVotes);
//     optionBDiv.textContent = renderOption(optionBTitle, optionBVotes);

//     container.append(questionEl, optionADiv, optionBDiv);

//     return container;
// }

// renderPastPoll(pastPoll) function?
// better safe than sorry

// export function renderPastPoll(pastPoll) {
//     const container = document.createElement('div');
//     const pQuestionEl = document.createElement('p');
//     const pTitleA = document.createElement('p');
//     const pTitleB = document.createElement('p');
//     const pVotesA = document.createElement('p');
//     const pVotesB = document.createElement('p');

//     container.classList.add('past-poll');
//     pQuestionEl.textContent = pastPoll.question;
//     pTitleA.textContent = pastPoll.optionATitle;
//     pTitleB.textContent = pastPoll.optionBTitle;
//     pVotesA.textContent = pastPoll.optionAVotes;
//     pVotesB.textContent = pastPoll.optionBVotes;

//     container.append(pQuestionEl, pTitleA, pTitleB, pVotesA, pVotesB);

//     return container;
// }