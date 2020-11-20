
class Ui{
    
    constructor(){
        this.form = document.querySelector('.card-body');
        this.btn = document.querySelector('.btn');
        this.tipAmountH2 = document.querySelector('.tipAmount');
        this.totalAmountH2 = document.querySelector('.totalAmount');
        this.eachAmountH2 = document.querySelector('.eachAmount');
        this.loading = document.querySelector('.loading');
        this.form.addEventListener('submit', this.renderToDom.bind(this));
    }

    renderToDom(e){
        e.preventDefault();
    
        this.loading.style.display = 'flex';
    
        setTimeout(function(){
            ui.loading.style.display = 'none';
    
            const results = calc.calc();
    
            ui.tipAmountH2.innerText = `Total tip is $ ${results[0]}`;
            ui.totalAmountH2.innerText = `The total amount is $ ${results[1]}`;
            ui.eachAmountH2.innerText = `Each person owes $ ${results[2]}`

            calc.costBill.value = '';
            calc.peopleBill.value = '';
            calc.serviceTest.value = 0;
        },2000)

        setTimeout(function(){
            ui.tipAmountH2.innerText = '';
            ui.totalAmountH2.innerText = '';
            ui.eachAmountH2.innerText = '';
        },10000)
    } 
}

class Logic{
    constructor(){
        this.costBill = document.querySelector('#input-cost');
        this.peopleBill = document.querySelector('#input-people');
        this.serviceTest = document.querySelector('.service');
    }
    calc(){
        const billCost = this.costBill.value;
        const billPeople = this.peopleBill.value;
        const service = this.serviceTest.value / 100;

        const tipAmount = (billCost) * (service);
        const totalAmount = Number (billCost) + Number (tipAmount); 
        const eachAmount = Number (totalAmount) / Number (billPeople);

        return [tipAmount,totalAmount,eachAmount]
    }
}


const ui = new Ui();

const calc = new Logic();

