




var count = 0;
for (let i = 1701; i <= 1800; i++){
	for (let j=0; j<= 11; j++){
		var nd = new Date(i, j, 0)
		if(nd.getDay() == 6){
			count++
		}
	}
}


console.log(count)






















