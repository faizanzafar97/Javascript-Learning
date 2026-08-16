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
        check:checkbalnce,
        set:set_balance,
        draw:withdraw,
    }

})();


bank.check();
bank.set(123456789);
bank.draw(1234567);