function table1to10(table){
	if (table > 10) {
		alert('Error: het ingevoerde getal kan alleen 1 tot 10 zijn.');
		var table = prompt ('Hoeveel tafels wilt u te zien krijgen? Het begint altijd bij de tafel van 1, en kan maximaal tot de tafel van 10.');		
		table1to10(table);
        }
    else if (table < 1){
		alert('Error: het ingevoerde getal kan alleen 1 tot 10 zijn.');
		var table = prompt ('Hoeveel tafels wilt u te zien krijgen? Het begint altijd bij de tafel van 1, en kan maximaal tot de tafel van 10.');		
		table1to10(table);
        }
    else if (table <= 10){
		for (i=1; i<=table; i++){
			document.write('1 x ' + i + ' = ' + (1 * i) + '<br/>');
			document.write('2 x ' + i + ' = ' + (2 * i) + '<br/>');
			document.write('3 x ' + i + ' = ' + (3 * i) + '<br/>');
			document.write('4 x ' + i + ' = ' + (4 * i) + '<br/>');
			document.write('5 x ' + i + ' = ' + (5 * i) + '<br/>');
			document.write('6 x ' + i + ' = ' + (6 * i) + '<br/>');
			document.write('7 x ' + i + ' = ' + (7 * i) + '<br/>');
			document.write('8 x ' + i + ' = ' + (8 * i) + '<br/>');
			document.write('9 x ' + i + ' = ' + (9 * i) + '<br/>');
			document.write('10 x ' + i + ' = ' + (10 * i) + '<br/><br/>');
		}
	}else{
		alert('Error: U moet wel een getal invoeren.');
		var table = prompt ('Hoeveel tafels wilt u te zien krijgen? Het begint altijd bij de tafel van 1, en kan maximaal tot de tafel van 10.');
		table1to10(table);
	} 
}
var table = prompt ('Hoeveel tafels wilt u te zien krijgen? Het begint altijd bij de tafel van 1, en kan maximaal tot de tafel van 10.');
table1to10(table); 
