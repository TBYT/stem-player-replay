// ==UserScript==
// @name         Replay Button for Stemplayer.com
// @namespace    https://www.stemplayer.com/
// @version      0.6
// @description  Replay Button for the stemplayer tracks on their website.
// @author       TBYT
// @match        https://www.kanyewest.com/*
// @match        https://www.stemplayer.com/*
// @icon         https://www.stemplayer.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var count = 0;
    setInterval(function()
    {
        try
        {
            //og script 1 are for the native stem player tracks.
                    if(document.getElementById("replayScript")==null)
                    {
                            var ogreplayscript = 'function loadAgain(){var replay = 0;let txtvar1 = document.getElementsByClassName("track-play__play-button")[0].getElementsByClassName("button__text")[0].innerHTML;let numvar2 = parseInt(txtvar1.substring(txtvar1.indexOf(":")+1,txtvar1.indexOf(":")+3));let numvar1 = parseInt(txtvar1.substring(txtvar1.indexOf(":")-2,txtvar1.indexOf(":")));var finaltracklength = (((numvar1*60)+numvar2));setInterval(function() {if(document.getElementsByClassName("track-play__play-button").length>0){var plybtn = document.getElementsByClassName("track-play__play-button")[0];let txt1 = plybtn.getElementsByClassName("button__text")[0].innerHTML;let num2 = parseInt(txt1.substring(txt1.indexOf(":")+1,txt1.indexOf(":")+3));let num1 = parseInt(txt1.substring(txt1.indexOf(":")-2,txt1.indexOf(":")));var time = (((num1*60)+num2));if (time==finaltracklength){if (replay==0) {plybtn.disabled=false;plybtn.click();document.getElementById("ReplayButton").disabled=true;document.getElementById("ReplayButtonSpan").innerHTML="[ REPLAY IS ACTIVE ]";replay++; }}else { replay = 0; }}},0);}';
                            var scripttoreplay = document.createElement('script');
                            scripttoreplay.type = 'text/javascript';
                            scripttoreplay.innerHTML = ogreplayscript;
                            scripttoreplay.id = "replayScript";
                            document.head.appendChild(scripttoreplay);
                    }
            //og script 2 is new, it is for tracks you upload. url: /connect/new/[RANDOMSTRING]
                    else if(document.getElementById("replayScript2")==null)
                    {
                            var ogreplayscript2 = 'function loadAgain2(){var replay = 0;let txtvar1 = document.getElementsByClassName("stem-upload__buttons")[0].getElementsByClassName("button")[0].getElementsByClassName("button__text")[0].innerHTML;let numvar2 = parseInt(txtvar1.substring(txtvar1.indexOf(":")+1,txtvar1.indexOf(":")+3));let numvar1 = parseInt(txtvar1.substring(txtvar1.indexOf(":")-2,txtvar1.indexOf(":")));var finaltracklength = (((numvar1*60)+numvar2));setInterval(function() {if(document.getElementsByClassName("stem-upload__buttons").length>0){var plybtn = document.getElementsByClassName("stem-upload__buttons")[0].getElementsByClassName("button")[0];let txt1 = plybtn.getElementsByClassName("button__text")[0].innerHTML;let num2 = parseInt(txt1.substring(txt1.indexOf(":")+1,txt1.indexOf(":")+3));let num1 = parseInt(txt1.substring(txt1.indexOf(":")-2,txt1.indexOf(":")));var time = (((num1*60)+num2));if (time==finaltracklength){if (replay==0) {plybtn.disabled=false;plybtn.click();document.getElementById("ReplayButton1").disabled=true;document.getElementById("ReplayButtonSpan1").innerHTML="[ REPLAY IS ACTIVE ]";replay++; }}else { replay = 0; }}},0);}';
                            var scripttoreplay2 = document.createElement('script');
                            scripttoreplay2.type = 'text/javascript';
                            scripttoreplay2.innerHTML = ogreplayscript2;
                            scripttoreplay2.id = "replayScript2";
                            document.head.appendChild(scripttoreplay2);
                    }
            //for native stem player tracks
                    if(document.getElementsByClassName("track-play__play-button").length>0)
                    {
                        //count condition in place to generate only 1 button each time we're on a track.
                        if (count == 0)
                        {
                            count++;
                            var button = document.createElement('button');
                                button.addEventListener("click", function () {
                                    loadAgain();
                                });
                                button.id = 'ReplayButton';
                                button.className = 'button button--text';
                                button.type = 'button';
                                document.getElementsByClassName("track-play__landing")[0].appendChild(button);

                                var span = document.createElement('span');
                                span.className = 'button__text';
                                span.innerHTML = '[ REPLAY BY TBYT ]';
                                span.id = 'ReplayButtonSpan';
                                document.getElementById('ReplayButton').appendChild(span);
                        }
                        let plytxt = document.getElementsByClassName("track-play__play-button")[0].getElementsByClassName("button__text")[0].innerHTML;
                        if(((parseInt(plytxt.substring(plytxt.indexOf(":")+1,plytxt.indexOf(":")+3)))+(parseInt(plytxt.substring(plytxt.indexOf(":")-2,plytxt.indexOf(":"))))==0)||document.getElementById("ReplayButtonSpan").innerHTML=="[ REPLAY IS ACTIVE ]")
                        {
                                document.getElementById("ReplayButton").disabled=true;
                        }
                        else 
                        {
                            document.getElementById("ReplayButton").disabled=false; 
                            if(document.getElementById("ReplayButtonSpan").innerHTML=="[ REPLAY BY TBYT ]")
                            {
                                document.getElementsByClassName("track-play__play-button")[0].disabled = true;
                            }
                        }
                    }
            //for user uploaded track.
                    else if(document.getElementsByClassName("stem-upload__buttons").length>0)
                    {
                        if (count == 0)
                        {
                            count++;
                            var button = document.createElement('button');
                                button.addEventListener("click", function () {
                                    loadAgain2();
                                });
                                button.id = 'ReplayButton1';
                                button.className = 'button button--text';
                                button.type = 'button';
                                document.getElementsByClassName("stem-upload__buttons")[0].appendChild(button);

                                var span = document.createElement('span');
                                span.className = 'button__text';
                                span.innerHTML = '[ REPLAY BY TBYT ]';
                                span.id = 'ReplayButtonSpan1';
                                document.getElementById('ReplayButton1').appendChild(span);
                        }
                        let plytxt = document.getElementsByClassName("stem-upload__buttons")[0].getElementsByClassName("button")[0].getElementsByClassName("button__text")[0].innerHTML;
                        if(((parseInt(plytxt.substring(plytxt.indexOf(":")+1,plytxt.indexOf(":")+3)))+(parseInt(plytxt.substring(plytxt.indexOf(":")-2,plytxt.indexOf(":"))))==0)||document.getElementById("ReplayButtonSpan1").innerHTML=="[ REPLAY IS ACTIVE ]")
                        {
                                document.getElementById("ReplayButton1").disabled=true;
                        }
                        else 
                        {
                            document.getElementById("ReplayButton1").disabled=false; 
                            if(document.getElementById("ReplayButtonSpan1").innerHTML=="[ REPLAY BY TBYT ]")
                            {
                                document.getElementsByClassName("stem-upload__buttons")[0].getElementsByClassName("button")[0].disabled = true;
                            }
                        }
                    }
        }
        //Track is not in visibility.
        catch(err)
        {
            //reset count to 0 because we are on a page that does not have information.
            count = 0;
        }
    },0);
    //end of script
})();
