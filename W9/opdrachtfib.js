var no1 = 0; //nummer die begint op rij 0 en dan steeds 1 naar beneden gaat voor de berekeningen; 
             //vandaar dat die niet bij de eerste berekening wordt meegerekend (1) omdat rij 0 niet bestaat

var no2 = 1; //nummer die begint bij rij 1 en dan steeds 1 naar beneden gaat voor de berekeningen;

var fib;     //variabele van de optelsom van no1 en no2

//deze drie variabelen zouden ook werken als ze binnen de function (local) zouden staan omdat ze global naar niks anders
//verwijzen

function fibonacci20(num){
	for (i = 0; i < num; i++){        //forloop om aan te geven hoeveel getallen je van de fibonaccireeks wilt zien.
		                              //Dit is aangegeven met num, en is de 20 tussen de haakjes op regel 28, en kan
		                              //met elk getal vervangen worden.

		fib = no1 + no2;              //berekening van de optelsom van de twee getallen. De uitkomst (fib) zie je dan op
		                              //je scherm door de document.write

		no1 = no2;                    //aangeving dat no1 de plek van no2 in beslag neemt bij de volgende berekening
		                              //omdat de nummers bij elke berekening een plek naar beneden schuiven

		no2 = fib;                    //geeft aan dat no2 dezelfde betekenis heeft als fib. Hierdoor komt de hele reeks
		                              //in orde omdat no2 heel die berekening dan ook heeft van fib

		document.write(fib + "</br>") //uitvoering van de optelsom van no1 en no2, en vervolgens naar de volgende
		                              //regel
	}
}
fibonacci20(20); //uitvoering van de function. de 20 tussen de haakjes kan veranderd worden naar bijv 10 om de
                 //eerste 10 getallen van de reeks te zien ipv 20