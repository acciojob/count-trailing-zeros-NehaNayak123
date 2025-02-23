function trailingZeros(n) {
  //your JS code here. If required.
	if(n==0){return 0}
	let factorial=1
	for(let i=1;i<=n;i++){
		factorial*=i;
	}
// 	console.log(factorial)
	let count=0;
	while(factorial>0){
		if(factorial%10==0){
			count++;
			factorial=parseInt(factorial/10)
		}
		else{
			break;
		}
	}
	return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
