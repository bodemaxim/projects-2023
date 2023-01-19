const nav = document.querySelector('.navbar')
console.log("ура")
fetch('navbar.html')
	.then(res=>res.text())
	.then(data=>{
		nav.innerHTML=data
	})