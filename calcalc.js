var cneed;
var fneed;
var crneed;
var pneed;
var fd;
var totcal = 0;
var totfat = 0;
var totcarb = 0;
var totprot = 0;


function cc()
{
var age=parseInt(document.getElementById("age").value);
var wtype=document.getElementById("wtype").value;
var foot=parseInt(document.getElementById("foot").value);
var inch=parseInt(document.getElementById("inch").value);
var cm =document.getElementById("cen").value;
var weight=document.getElementById("weight").value;
if (age!='' && cm!='' && weight!='') {
if (wtype=="pounds")
{weight=parseInt(weight);
weight=Math.round(weight/2.2046);
}
var loa=document.getElementById("loa").value;
if(document.getElementById("gen").checked)
{
fd=(10*weight)+(6.25*cm)-(5*age)+5;
}
else
{
fd=(10*weight)+(6.25*cm)-(5*age)-161;
}
switch(loa)
{
case "1":
cneed=fd*1.2;
break;
case "2":
cneed=fd*1.375
break;
case "3":
cneed=fd*1.53;
break;
case "4":
cneed=fd*1.725;
break;
case "5":
cneed=fd*1.9;
break;
}
cneed=Math.floor(cneed);
fneed=Math.floor((cneed*0.25)/9);
if (wtype=="pounds")
{
fneed=Math.floor(fneed*0.0353);
}
pneed=Math.floor((cneed*0.25)/4);
if (wtype=="pounds")
{
pneed=Math.floor(pneed*0.0353);
}
crneed=Math.floor((cneed*0.25)/4);
if (wtype=="pounds")
{
crneed=Math.floor(crneed*0.0353);
}

document.getElementById("rc").value=" "+cneed;
document.getElementById("rf").value=" "+fneed;
document.getElementById("rp").value=" "+pneed;
document.getElementById("rh").value=" "+crneed;
document.getElementById("l1").innerHTML="grams";
document.getElementById("l2").innerHTML="grams";
document.getElementById("l3").innerHTML="grams";
var caltype=document.getElementById("caltype").value;
if (caltype=='g') {
document.getElementById("l1").innerHTML="grams";
document.getElementById("l2").innerHTML="grams";
document.getElementById("l3").innerHTML="grams";
}
if (wtype=="pounds")
{
fat1 = fneed * 0.0022 ;
pro1 = pneed * 0.0022 ;
car1 = crneed * 0.0022 ;
fat1=fat1.toFixed(3);
pro1 = pro1.toFixed(3);
car1 = car1.toFixed(3);
document.getElementById("rf").value=" "+fat1;
document.getElementById("rp").value=" "+pro1;
document.getElementById("rh").value=" "+car1;
document.getElementById("l1").innerHTML="lbs";
document.getElementById("l2").innerHTML="lbs";
document.getElementById("l3").innerHTML="lbs";
}
if (caltype=='pounds') {
fat1 = fneed * 0.0022 ;
pro1 = pneed * 0.0022 ;
car1 = crneed * 0.0022 ;
fat1=fat1.toFixed(3);
pro1 = pro1.toFixed(3);
car1 = car1.toFixed(3);
document.getElementById("rf").value=" "+fat1;
document.getElementById("rp").value=" "+pro1;
document.getElementById("rh").value=" "+car1;
document.getElementById("l1").innerHTML="lbs";
document.getElementById("l2").innerHTML="lbs";
document.getElementById("l3").innerHTML="lbs";
}
if (caltype=='kg') {
fat2 = fneed / 1000;
pro2 = pneed / 1000;
car2 = crneed / 1000;
fat2=fat2.toFixed(3);
pro2 = pro2.toFixed(3);
car2 = car2.toFixed(3);
document.getElementById("rf").value=" "+fat2;
document.getElementById("rp").value=" "+pro2;
document.getElementById("rh").value=" "+car2;
document.getElementById("l1").innerHTML="kilogram";
document.getElementById("l2").innerHTML="kilogram";
document.getElementById("l3").innerHTML="kilogram";
}
}
else{
alert("Please fill your details properly!");
}
}
function con(num)
{
var hc=parseInt(num.value);
var hi=hc/2.54;
var hf=Math.floor(hi/12);
var ri=Math.round(hi%12);
if(hc>40 && hc<=210)
{
document.getElementById("foot").value=hf;
}
document.getElementById("inch").value=ri;
}
function hcon()
{
var hf=parseInt(document.getElementById("foot").value);
var hi=parseInt(document.getElementById("inch").value);
var hc;
hc=Math.round((hf*30.48)+(hi*2.54));
document.getElementById("cen").value=hc;
}
function cknum(event,num)
{var kc;
if(window.event)
{
kc=event.keyCode;
}
else
{
kc=event.which;
}
var a=num.value;
if(kc==48)
{
if(a=="")
{
return false;
}
else
{
return true;
}
}if (kc!=8 && kc!=0)
{
if (kc<49||kc>57)
{
return false;
}
}
}
function isNumberKey(id)
{var no=eval('"'+id+'"');var number= document.getElementById(no).value; if(!number.match(/^[0-9\.]+$/) && number !=""){number = number.substring(0,number.length-1);document.getElementById(id).value = number;}
}
function convert() {
var age=parseInt(document.getElementById("age").value);
var cm =document.getElementById("cen").value;
var weight=document.getElementById("weight").value;
if (age!='' && cm!='' && weight!='') {
var caltype=document.getElementById("caltype").value;
var fat = document.getElementById("rf").value;
var pro = document.getElementById("rp").value;
var car = document.getElementById("rh").value;
var alh = document.getElementById("ra").value;
if (caltype=='g') {
document.getElementById("rc").value=" "+cneed;
document.getElementById("rf").value=" "+fneed;
document.getElementById("rp").value=" "+pneed;
document.getElementById("rh").value=" "+crneed;
document.getElementById("ra").value=" "+aneed;
document.getElementById("l1").innerHTML="grams";
document.getElementById("l2").innerHTML="grams";
document.getElementById("l3").innerHTML="grams";
document.getElementById("l4").innerHTML="grams";
}
if (caltype=='pounds') {
fat1 = fneed * 0.0022 ;
pro1 = pneed * 0.0022 ;
car1 = crneed * 0.0022 ;
alh1 = aneed * 0.0022 ;
fat1=fat1.toFixed(3);
pro1 = pro1.toFixed(3);
car1 = car1.toFixed(3);
alh1 = alh1.toFixed(3);
document.getElementById("rf").value=" "+fat1;
document.getElementById("rp").value=" "+pro1;
document.getElementById("rh").value=" "+car1;
document.getElementById("ra").value=" "+alh1;
document.getElementById("l1").innerHTML="lbs";
document.getElementById("l2").innerHTML="lbs";
document.getElementById("l3").innerHTML="lbs";
document.getElementById("l4").innerHTML="lbs";
}
if (caltype=='kg') {
fat2 = fneed / 1000;
pro2 = pneed / 1000;
car2 = crneed / 1000;
alh2 = aneed / 1000;
fat2=fat2.toFixed(3);
pro2 = pro2.toFixed(3);
car2 = car2.toFixed(3);
alh2 = alh2.toFixed(3);
document.getElementById("rf").value=" "+fat2;
document.getElementById("rp").value=" "+pro2;
document.getElementById("rh").value=" "+car2;
document.getElementById("ra").value=" "+alh2;
document.getElementById("l1").innerHTML="kilogram";
document.getElementById("l2").innerHTML="kilogram";
document.getElementById("l3").innerHTML="kilogram";
document.getElementById("l4").innerHTML="kilogram";
}
}
else{
alert("Please fill all details properly!");
}
}

function add(){

  var text = document.getElementById('item').value;
  var cal  =  parseInt(document.getElementById("cal").value);
  var fat  =  parseInt(document.getElementById("fat").value);
  var carb = parseInt(document.getElementById("carb").value);
  var prot = parseInt(document.getElementById("prot").value);

  if(text == '')
  {
    alert("Please fill all details properly!");
    return false;
  }

  totcal=totcal+cal;
  totfat=totfat+fat;
  totcarb=totcarb+carb;
  totprot=totprot+prot;

  document.getElementById("item").value = "";
  document.getElementById("cal").value = "";
  document.getElementById("fat").value = "";
  document.getElementById("carb").value = "";
  document.getElementById("prot").value = "";

  var table = document.getElementById("totals");

  var rowCountChk = table.rows.length-1;
  var cell1 = table.rows[rowCountChk].cells[0].innerHTML;

  if(cell1=="Totals")
  {
    var rowCount = rowCountChk;
  }
  else
  {
    var rowCount = table.rows.length;
  }

	var row = table.insertRow(rowCount);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML=text;
  cell2.innerHTML=cal;
  cell3.innerHTML=fat;
  cell4.innerHTML=carb;
  cell5.innerHTML=prot;
}

function remove(){

  var table = document.getElementById("totals");
  var rowCountChk = table.rows.length-1;
  var cell = table.rows[rowCountChk].cells[0].innerHTML;

  if(cell=="Item:")
  {
    alert("There are no values to remove");
    return false;
  }
  if(rowCountChk==1)
  {
    alert("There are no values to remove");
    return false;
  }
  if(cell=="Totals")
  {
    var rowCount = rowCountChk - 1;
  }
  else
  {
    var rowCount = rowCountChk;
  }

  var cell1 = parseInt(table.rows[rowCount].cells[1].innerHTML);
  var cell2 = parseInt(table.rows[rowCount].cells[2].innerHTML);
  var cell3 = parseInt(table.rows[rowCount].cells[3].innerHTML);
  var cell4 = parseInt(table.rows[rowCount].cells[4].innerHTML);

  totcal=totcal-cell1;
  totfat=totfat-cell2;
  totcarb=totcarb-cell3;
  totprot=totprot-cell4;

  table.deleteRow(rowCount);
}

function total(){

  var table = document.getElementById("totals");
  var rowCount = table.rows.length-1;
  var cell = table.rows[rowCount].cells[0].innerHTML;

  if(cell=="Item:")
  {
    alert("Input values first");
    return false;
  }
  if(rowCount == 1 && cell=="Totals")
  {
    alert("Input values first");
  }
  if(cell=="Totals")
  {
    table.rows[rowCount].cells[1].innerHTML = " "+totcal;
    table.rows[rowCount].cells[2].innerHTML = " "+totfat;
    table.rows[rowCount].cells[3].innerHTML = " "+totcarb;
    table.rows[rowCount].cells[4].innerHTML = " "+totprot;
  }
  else
  {
    var str = "Totals";
    var rowCount = table.rows.length
  	var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML=str;
    cell2.innerHTML=totcal;
    cell3.innerHTML=totfat;
    cell4.innerHTML=totcarb;
    cell5.innerHTML=totprot;
  }
}

function check(){

  var str1;
  var str2;
  var str3;
  var str4;

  var tablechk = document.getElementById("totals");
  var rowCountchk = tablechk.rows.length;

  if(rowCountchk == 1)
  {
    alert("Input values first");
    return false;
  }
  if(isNaN(cneed)==true)
  {
    alert("Kindly fill the above box to proceed");
    return false;
  }

  var table = document.getElementById("check");
  var rowCount = table.rows.length;

  if(rowCount != 0)
  {
    for(var i=(rowCount-1);i>=0;i--)
    {
      table.deleteRow(i);
    }
  }

  if(totcal>cneed)
  {
    str1="You have exceeded the daily calorie requirements.";
  }
  else if(totcal==cneed)
  {
    str1="You have met the daily calorie requirements. Good Job!"
  }
  else
  {
     str1="You haven't reached the daily calorie requirement."
  }

  if(totfat>fneed)
  {
    str2="You have exceeded the daily fat requirements.";
  }
  else if(totfat==fneed)
  {
    str2="You have met the daily fat requirements. Good Job!"
  }
  else
  {
     str2="You haven't reached the daily fat requirement."
  }

  if(totcarb>crneed)
  {
    str3="You have exceeded the daily carb requirements.";
  }
  else if(totcarb==crneed)
  {
    str3="You have met the daily carb requirements. Good Job!"
  }
  else
  {
     str3="You haven't reached the daily carb requirement."
  }

  if(totprot>pneed)
  {
    str4="You have exceeded the daily protein requirements.";
  }
  else if(totprot==pneed)
  {
    str4="You have met the daily protein requirements. Good Job!"
  }
  else
  {
     str4="You haven't reached the daily protein requirement."
  }

	var row1 = table.insertRow(0);
  var cell1 = row1.insertCell(0);
  cell1.innerHTML=str1;

  var row2 = table.insertRow(1);
  var cell2 = row2.insertCell(0);
  cell2.innerHTML=str2;

  var row3 = table.insertRow(2);
  var cell3 = row3.insertCell(0);
  cell3.innerHTML=str3;

  var row4 = table.insertRow(3);
  var cell4 = row4.insertCell(0);
  cell4.innerHTML=str4;


}
