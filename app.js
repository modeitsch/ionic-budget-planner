const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const list = document.querySelector('#list');
const total = document.querySelector('#total');
const alertCtrl = document.querySelector('ion-alert-controller')


let totalEx = 0;

const clear = () => {
    reasonInput.value = ''
    amountInput.value = ''
}

cancelBtn.addEventListener('click', clear)

confirmBtn.addEventListener('click', () => {

    const enteredReason = reasonInput.value;
    const enteredamount = amountInput.value;

    if (
        enteredReason.trim().length <= 0 ||
        enteredamount <= 0 ||
        enteredReason.trim().length <= 0
    ) {
        alertCtrl.create({
            message: 'Plasse enter valid reason and amount',
            header: 'Invalid Inputs',
            buttons: ['Okay']
        }).then(alertElem => {
            alertElem.present() 
        })
        return
    }
        const newItem = document.createElement('ion-item');
        newItem.textContent = enteredReason + ': $' + enteredamount;

        list.appendChild(newItem);
        totalEx += +enteredamount
        total.textContent = totalEx
        clear()
})

