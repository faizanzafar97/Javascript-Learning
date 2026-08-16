let bank=(function(){
    let bank_balance=12000;

    function checkbalnce(){
        console.log(bank_balance);

    }
    function set_balance(val){
        bank_balance=val;
        console.log("ballnce is setted");

    }

    function withdraw(val){
        bank_balance -= val;
        console.log(bank_balance);
    }

    return {
        checkbalnce,
        set_balance,
        withdraw,
    }

})();


bank.checkbalnce();
bank.set_balance(123456789);
bank.withdraw(1234567);