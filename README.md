Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.


--------------------------------


//Definire una variabile legata al campo input userName
//Definire una variabile legata al campo input userAge
//Definire una variabile legata al campo input kmToGo
//Definire una variabile underage = 18
//Definire una variabile overage = 65
//Definire una variabile underageDiscount = 20
//Definire una variabile overageDiscount = 40
//Definire una variabile pricePerKm = 0.21
//Definire variabile price = kmToGo * pricePerKm
//Definire una variabile legata al priceContainer
//Definire una variabile legata al bottone generate
    //al click del bottone
        //Bonus: se input userName.value o input userAge.value non sono numeri
            //se input userNAme.value non numero allora error handler su userNAme
            //se input userAge.value non numero allora error handler su userAge
        altrimenti
            //se userAge < uderage price = price * ((100 - uderageDiscount)/100)
            //o se userAge > overage price = price * ((100 - overageDiscount)/100)
            //altrimenti price = price
        priceContainer.innerHTML = price.fixedto(2)
    