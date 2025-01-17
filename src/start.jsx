let index = 0;
let score = 0;

function createQuestInterface(selectQuest) {
    const container = document.getElementById('container');
    if (!container) {
        console.error('Element with ID "container" not found.');
        return;
    }
    container.innerHTML = '';

    const myQuest = document.createElement('div');
    myQuest.id = 'quest'

    const myNumber = document.createElement('p');
    myNumber.classList.add('my-number');
    myNumber.innerHTML = index + 1;

    const myText = document.createElement('p');
    myText.innerHTML = selectQuest[index].soal;

    const myChoose = document.createElement('div');
    myChoose.classList.add('quest-btn');

    selectQuest[index].choose.forEach((choice, btnIndex) => {
        const button = document.createElement('button');
        button.classList.add('btn-choose');

        const textButton = document.createElement('p');
        textButton.innerHTML = choice;
        button.append(textButton);

        button.addEventListener('click', () => {
            checkAnswer(button, selectQuest);
            onQuest(btnIndex, myNumber, myText, myChoose, selectQuest);
        })

        myChoose.append(button);
    });


    myQuest.append(myNumber, myText, myChoose);
    container.append(myQuest);
    return container;
}

function onQuest(btnIndex, numberOnQuest, textOnQuest, myChoose, selectQuest) {
    index++;
    if (index >= selectQuest.length) {
        index = 0;
        numberOnQuest.innerHTML = '';
        textOnQuest.innerHTML = `kuis telah selesai anda mendapatkan score: ${score}`
        myChoose.innerHTML = '';

        const buttonReload = document.createElement('button');
        const reloadText = document.createElement('p');
        reloadText.innerHTML = 'Kembali';
        buttonReload.append(reloadText);
        buttonReload.classList.add('btn-card');
        buttonReload.addEventListener('click', () => {
            window.location.reload();
        });
        myChoose.append(buttonReload);
        return myChoose;
    }

    numberOnQuest.innerHTML = index + 1;
    textOnQuest.innerHTML = selectQuest[index].soal
    const buttons = myChoose.querySelectorAll('.btn-choose');
    selectQuest[index].choose.forEach((choice, i) => {
        if (buttons[i]) {
            const textButton = buttons[i].querySelector('p');
            if (textButton) {
                textButton.innerHTML = choice;
            }
        }
    });   
}

function checkAnswer(answer, selectQuest) {
    const userAnswer = answer.querySelector('p').innerHTML;
    if (userAnswer === selectQuest[index].key) {
        score += 4;
    } else {
        score += 0;
    }
}

export default createQuestInterface;