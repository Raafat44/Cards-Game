document.querySelector('.control-buttons span').onclick = function()
{
	let yourName = prompt("Whats your name");
	if(yourName == null || yourName =="")
	{
		document.querySelector('.name span').innerHTML ="UnKnown";
		
	}else {document.querySelector('.name span').innerHTML =yourName};
	
	document.querySelector('.control-buttons').remove();
}
let duration = 1000;
let blockContainer =document.querySelector('.Memory-game-container');
let blocks = Array.from(blockContainer.children);

let orderRange = [...Array(blocks.length).keys()];

shuffle();
//let orderRange =Array.from(Array(blocks.length).keys());

function shuffle(array)
{
	let current = orderRange.length,temp,random;
	while(current >0)
	{

		random =Math.floor(Math.random() * current);
		current--;
		temp = orderRange[current];
		orderRange[current] = orderRange[random];
		orderRange[random] =temp;
	}
	
}
let x=2;
for(var i =0;i<20;i++)
{
	blocks[i].style.order = orderRange[i];
	blocks[i].addEventListener('click',function()
	{
this.classList.add('is-flipped');
let AllFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'))
	
if(AllFlippedBlocks.length ==2)
{
	console.log(AllFlippedBlocks[0].dataset,AllFlippedBlocks[1].dataset)
	blockContainer.classList.add('no-clicking');
	setTimeout(function(){
	blockContainer.classList.remove('no-clicking');
	},500)
	
	
		let tries = document.querySelector('.tries span');
	if(AllFlippedBlocks[0].dataset.tech === AllFlippedBlocks[1].dataset.tech)
	{
	AllFlippedBlocks[0].classList.remove('is-flipped');	
	AllFlippedBlocks[1].classList.remove('is-flipped');	
	AllFlippedBlocks[0].classList.add('hasMatch');	
	AllFlippedBlocks[1].classList.add('hasMatch');
/////document.getElementById('succes').play();////	

	}else {
		tries.innerHTML  =  parseInt(tries.innerHTML)+1;
		setTimeout(function()
		{

	AllFlippedBlocks[0].classList.remove('is-flipped');	
	AllFlippedBlocks[1].classList.remove('is-flipped');
	
		}
		,500)
		/////document.getElementById('fail').play();////	
	}
}

	})
}








