//Same as script 1, just adapted to support replay on user uploaded tracks.
var replay = 0;
        let txtvar1 = document.getElementsByClassName("stem-upload__buttons")[0].getElementsByClassName("button")[0].getElementsByClassName("button__text")[0].innerHTML;
        let numvar2 = parseInt(txtvar1.substring(txtvar1.indexOf(":")+1,txtvar1.indexOf(":")+3));
        let numvar1 = parseInt(txtvar1.substring(txtvar1.indexOf(":")-2,txtvar1.indexOf(":")));
        var finaltracklength = (((numvar1*60)+numvar2));
        //console.log("track length: "+finaltracklength);
        setInterval(function() 
        {
                if(document.getElementsByClassName("stem-upload__buttons").length>0)
                {
                    //constantly monitoring track time left until replay.
                    var plybtn = document.getElementsByClassName("stem-upload__buttons")[0].getElementsByClassName("button")[0];
                    let txt1 = plybtn.getElementsByClassName("button__text")[0].innerHTML;
                    let num2 = parseInt(txt1.substring(txt1.indexOf(":")+1,txt1.indexOf(":")+3));
                    let num1 = parseInt(txt1.substring(txt1.indexOf(":")-2,txt1.indexOf(":")));
                    var time = (((num1*60)+num2));
                    if (time==finaltracklength)
                    {
                        if (replay==0) 
                        {
                            plybtn.disabled=false;
                            plybtn.click();
                            document.getElementById("ReplayButton1").disabled=true;
                            document.getElementById("ReplayButtonSpan1").innerHTML="[ REPLAY IS ACTIVE ]";
                            replay++; 
                        }
                    }
                    else { replay = 0; }
                }
        },0);
