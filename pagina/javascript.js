// Configura a opacidade e a transição com os eventos onmouseover e onmouseout

function experiencia1(valor){
	document.getElementById("experiencia1").style.opacity = valor;
	document.getElementById("experiencia1").style.transition = "all 1s";
	
	
}

function experiencia2(valor){
	document.getElementById("experiencia2").style.opacity = valor;
	document.getElementById("experiencia2").style.transition = "all 1s";
	
	
}

function experiencia3(valor){
	document.getElementById("experiencia3").style.opacity = valor;
	document.getElementById("experiencia3").style.transition = "all 1s";
	
	
}



//troca a cor de background e o texto com os eventos onmouseover e onmouseout nas sections de experiencia

function experiencia1_texto_onmouseover(){
	document.getElementById("experiencia1").style.backgroundColor = "gray";
	document.getElementById("experiencia1").style.color = "white";
	document.getElementById("experiencia1_texto").innerHTML = "Técnico em suporte de informática atuando com compliance de software e soluções de deploy de sistemas operacionais desde 2016 <br /><br /><br />";
	
}

function experiencia1_texto_onmouseout(){
	document.getElementById("experiencia1").style.backgroundColor = "white";
	document.getElementById("experiencia1").style.color = "black";
	document.getElementById("experiencia1_texto").innerHTML = "UNIVERSIDADE DO VALE DO ITAJAÍ - UNIVALI<br /> ITAJA&Iacute; <br /> 2016";
}




function experiencia2_texto_onmouseover(){
	document.getElementById("experiencia2").style.backgroundColor = "gray";
	document.getElementById("experiencia2").style.color = "white";
	document.getElementById("experiencia2_texto").innerHTML = "Técnico em suporte de informática atuando com implantação de PAF-ECF e treinamento a usuários além de configurar sistemas de câmeras para vigilancia (DVR), Windows Server e manutenção de computadores e redes";
	
}

function experiencia2_texto_onmouseout(){
	document.getElementById("experiencia2").style.backgroundColor = "white";
	document.getElementById("experiencia2").style.color = "black";
	document.getElementById("experiencia2_texto").innerHTML = "BITMIX INFORMÁTICA<br /> ITAJA&Iacute; <br /> 2012 - 2016";
}



function experiencia3_texto_onmouseover(){
	document.getElementById("experiencia3").style.backgroundColor = "gray";
	document.getElementById("experiencia3").style.color = "white";
	document.getElementById("experiencia3_texto").innerHTML = "Técnico em suporte de informática atuando com implantação de PAF-ECF e treinamento a usuários além de configurar sistemas de câmeras para vigilancia (DVR), Windows Server e manutenção de computadores e redes";
}

function experiencia3_texto_onmouseout(){
	document.getElementById("experiencia3").style.backgroundColor = "white";
	document.getElementById("experiencia3").style.color = "black";
	document.getElementById("experiencia3_texto").innerHTML = "BITLIFE INFORMÁTICA <br /> ITAJA&Iacute;<br /> 2009 - 2012";
}
