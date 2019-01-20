var classes=[];
var horarios=[
"<p>09:00 - 10:50 <br>C_309</p>",
"<p>08:00 - 09:20 <br>AU_401</p>",
"<p>11:00 - 12:20 <br>B_402</p>",
"<p>12:30 - 13:50 <br>SD_204</p>",
"<p>13:00 - 13:50 <br>LL_105</p>",
"<p>14:00 - 15:20 <br>S1_003</p>",
"<p>Estudie vago >:V</p>",
"<p>15:30 - 16:50 <br>B_202</p>",
"<p>16:00 - 17:50 <br>C_107",
"<p>17:00 - 18:20 <br>ML_516"]

classes.push(document.querySelectorAll(".capitalismo"));
classes.push(document.querySelectorAll(".arquisoft"));
classes.push(document.querySelectorAll(".vecto"));
classes.push(document.querySelectorAll(".japones"));
classes.push(document.querySelectorAll(".compVecto"));
classes.push(document.querySelectorAll(".infracomp"));
classes.push(document.querySelectorAll(".libre"));
classes.push(document.querySelectorAll(".fisica"));
classes.push(document.querySelectorAll(".compFisica"));
classes.push(document.querySelectorAll(".pmc"));

function invert(a, b , c)
{
	return "("+(255-a)+", "+(255-b)+", "+(255-c)+")";
}

function init()
{	
	for(i=0; i<classes.length; i++)
	{
		
		for(j=0; j<classes[i].length; j++)
		{						
			classes[i][j].addEventListener("mouseover",function()
			{
				if(this.className==="capitalismo")
				{
					console.log("nel prro")
					this.innerHTML=horarios[0];
					this.style.color="rgb(0, 153, 51)";
					this.style.backgroundColor="rgb(255, 102, 204)";
				}
				else if(this.className==="arquisoft")
				{
					this.innerHTML=horarios[1];
					this.style.color="rgb(0, 102, 255)";
					this.style.backgroundColor="rgb(255, 153, 0)";
				}
				else if(this.className==="vecto")
				{
					this.innerHTML=horarios[2];
					this.style.color="yellow";
					this.style.backgroundColor="rgb(0, 0, 255)";
				}
				else if(this.className==="japones")
				{
					this.innerHTML=horarios[3];
					this.style.color="rgb(22, 254, 251)";
					this.style.backgroundColor="rgb(233, 1, 4)";
				}
				else if(this.className==="compVecto")
				{
					this.innerHTML=horarios[4];
					this.style.backgroundColor="rgb(199, 11, 230)";
					this.style.color="rgb(56, 244, 25)";
				}
				else if(this.className==="infracomp")
				{
					this.innerHTML=horarios[5];
					this.style.backgroundColor="rgb(242, 42, 114)";
					this.style.color="rgb(13, 213, 141)";
				}
				else if(this.className==="libre")
				{
					this.innerHTML=horarios[6];
					this.style.backgroundColor="rgb(27, 252, 211)";
					this.style.color="rgb(228, 3, 44)";
				}
				else if(this.className==="fisica")
				{
					this.innerHTML=horarios[7];
					this.style.backgroundColor="rgb(32, 170, 234)";
					this.style.color="rgb(223, 85, 21)";
				}
				else if(this.className==="compFisica")
				{
					this.innerHTML=horarios[8];

				}
				else
				{
					this.innerHTML=horarios[9];
				}
			});

			classes[i][j].addEventListener("mouseout",function()
			{
				if(this.className==="capitalismo")
				{
					console.log("nel prro")
					this.innerHTML="<p>Capitalismo: Historia y Cultura</p>";
					this.style.backgroundColor="rgb(0, 153, 51)";
					this.style.color="rgb(255, 102, 204)";
				}
				else if(this.className==="arquisoft")
				{
					this.innerHTML="<p>Arquisoft</p>";
					this.style.backgroundColor="rgb(0, 102, 255)";
					this.style.color="rgb(255, 153, 0)";
				}
				else if(this.className==="vecto")
				{
					this.innerHTML="<p>Vecto</p>";
					this.style.backgroundColor="yellow";
					this.style.color="rgb(0, 0, 255)";
				}
				else if(this.className==="japones")
				{
					this.innerHTML="<p>Japonés</p>";
					this.style.backgroundColor="rgb(22, 254, 251)";
					this.style.color="rgb(233, 1, 4)";
				}
				else if(this.className==="compVecto")
				{
					this.innerHTML="<p>Comp. Vecto</p>";
					this.style.color="rgb(199, 11, 230)";
					this.style.backgroundColor="rgb(56, 244, 25)";
				}
				else if(this.className==="infracomp")
				{
					this.innerHTML="<p>Infracomp</p>";
					this.style.color="rgb(242, 42, 114)";
					this.style.backgroundColor="rgb(13, 213, 141)";
				}
				else if(this.className==="libre")
				{
					this.innerHTML="Libre";
					this.style.color="rgb(27, 252, 211)";
					this.style.backgroundColor="rgb(228, 3, 44)";
				}
				else if(this.className==="fisica")
				{
					this.innerHTML="Fisica II";
					this.style.color="rgb(32, 170, 234)";
					this.style.backgroundColor="rgb(223, 85, 21)";
				}
				else if(this.className==="compFisica")
				{
					this.innerHTML=horarios[8];
				}
				else
				{
					this.innerHTML=horarios[9];
				}
			});
		}
	}
}
init();



