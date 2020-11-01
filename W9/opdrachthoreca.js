var totalfris = 0
var totalbier = 0
var totalwijn = 0
var totalsnack8 = 0
var totalsnack16 = 0
const FRIS = 150;
const BIER = 300; 
const WIJN = 300;
const SNACK8 = 750;
const SNACK16 = 1500;

function Order(){
	var order = prompt('Wat wilt u aan uw bestelling toevoegen? U kunt kiezen tussen fris, bier, wijn of snack. Of typ "stop" in om uw bestelling af te ronden.');
	if (order == 'fris') {
		var fris = prompt ('Hoeveel fris wilt u toevoegen?');
		alert ('U heeft '+ fris + ' fris toegevoegd aan uw bestelling.');
		totalfris = Number(totalfris) + Number(fris)
		Order();
	}else if (order == 'bier'){
		var bier = prompt ('Hoeveel bier wilt u toevoegen?');
		alert ('U heeft '+ bier + ' bier toegevoegd aan uw bestelling.');
		totalbier = Number(totalbier) + Number(bier)
		Order();
	}else if (order == 'wijn'){
		var wijn = prompt ('Hoeveel wijn wilt u toevoegen?');
		alert ('U heeft '+ wijn + ' wijn toegevoegd aan uw bestelling.');
		totalwijn = Number(totalwijn) + Number(wijn)
		Order();
	}else if (order == 'snack'){
		var snack = prompt ('Hoeveel bitterballen wilt u toevoegen? U kunt kiezen tussen een pakket van 8 of 16.');
		if (snack == 8) {
			var snack8 = prompt ('Hoeveel pakketten van 8 stuks bitterballen wilt u bestellen?');
			alert ('U heeft '+ snack8 + ' pakketen van 8 stuks bitterballen toegevoegd aan uw bestelling.');		
			totalsnack8 = Number(totalsnack8) + Number(snack8)
			Order();
		}else if(snack == 16){
			var snack16 = prompt ('Hoeveel pakketten van 16 stuks bitterballen wilt u bestellen?');
			alert ('U heeft '+ snack16 + ' pakketen van 16 stuks bitterballen toegevoegd aan uw bestelling.');		
			totalsnack16 = Number(totalsnack16) + Number(snack16)
			Order();					
		}else{
			alert('U kunt alleen bitterballen bestellen in pakketten van 8 of 16 stuks.');
			Order();
		}

	}else if (order == 'stop'){
		var pricesfris = FRIS * totalfris / 100;
		var pricesbier = BIER * totalbier / 100;
		var priceswijn = WIJN * totalwijn / 100;
		var pricessnack8 = SNACK8 * totalsnack8 / 100;
		var pricessnack16 = SNACK16 * totalsnack16 / 100;
		document.write('U heeft ' + totalfris + ' fris besteld.' + '<br />');
		document.write(totalfris + ' x €1,50 = €' + pricesfris + '<br/><br/>');
		document.write('U heeft ' + totalbier + ' bier besteld.' + '<br />');
		document.write(totalbier + ' x €3,00 = €' + pricesbier + '<br/><br/>');		
		document.write('U heeft ' + totalwijn + ' wijn besteld.' + '<br />');
		document.write(totalwijn + ' x €3,00 = €' + priceswijn + '<br/><br/>');		
		document.write('U heeft ' + totalsnack8 + ' pakketten bitterballen van 8 stuks besteld.' + '<br/>');
		document.write(totalsnack8 + ' x €7,50 = €' + pricessnack8 + '<br/><br/>');		
		document.write('U heeft ' + totalsnack16 + ' pakketten bitterballen van 16 stuks besteld.' + '<br/>');
		document.write(totalsnack16 + ' x €15,00 = €' + pricessnack16 + '<br/><br/>');
		document.write('Totaal prijs: € ' + (pricesfris + pricesbier + priceswijn + pricessnack8 + pricessnack16)+ '<br/><br/>');	
	}else{
		alert('Of u heeft uw bestelling verkeerd ingevoerd, of we hebben dit momenteel niet op voorraad. Kies alstublieft opnieuw.');	
		Order();
	}
}
Order();