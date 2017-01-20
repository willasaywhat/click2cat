window.addEventListener ("load", myMain, false);

function myMain (evt) {

	var jsInitChecktimer = setInterval (checkForJS_Finish, 111);

    function checkForJS_Finish () {
        if (document.getElementById ("resultSummaryButtonContainer")) {
            clearInterval (jsInitChecktimer);

			// Checking page title
			if (document.title.indexOf("Veracode") != -1) {
				//Creating Elements
				var readoutBtnDiv = document.getElementById("resultSummaryButtonContainer");
				var click2catBtn = document.createElement("a");
				click2catBtn.id = "click2cat-btn";
				click2catBtn.innerHTML = "Click2Cat";
				click2catBtn.className += " btn";
				click2catBtn.className += " btn-primary-pink";
				click2catBtn.className += " btn-xs";     
				click2catBtn.style.marginRight = "3px";   
				click2catBtn.onclick = function(){
					/*
					var placeholder = document.getElementById("click2cat-btn");
					var cat = document.createElement("img");
					cat.src = "https://thecatapi.com/api/images/get?format=src&type=gif"
					placeholder.appendChild(cat);
					*/
					window.open("https://thecatapi.com/api/images/get?format=src&type=gif");
				}    
				readoutBtnDiv.appendChild(click2catBtn);
			}
            
        }
    }

}