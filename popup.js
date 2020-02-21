let checkOverdueBoxContentLoop;

// only run script if on Schoology homepage
if(window.location.pathname == "/home" || window.location.pathname == "/") {
	// overdue box HTML elm
	const overdueBoxElm = document.querySelector(".overdue-submissions.overdue-submissions-wrapper");

	// content loop, check if overdue box has content and acts accordingly
	checkOverdueBoxContentLoop = setInterval(() => {
		const textOfOverdueBox = overdueBoxElm.innerText;
		
		// if overdue box has content, remove and end check loop
		if(textOfOverdueBox.length > 0) {
			// delete the overdue box!
			overdueBoxElm.outerHTML = "";
			/*overdueBoxElm.innerHTML = "<p style='text-align: center; font-weight: bold; font-size: 1.75rem;'>Overdue Box Removed!</p>"; // tried removing the elm with DOM nodes, didn't work so used outerHTML instead
			overdueBoxElm.style.backgroundColor = "#e74c3c";
			overdueBoxElm.style.color = "#ffffff";
			overdueBoxElm.style.padding = "1rem";
			overdueBoxElm.style.opacity = ".5";*/

			// end check content loop (interval)
			clearInterval(checkOverdueBoxContentLoop);
		}
	}, 16);
}else {
	checkOverdueBoxContentLoop = null;
}