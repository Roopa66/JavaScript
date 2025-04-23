//function calling another function
function fruitCutProcessor(fruit){
    return fruit*4;
}

function fruitProcessor(apples, mangoes){
    const cutPeiceApples= fruitCutProcessor(apples);
    const cutPeicesMangoes=fruitCutProcessor(mangoes);
    console.log(apples,mangoes);
    const juice =`juice with ${cutPeiceApples} apple peices
        and ${cutPeicesMangoes} mangoe pieces`;
        return juice;
    }
    const output =fruitProcessor(2,2)
    console.log(output);