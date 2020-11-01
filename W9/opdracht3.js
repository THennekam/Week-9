function nameage(){
	var name = prompt ('Wat is uw naam?');
	if (name != 'stop') {
		document.write('Hallo '+ name );
		var age = prompt ('Hoe oud bent u?');
		document.write(', je leeftijd is ' + age + ' jaar.');
		nameage();
	}
}
nameage(); 
