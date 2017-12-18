
// 3 Buttons
    document.getElementById('button_1').InnerHTML= "start";
    document.getElementById('button_2').style.display = "none";
    document.getElementById('button_3').style.display = "none";

// Hide Question
    document.getElementById('questionbutton').style.display="none";


//QuestionExamine
      function openQuestionBox(){
        document.getElementById('questionbox').style.display ="block";
      }
      document.getElementById('questionbutton').onclick = openQuestionBox;

      function closeQuestionBox (){
        document.getElementById('questionbox').style.display ="none";
      }
      document.getElementById('questionclose').onclick = closeQuestionBox;

function retryGame (){
  location.reload();
}


//Inventory
var inventoryBag = document.getElementById('inventorybag');
inventoryBag.opened = false;

function touchInventory(){
  document.getElementById('inventoryopensfx').play();
  if (inventoryBag.opened == false){
    openInventory();
  } else {
    closeInventory();
  }

}
inventoryBag.onclick = touchInventory
        function openInventory() {
          document.getElementById('inventoryBox').style.display = "inline";
          //document.getElementById('inventory').onclick = closeInventory;
          inventoryBag.opened = true;
        }

        function closeInventory(){
          document.getElementById('inventoryBox').style.display="none";
          //document.getElementById('inventory').onclick = openInventory;
          inventoryBag.opened = false;
        }

        //document.getElementById('inventory').onclick = openInventory;


//knife
  document.getElementById('knifeInventory').style.display= "none";
  document.getElementById('knife').style.display = "none";

  function knifeToInventory() {
    document.getElementById("knife").style.display = "none";
    document.getElementById("knifeInventory").style.display ="inline"
    alert("Militairy Knife has been added to your inventory!")
    
  }





// Begin
  document.getElementById('button_1').onclick = Hallway;
  document.getElementById('button_1').innerHTML = "Start ";
  document.getElementById('hintbox').style.display="none";


//Begin hallway
function Hallway() {
  document.getElementById('knife').style.display= "none";
  document.getElementById('body').style.background = "url(img/thehallway.png)"
  document.getElementById('title').innerHTML = "The empty hallway... ";
  document.getElementById('wit').innerHTML = "You just walked out of your room, seeing this empty hallway made chills go through your body, where could everyone possibly be... Why is there blood on the wall, why am I the only one? "
  document.getElementById('button_1').innerHTML = "Enter room left";
  document.getElementById('button_2').innerHTML = "Walk straight ahead.";
  document.getElementById('button_3').innerHTML = "Search for the exit.";
  document.getElementById('button_3').style.display = "inline-block";
  document.getElementById('button_2').style.display = "inline-block";
  document.getElementById('button_3').onclick = outsidehospital
  document.getElementById('button_2').onclick = function(){

    Straightahead();
  }
  document.getElementById('button_1').onclick = function(){
    roomleft();
  }
}

//Rechtdoor (don't open dead inside.)

function Straightahead(){
  document.getElementById('button_1').innerHTML = "Go back.";
  document.getElementById('button_3').style.display = "none";
  document.getElementById('button_2').innerHTML = "Open the door."
  document.getElementById('questiontext').innerHTML = "Don't open, dead inside... what could it possibly mean? What are those weird hands. It looks very Inconvenient to open this."
  document.getElementById('hintbox').style.display="block";
  document.getElementById('questionbutton').style.display="block";
  document.getElementById('title').innerHTML = "Don't Open Dead Inside?"
  document.getElementById('body').style.background = "url(img/dontopendeadinside.jpg)";
  document.getElementById('wit').innerHTML = "Don't Open Dead Inside? I can see a lot of hands crawling out and a weird undead like voices, they aren't saying anything. Is this a dream? Is this all fake? I try to pinch myself, it hurts, this is all real. But what "
  document.getElementById('wit').style.display = "none";
  document.getElementById('closehint').onclick = function() {
    document.getElementById('hintbox').style.display="none";
  }

  document.getElementById('button_1').onclick = function(){
    Hallway();

  document.getElementById('hintbox').style.display ="none";
  document.getElementById('questionbutton').style.display ="none";
  }

  document.getElementById('button_2').onclick = function(){
    dead();
  }


}


//DeathScreen
function dead(){
  document.getElementById('body').style.background = "url(img/youaredead.jpg)";
  document.getElementById('title').style.display= "none";
  document.getElementById('wit').innerHTML= "You do not have the materials to fight the undead, you die a slow yet painful death.";
  document.getElementById('intro').style.display="inner-block";
  document.getElementById('hintbox').style.display ="none";
  document.getElementById('questionbutton').style.display ="none";
  document.getElementById('button_2').style.display="none";
  document.getElementById('button_1').innerHTML="Retry";
  document.getElementById('button_1').onclick= retryGame;

}


//Linkerkamer
function roomleft(){
  document.getElementById('body').style.background = "url(img/roomleft.jpg)";
  document.getElementById('knife').style.display= "inline";
  document.getElementById('wit').style.display = "block";
  document.getElementById('title').style.display = "Abandoned Room"
  document.getElementById('knife').onclick = knifeToInventory;
  document.getElementById('wit').innerHTML = "What a weird room, how long has it been abandoned for? Why does it look so much different than the room I woke up in. Maybe I can get some useful stuff out here."
  document.getElementById('button_1').innerHTML ="Go back."
  document.getElementById('button_2').style.display ="none";
  document.getElementById('button_3').style.display="none";
  document.getElementById('button_1').onclick= Hallway;
  }

  function outsidehospital(){
    document.getElementById('body').style.background = "url(img/outsidehospital.jpg)";
    document.getElementById('title').innerHTML = "Outside the Hospital";
    document.getElementById('wit').innerHTML = "Ugh, I feel weak. There's a lot of things that I can do. Should I go home first or search for people nearby? "
    document.getElementById('button_2').style.display= "none";
    document.getElementById('button_1').innerHTML="Go Home.";
    document.getElementById('button_3').innerHTML="Search for people";
    document.getElementById('button_1').onclick= zombieToHome;
  }

  function zombieToHome() {
    document.getElementById('body').style.background = "url(img/zombietohome.jpg)";
    document.getElementById('title').innerHTML = "A... zombie?";
    document.getElementById('wit').style.display = "none";
    document.getElementById('button_1').innerHTML= "Fight the zombie!";
    document.getElementById('button_2').style.display="none";
    document.getElementById('button_3').style.display="none";

  }

  function Home(){
    document.getElementById('body').style.background = "url(img/home.jpg)"
  }
