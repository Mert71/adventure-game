//var
var button_1 = document.getElementById('button_1');
var button_2 = document.getElementById('button_2');
var button_3 = document.getElementById('button_3');
var metalclash = document.getElementById('metalclash');
var body = document.getElementById('body');
var inventorybag = document.getElementById('inventorybag');
var inventoryopensfx = document.getElementById('inventoryopensfx');
var inventory = document.getElementById('inventory');
var inventoryBox = document.getElementById('inventoryBox');
var knife = document.getElementById('knife');
var revolver = document.getElementById('revolver');
var knifeInventory = document.getElementById('knifeInventory');
var baseballbat = document.getElementById('baseballbatt');
var revolverInventory = document.getElementById('revolverInventory')
var title = document.getElementById('title');
var picture = document.getElementById('picture');
var questionbutton = document.getElementById('questionbutton');
var intro = document.getElementById('intro');
var wit = document.getElementById('wit');
var hintbox = document.getElementById('hintbox');
var hint = document.getElementById('hint');
var hinttext = document.getElementById('hinttext');
var closehint = document.getElementById('closehint');
var questionbox = document.getElementById('questionbox');
var questiontext = document.getElementById('questiontext');
var questionclose = document.getElementById('questionclose');

//IGNORE
revolverPickedUp = false;
knifePickedUp = false;
baseballbatt.style.display="none";

//Alert
   function alertMorgan(){
     alert("Fresh clothes and Baseball batt added to inventory")
   }

// 3 Buttons
    button_1.InnerHTML= "start";
    button_2.style.display = "none";
    button_3.style.display = "none";
// Hide Question
    questionbutton.style.display="none";
//QuestionExamine
      function openQuestionBox(){
        questionbox.style.display ="block";
      }
      questionbutton.onclick = openQuestionBox;

      function closeQuestionBox (){
        questionbox.style.display ="none";
      }
      questionclose.onclick = closeQuestionBox;

//retrygame
    function retryGame (){
      location.reload();
    }
//Inventory
    var inventoryBag = inventorybag;
    inventoryBag.opened = false;

    function touchInventory(){
      inventoryopensfx.play();
      if (inventoryBag.opened == false){
        openInventory();
      } else {
        closeInventory();
      }

    }
    inventoryBag.onclick = touchInventory
            function openInventory() {
              inventoryBox.style.display = "inline";
              //inventory.onclick = closeInventory;
              inventoryBag.opened = true;
            }

            function closeInventory(){
              inventoryBox.style.display="none";
              //inventory.onclick = openInventory;
              inventoryBag.opened = false;
            }



//knife
      knifeInventory.style.display= "none";
      knife.style.display = "none";

      function knifeToInventory() {
        document.getElementById("knife").style.display = "none";
        document.getElementById("knifeInventory").style.display ="inline"
        alert("Militairy Knife has been added to your inventory!")
        knifePickedUp = true;
      }

      function dropKnifeFall(){
        document.getElementById("knifeInventory").style.display ="none";
        alert("The drop was hard, you've lost your knife!")
      }

  //revolver

      revolverInventory.style.display= "none";
      document.getElementById('revolver').style.display = "none";

      function revolverToInventory() {
        revolver.style.display = "none";
        revolverInventory.style.display ="inline"
        alert("Your good old Revolver has been added to your inventory!")
        revolverPickedUp = true;
      }

// Begin
  button_1.onclick = Hallway;
  button_1.innerHTML = "Start ";
  hintbox.style.display="none";

//Begin hallway
function Hallway() {
  knife.style.display= "none";
  body.style.background = "url(img/thehallway.png)"
  title.innerHTML = "The empty hallway... ";
  wit.innerHTML = "You just walked out of your room, seeing this empty hallway made chills go through your body, where could everyone possibly be... Why is there blood on the wall, why am I the only one? "
  wit.style.display="block";
  button_1.innerHTML = "Enter room left";
  button_2.innerHTML = "Walk straight ahead.";
  button_3.innerHTML = "Search for the exit.";
  button_3.style.display = "inline-block";
  button_2.style.display = "inline-block";
  button_3.onclick = outsidehospital
  button_2.onclick = function(){

    Straightahead();
  }
  button_1.onclick = function(){
    roomleft();
  }
}

//Rechtdoor (don't open dead inside.)
function Straightahead(){
  button_1.innerHTML = "Go back.";
  button_3.style.display = "none";
  button_2.innerHTML = "Open the door."
  questiontext.innerHTML = "Don't open, dead inside... what could it possibly mean? What are those weird hands. It looks very Inconvenient to open this."
  hintbox.style.display="block";
  questionbutton.style.display="block";
  title.innerHTML = "Don't Open Dead Inside?"
  body.style.background = "url(img/dontopendeadinside.jpg)";
  wit.innerHTML = "Don't Open Dead Inside? I can see a lot of hands crawling out and a weird undead like voices, they aren't saying anything. Is this a dream? Is this all fake? I try to pinch myself, it hurts, this is all real. But what "
  wit.style.display = "none";
  closehint.onclick = function() {
    hintbox.style.display="none";
  }

  button_1.onclick = function(){
    Hallway();

  hintbox.style.display ="none";
  questionbutton.style.display ="none";
  }

  button_2.onclick = function(){
    dead();
  }
}

//DeathScreen
function dead(){
  body.style.background = "url(img/youaredead.jpg)";
  inventory.style.display="none";
  hintbox.style.display="none";
  questionbutton.style.display="none";
  title.style.display= "none";
  wit.innerHTML= "You do not have the materials to fight the undead, you die a slow yet painful death.";
  wit.style.display = "block";
  intro.style.display="inner-block";
  hintbox.style.display ="none";
  questionbutton.style.display ="none";
  button_2.style.display="none";
  button_1.innerHTML="Retry";
  button_1.onclick= retryGame;

}

//Linkerkamer
function roomleft(){
  body.style.background = "url(img/roomleft.jpg)";
  title.innerHTML = "Abandoned Room"
  wit.style.display = "block";
  knife.onclick = knifeToInventory;
  wit.innerHTML = "What a weird room, how long has it been abandoned for? Why does it look so much different than the room I woke up in. Maybe I can get some useful stuff out here."
  button_1.innerHTML ="Go back."
  button_2.style.display ="none";
  button_3.style.display="none";
  button_1.onclick= Hallway;
  if (knifePickedUp==false) {
    knife.style.display= "inline";
  } else {
    knife.style.display="none";
  }

  }

  function outsidehospital(){
    body.style.background = "url(img/outsidehospital.jpg)";
    title.innerHTML = "Outside the Hospital";
    wit.innerHTML = "Ugh, I feel weak. There's a lot of things that I can do. Should I go home first or search for people nearby? ";
    button_3.style.display= "none";
    button_1.innerHTML="Go Home.";
    button_2.innerHTML="Search for people";
    button_1.onclick= zombieToHome;
    button_2.onclick= searchForPeople;
  }

  function searchForPeople() {
    body.style.background = "url(img/searchforpeople.png)"
    title.innerHTML= "Should I continue?"
    wit.innerHTML = "Doesn't seem like this will lead me anywhere I should be. I could continue this road or go search for my house...?"
    button_1.innerHTML = "Continue"
    button_1.style.width = "110px";
    button_2.innerHTML = "Go Home."
    button_2.onclick = zombieToHome;
    button_1.onclick = interrogation;
  }

  function interrogation() {
    body.style.background = "url(img/interrogation.jpg)"
    body.style.backgroundSize = "cover";
    title.innerHTML = "Shit..."
    wit.style.display = "block";
    wit.innerHTML = "They invite me to join their group, they see that I look very hungry and starving, they tell me I can be safe if I just do as they please. I'd survive doing this. I can also always politely refuse."
    button_1.innerHTML = "Join"
    button_2.innerHTML = "Refuse"
    button_1.onclick = winLikeaBitch;
    button_2.onclick = dead3;
  }

  function winLikeaBitch() {
    body.style.background = "url(img/winlikeabitch.jpg)"
    body.style.backgroundSize = "cover";
    title.innerHTML = "Congratulations."
    wit.innerHTML = "You win, you've sucessfully survived. Oh and that's you on the back, you've become a bitch. You seriously gave your pride and honour away to survive. I mean you've won but what is winning anyways? It's winning to a certain extend. Is this really winning though? "
    button_1.innerHTML="Retry";
    button_1.onclick= retryGame;
    button_2.style.display = "none";
  }

  function dead3(){
    body.style.background = "url(img/youaredead2.jpg)";
    body.style.backgroundSize = "cover";
    inventory.style.display="none";
    hintbox.style.display="none";
    questionbutton.style.display="none";
    title.style.display= "none";
    wit.innerHTML= "Although you refused and felt good about it after you did so. You got shot in the back of your head. Atleast you got to keep your pride. You died with style. You're a winner while being a loser. Congratulations. ";
    intro.style.display="inner-block";
    hintbox.style.display ="none";
    questionbutton.style.display ="none";
    button_2.style.display="none";
    button_1.innerHTML="Retry";
    button_1.onclick= retryGame;
  }

  function zombieToHome() {
    body.style.background = "url(img/zombietohome.jpg)";
    title.innerHTML = "A... zombie?";
    wit.style.display = "none";
    button_1.innerHTML= "Fight the zombie!";
    button_2.style.display="none";
    button_3.style.display="none";

    if (knifePickedUp == true) {
      button_1.onclick = Home;
    } else {
      button_1.onclick = dead;
        }
  }

  function Home(){
    body.style.background = "url(img/home.jpg)";
    title.innerHTML = "Home.";
    wit.style.display = "block";
    wit.innerHTML = "I couldn't wait to finally see Carl and Lori. My son and wife, however judging by our missing car, they must have left.";
    button_1.innerHTML = "Go inside.";
    button_1.onclick = insideHouse ;
  }

  function insideHouse() {
    body.style.background = "url(img/insidehouse.jpg)"
    title.innerHTML = "No one home."
    wit.innerHTML = "As expected they seemed to have left, however it doesn't seem like they left because they wanted to. I'm still very shook from the zombie of a few seconds ago. As I look for our family pictures, they seem to have been brought with. They're alive."
    button_1.innerHTML = "Go back outside."
    button_1.onclick = backOutside
  }

  function backOutside() {
    body.style.background = "url(img/outsidehouse.jpg)"
    body.style.backgroundSize= "cover";
    title.innerHTML = "What next?"
    wit.innerHTML ="I can go either left or right, a lot of houses to my right and a lot of nothing to my left..."
    button_1.innerHTML="Go Left."
    button_2.innerHTML="Go Right."
    button_2.style.display="inline"
    button_1.onclick = leftHorde
    button_2.onclick = shovelHit
  }

  function shovelHit() {
    body.style.background = "url(img/shovelhit.png)"
    body.style.backgroundSize= "cover";
    title.innerHTML = "Ouch.";
    wit.innerHTML ="As I was walking down the street I felt a hard thing hit my head... I'm fainting away.";
    button_1.innerHTML ="...";
    button_2.style.display="none";
    button_1.onclick = morganMeeting
}

  function morganMeeting(){
    body.style.background = "url(img/morganhouse.jpg)"
    body.style.backgroundSize= "cover";
    title.innerHTML = "Morgan.."
    wit.innerHTML = "I met this guy when I woke up, his name is Morgan, he told me that he lost his wife. His face seems familiar, he apologized for his son hitting me in the head with a shovel. Which isn't important at the moment. He fed me and I propsed that we'd go to my sheriff outpost which surely contains supplies. To keep us going. He also took my knife but gave it back afterwards. He also gave me fresh clothes and a Baseball Batt"
    baseballbat.style.display ="inline";
    alertMorgan()
    button_1.innerHTML = "Go outside."
    button_1.onclick = goOutside
  }

  function leftHorde(){
    body.style.background = "url(img/hordeleft.jpg)"
    body.style.backgroundSize= "cover";
    title.innerHTML = "Shit..."
    wit.innerHTML = "Shit... I had trouble handling one walker, this is nuts, there's no way that I'll come out here alive. Running won't help either, since I still feel my leg hurting."
    button_1.innerHTML = "Fight!"
    button_2.innerHTML = "Bitch down"
    button_1.onclick = dead ;
    button_2.onclick = dead ;
  }

  function goOutside() {
    body.style.background = "url(img/outsidemorgan.jpg)"
    body.style.backgroundSize= "cover";
    wit.style.display = "none";
    button_1.style.width = "83px";
    questionbutton.style.display = "inline"
    questionbutton.style.position = "absolute"
    questionbutton.style.top = "640px";
    questionbutton.style.left = "640px";
    questionbox.style.top = "694px";
    questionbox.style.left = "649px";
    questiontext.innerHTML = "A dead Zombie... I wonder who killed it."
    button_1.innerHTML = "Sheriff Outpost"
    button_1.onclick = sheriffOutpost
  }

    function sheriffOutpost() {
      body.style.background = "url(img/sheriffoutpost.jpg)"
      body.style.backgroundSize= "cover";
      wit.style.display="block";
      title.innerHTML = "Sheriff Outpost"
      wit.innerHTML = "Finally after a long walk we arrived at the outpost, next to there being lots of supplies here I finally got my sherriff clothes back. There should also be a horse around here that I can go with, I'm surely going solo to search for my family."
      button_1.innerHTML = "Continue journey"
      revolver.style.display = "block"
      questionbutton.style.display = "none";
      button_1.style.width = "92px";
      revolver.onclick = revolverToInventory;
      button_1.onclick = continueJourney
    }

    function continueJourney(){
      body.style.background = "url(img/continuejourney.jpg)"
      revolver.style.display = "none";
      body.style.backgroundSize= "cover";
      title.innerHTML = "Atlana...hope..."
      wit.innerHTML = "Atlanta... I'm sure I'll be able to find my family here or atleast get a clue, maybe some more human life. This is just too insane."
      button_1.innerHTML= "..."
      button_1.onclick = zombiehurdle
    }

    function zombiehurdle(){
      body.style.background = "url(img/zombiehurdle.jpg)";
      body.style.backgroundSize= "cover";
      title.innerHTML = "FUCK, Horse Cooperate!";
      wit.innerHTML = "Fuck, my horse seems to be really scared from the walkers. He won't listen to me anymore and the zombies are closing in.";
      button_1.onclick = horseattack;
    }

    function horseattack(){
      body.style.background = "url(img/horseattack.jpg)"
      body.style.backgroundSize = "cover";
      dropKnifeFall();
      title.innerHTML = "Gotta run..."
      wit.innerHTML = "There's a zombie closing in on me, the fall hurt my feet I really have to kill him."
      button_1.innerHTML = "Kill!";
      button_2.style.display = "inline";
      button_2.innerHTML = "Run";
      button_2.onclick = "dead2";

      if (revolverPickedUp == true) {
        button_1.onclick = gototank;
      } else {
        button_1.onclick = dead;
          }
    }

    function dead2() {
      body.style.background = "url(img/youaredead2.jpg)";
      body.style.backgroundSize = "cover";
      inventory.style.display="none";
      hintbox.style.display="none";
      questionbutton.style.display="none";
      title.style.display= "none";
      wit.innerHTML= "Running away wasn't such a good idea. As you fought your way through whilst being surrounded you didn't survive long. Got bit in the neck then eaten alive. ";
      intro.style.display="inner-block";
      hintbox.style.display ="none";
      questionbutton.style.display ="none";
      button_2.style.display="none";
      button_1.innerHTML="Retry";
      button_1.onclick= retryGame;
    }

    function gototank(){
      body.style.background = "url(img/gototank.png)";
      body.style.backgroundSize = "cover";
      title.innerHTML = "Run or go to the tank?!"
      button_1.innerHTML = "Go in the tank";
      button_2.innerHTML = "Run Away."
      wit.innerHTML = "This doesn't look good for me, the city is overrun, horde after horde of walkers. I can't survive this for long, should I run away and hope or try to crawl in that tank?!";
      button_1.onclick = crawlintank;
      button_2.onclick = dead2;
    }

    function crawlintank(){
      body.style.background = "url(img/crawlintank.jpg)"
      body.style.backgroundSize = "cover";
      wit.style.display = "none";
      title.style.display = "none";
      button_2.style.display = "none";
      button_1.innerHTML = "...";
      button_1.onclick = FirstEnding;
    }

    function FirstEnding(){
      body.style.background = "url(img/firstending.jpg)"
      body.style.backgroundSize = "cover";
      title.innerHTML = "You win?";
      wit.innerHTML = "As you've crawled in the tank you've trapped yourself, for now. Who knows what is about to happen next. You're surrounded by walkers, no food, no longer lifespan than 24 hours. Will you survive? Will you starve to death? Find out on the next episode on MGO's The Walking Dead!"
      wit.style.display = "block";
      button_1.innerHTML="Replay";
      button_1.onclick= retryGame;
      inventory.style.display = "none";
    }
