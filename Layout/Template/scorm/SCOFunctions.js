loadPage()

/*******************************************************************************
 **
 **  Senai
 **  Padrão Scorm 1.2
 **  SCOFunctions
 **  Data: 30 de Outubro de 2011.
 **
 *******************************************************************************/
var startDate;
var exitPageStatus;

function loadPage() {
	var result = doLMSInitialize();

	console.log("Scorm API initialized:" + result)

	exitPageStatus = false;
	console.log("Exit status set to:" + exitPageStatus)
}

function startTimer() {
	startDate = new Date().getTime();
}

function computeTime() {
	if (startDate != 0) {
		var currentDate = new Date().getTime();
		var elapsedSeconds = (currentDate - startDate) / 1000;
		var formattedTime = convertTotalSeconds(elapsedSeconds);
	} else {
		formattedTime = "00:00:00.0";
	}

	doLMSSetValue("cmi.core.session_time", formattedTime);
}

function doBack() {
	doLMSSetValue("cmi.core.exit", "suspend");

	computeTime();
	exitPageStatus = true;

	var result;

	result = doLMSCommit('');;

	// NOTE: LMSFinish will unload the current SCO.  All processing
	//       relative to the current page must be performed prior
	//		 to calling LMSFinish.

	result = doLMSFinish();
}

function doContinue(status) {
	// Reinitialize Exit to blank
	doLMSSetValue("cmi.core.exit", "");

	var mode = doLMSGetValue("cmi.core.lesson_mode");

	if (mode != "review" && mode != "browse") {
		doLMSSetValue("cmi.core.lesson_status", status);
	}

	computeTime();
	exitPageStatus = true;

	var result;
	result = doLMSCommit('');;
	// NOTE: LMSFinish will unload the current SCO.  All processing
	//       relative to the current page must be performed prior
	//		 to calling LMSFinish.

	result = doLMSFinish();
}

function doQuit() {
	doLMSSetValue("cmi.core.exit", "suspend");

	computeTime();
	exitPageStatus = true;

	var result;

	result = doLMSCommit('');;

	// NOTE: LMSFinish will unload the current SCO.  All processing
	//       relative to the current page must be performed prior
	//		 to calling LMSFinish.

	result = doLMSFinish();
}

/*******************************************************************************
 ** The purpose of this function is to handle cases where the current SCO may be
 ** unloaded via some user action other than using the navigation controls
 ** embedded in the content.   This function will be called every time an SCO
 ** is unloaded.  If the user has caused the page to be unloaded through the
 ** preferred SCO control mechanisms, the value of the "exitPageStatus" var
 ** will be true so we'll just allow the page to be unloaded.   If the value
 ** of "exitPageStatus" is false, we know the user caused to the page to be
 ** unloaded through use of some other mechanism... most likely the back
 ** button on the browser.  We'll handle this situation the same way we
 ** would handle a "quit" - as in the user pressing the SCO's quit button.
 *******************************************************************************/
function unloadPage() {

	console.log(`UnloadPage - exitPageStatus: ${exitPageStatus}`)
	if (exitPageStatus != true) {
		doQuit();
	}

	// NOTE:  don't return anything that resembles a javascript
	//		  string from this function or IE will take the
	//		  liberty of displaying a confirm message box.
}

/*******************************************************************************
 ** this function will convert seconds into hours, minutes, and seconds in
 ** CMITimespan type format - HHHH:MM:SS.SS (Hours has a max of 4 digits &
 ** Min of 2 digits
 *******************************************************************************/

function convertTotalSeconds(ts) {
	var sec = ts % 60;

	ts -= sec;
	var tmp = ts % 3600; //# of seconds in the total # of minutes
	ts -= tmp; //# of seconds in the total # of hours

	// convert seconds to conform to CMITimespan type (e.g. SS.00)
	sec = Math.round(sec * 100) / 100;

	var strSec = new String(sec);
	var strWholeSec = strSec;
	var strFractionSec = "";

	if (strSec.indexOf(".") != -1) {
		strWholeSec = strSec.substring(0, strSec.indexOf("."));
		strFractionSec = strSec.substring(strSec.indexOf(".") + 1, strSec.length);
	}

	if (strWholeSec.length < 2) {
		strWholeSec = "0" + strWholeSec;
	}
	strSec = strWholeSec;

	if (strFractionSec.length) {
		strSec = strSec + "." + strFractionSec;
	}

	if (ts % 3600 != 0) var hour = 0;
	else var hour = ts / 3600;
	if (tmp % 60 != 0) var min = 0;
	else var min = tmp / 60;

	if (new String(hour).length < 2) hour = "0" + hour;
	if (new String(min).length < 2) min = "0" + min;

	var rtnVal = hour + ":" + min + ":" + strSec;

	return rtnVal;
}

/****************************************************************************************************************
Function  doLMSGetStudentId
*****************************************************************************************************************/

function doLMSGetStudentId() {
	return doLMSGetValue("cmi.core.student_id");
}

/****************************************************************************************************************
Function  doLMSGetStudentName
*****************************************************************************************************************/

function doLMSGetStudentName() {
	return doLMSGetValue("cmi.core.student_name");
}

/****************************************************************************************************************
Function  doLMSGetEntry
*****************************************************************************************************************/

function doLMSGetEntry() {
	return doLMSGetValue("cmi.core.entry");
}

/****************************************************************************************************************
Function  doLMSSetEntry
*****************************************************************************************************************/

function doLMSSetEntry(_vlr) {
	doLMSSetValue("cmi.core.entry", _vlr);
}

/****************************************************************************************************************
Function  doLMSGetLessonLocation
*****************************************************************************************************************/

function doLMSGetLessonLocation() {
	return doLMSGetValue("cmi.core.lesson_location");
}

/****************************************************************************************************************
Function  doLMSSetLessonLocation
*****************************************************************************************************************/

function doLMSSetLessonLocation(_vlr) {
	doLMSSetValue("cmi.core.lesson_location", _vlr);
}

/****************************************************************************************************************
Function  doLMSGetLessonStatus
*****************************************************************************************************************/

function doLMSGetLessonStatus() {
	return doLMSGetValue("cmi.core.lesson_status");
}

/****************************************************************************************************************
Function  doLMSSetLessonStatus
*****************************************************************************************************************/

function doLMSSetLessonStatus(_vlr) {
	doLMSSetValue("cmi.core.lesson_status", _vlr);
}

/****************************************************************************************************************
Function doLMSGetScoreRaw 
*****************************************************************************************************************/

function doLMSGetScoreRaw() {
	return doLMSGetValue("cmi.core.score.raw");
}

/****************************************************************************************************************
Function doLMSSetScoreRaw
*****************************************************************************************************************/

function doLMSSetScoreRaw(_vlr) {
	doLMSSetValue("cmi.core.score.raw", _vlr);
}

/****************************************************************************************************************
Function doLMSetScoreRawMax 
*****************************************************************************************************************/

function doLMSGetScoreRawMax() {
	return doLMSGetValue("cmi.core.score.max");
}

/****************************************************************************************************************
Function doLMSSetScoreRawMax 
*****************************************************************************************************************/

function doLMSSetScoreRawMax(_vlr) {
	doLMSSetValue("cmi.core.score.max", _vlr);
}

/****************************************************************************************************************
Function doLMSGetScoreRawMin 
*****************************************************************************************************************/

function doLMSGetScoreRawMin() {
	return doLMSGetValue("cmi.core.score.min");
}

/****************************************************************************************************************
Function doLMSSetScoreRawMin 
*****************************************************************************************************************/

function doLMSSetScoreRawMin(_vlr) {
	doLMSSetValue("cmi.core.score.min", _vlr);
}

/****************************************************************************************************************
Function  doLMSGetSessionTime
*****************************************************************************************************************/

function doLMSGetSessionTime() {
	return doLMSGetValue("cmi.core.session_time");
}

/****************************************************************************************************************
Function  doLMSSetTime
*****************************************************************************************************************/

function doLMSSetSessionTime(_vlr) {
	doLMSSetValue("cmi.core.session_time", _vlr);
}

/****************************************************************************************************************
Function  doLMSGetTotalTime
*****************************************************************************************************************/

function doLMSGetTotalTime() {
	return doLMSGetValue("cmi.core.total_time");
}

/****************************************************************************************************************
Function  doLMSSetTotalTime
*****************************************************************************************************************/

function doLMSSetTotalTime(_vlr) {
	doLMSSetValue("cmi.core.total_time", _vlr);
}

/****************************************************************************************************************
Function  doLMSGetExit
*****************************************************************************************************************/

function doLMSGetExit() {
	return doLMSGetValue("cmi.core.exit");
}

/****************************************************************************************************************
Function  doLMSSetExit
*****************************************************************************************************************/

function doLMSSetExit(_vlr) {
	doLMSSetValue("cmi.core.exit", _vlr);
}

/****************************************************************************************************************
Function  doLMSGetLessonMode
*****************************************************************************************************************/

function doLMSGetLessonMode() {
	return doLMSGetValue("cmi.core.lesson_mode");
}

/****************************************************************************************************************
Function  doLMSGetMasteryScore
*****************************************************************************************************************/

function doLMSGetMasteryScore() {
	return doLMSGetValue("cmi.student_data.mastery_score");
}

/****************************************************************************************************************
Function  doLMSSetMasteryScore
*****************************************************************************************************************/

function doLMSSetMasteryScore(_vlr) {
	doLMSSetValue("cmi.student_data.mastery_score", _vlr);
}

/****************************************************************************************************************
Function  doLMSGetComments
*****************************************************************************************************************/

function doLMSGetComments() {
	return doLMSGetValue("cmi.comments");
}

/****************************************************************************************************************
Function  doLMSSetComments
*****************************************************************************************************************/

function doLMSSetComments(_vlr) {
	doLMSSetValue("cmi.comments", _vlr);
}

/****************************************************************************************************************
Function  doLMSGetSuspendData
*****************************************************************************************************************/

function doLMSGetSuspendData() {
	doLMSGetValue("cmi.suspend_data");
	/* Guarda valores na vari�vel _vlrSuspendData porque getSuspendData � acess�vel apenas na inicializa��o do scorm. 
		Para manipula��o dos dados guardado usar vari�vel.*/
	var _vlrSuspendData = doLMSGetValue("cmi.suspend_data");
	return _vlrSuspendData;
}

/****************************************************************************************************************
Function doLMSSetSuspendData
*****************************************************************************************************************/

function doLMSSetSuspendData(_vlr) {
	doLMSSetValue("cmi.suspend_data", _vlr);
}

/****************************************************************************************************************
Function doLMSGetLaunchData
*****************************************************************************************************************/

function doLMSGetLaunchData() {
	doLMSGetValue("cmi.launch_data");
}

/****************************************************************************************************************
Function doLMSSetLaunchData
*****************************************************************************************************************/

function doLMSSetLaunchData(_vlr) {
	doLMSSetValue("cmi.launch_data", _vlr);
}

/****************************************************************************************************************
Function LMSStatusLesson
*****************************************************************************************************************/

function LMSStatusLesson() {
	var lessonStatus = doLMSGetLessonStatus();
	var assessmentScore = doLMSGetScoreRaw();

	if (lessonStatus == "" || lessonStatus != "passed") {
		if (assessmentScore >= 70) {
			doLMSSetLessonStatus("passed");
		} else {
			doLMSSetLessonStatus("failed");
		}
	}
}

function setExitPageStatus() {
	exitPageStatus = true;
	console.log(`setting exitPageStatus to: ${exitPageStatus}`)
}


// Gets all the anchors and prevents them to trigger the doLMSFinish
document.querySelectorAll('a').forEach(function (anchor) {
	anchor.addEventListener('click', function (event) {
		setExitPageStatus();
	});
	console.log("Anchors are being prevented to trigger doLMSFinish.")
});


//===========================================================================
// SAVE STUDANT HISTORY
//===========================================================================

const HEADER_HEIGHT_SIZE = 56
const FOOTER_HEIGHT_SIZE = 160
var SCROLL_TIMEOUT;

const sections = document.querySelectorAll('section[id]');
const pageFullPath = document.location.href.split('#')[0]

let currentSection = null

function debounce(func, delay) {
	let timeoutId;

	return function () {
		const context = this;
		const args = arguments;

		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			func.apply(context, args);
		}, delay);
	};
}

const keepStudentProgress = {
	getHomePage: () => {
		const page = document.getElementById("homePage");
		let suspendData = doLMSGetValue("cmi.suspend_data");
		if (suspendData) {
			try {
				suspendData = JSON.parse(suspendData);
			} catch (error) {
				console.error("Error parsing suspendData JSON", error);
				suspendData = null;
			}
		}
		const location = doLMSGetLessonLocation();
		if (page) {
			if (suspendData && location) {
				bootstrap.Modal.getOrCreateInstance("#resumeFromLastModal").show();
			}
		} else {
			console.log("You are not at home page, or it was not set on html.");
		}
	},
	firstPageModal: {
		continueFromLastPosition: () => {
			const home = document.getElementById("homePage");
			let suspendData = doLMSGetValue("cmi.suspend_data");
			if (suspendData) {
				try {
					suspendData = JSON.parse(suspendData);
				} catch (error) {
					console.error("Error parsing suspendData JSON", error);
					suspendData = null;
				}
			}
			const location = doLMSGetLessonLocation();
			if (home) {
				resumeFromLastButton.addEventListener("click", () => {
					exitPageStatus = true;
					const goTo = suspendData && suspendData.scrollY !== null && suspendData.scrollY !== undefined ? `${location}#${suspendData.scrollY}` : `${location}`;
					if (location.includes("index.html")) {
						document.getElementById(suspendData.scrollY).scrollIntoView({
							behavior: 'smooth'
						});
					} else {
						window.location.href = goTo;
					}
					bootstrap.Modal.getOrCreateInstance("#resumeFromLastModal").hide();
				});
			}
		},
		startFromTheBegining: () => {
			exitPageStatus = true;
			doLMSSetValue("cmi.suspend_data", JSON.stringify({}));
			doLMSCommit('');
			bootstrap.Modal.getOrCreateInstance("#resumeFromLastModal").hide();
		},
	},
	setUserLocation: () => {
		window.addEventListener("scroll", debounce(() => {
			sections.forEach(section => {
				const sectionTop = section.getBoundingClientRect().top + FOOTER_HEIGHT_SIZE;
				const windowHeight = window.innerHeight;
				const jsonString = JSON.stringify({ scrollY: section.id });

				if (sectionTop < windowHeight && sectionTop > 0) {
					try {
						doLMSSetLessonLocation(pageFullPath);
						doLMSSetValue("cmi.suspend_data", jsonString);
						doLMSCommit("");
					} catch (error) {
						console.error("Error trying to save coordinates at suspend_data.", error);
					}

					const suspendDataCommit = doLMSGetValue("cmi.suspend_data");
					const locationCommit = doLMSGetLessonLocation();
				}
			});
		}, 50));
	}
}


const checkCourseCompletion = {
	isElementInViewport: (el) => {
		const rect = el.getBoundingClientRect()
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		)
	},

	setFinishedCourse: () => {
		const targetDiv = document.getElementById("finished")
		if (targetDiv === null || targetDiv === undefined) {

			doLMSSetValue("cmi.core.lesson_status", "incomplete")
			doLMSCommit('');

		} else {
			window.addEventListener("scroll", debounce(() => {
				if (checkCourseCompletion.isElementInViewport(targetDiv)) {

					console.log("Setting finished status...")

					doLMSSetValue("cmi.core.lesson_status", "passed");
					doLMSSetScoreRaw("100")
					doLMSSetExit("suspend")
					console.log(doLMSCommit(''))
					// Está setando o status corretamente. 

					const lessonStatus = doLMSGetValue("cmi.core.lesson_status")
					console.log(`Lesson status set to complete: ${lessonStatus}`)
				}
			}, 50))
		}
	}
}

window.addEventListener("DOMContentLoaded", keepStudentProgress.getHomePage())


keepStudentProgress.firstPageModal.continueFromLastPosition()
keepStudentProgress.setUserLocation()
checkCourseCompletion.setFinishedCourse()
console.log(doLMSGetStudentName())

console.log(doLMSGetValue("cmi.core.lesson_status"))