/* This the line 17 value of the ogreplayscript variable (Original Replay Script) from https://github.com/TBYT/stem-player-replay/blob/main/ReplayButton.user.js*/
/* Look at this for reference only! */

//Variable here just so it only automatically presses the play button once.
var replay = 0; //here just so it only automatically presses the play button once.
//Value will be '[ PLAY 02:20 ]';
let txtvar1 = document.getElementsByClassName("track-play__play-button")[0].getElementsByClassName("button__text")[0].innerHTML;
//Substring the right side of the colon, '[ PLAY 02:20 ]' to '20'
let numvar2 = parseInt(txtvar1.substring(txtvar1.indexOf(":")+1,txtvar1.indexOf(":")+3));
//Substring the left side of the colon, '[ PLAY 02:20 ]' to '02'
let numvar1 = parseInt(txtvar1.substring(txtvar1.indexOf(":")-2,txtvar1.indexOf(":")));
//convert and sum up the track length into seconds.
var finaltracklength = (((numvar1*60)+numvar2));

setInterval(function() 
{
        //constantly monitoring track time left until replay.
            var plybtn = document.getElementsByClassName("track-play__play-button")[0];
            let txt1 = plybtn.getElementsByClassName("button__text")[0].innerHTML;
            let num2 = parseInt(txt1.substring(txt1.indexOf(":")+1,txt1.indexOf(":")+3));
            let num1 = parseInt(txt1.substring(txt1.indexOf(":")-2,txt1.indexOf(":")));
            var time = (((num1*60)+num2));
            if (time==finaltracklength)
            {
                if (replay==0) 
                {
                    plybtn.click();
                    replay++; 
                }
            }
            else { replay = 0; }
},0);
