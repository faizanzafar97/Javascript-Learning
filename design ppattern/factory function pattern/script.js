function create_product(name,price){
    let stock=10;

    return {
        name,
        price,
        check_stock(){
            console.log(stock);
        },
        buy(val){
            if(val<=stock){
                stock-=val;
                console.log(`${val} pices booked---${stock} pieces remaing`);

            }
            else{
                console.error(`we only have limited stock of ${stock}`);
            }

        },
        refill(val){
            stock+=val;
            console.log(`refill sucees---stock now ${stock}`)
        },
    };

}

let infinix=create_product("infinix","50k");
infinix.buy(90);