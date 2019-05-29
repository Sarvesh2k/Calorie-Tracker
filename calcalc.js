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
if (age!='' && cm!='' && weight!='' && age!='') {

document.getElementById("alert1").innerHTML = "";
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

document.getElementById("o1").innerHTML = "NA/" + cneed;
document.getElementById("o2").innerHTML = "NA/" + pneed;
document.getElementById("o3").innerHTML = "NA/" + fneed;
document.getElementById("o4").innerHTML = "NA/" + crneed;
}
else{
  document.getElementById("alert1").innerHTML = "Kindly fill all the fields";
  return false;
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

document.getElementById("o1").innerHTML = "NA/" + cneed;
document.getElementById("o2").innerHTML = "NA/" + pneed;
document.getElementById("o3").innerHTML = "NA/" + fneed;
document.getElementById("o4").innerHTML = "NA/" + crneed;
}
else{
document.getElementById("alert1").innerHTML = "Kindly fill all the fields";
return false;
}
}

function addRem(){

  var text = document.getElementById('item').value;
  var cal  =  parseInt(document.getElementById("cal").value);
  var fat  =  parseInt(document.getElementById("fat").value);
  var carb = parseInt(document.getElementById("carb").value);
  var prot = parseInt(document.getElementById("prot").value);

  if(isNaN(cneed)==true)
  {
    document.getElementById("alert2").innerHTML = "Kindly fill the above table first.";
    return false;
  }
  if(text == '' || cal == '' || fat == '' || carb== '' || prot == '')
  {
    document.getElementById("alert2").innerHTML = "Kindly fill the below fields";
    return false;
  }
  else
  {
    document.getElementById("alert2").innerHTML = "";
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

  var rowCount = table.rows.length;

  var row = table.insertRow(rowCount);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell1.innerHTML=text;
  cell2.innerHTML=cal;
  cell3.innerHTML=fat;
  cell4.innerHTML=carb;
  cell5.innerHTML=prot;
  cell6.innerHTML="Remove";

  document.getElementById("o1").innerHTML = totcal + "/" + cneed;
  document.getElementById("o2").innerHTML = totprot + "/" + pneed;
  document.getElementById("o3").innerHTML = totfat + "/" + fneed;
  document.getElementById("o4").innerHTML = totcarb + "/" + crneed;

  if (totcal > cneed) {
      document.getElementById("WarningCal").innerHTML = "Exceeded Required Calorie Count";
      var Wcolor = document.getElementById("o1");
      Wcolor.style.color = 'red';

  }
  if (totprot > pneed) {
      document.getElementById("WarningPro").innerHTML = "Exceeded Required Protien Consumption";
      var Wcolor = document.getElementById("o2");
      Wcolor.style.color = 'red';


  }
  if (totfat > fneed) {
      document.getElementById("WarningFat").innerHTML = "Exceeded Required Fat Consumption";
      var Wcolor = document.getElementById("o3");
      Wcolor.style.color = 'red';

  }
  if (totcarb > crneed) {
      document.getElementById("WarningCarb").innerHTML = "Excceded Required Carbohydrate Consumption";
      var Wcolor = document.getElementById("o4");
      Wcolor.style.color = 'red';

  }

  var index,table = document.getElementById("totals");
  var rowCount = table.rows.length;


            for(var i = 1; i < table.rows.length; i++)
            {
                table.rows[i].cells[5].onclick = function()
                {
                        index = this.parentElement.rowIndex;

                        var cells = table.rows.item(index).cells;

                        var tcal = cells.item(1).innerHTML;
                        var tpro = cells.item(4).innerHTML;
                        var tfat = cells.item(2).innerHTML;
                        var tcarb = cells.item(3).innerHTML;
                        totcal -= tcal;
                        totprot -= tpro;
                        totfat -= tfat;
                        totcarb -= tcarb;
                        document.getElementById("o1").innerHTML = totcal + "/" + cneed;
                        document.getElementById("o2").innerHTML = totprot + "/" + pneed;
                        document.getElementById("o3").innerHTML = totfat + "/" + fneed;
                        document.getElementById("o4").innerHTML = totcarb + "/" + crneed;

                        table.deleteRow(index);

                        if (totcal <= cneed) {
                            document.getElementById("WarningCal").innerHTML = " "
                            var Wcolor = document.getElementById("o1");
                            Wcolor.style.color = 'green';

                        }
                        if (totprot <= pneed) {
                            document.getElementById("WarningPro").innerHTML = " "
                            var Wcolor = document.getElementById("o2");
                            Wcolor.style.color = 'green';


                        }
                        if (totfat <= fneed) {
                            document.getElementById("WarningFat").innerHTML = " "
                            var Wcolor = document.getElementById("o3");
                            Wcolor.style.color = 'green';

                        }
                        if (totcarb <= crneed) {
                            document.getElementById("WarningCarb").innerHTML = " "
                            var Wcolor = document.getElementById("o4");
                            Wcolor.style.color = 'green';

                        }


                };

            }
}
