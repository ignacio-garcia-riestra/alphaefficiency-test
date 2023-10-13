// COUNTDOWN

const countdown = () => {
    const countDate = new Date ('November 10, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const gapDay = Math.floor(gap / day);
    const gapHour = Math.floor((gap % day) / hour);
    const gapMinute = Math.floor((gap % hour) / minute);
    const gapSecond = Math.floor((gap % minute) / second);

    document.querySelector('#day').innerText = gapDay;
    document.querySelector('#hour').innerText = gapHour;
    document.querySelector('#minute').innerText = gapMinute;
    document.querySelector('#second').innerText = gapSecond;
};

setInterval(countdown, 1000);


// FAQ SECTION DROPDOWNS

const questions = [
    'Why is it free?',
    'Do I need this if I’ve had my yearly medical check? What is the difference?',
    'Can I bring another person to the appointment?',
    'How long does it take?',
    'What if I have to cancel or if I’m not sure I’ll be able to make it?',
    'Do I need to bring anything with me?',
    'What if I don’t have insurance?',
    'Do the weight loss programs you offer work?',
    'What’s the catch?',
    'Will I have to exhaust myself in the gym to make it work?',
    'Where are you located?'
];

const list = document.querySelector('.list');


questions.forEach(question => {
    
    // creating HTML elements

    const item = document.createElement('div');
    const questionRow = document.createElement('div');
    const questionText = document.createElement('span');
    const drop = document.createElement('div');
    const dropImage = document.createElement('img');
    const answerRow = document.createElement('div');
    const answer = document.createElement('p');
    
    // classes assignment
    
    item.classList.add('list-item');
    questionRow.classList.add('question-row');
    questionText.innerText = question;
    answerRow.classList.add('answer-row');
    dropImage.setAttribute('src', './assets/images/dropdown.svg');
    answer.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, consequuntur dignissimos assumenda, cupiditate repellendus, eum maiores est accusantium laborum soluta debitis unde doloremque doloribus laudantium beatae nulla quibusdam voluptates perferendis.'
    dropImage.addEventListener('click', () => {
        answerRow.classList.toggle('show');
        dropImage.classList.toggle('up-direction');
    })
     
    // Appending childs
    
    drop.appendChild(dropImage);
    questionRow.appendChild(questionText);
    questionRow.appendChild(drop);
    answerRow.appendChild(answer);
    item.appendChild(questionRow);
    item.appendChild(answerRow)
    list.appendChild(item);
})