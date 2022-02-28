// ==UserScript==
// @name         Replay Button for Stemplayer.com
// @namespace    https://www.stemplayer.com/
// @version      0.1
// @description  Replay Button for the stemplayer tracks on their website. Please wait until the site is loaded to press replay button. The website will load the track but takes time to do so (about 2 to 6 seconds), this is a discrepancy on stemplayer.com's part.
// @author       TBYT
// @match        https://www.stemplayer.com/*
// @match        https://www.kanyewest.com/*
// @icon         https://www.stemplayer.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var count = 0;
    var ogreplayscript = 'function loadAgain(){var replay = 0;var trcknme = document.getElementsByClassName("track-play__track-info")[0].getElementsByTagName("p")[0].innerHTML;let txtvar1 = document.getElementsByClassName("track-play__play-button")[0].getElementsByClassName("button__text")[0].innerHTML;let numvar2 = parseInt(txtvar1.substring(txtvar1.indexOf(":")+1,txtvar1.indexOf(":")+3));let numvar1 = parseInt(txtvar1.substring(txtvar1.indexOf(":")-2,txtvar1.indexOf(":")));var finaltracklength = (((numvar1*60)+numvar2));setInterval(function() {var plybtn = document.getElementsByClassName("track-play__play-button")[0];let txt1 = plybtn.getElementsByClassName("button__text")[0].innerHTML;let num2 = parseInt(txt1.substring(txt1.indexOf(":")+1,txt1.indexOf(":")+3));let num1 = parseInt(txt1.substring(txt1.indexOf(":")-2,txt1.indexOf(":")));var time = (((num1*60)+num2));if (time==finaltracklength){if (replay==0) {plybtn.click();replay++; }}else { replay = 0; }},0);}';
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = ogreplayscript;
    script.id = "replayScript";
    document.head.appendChild(script);
    setInterval(function()
                {
        try
        {
            if(document.getElementsByClassName("track-play__track-info")[0].getElementsByTagName('p').length!=0)
            {
                if (count == 0)
                {
                    count++;
                    setTimeout(function()
                    {
                        var button = document.createElement('button');
                        button.addEventListener("click", function () {
                            loadAgain();
                        });
                        button.id = 'ReplayButton';
                        button.class = 'button button--text';
                        button.type = 'button';
                        document.getElementsByClassName("track-play__landing")[0].appendChild(button);

                        var span = document.createElement('span');
                        span.class = 'button__text';
                        span.innerHTML = '[ REPLAY by TBYT ]';
                        document.getElementById('ReplayButton').appendChild(span);
                    },2500);
                }
            }
        }
        catch(err){ count = 0; console.log("[REPLAYBUTTON] Track is not in visibility."); }
    },0);
    //end of script
})();
