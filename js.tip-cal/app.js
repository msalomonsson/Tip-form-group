
class Ui{
    
    constructor(){
        this.costBill = document.querySelector('#input-cost');
        this.peopleBill = document.querySelector('#input-people');
        this.form = document.querySelector('.card-body');
        this.btn = document.querySelector('.btn');
        this.serviceTest = document.querySelector('.service');
        this.tipAmountP = document.querySelector('.tipAmount');
        this.totalAmountP = document.querySelector('.totalAmount')
        this.eachAmountP = document.querySelector('.eachAmount')
        this.loading = document.querySelector('.loading')
    }

    renderToDom(e){
        e.preventDefault();
    
        ui.loading.style.display = 'flex';
    
        setTimeout(function(){
            ui.loading.style.display = 'none';
    
            const results = calc.calc();
    
            ui.tipAmountP.innerText = `Total tip is $ ${results[0]}`;
            ui.totalAmountP.innerText = `The total amount is $ ${results[1]}`;
            ui.eachAmountP.innerText = `Each person owes $ ${results[2]}`
        },2000)
    } 
}

const ui = new Ui();
ui.form.addEventListener('submit', ui.renderToDom);


class Logic{
    
    calc(){
        let billCost = ui.costBill.value;
        let billPeople = ui.peopleBill.value;
        let service = (ui.serviceTest.value) / 100;

        const tipAmount = (billCost) * service;
        const totalAmount = Number (billCost) + Number (tipAmount); 
        const eachAmount = Number (totalAmount) / Number (billPeople);

        return [tipAmount,totalAmount,eachAmount]
    }
}

const calc = new Logic();

