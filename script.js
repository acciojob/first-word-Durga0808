function firstWord(s) {
  // your code here
	var ans='';

	for(var i=0;i<s.length;i++){
		if(s[i]===' '){
			if(ans===''){
				continue;
			}else
			break;
		}
		ans+=s[i];
	}
	return ans;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
