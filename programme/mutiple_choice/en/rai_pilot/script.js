// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "full_experiment",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "Please keep in full screen mode for the entirety of this experiment",
          "hint": "",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "input",
              "label": "Welcome to the study! What is your Prolific ID?",
              "attributes": {
                "type": "text"
              },
              "help": "",
              "name": "welcome-to-the-study!-what-is-your-prolific-id"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "email"
        },
        {
          "title": "RAI",
          "type": "lab.flow.Sequence",
          "parameters": {},
          "plugins": [],
          "metadata": {
            "title": "Expanded Relational Abilities Index",
            "description": "",
            "repository": "",
            "contributors": "Jamie Cummins (jamie.cummins@ugent.be)\nDylan Colbert (dylan.colbert.2011@mumail.ie)"
          },
          "messageHandlers": {},
          "files": {},
          "responses": {},
          "content": [
            {
              "type": "lab.html.Screen",
              "files": {},
              "responses": {
                "mousedown button.continue-button": "continue"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "instructions1",
              "content": "\u003Cmain\u003E\n  \u003Cdiv class=\"rai-intro-text\"\u003E\n    \u003Cimg src=\"static\u002Flogo-without-text.png\" class=\"logo-img\"\u003E\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"rai-intro-text\"\u003E\u003Cp\u003EYou will now complete a test. On every trial, you will see 2-to-4 sentences about the relationship between made-up words. For example: \"CUG is the same as JOM, JOM is the same as VEK\". You will also see a number buttons (usually between 4 and 8) with extra statements on them. For example:\u003Cbr\u003E\u003Cbr\u003EA: CUG is the same as VEK\u003Cbr\u003EB:CUG is opposite to VEK \u003Cbr\u003E C: CUG is opposite to JOM \u003Cbr\u003E D: JOM is opposite to VEK\u003Cbr\u003E\u003Cbr\u003EYou will be asked to select some of those buttons based on the information you were provided (e.g., select all buttons whose statements are true).\u003Cbr\u003E\u003Cbr\u003EClick \u003Ckbd\u003Econtinue\u003C\u002Fkbd\u003E to go to the next instruction.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"footer-instructions\"\u003E\n\u003Cbutton class=\"continue-button\" type=\"submit\" form=\"demographics\" id=\"submit-demographics\"\u003E\n  \u003Cb\u003EContinue\u003C\u002Fb\u003E\n\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
              "correctResponse": "continue"
            },
            {
              "type": "lab.html.Screen",
              "files": {},
              "responses": {
                "mousedown button.continue-button": "continue"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "instructions2",
              "content": "\u003Cmain\u003E\n  \u003Cdiv class=\"rai-intro-text\"\u003E\n    \u003Cimg src=\"static\u002Flogo-without-text.png\" class=\"logo-img\"\u003E\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"rai-intro-text\"\u003E\u003Cp\u003EFor each statement on the buttons, there are two possibilities: the information is \u003Ci\u003Etrue\u003C\u002Fi\u003E, or the information is \u003Ci\u003Efalse\u003C\u002Fi\u003E.\u003Cbr\u003E\u003Cbr\u003EFor example, if you were told \"CUG is the same as JOM\" and \"JOM is the same as VEK\":\u003Cbr\u003Ethe statement \"CUG is the same as VEK\" would be \u003Cb\u003Etrue\u003C\u002Fb\u003E;\u003Cbr\u003Ethe statement \"CUG is opposite to VEK\" would be \u003Cb\u003Efalse\u003C\u002Fb\u003E.\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EClick \u003Ckbd\u003Econtinue\u003C\u002Fkbd\u003E to go to the next instruction.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"footer-instructions\"\u003E\n\u003Cbutton class=\"continue-button\" type=\"submit\" form=\"demographics\" id=\"submit-demographics\"\u003E\n  \u003Cb\u003EContinue\u003C\u002Fb\u003E\n\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
              "correctResponse": "continue"
            },
            {
              "type": "lab.html.Screen",
              "files": {},
              "responses": {
                "mousedown button.continue-button": "continue"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "instructions3",
              "content": "\u003Cmain\u003E\n  \u003Cdiv class=\"rai-intro-text\"\u003E\n    \u003Cimg src=\"static\u002Flogo-without-text.png\" class=\"logo-img\"\u003E\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"rai-intro-text\"\u003E\u003Cp\u003ESometimes there is only one correct answer. Other times, there can be multiple statements that are correct. And other times still, none of the answers might be correct!\u003Cbr\u003EYou should click on each option you think is correct (or none, if you think none are correct). When you are happy with your selection, you can click the \"submit\" button to move to the next trial. Each trial has a time limit of 1 minute, so try to be quick!\u003Cbr\u003E\u003Cbr\u003EWe'll start with a couple of practice questions. When you are ready, click \u003Ckbd\u003Ebegin\u003C\u002Fkbd\u003E to start the practice trials.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"footer-instructions\"\u003E\n\u003Cbutton class=\"continue-button\" type=\"submit\" form=\"demographics\" id=\"submit-demographics\"\u003E\n  \u003Cb\u003EBegin\u003C\u002Fb\u003E\n\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
              "correctResponse": "continue"
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "trial_num": "1",
                  "statement_1": "CUG is the same as JOM",
                  "statement_2": "JOM is the same as VEK",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "VEK is the same as CUG",
                  "false_statements": "VEK is opposite to CUG, CUG is opposite to JOM, JOM is opposite to CUG",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "trial_num": "2",
                  "statement_1": "CUG is the same as JOM",
                  "statement_2": "JOM is the same as VEK",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "VEK is the same as CUG, CUG is the same as VEK",
                  "false_statements": "VEK is opposite to CUG, JOM is opposite to CUG",
                  "ku_statements": "CUG is the same as FUD, FUD is the same as CUG",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "trial_num": "3",
                  "statement_1": "DOK is more than SAF",
                  "statement_2": "WER is more than SAF",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "SAF is less than DOK",
                  "false_statements": "SAF is more than WER, WER is less than SAF, DOK is less than SAF",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                }
              ],
              "sample": {
                "mode": "sequential",
                "n": ""
              },
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "practice_trials",
              "tardy": true,
              "indexParameter": "loop_iteration",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "trials-and-breaks",
                "content": [
                  {
                    "type": "lab.html.Frame",
                    "context": "\u003Cheader class=\"header-plain\"\u003E\n  \u003Cdiv class=\"left-top\"\u003E\u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"middle-top\"\u003E\n    \u003Cdiv class=\"trial-text\"\u003EPractice ${this.parameters.trial_num} out of 3\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"right-top\"\u003E\n  \u003Cdiv id=\"static-timer-circle\"\u003E\u003Cp id=\"timer-text\"\u003E60\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\n  \n\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain data-labjs-section=\"frame\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E\n",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "run": function anonymous(
) {
clearInterval(this.state.trialTimer);
time_left = 59;

this.state.trialTimer = setInterval(function(){
  document.getElementById("timer-text").innerText = time_left;
  time_left -= 1;
}, 1000);
}
                    },
                    "title": "whole-trial-frame",
                    "tardy": true,
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "trial_sequence",
                      "tardy": true,
                      "content": [
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 0,
                              "angle": 0,
                              "width": 18.69,
                              "height": 36.16,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "+",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": "64",
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "iti",
                          "timeout": "1000",
                          "skip": true
                        },
                        {
                          "type": "lab.html.Form",
                          "content": "\u003Cdiv class=\"trial-propositions\"\u003E\n  \u003Cdiv class=\"trial-proposition\"\u003E${this.parameters.statement_1}\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"trial-proposition\"\u003E${this.parameters.statement_2}\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\u003Cdiv class=\"trial-question\"\u003E\n  \u003Ci\u003EGiven this information, select all statements  which are \u003Cstrong\u003E${this.parameters.probed_truth_value}.\u003C\u002Fi\u003E\u003C\u002Fstrong\u003E\u003C\u002Fdiv\u003E\n\n\u003Cform\u003E\n  \u003Cdiv class=\"grid-container\"\u003E\n    \u003Clabel for=\"option1input\" id=\"option1\" class=\"grid-item\"\u003E\n      \u003Cinput type=\"checkbox\" id=\"option1input\" name=\"option1input\" class=\"checkbox\"\u003E\n      \u003Cb\u003E\u003C\u002Fb\u003E\n    \u003C\u002Flabel\u003E\n    \u003Clabel for=\"option2input\"  id=\"option2\" class=\"grid-item\"\u003E\n      \u003Cinput type=\"checkbox\" id=\"option2input\" name=\"option2input\" class=\"checkbox\"\u003E\n      \u003Cb\u003E\u003C\u002Fb\u003E\n    \u003C\u002Flabel\u003E\n    \u003Clabel for=\"option3input\"  id=\"option3\" class=\"grid-item\"\u003E\n      \u003Cinput type=\"checkbox\" id=\"option3input\" name=\"option3input\" class=\"checkbox\"\u003E\n      \u003Cb\u003E\u003C\u002Fb\u003E\n    \u003C\u002Flabel\u003E\n    \u003Clabel for=\"option4input\"  id=\"option4\" class=\"grid-item\"\u003E\n      \u003Cinput type=\"checkbox\" id=\"option4input\" name=\"option4input\" class=\"checkbox\"\u003E\n      \u003Cb\u003E\u003C\u002Fb\u003E\n    \u003C\u002Flabel\u003E\n    \u003Clabel for=\"option5input\"  id=\"option5\" class=\"grid-item\"\u003E\n      \u003Cinput type=\"checkbox\" id=\"option5input\" name=\"option5input\" class=\"checkbox\"\u003E\n      \u003Cb\u003E\u003C\u002Fb\u003E\n    \u003C\u002Flabel\u003E\n    \u003Clabel for=\"option6input\"  id=\"option6\" class=\"grid-item\"\u003E\n      \u003Cinput type=\"checkbox\" id=\"option6input\" name=\"option6input\" class=\"checkbox\"\u003E\n      \u003Cb\u003E\u003C\u002Fb\u003E\n    \u003Clabel for=\"option7input\"  id=\"option7\" class=\"grid-item\"\u003E\n      \u003Cinput type=\"checkbox\" id=\"option7input\" name=\"option7input\" class=\"checkbox\"\u003E\n      \u003Cb\u003E\u003C\u002Fb\u003E\n    \u003C\u002Flabel\u003E\n    \u003Clabel for=\"option8input\"  id=\"option8\" class=\"grid-item\"\u003E\n      \u003Cinput type=\"checkbox\" id=\"option8input\" name=\"option8input\" class=\"checkbox\"\u003E\n      \u003Cb\u003E\u003C\u002Fb\u003E\n    \u003C\u002Flabel\u003E\n  \u003C\u002Fdiv\u003E\n\n\n\n\u003Cfooter class=\"footer-trials\"\u003E\n\u003Cinput class=\"trial-submit-button\" type=\"submit\" value=\"Submit\"\u003E\n\u003C\u002Ffooter\u003E\u003C\u002Fform\u003E",
                          "scrollTop": true,
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
// function to choose random values from arrays 
function chooseOptions(array, n) {
    // Clone the original array to avoid altering it
    let clonedArray = array.slice();

    // Fisher-Yates Shuffle algorithm
    for (let i = clonedArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [clonedArray[i], clonedArray[j]] = [clonedArray[j], clonedArray[i]];
    }

    // Slice the first n elements
    return clonedArray.slice(0, n);
}

// function to replace values in array with mappings
function replaceMultipleValuesInArray(array, replacements) {
    return array.map(item => {
        let modifiedItem = item;
        for (const [key, value] of Object.entries(replacements)) {
            modifiedItem = modifiedItem.replace(new RegExp(key, 'g'), value);
        }
        return modifiedItem;
    });
}


// choose response options
this.state.true_responses = chooseOptions(this.parameters.true_statements.split(/,+(?=(?:(?:[^"]*"){2})*[^"]*$)/), this.parameters.n_true_answers)
this.state.false_responses = chooseOptions(this.parameters.false_statements.split(/,+(?=(?:(?:[^"]*"){2})*[^"]*$)/), this.parameters.n_false_answers)
this.state.ku_responses = chooseOptions(this.parameters.ku_statements.split(/,+(?=(?:(?:[^"]*"){2})*[^"]*$)/), this.parameters.n_ku_answers)


this.state.response_options = this.state.true_responses.concat(this.state.false_responses, this.state.ku_responses);



// map arbitrary stimuli in trial to trial parameters
this.parameters.statement_1 = this.parameters.statement_1.split(/,+(?=(?:(?:[^"]*"){2})*[^"]*$)/)
this.parameters.statement_2 = this.parameters.statement_2.split(/,+(?=(?:(?:[^"]*"){2})*[^"]*$)/)



},
                            "run": function anonymous(
) {
// Function to update button visibility
function updateButtonVisibility(numberOfButtons) {
  const gridContainer = document.querySelector('.grid-container');
  const buttons = gridContainer.querySelectorAll('.grid-item');

  // Hide all buttons
  buttons.forEach(button => {
    button.style.display = 'none';
  });

  // Show only the required number of buttons
  for (let i = 0; i < numberOfButtons; i++) {
    buttons[i].style.display = 'block'; // Adjust display as per your layout
  }
};


// function to randomise button positions
function randomizeGridPositions(rowCount, columnCount) {
  const gridContainer = document.querySelector('.grid-container');
  const items = gridContainer.querySelectorAll('.grid-item');
  
  let positions = [];

  // Generate all possible positions
  for (let row = 1; row <= rowCount; row++) {
    for (let col = 1; col <= 2; col++) {
      positions.push({ row, col });
    }
  }

  // Shuffle positions array
  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }

  // Assign positions to grid items
  items.forEach((item, index) => {
    if (index < positions.length) {
      item.style.gridRow = positions[index].row;
      item.style.gridColumn = positions[index].col;
    }
  });
}

  
const gridContainer = document.querySelector('.grid-container');

switch (this.parameters.n_answers) {
  case "4":
  gridContainer.classList.add('four-items');
  randomizeGridPositions(2, 2); // For a 2x2 grid
  updateButtonVisibility(4);
  // Set the innerHTML of the first 4 buttons
  break;
  case "6":
  gridContainer.classList.add('six-items');
  randomizeGridPositions(2, 3); // For a 2x3 grid
  updateButtonVisibility(6);
  // Set the innerHTML of the first 6 buttons
  break;
  case "8":
  gridContainer.classList.add('eight-items');
  randomizeGridPositions(2, 4); // For a 2x4 grid
  updateButtonVisibility(8);
  // Set the innerHTML of the first 8 buttons
  break;
  // ... other cases ...
  default:
   // Handle any other number of options if needed
   break;
}


// Setting content for visible buttons
for (let i = 0; i < this.parameters.n_answers; i++) {
  document.getElementById(`option${i + 1}`).querySelector("b").innerHTML = this.state.response_options[i];
  console.log(i);
  }


function adjustFontSizeForGridItems() {
    const gridItems = document.querySelectorAll('.grid-item', '.trial-submit-button');
    
    gridItems.forEach(item => {
        let fontSize = parseInt(window.getComputedStyle(item).fontSize);
        let maxWidth = item.clientWidth; // The width of the container
        let textWidth;

        do {
            item.style.fontSize = `${fontSize}px`;
            // Create a temporary span to measure text width
            const span = document.createElement('span');
            span.style.visibility = 'hidden';
            span.style.position = 'absolute';
            span.innerText = item.innerText || item.textContent;
            document.body.appendChild(span);
            textWidth = span.offsetWidth;
            document.body.removeChild(span);
            
            // Decrease the font size if the text is wider than the container
            if (textWidth > maxWidth) {
                fontSize -= 1;
            } else {
                break; // If the text fits, exit the loop
            }
        } while (fontSize > 0); // Prevent infinite loop
    });
}

// Adjust font size on initial load and window resize
window.onload = adjustFontSizeForGridItems;
window.onresize = adjustFontSizeForGridItems;


}
                          },
                          "title": "trial",
                          "timeout": "60000"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "lab.html.Screen",
              "files": {},
              "responses": {
                "mousedown button.continue-button": "continue"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "instructions4",
              "content": "\u003Cmain\u003E\n  \u003Cdiv class=\"rai-intro-text\"\u003E\n    \u003Cimg src=\"static\u002Flogo-without-text.png\" class=\"logo-img\"\u003E\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"rai-intro-text\"\u003E\u003Cp\u003EWell done! We'll now start with the real task. There will be 128 total trials that you need to complete, and you will have a break every 40 trials or so.\u003Cbr\u003E\u003Cbr\u003EWhen you are ready, click \u003Ckbd\u003Ebegin\u003C\u002Fkbd\u003E to start the task. Good luck!\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"footer-instructions\"\u003E\n\u003Cbutton class=\"continue-button\" type=\"submit\" form=\"demographics\" id=\"submit-demographics\"\u003E\n  \u003Cb\u003EBegin\u003C\u002Fb\u003E\n\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
              "correctResponse": "continue"
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "Notes": "",
                  "block": "1",
                  "trial_num": "1",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is the same as 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "3 is the same as 2, 2 is the same as 1, 1 is the same as 3, 3 is the same as 1",
                  "false_statements": "2 is opposite to 1, 3 is opposite to 2, 1 the opposite to 3, 3 is opposite to 1",
                  "ku_statements": "1 is the same as 4, 1 is opposite to 4",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Identical to 1 except for question",
                  "block": "1",
                  "trial_num": "2",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is the same as 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "3 is the same as 2, 2 is the same as 1, 1 is the same as 3, 3 is the same as 1",
                  "false_statements": "2 is opposite to 1, 3 is opposite to 2, 1 the opposite to 3, 3 is opposite to 1",
                  "ku_statements": "1 is the same as 4, 1 is opposite to 4",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "1",
                  "trial_num": "3",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is opposite to 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "3 is opposite to 2, 2 is the same as 1, 1 is opposite to 3, 3 is opposite to 1",
                  "false_statements": "2 is opposite to 1, 3 is the same as 2, 1 is the same as 3, 3 is the same as 1",
                  "ku_statements": "1 is the same as 4, 1 is opposite to 4",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Identical to 3 except for question",
                  "block": "1",
                  "trial_num": "4",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is opposite to 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "3 is opposite to 2, 2 is the same as 1, 1 is opposite to 3, 3 is opposite to 1",
                  "false_statements": "2 is opposite to 1, 3 is the same as 2, 1 is the same as 3, 3 is the same as 1",
                  "ku_statements": "1 is the same as 4, 1 is opposite to 4",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "1",
                  "trial_num": "5",
                  "statement_1": "1 is opposite to 2",
                  "statement_2": "2 is opposite to 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "3 is opposite to 2, 2 is opposite to 1, 1 is the same as 3, 3 is the same as 1",
                  "false_statements": "3 is the same as 2, 2 is the same as 1, 1 the opposite to 3, 3 is opposite to 1",
                  "ku_statements": "1 is the same as 4, 1 is opposite to 4",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Identical to 5 except for question",
                  "block": "1",
                  "trial_num": "6",
                  "statement_1": "1 is opposite to 2",
                  "statement_2": "2 is opposite to 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "3 is opposite to 2, 2 is opposite to 1, 1 is the same as 3, 3 is the same as 1",
                  "false_statements": "3 is the same as 2, 2 is the same as 1, 1 the opposite to 3, 3 is opposite to 1",
                  "ku_statements": "1 is the same as 4, 1 is opposite to 4",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "1",
                  "trial_num": "7",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is opposite to 3",
                  "statement_3": "3 is the same as 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is the same as 1, 3 is opposite to 2, 4 is the same as 3, 1 is opposite to 3, 3 is opposite to 1, 2 is opposite to 4, 4 is opposite to 2, 1 is opposite to 4, 4 is opposite to 1",
                  "false_statements": "2 is opposite to 1, 3 is the same as 2, 4 is opposite to 3, 1 is the same as 3, 3 is the same as 1, 2 is the same as 4, 4 is the same as 2, 1 is the same as 4, 4 is the same as 1",
                  "ku_statements": "1 is the same as 5, 1 is opposite to 5",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Identical to 7 except for question",
                  "block": "1",
                  "trial_num": "8",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is opposite to 3",
                  "statement_3": "3 is the same as 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is the same as 1, 3 is opposite to 2, 4 is the same as 3, 1 is opposite to 3, 3 is opposite to 1, 2 is opposite to 4, 4 is opposite to 2, 1 is opposite to 4, 4 is opposite to 1",
                  "false_statements": "2 is opposite to 1, 3 is the same as 2, 4 is opposite to 3, 1 is the same as 3, 3 is the same as 1, 2 is the same as 4, 4 is the same as 2, 1 is the same as 4, 4 is the same as 1",
                  "ku_statements": "1 is the same as 5, 1 is opposite to 5",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "1",
                  "trial_num": "9",
                  "statement_1": "1 is opposite to 2",
                  "statement_2": "2 is the same as 3",
                  "statement_3": "3 is opposite to 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is opposite to 1, 3 is the same as 2, 4 is opposite to 3, 1 is opposite to 3, 3 is opposite to 1, 2 is opposite to 4, 4 is opposite to 2, 1 is the same as 4, 4 is the same as 1",
                  "false_statements": "2 is the same as 1, 3 is opposite to 2, 4 is the same as 3, 1 is the same as 3, 3 is the same as 1, 2 is the same as 4, 4 is the same as 2, 1 is opposite to 4, 4 is opposite to 1",
                  "ku_statements": "1 is the same as 5, 1 is opposite to 5",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Identical to 9 except for question",
                  "block": "1",
                  "trial_num": "10",
                  "statement_1": "1 is opposite to 2",
                  "statement_2": "2 is the same as 3",
                  "statement_3": "3 is opposite to 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is opposite to 1, 3 is the same as 2, 4 is opposite to 3, 1 is opposite to 3, 3 is opposite to 1, 2 is opposite to 4, 4 is opposite to 2, 1 is the same as 4, 4 is the same as 1",
                  "false_statements": "2 is the same as 1, 3 is opposite to 2, 4 is the same as 3, 1 is the same as 3, 3 is the same as 1, 2 is the same as 4, 4 is the same as 2, 1 is opposite to 4, 4 is opposite to 1",
                  "ku_statements": "1 is the same as 5, 1 is opposite to 5",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "1",
                  "trial_num": "11",
                  "statement_1": "1 is opposite to 2",
                  "statement_2": "2 is opposite to 3",
                  "statement_3": "3 is opposite to 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is opposite to 1, 3 is opposite to 2, 4 is opposite to 3, 1 is the same as 3, 3 is the same as 1, 2 is the same as 4, 4 is the same as 2, 1 is opposite to 4, 4 is opposite to 1",
                  "false_statements": "2 is the same as 1, 3 is the same as 2, 4 is the same as 3, 1 is opposite to 3, 3 is opposite to 1, 2 is opposite to 4, 4 is opposite to 2, 1 is the same as 4, 4 is the same as 1",
                  "ku_statements": "1 is the same as 5, 1 is opposite to 5",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Identical to 11 except for question",
                  "block": "1",
                  "trial_num": "12",
                  "statement_1": "1 is opposite to 2",
                  "statement_2": "2 is opposite to 3",
                  "statement_3": "3 is opposite to 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is opposite to 1, 3 is opposite to 2, 4 is opposite to 3, 1 is the same as 3, 3 is the same as 1, 2 is the same as 4, 4 is the same as 2, 1 is opposite to 4, 4 is opposite to 1",
                  "false_statements": "2 is the same as 1, 3 is the same as 2, 4 is the same as 3, 1 is opposite to 3, 3 is opposite to 1, 2 is opposite to 4, 4 is opposite to 2, 1 is the same as 4, 4 is the same as 1",
                  "ku_statements": "1 is the same as 5, 1 is opposite to 5",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "1",
                  "trial_num": "13",
                  "statement_1": "1 is opposite to 2",
                  "statement_2": "2 is the same as 3",
                  "statement_3": "3 is opposite to 4",
                  "statement_4": "4 is the same as 5",
                  "statement_5": "",
                  "true_statements": "2 is opposite to 1, 3 is the same as 2, 4 is opposite to 3, 5 is the same as 4, 1 is opposite to 3, 3 is opposite to 1, 2 is opposite to 4, 4 is opposite to 2, 3 is opposite to 5, 5 is opposite to 3, 2 is opposite to 5, 5 is opposite to 2, 1 is the same as 4, 4 is the same as 1, 1 is the same as 5, 5 is the same as 1",
                  "false_statements": "2 is the same as 1, 3 is opposite to 2, 4 is the same as 3, 5 is opposite to 4, 1 is the same as 3, 3 is the same as 1, 2 is the same as 4, 4 is the same as 2, 3 is the same as 5, 5 is the same as 3, 2 is the same as 5, 5 is the same as 2, 1 is opposite to 4, 4 is opposite to 1, 1 is opposite to 5, 5 is opposite to 1",
                  "ku_statements": "1 is the same as 6, 1 is opposite to 6",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Identical to 13 except for question",
                  "block": "1",
                  "trial_num": "14",
                  "statement_1": "1 is opposite to 2",
                  "statement_2": "2 is the same as 3",
                  "statement_3": "3 is opposite to 4",
                  "statement_4": "4 is the same as 5",
                  "statement_5": "",
                  "true_statements": "2 is opposite to 1, 3 is the same as 2, 4 is opposite to 3, 5 is the same as 4, 1 is opposite to 3, 3 is opposite to 1, 2 is opposite to 4, 4 is opposite to 2, 3 is opposite to 5, 5 is opposite to 3, 2 is opposite to 5, 5 is opposite to 2, 1 is the same as 4, 4 is the same as 1, 1 is the same as 5, 5 is the same as 1",
                  "false_statements": "2 is the same as 1, 3 is opposite to 2, 4 is the same as 3, 5 is opposite to 4, 1 is the same as 3, 3 is the same as 1, 2 is the same as 4, 4 is the same as 2, 3 is the same as 5, 5 is the same as 3, 2 is the same as 5, 5 is the same as 2, 1 is opposite to 4, 4 is opposite to 1, 1 is opposite to 5, 5 is opposite to 1",
                  "ku_statements": "1 is the same as 6, 1 is opposite to 6",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "1",
                  "trial_num": "15",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is opposite to 3",
                  "statement_3": "3 is the same as 4",
                  "statement_4": "4 is opposite to 5",
                  "statement_5": "",
                  "true_statements": "2 is the same as 1, 3 is opposite to 2, 4 is the same as 3, 5 is opposite to 4, 1 is opposite to 3, 3 is opposite to 1, 2 is opposite to 4, 4 is opposite to 2, 3 is opposite to 5, 5 is opposite to 3, 1 is opposite to 4, 4 is opposite to 1, 2 is the same as 5, 5 is the same as 2, 1 is the same as 5, 5 is the same as 1",
                  "false_statements": "2 is opposite to 1, 3 is the same as 2, 4 is opposite to 3, 5 is the same as 4, 1 is the same as 3, 3 is the same as 1, 2 is the same as 4, 4 is the same as 2, 3 is the same as 5, 5 is the same as 3, 1 is the same as 4, 4 is the same as 1, 2 is opposite to 5, 5 is opposite to 2, 1 is opposite to 5, 5 is opposite to 1",
                  "ku_statements": "1 is the same as 6, 1 is opposite to 6",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "3",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Identical to 15 except for question",
                  "block": "1",
                  "trial_num": "16",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is opposite to 3",
                  "statement_3": "3 is the same as 4",
                  "statement_4": "4 is opposite to 5",
                  "statement_5": "",
                  "true_statements": "2 is the same as 1, 3 is opposite to 2, 4 is the same as 3, 5 is opposite to 4, 1 is opposite to 3, 3 is opposite to 1, 2 is opposite to 4, 4 is opposite to 2, 3 is opposite to 5, 5 is opposite to 3, 1 is opposite to 4, 4 is opposite to 1, 2 is the same as 5, 5 is the same as 2, 1 is the same as 5, 5 is the same as 1",
                  "false_statements": "2 is opposite to 1, 3 is the same as 2, 4 is opposite to 3, 5 is the same as 4, 1 is the same as 3, 3 is the same as 1, 2 is the same as 4, 4 is the same as 2, 3 is the same as 5, 5 is the same as 3, 1 is the same as 4, 4 is the same as 1, 2 is opposite to 5, 5 is opposite to 2, 1 is opposite to 5, 5 is opposite to 1",
                  "ku_statements": "1 is the same as 6, 1 is opposite to 6",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Same as 1, 2",
                  "block": "2",
                  "trial_num": "17",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is the same as 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "3 is the same as 2, 2 is the same as 1, 1 is the same as 3, 3 is the same as 1",
                  "false_statements": "2 is different to 1, 3 is different to 2, 1 the different to 3, 3 is different to 1",
                  "ku_statements": "1 is the same as 4, 1 is opposite to 4",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Same as 1, 2, 17",
                  "block": "2",
                  "trial_num": "18",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is the same as 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "3 is the same as 2, 2 is the same as 1, 1 is the same as 3, 3 is the same as 1",
                  "false_statements": "2 is different to 1, 3 is different to 2, 1 the different to 3, 3 is different to 1",
                  "ku_statements": "1 is the same as 4, 1 is opposite to 4",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "2",
                  "trial_num": "19",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is different to 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is the same as 1, 3 is different to 2, 1 is different to 3, 3 is different to 1",
                  "false_statements": "2 is different to 1, 3 is the same as 2, 1 is the same as 3, 3 is the same as 1",
                  "ku_statements": "1 is the same as 4, 4 is different to 1, 1 is opposite to 3, 3 is opposite to 1",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Same as 20",
                  "block": "2",
                  "trial_num": "20",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is different to 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is the same as 1, 3 is different to 2, 1 is different to 3, 3 is different to 1",
                  "false_statements": "2 is different to 1, 3 is the same as 2, 1 is the same as 3, 3 is the same as 1",
                  "ku_statements": "1 is the same as 4, 4 is different to 1, 1 is opposite to 3, 3 is opposite to 1",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "3",
                  "n_false_answers": "1",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "2",
                  "trial_num": "21",
                  "statement_1": "1 is different to 2",
                  "statement_2": "2 is the same as 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is different to 1, 3 is the same as 2, 1 is different to 3, 3 is different to 1",
                  "false_statements": "2 is the same as 1, 3 is different to 2, 1 is the same as 3, 3 is the same as 1",
                  "ku_statements": "1 is the same as 4, 4 is different to 1, 1 is opposite to 3, 3 is opposite to 1",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Same as 22",
                  "block": "2",
                  "trial_num": "22",
                  "statement_1": "1 is different to 2",
                  "statement_2": "2 is the same as 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is different to 1, 3 is the same as 2, 1 is different to 3, 3 is different to 1",
                  "false_statements": "2 is the same as 1, 3 is different to 2, 1 is the same as 3, 3 is the same as 1",
                  "ku_statements": "1 is the same as 4, 4 is different to 1, 1 is opposite to 3, 3 is opposite to 1",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "2",
                  "trial_num": "23",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is different to 3",
                  "statement_3": "3 is the same as 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is the same as 1, 3 is different to 2, 4 is the same as 3, 1 is different to 3, 3 is different to 1, 2 is different to 4, 4 is different to 2, 1 is different to 4, 4 is different to 1",
                  "false_statements": "2 is different to 1, 3 is the same as 2, 4 is different to 3, 1 is the same as 3, 3 is the same as 1, 2 is the same as 4, 4 is the same as 2, 1 is the same as 4, 4 is the same as 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Same as 23",
                  "block": "2",
                  "trial_num": "24",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is different to 3",
                  "statement_3": "3 is the same as 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is the same as 1, 3 is different to 2, 4 is the same as 3, 1 is different to 3, 3 is different to 1, 2 is different to 4, 4 is different to 2, 1 is different to 4, 4 is different to 1",
                  "false_statements": "2 is different to 1, 3 is the same as 2, 4 is different to 3, 1 is the same as 3, 3 is the same as 1, 2 is the same as 4, 4 is the same as 2, 1 is the same as 4, 4 is the same as 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "2",
                  "trial_num": "25",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is the same as 3",
                  "statement_3": "3 is different to 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is the same as 1, 3 is the same as 2, 4 is different to 3, 1 is the same as 3, 3 is the same as 1, 2 is different to 4, 4 is different to 3, 1 is different to 4, 4 is different to 1",
                  "false_statements": "2 is different to 1, 3 is different to 2, 4 is the same as 3, 1 is different to 3, 3 is different to 1, 2 is the same as 4, 4 is the same as 3, 1 is the same as 4, 4 is the same as 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Same as 25",
                  "block": "2",
                  "trial_num": "26",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is the same as 3",
                  "statement_3": "3 is different to 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is the same as 1, 3 is the same as 2, 4 is different to 3, 1 is the same as 3, 3 is the same as 1, 2 is different to 4, 4 is different to 3, 1 is different to 4, 4 is different to 1",
                  "false_statements": "2 is different to 1, 3 is different to 2, 4 is the same as 3, 1 is different to 3, 3 is different to 1, 2 is the same as 4, 4 is the same as 3, 1 is the same as 4, 4 is the same as 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "2",
                  "trial_num": "27",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is the same as 3",
                  "statement_3": "3 is different to 4",
                  "statement_4": "4 is the same as 5",
                  "statement_5": "",
                  "true_statements": "2 is the same as 1, 3 is the same as 2, 4 is different to 3, 5 is the same as 4, 1 is the same as 3, 3 is the same as 1, 2 is different to 4, 4 is different to 2, 3 is different to 5, 5 is different to 3, 1 is different to 4, 4 is different to 1, 2 is different to 5, 5 is different to 2, 1 is different to 5, 5 is different to 1",
                  "false_statements": "2 is different to 1, 3 is different to 2, 4 is the same as 3, 5 is different to 4, 1 is different to 3, 3 is different to 1, 2 is the same as 4, 4 is the same as 2, 3 is the same as 5, 5 is the same as 3, 1 is the same as 4, 4 is the same as 1, 2 is the same as 5, 5 is the same as 2, 1 is the same as 5, 5 is the same as 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Same as 27",
                  "block": "2",
                  "trial_num": "28",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is the same as 3",
                  "statement_3": "3 is different to 4",
                  "statement_4": "4 is the same as 5",
                  "statement_5": "",
                  "true_statements": "2 is the same as 1, 3 is the same as 2, 4 is different to 3, 5 is the same as 4, 1 is the same as 3, 3 is the same as 1, 2 is different to 4, 4 is different to 2, 3 is different to 5, 5 is different to 3, 1 is different to 4, 4 is different to 1, 2 is different to 5, 5 is different to 2, 1 is different to 5, 5 is different to 1",
                  "false_statements": "2 is different to 1, 3 is different to 2, 4 is the same as 3, 5 is different to 4, 1 is different to 3, 3 is different to 1, 2 is the same as 4, 4 is the same as 2, 3 is the same as 5, 5 is the same as 3, 1 is the same as 4, 4 is the same as 1, 2 is the same as 5, 5 is the same as 2, 1 is the same as 5, 5 is the same as 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "2",
                  "trial_num": "29",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is different to 3",
                  "statement_3": "3 is the same as 4",
                  "statement_4": "4 is the same as 5",
                  "statement_5": "",
                  "true_statements": "2 is the same as 1, 3 is different to 2, 4 is the same as 3, 5 is the same as 4, 1 is different to 3, 3 is different to 1, 2 is different to 4, 4 is different to 2, 3 is the same as 5, 5 is the same as 3, 1 is different to 4, 4 is different to 1, 2 is different to 5, 5 is different to 2, 1 is different to 5, 5 is different to 1",
                  "false_statements": "2 is different to 1, 3 is the same as 2, 4 is different to 3, 5 is different to 4, 1 is the same as 3, 3 is the same as 1, 2 is the same as 4, 4 is the same as 2, 3 is different to 5, 5 is different to 3, 1 is the same as 4, 4 is the same as 1, 2 is the same as 5, 5 is the same as 2, 1 is the same as 5, 5 is the same as 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Same as 29",
                  "block": "2",
                  "trial_num": "30",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is different to 3",
                  "statement_3": "3 is the same as 4",
                  "statement_4": "4 is the same as 5",
                  "statement_5": "",
                  "true_statements": "2 is the same as 1, 3 is different to 2, 4 is the same as 3, 5 is the same as 4, 1 is different to 3, 3 is different to 1, 2 is different to 4, 4 is different to 2, 3 is the same as 5, 5 is the same as 3, 1 is different to 4, 4 is different to 1, 2 is different to 5, 5 is different to 2, 1 is different to 5, 5 is different to 1",
                  "false_statements": "2 is different to 1, 3 is the same as 2, 4 is different to 3, 5 is different to 4, 1 is the same as 3, 3 is the same as 1, 2 is the same as 4, 4 is the same as 2, 3 is different to 5, 5 is different to 3, 1 is the same as 4, 4 is the same as 1, 2 is the same as 5, 5 is the same as 2, 1 is the same as 5, 5 is the same as 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "3",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Same as 29",
                  "block": "2",
                  "trial_num": "31",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is different to 3",
                  "statement_3": "3 is the same as 4",
                  "statement_4": "4 is the same as 5",
                  "statement_5": "",
                  "true_statements": "2 is the same as 1, 3 is different to 2, 4 is the same as 3, 5 is the same as 4, 1 is different to 3, 3 is different to 1, 2 is different to 4, 4 is different to 2, 3 is the same as 5, 5 is the same as 3, 1 is different to 4, 4 is different to 1, 2 is different to 5, 5 is different to 2, 1 is different to 5, 5 is different to 1",
                  "false_statements": "2 is different to 1, 3 is the same as 2, 4 is different to 3, 5 is different to 4, 1 is the same as 3, 3 is the same as 1, 2 is the same as 4, 4 is the same as 2, 3 is different to 5, 5 is different to 3, 1 is the same as 4, 4 is the same as 1, 2 is the same as 5, 5 is the same as 2, 1 is the same as 5, 5 is the same as 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "3",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Same as 29",
                  "block": "2",
                  "trial_num": "32",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "2 is different to 3",
                  "statement_3": "3 is the same as 4",
                  "statement_4": "4 is the same as 5",
                  "statement_5": "",
                  "true_statements": "2 is the same as 1, 3 is different to 2, 4 is the same as 3, 5 is the same as 4, 1 is different to 3, 3 is different to 1, 2 is different to 4, 4 is different to 2, 3 is the same as 5, 5 is the same as 3, 1 is different to 4, 4 is different to 1, 2 is different to 5, 5 is different to 2, 1 is different to 5, 5 is different to 1",
                  "false_statements": "2 is different to 1, 3 is the same as 2, 4 is different to 3, 5 is different to 4, 1 is the same as 3, 3 is the same as 1, 2 is the same as 4, 4 is the same as 2, 3 is different to 5, 5 is different to 3, 1 is the same as 4, 4 is the same as 1, 2 is the same as 5, 5 is the same as 2, 1 is the same as 5, 5 is the same as 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "3",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "3",
                  "trial_num": "33",
                  "statement_1": "1 is more than 2",
                  "statement_2": "2 is more than 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is less than 1, 3 is less than 2, 1 is more than 3, 3 is less than 1",
                  "false_statements": "2 is more than 1, 3 is more than 2, 1 is less than 3, 3 is more than 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "3",
                  "trial_num": "34",
                  "statement_1": "1 is more than 2",
                  "statement_2": "3 is more than 2",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is less than 1, 2 is less than 3",
                  "false_statements": "2 is more than 1, 2 is more than 3",
                  "ku_statements": "1 is more than 3, 3 is less than 1, 1 is less than 3, 3 is more than 1",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "3",
                  "trial_num": "35",
                  "statement_1": "1 is more than 2",
                  "statement_2": "3 is less than 2",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is less than 1, 2 is more than 3",
                  "false_statements": "2 is more than 1, 2 is less than 3",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "3",
                  "trial_num": "36",
                  "statement_1": "1 is more than 2",
                  "statement_2": "2 is less than 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is less than 1, 3 is more than 2",
                  "false_statements": "2 is more than 1, 3 is less than 2",
                  "ku_statements": "1 is more than 3, 3 is more than 1, 1 is less than 3, 3 is less than 1",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "3",
                  "trial_num": "37",
                  "statement_1": "1 is less than 2",
                  "statement_2": "2 is less than 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is more than 1, 3 is more than 2, 3 is more than 1, 1 is less than 3",
                  "false_statements": "2 is less than 1, 3 is less than 2, 3 is less than 1, 1 is more than 3",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "3",
                  "n_false_answers": "1",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Same as 37",
                  "block": "3",
                  "trial_num": "38",
                  "statement_1": "1 is less than 2",
                  "statement_2": "2 is less than 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is more than 1, 3 is more than 2, 3 is more than 1, 1 is less than 3",
                  "false_statements": "2 is less than 1, 3 is less than 2, 3 is less than 1, 1 is more than 3",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "3",
                  "trial_num": "39",
                  "statement_1": "1 is more than 2",
                  "statement_2": "3 is less than 2",
                  "statement_3": "3 is more than 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is less than 1, 2 is more than 3, 4 is less than 3, 1 is more than 3, 3 is less than 1, 2 is more than 4, 4 is less than 2, 1 is more than 4, 4 is less than 1",
                  "false_statements": "2 is more than 1, 2 is less than 3, 4 is more than 3, 1 is less than 3, 3 is more than 1, 2 is less than 4, 4 is more than 2, 1 is less than 4, 4 is more than 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Same as 39",
                  "block": "3",
                  "trial_num": "40",
                  "statement_1": "1 is more than 2",
                  "statement_2": "3 is less than 2",
                  "statement_3": "3 is more than 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is less than 1, 2 is more than 3, 4 is less than 3, 1 is more than 3, 3 is less than 1, 2 is more than 4, 4 is less than 2, 1 is more than 4, 4 is less than 1",
                  "false_statements": "2 is more than 1, 2 is less than 3, 4 is more than 3, 1 is less than 3, 3 is more than 1, 2 is less than 4, 4 is more than 2, 1 is less than 4, 4 is more than 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "3",
                  "trial_num": "41",
                  "statement_1": "1 is less than 2",
                  "statement_2": "3 is more than 2",
                  "statement_3": "4 is more than 3",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is more than 1, 2 is less than 3, 3 is less than 4, 3 is more than 1, 1 is less than 3, 2 is less than 4, 4 is more than 2, 1 is less than 4, 4 is more than 1",
                  "false_statements": "2 is less than 1, 2 is more than 3, 3 is more than 4, 3 is less than 1, 1 is more than 3, 2 is more than 4, 4 is less than 2, 1 is more than 4, 4 is less than 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Same as 41",
                  "block": "3",
                  "trial_num": "42",
                  "statement_1": "1 is less than 2",
                  "statement_2": "3 is more than 2",
                  "statement_3": "4 is more than 3",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is more than 1, 2 is less than 3, 3 is less than 4, 1 is less than 3, 3 is more than 1, 2 is less than 4, 4 is more than 2, 1 is less than 4, 4 is more than 1",
                  "false_statements": "2 is less than 1, 2 is more than 3, 3 is more than 4, 1 is more than 3, 3 is less than 1, 2 is more than 4, 4 is less than 2, 1 is more than 4, 4 is less than 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "3",
                  "trial_num": "43",
                  "statement_1": "1 is less than 2",
                  "statement_2": "2 is less than 3",
                  "statement_3": "3 is less than 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is more than 1, 3 is more than 2, 4 is more than 3, 1 is less than 3, 3 is more than 1, 2 is less than 4, 4 is more than 2, 1 is less than 4, 4 is more than 1",
                  "false_statements": "2 is less than 1, 3 is less than 2, 4 is less than 3, 1 is more than 3, 3 is less than 1, 2 is more than 4, 4 is less than 2, 1 is more than 4, 4 is less than 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Same as 43",
                  "block": "3",
                  "trial_num": "44",
                  "statement_1": "1 is less than 2",
                  "statement_2": "2 is less than 3",
                  "statement_3": "3 is less than 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is more than 1, 3 is more than 2, 4 is more than 3, 1 is less than 3, 3 is more than 1, 2 is less than 4, 4 is more than 2, 1 is less than 4, 4 is more than 1",
                  "false_statements": "2 is less than 1, 3 is less than 2, 4 is less than 3, 1 is more than 3, 3 is less than 1, 2 is more than 4, 4 is less than 2, 1 is more than 4, 4 is less than 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "3",
                  "trial_num": "45",
                  "statement_1": "1 is less than 2",
                  "statement_2": "3 is more than 2",
                  "statement_3": "3 is less than 4",
                  "statement_4": "5 is more than 4",
                  "statement_5": "",
                  "true_statements": "2 is more than 1, 2 is less than 3, 4 is more than 3, 4 is less than 5, 1 is less than 3, 3 is more than 1, 2 is less than 4, 4 is more than 2, 3 is less than 5, 5 is more than 3, 1 is less than 4, 4 is more than 1, 2 is less than 5, 5 is more than 2, 1 is less than 5, 5 is more than 1",
                  "false_statements": "2 is less than 1, 2 is more than 3, 4 is less than 3, 4 is more than 5, 1 is more than 3, 3 is less than 1, 2 is more than 4, 4 is less than 2, 3 is more than 5, 5 is less than 3, 1 is more than 4, 4 is less than 1, 2 is more than 5, 5 is less than 2, 1 is more than 5, 5 is less than 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "3",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Same as 45",
                  "block": "3",
                  "trial_num": "46",
                  "statement_1": "1 is less than 2",
                  "statement_2": "3 is more than 2",
                  "statement_3": "3 is less than 4",
                  "statement_4": "5 is more than 4",
                  "statement_5": "",
                  "true_statements": "2 is more than 1, 2 is less than 3, 4 is more than 3, 4 is less than 5, 1 is less than 3, 3 is more than 1, 2 is less than 4, 4 is more than 2, 3 is less than 5, 5 is more than 3, 1 is less than 4, 4 is more than 1, 2 is less than 5, 5 is more than 2, 1 is less than 5, 5 is more than 1",
                  "false_statements": "2 is less than 1, 2 is more than 3, 4 is less than 3, 4 is more than 5, 1 is more than 3, 3 is less than 1, 2 is more than 4, 4 is less than 2, 3 is more than 5, 5 is less than 3, 1 is more than 4, 4 is less than 1, 2 is more than 5, 5 is less than 2, 1 is more than 5, 5 is less than 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "3",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "3",
                  "trial_num": "47",
                  "statement_1": "1 is more than 2",
                  "statement_2": "3 is less than 2",
                  "statement_3": "3 is more than 4",
                  "statement_4": "5 is less than 4",
                  "statement_5": "",
                  "true_statements": "2 is less than 1, 2 is more than 3, 4 is less than 3, 4 is more than 5, 1 is more than 3, 3 is less than 1, 2 is more than 4, 4 is less than 2, 3 is more than 5, 5 is less than 3, 1 is more than 4, 4 is less than 1, 2 is more than 5, 5 is less than 2, 1 is more than 5, 5 is less than 1",
                  "false_statements": "2 is more than 1, 2 is less than 3, 4 is more than 3, 4 is less than 5, 1 is less than 3, 3 is more than 1, 2 is less than 4, 4 is more than 2, 3 is less than 5, 5 is more than 3, 1 is less than 4, 4 is more than 1, 2 is less than 5, 5 is more than 2, 1 is less than 5, 5 is more than 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "3",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "Same as 47",
                  "block": "3",
                  "trial_num": "48",
                  "statement_1": "1 is more than 2",
                  "statement_2": "3 is less than 2",
                  "statement_3": "3 is more than 4",
                  "statement_4": "5 is less than 4",
                  "statement_5": "",
                  "true_statements": "2 is less than 1, 2 is more than 3, 4 is less than 3, 4 is more than 5, 1 is more than 3, 3 is less than 1, 2 is more than 4, 4 is less than 2, 3 is more than 5, 5 is less than 3, 1 is more than 4, 4 is less than 1, 2 is more than 5, 5 is less than 2, 1 is more than 5, 5 is less than 1",
                  "false_statements": "2 is more than 1, 2 is less than 3, 4 is more than 3, 4 is less than 5, 1 is less than 3, 3 is more than 1, 2 is less than 4, 4 is more than 2, 3 is less than 5, 5 is more than 3, 1 is less than 4, 4 is more than 1, 2 is less than 5, 5 is more than 2, 1 is less than 5, 5 is more than 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "4",
                  "trial_num": "49",
                  "statement_1": "1 is before 2",
                  "statement_2": "2 is before 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is after 1, 3 is after 2, 1 is before 3, 3 is after 1",
                  "false_statements": "2 is before 1, 3 is before 2, 1 is after 3, 3 is before 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "4",
                  "trial_num": "50",
                  "statement_1": "1 is before 2",
                  "statement_2": "2 is before 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is after 1, 3 is after 2, 1 is before 3, 3 is after 1",
                  "false_statements": "2 is before 1, 3 is before 2, 1 is after 3, 3 is before 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "4",
                  "trial_num": "51",
                  "statement_1": "1 is after 2",
                  "statement_2": "2 is after 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is before 1, 3 is before 2, 1 is after 3, 3 is before 1",
                  "false_statements": "2 is after 1, 3 is after 2, 1 is before 3, 3 is after 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "4",
                  "trial_num": "52",
                  "statement_1": "1 is after 2",
                  "statement_2": "2 is after 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is before 1, 3 is before 2, 1 is after 3, 3 is before 1",
                  "false_statements": "2 is after 1, 3 is after 2, 1 is before 3, 3 is after 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "4",
                  "trial_num": "53",
                  "statement_1": "1 is after 2",
                  "statement_2": "3 is before 2",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is before 1, 2 is after 3, 3 is before 1, 1 is after 3",
                  "false_statements": "2 is after 1, 3 is after 2, 1 is before 3, 3 is after 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "4",
                  "trial_num": "54",
                  "statement_1": "1 is after 2",
                  "statement_2": "3 is before 2",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is before 1, 2 is after 3, 3 is before 1, 1 is after 3",
                  "false_statements": "2 is after 1, 3 is after 2, 1 is before 3, 3 is after 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "4",
                  "trial_num": "55",
                  "statement_1": "1 is before 2",
                  "statement_2": "3 is after 2",
                  "statement_3": "3 is before 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is after 1, 2 is before 3, 4 is after 3, 1 is before 3, 3 is after 1, 2 is before 4, 4 is after 2, 1 is before 4, 4 is after 1",
                  "false_statements": "2 is before 1, 2 is after 3, 4 is before 3, 1 is after 3, 3 is before 1, 2 is after 4, 4 is before 2, 1 is after 4, 4 is before 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "4",
                  "trial_num": "56",
                  "statement_1": "1 is before 2",
                  "statement_2": "3 is after 2",
                  "statement_3": "3 is before 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is after 1, 2 is before 3, 4 is after 3, 1 is before 3, 3 is after 1, 2 is before 4, 4 is after 2, 1 is before 4, 4 is after 1",
                  "false_statements": "2 is before 1, 2 is after 3, 4 is before 3, 1 is after 3, 3 is before 1, 2 is after 4, 4 is before 2, 1 is after 4, 4 is before 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "4",
                  "trial_num": "57",
                  "statement_1": "1 is after 2",
                  "statement_2": "2 is after 3",
                  "statement_3": "4 is before 3",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is before 1, 3 is before 2, 3 is after 4, 1 is after 3, 3 is before 1, 2 is after 4, 4 is before 2, 1 is after 4, 4 is before 1",
                  "false_statements": "2 is after 1, 3 is after 2, 3 is before 4, 1 is before 3, 3 is after 1, 2 is before 4, 4 is after 2, 1 is before 4, 4 is after 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "4",
                  "trial_num": "58",
                  "statement_1": "1 is after 2",
                  "statement_2": "2 is after 3",
                  "statement_3": "4 is before 3",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is before 1, 3 is before 2, 3 is after 4, 1 is after 3, 3 is before 1, 2 is after 4, 4 is before 2, 1 is after 4, 4 is before 1",
                  "false_statements": "2 is after 1, 3 is after 2, 3 is before 4, 1 is before 3, 3 is after 1, 2 is before 4, 4 is after 2, 1 is before 4, 4 is after 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "4",
                  "trial_num": "59",
                  "statement_1": "1 is after 2",
                  "statement_2": "3 is before 2",
                  "statement_3": "3 is after 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is before 1, 3 is before 2, 3 is after 4, 1 is after 3, 3 is before 1, 2 is after 4, 4 is before 2, 1 is after 4, 4 is before 1",
                  "false_statements": "2 is after 1, 3 is after 2, 3 is before 4, 1 is before 3, 3 is after 1, 2 is before 4, 4 is after 2, 1 is before 4, 4 is after 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "3",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "4",
                  "trial_num": "60",
                  "statement_1": "1 is after 2",
                  "statement_2": "3 is before 2",
                  "statement_3": "3 is after 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is before 1, 3 is before 2, 3 is after 4, 1 is after 3, 3 is before 1, 2 is after 4, 4 is before 2, 1 is after 4, 4 is before 1",
                  "false_statements": "2 is after 1, 3 is after 2, 3 is before 4, 1 is before 3, 3 is after 1, 2 is before 4, 4 is after 2, 1 is before 4, 4 is after 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "3",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "4",
                  "trial_num": "61",
                  "statement_1": "1 is after 2",
                  "statement_2": "3 is before 2",
                  "statement_3": "3 is after 4",
                  "statement_4": "5 is before 4",
                  "statement_5": "",
                  "true_statements": "2 is before 1, 3 is before 2, 3 is after 4, 4 is after 5, 1 is after 3, 3 is before 1, 2 is after 4, 4 is before 2, 3 is after 5, 5 is before 3, 1 is after 4, 4 is before 1, 2 is after 5, 5 is before 2, 1 is after 5, 5 is before 1",
                  "false_statements": "2 is after 1, 3 is after 2, 3 is before 4, 4 is before 5, 1 is before 3, 3 is after 1, 2 is before 4, 4 is after 2, 3 is before 5, 5 is after 3, 1 is before 4, 4 is after 1, 2 is before 5, 5 is after 2, 1 is before 5, 5 is after 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "4",
                  "trial_num": "62",
                  "statement_1": "1 is after 2",
                  "statement_2": "3 is before 2",
                  "statement_3": "3 is after 4",
                  "statement_4": "5 is before 4",
                  "statement_5": "",
                  "true_statements": "2 is before 1, 3 is before 2, 3 is after 4, 4 is after 5, 1 is after 3, 3 is before 1, 2 is after 4, 4 is before 2, 3 is after 5, 5 is before 3, 1 is after 4, 4 is before 1, 2 is after 5, 5 is before 2, 1 is after 5, 5 is before 1",
                  "false_statements": "2 is after 1, 3 is after 2, 3 is before 4, 4 is before 5, 1 is before 3, 3 is after 1, 2 is before 4, 4 is after 2, 3 is before 5, 5 is after 3, 1 is before 4, 4 is after 1, 2 is before 5, 5 is after 2, 1 is before 5, 5 is after 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "4",
                  "trial_num": "63",
                  "statement_1": "1 is before 2",
                  "statement_2": "3 is after 2",
                  "statement_3": "3 is before 4",
                  "statement_4": "5 is after 4",
                  "statement_5": "",
                  "true_statements": "2 is after 1, 2 is before 3, 4 is after 3, 4 is before 5, 1 is before 3, 3 is after 1, 2 is before 4, 4 is after 2, 3 is before 5, 5 is after 3, 1 is before 4, 4 is after 1, 2 is before 5, 5 is after 2, 1 is before 5, 5 is after 1",
                  "false_statements": "2 is before 1, 2 is after 3, 4 is before 3, 4 is after 5, 1 is after 3, 3 is before 1, 2 is after 4, 4 is before 2, 3 is after 5, 5 is before 3, 1 is after 4, 4 is before 1, 2 is after 5, 5 is before 2, 1 is after 5, 5 is before 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "4",
                  "trial_num": "64",
                  "statement_1": "1 is before 2",
                  "statement_2": "3 is after 2",
                  "statement_3": "3 is before 4",
                  "statement_4": "5 is after 4",
                  "statement_5": "",
                  "true_statements": "2 is after 1, 2 is before 3, 4 is after 3, 4 is before 5, 1 is before 3, 3 is after 1, 2 is before 4, 4 is after 2, 3 is before 5, 5 is after 3, 1 is before 4, 4 is after 1, 2 is before 5, 5 is after 2, 1 is before 5, 5 is after 1",
                  "false_statements": "2 is before 1, 2 is after 3, 4 is before 3, 4 is after 5, 1 is after 3, 3 is before 1, 2 is after 4, 4 is before 2, 3 is after 5, 5 is before 3, 1 is after 4, 4 is before 1, 2 is after 5, 5 is before 2, 1 is after 5, 5 is before 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "EXCLUDE",
                  "block": "5",
                  "trial_num": "65",
                  "statement_1": "1 contains 2",
                  "statement_2": "",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is within 1",
                  "false_statements": "2 contains 1, 1 is within 2",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "EXCLUDE",
                  "block": "5",
                  "trial_num": "66",
                  "statement_1": "1 is within 2",
                  "statement_2": "",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 contains 1",
                  "false_statements": "2 is within 1, 1 contains 2",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "5",
                  "trial_num": "67",
                  "statement_1": "1 contains 2",
                  "statement_2": "2 contains 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is within 1, 3 is within 2, 3 is within 1, 1 contains 3",
                  "false_statements": "2 contains 1, 3 contains 2, 3 contains 1, 1 is within 3",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "5",
                  "trial_num": "68",
                  "statement_1": "1 contains 2",
                  "statement_2": "3 is within 2",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is within 1, 2 contains 3, 3 is within 1, 1 contains 3",
                  "false_statements": "2 contains 1, 2 is within 3, 3 contains 1, 1 is within 3",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "5",
                  "trial_num": "69",
                  "statement_1": "1 contains 2",
                  "statement_2": "3 is within 2",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is within 1, 2 contains 3, 3 is within 1, 1 contains 3",
                  "false_statements": "2 contains 1, 2 is within 3, 3 contains 1, 1 is within 3",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "5",
                  "trial_num": "70",
                  "statement_1": "1 is within 2",
                  "statement_2": "2 is within 3",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 contains 1, 3 contains 2, 1 is within 3, 3 contains 1",
                  "false_statements": "2 is within 1, 3 is within 2, 1 contains 3, 3 is within 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "5",
                  "trial_num": "71",
                  "statement_1": "1 contains 2",
                  "statement_2": "3 is within 2",
                  "statement_3": "3 contains 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is within 1, 2 contains 3, 4 is within 3, 1 contains 3, 3 is within 1, 2 contains 4, 4 is within 2, 1 contains 4, 4 is within 1",
                  "false_statements": "2 contains 1, 2 is within 3, 4 contains 3, 1 is within 3, 3 contains 1, 2 is within 4, 4 contains 2, 1 is within 4, 4 contains 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "5",
                  "trial_num": "72",
                  "statement_1": "1 contains 2",
                  "statement_2": "3 is within 2",
                  "statement_3": "3 contains 4",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 is within 1, 2 contains 3, 4 is within 3, 1 contains 3, 3 is within 1, 2 contains 4, 4 is within 2, 1 contains 4, 4 is within 1",
                  "false_statements": "2 contains 1, 2 is within 3, 4 contains 3, 1 is within 3, 3 contains 1, 2 is within 4, 4 contains 2, 1 is within 4, 4 contains 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "5",
                  "trial_num": "73",
                  "statement_1": "1 is within 2",
                  "statement_2": "3 contains 2",
                  "statement_3": "4 contains 3",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 contains 1, 2 is within 3, 3 is within 4, 1 is within 3, 3 contains 1, 2 is within 4, 4 contains 2, 1 is within 4, 4 contains 1",
                  "false_statements": "2 is within 1, 2 contains 3, 3 contains 4, 1 contains 3, 3 is within 1, 2 contains 4, 4 is within 2, 1 contains 4, 4 is within 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "5",
                  "trial_num": "74",
                  "statement_1": "1 is within 2",
                  "statement_2": "3 contains 2",
                  "statement_3": "4 contains 3",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 contains 1, 2 is within 3, 3 is within 4, 1 is within 3, 3 contains 1, 2 is within 4, 4 contains 2, 1 is within 4, 4 contains 1",
                  "false_statements": "2 is within 1, 2 contains 3, 3 contains 4, 1 contains 3, 3 is within 1, 2 contains 4, 4 is within 2, 1 contains 4, 4 is within 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "3",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "5",
                  "trial_num": "75",
                  "statement_1": "1 is within 2",
                  "statement_2": "2 is within 3",
                  "statement_3": "4 contains 3",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 contains 1, 2 is within 3, 3 is within 4, 1 is within 3, 3 contains 1, 2 is within 4, 4 contains 2, 1 is within 4, 4 contains 1",
                  "false_statements": "2 is within 1, 2 contains 3, 3 contains 4, 1 contains 3, 3 is within 1, 2 contains 4, 4 is within 2, 1 contains 4, 4 is within 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "5",
                  "trial_num": "76",
                  "statement_1": "1 is within 2",
                  "statement_2": "2 is within 3",
                  "statement_3": "4 contains 3",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "2 contains 1, 2 is within 3, 3 is within 4, 1 is within 3, 3 contains 1, 2 is within 4, 4 contains 2, 1 is within 4, 4 contains 1",
                  "false_statements": "2 is within 1, 2 contains 3, 3 contains 4, 1 contains 3, 3 is within 1, 2 contains 4, 4 is within 2, 1 contains 4, 4 is within 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "5",
                  "trial_num": "77",
                  "statement_1": "1 contains 2",
                  "statement_2": "3 is within 2",
                  "statement_3": "3 contains 4",
                  "statement_4": "5 is within 4",
                  "statement_5": "",
                  "true_statements": "2 is within 1, 2 contains 3, 4 is within 3, 4 contains 5, 1 contains 3, 3 is within 1, 2 contains 4, 4 is within 2, 3 contains 5, 5 is within 3, 1 contains 4, 4 is within 1, 2 contains 5, 5 is within 2, 1 contains 5, 5 is within 1",
                  "false_statements": "2 contains 1, 2 is within 3, 4 contains 3, 4 is within 5, 1 is within 3, 3 contains 1, 2 is within 4, 4 contains 2, 3 is within 5, 5 contains 3, 1 is within 4, 4 contains 1, 2 is within 5, 5 contains 2, 1 is within 5, 5 contains 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "5",
                  "trial_num": "78",
                  "statement_1": "1 contains 2",
                  "statement_2": "3 is within 2",
                  "statement_3": "3 contains 4",
                  "statement_4": "4 contains 5",
                  "statement_5": "",
                  "true_statements": "2 is within 1, 2 contains 3, 4 is within 3, 4 contains 5, 1 contains 3, 3 is within 1, 2 contains 4, 4 is within 2, 3 contains 5, 5 is within 3, 1 contains 4, 4 is within 1, 2 contains 5, 5 is within 2, 1 contains 5, 5 is within 1",
                  "false_statements": "2 contains 1, 2 is within 3, 4 contains 3, 4 is within 5, 1 is within 3, 3 contains 1, 2 is within 4, 4 contains 2, 3 is within 5, 5 contains 3, 1 is within 4, 4 contains 1, 2 is within 5, 5 contains 2, 1 is within 5, 5 contains 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "5",
                  "trial_num": "79",
                  "statement_1": "1 is within 2",
                  "statement_2": "3 contains 2",
                  "statement_3": "4 contains 3",
                  "statement_4": "5 contains 4",
                  "statement_5": "",
                  "true_statements": "2 contains 1, 2 is within 3, 3 is within 4, 4 is within 5, 1 is within 3, 3 contains 1, 2 is within 4, 4 contains 2, 3 is within 5, 5 contains 3, 1 is within 4, 4 contains 1, 2 is within 5, 5 contains 2, 1 is within 5, 5 contains 1",
                  "false_statements": "2 is within 1, 2 contains 3, 3 contains 4, 4 contains 5, 1 contains 3, 3 is within 1, 2 contains 4, 4 is within 2, 3 contains 5, 5 is within 3, 1 contains 4, 4 is within 1, 2 contains 5, 5 is within 2, 1 contains 5, 5 is within 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "5",
                  "trial_num": "80",
                  "statement_1": "1 is within 2",
                  "statement_2": "2 is within 3",
                  "statement_3": "4 contains 3",
                  "statement_4": "5 contains 4",
                  "statement_5": "",
                  "true_statements": "2 contains 1, 3 contains 2, 3 is within 4, 4 is within 5, 1 is within 3, 3 contains 1, 2 is within 4, 4 contains 2, 3 is within 5, 5 contains 3, 1 is within 4, 4 contains 1, 2 is within 5, 5 contains 2, 1 is within 5, 5 contains 1",
                  "false_statements": "2 is within 1, 2 contains 3, 3 contains 4, 4 contains 5, 1 contains 3, 3 is within 1, 2 contains 4, 4 is within 2, 3 contains 5, 5 is within 3, 1 contains 4, 4 is within 1, 2 contains 5, 5 is within 2, 1 contains 5, 5 is within 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "FIX THESE TRIALS",
                  "block": "6",
                  "trial_num": "81",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "3 is the same as 4",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1",
                  "false_statements": "1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "6",
                  "trial_num": "82",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "3 is the same as 4",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1",
                  "false_statements": "1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "6",
                  "trial_num": "83",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "3 is the same as 4",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1",
                  "false_statements": "1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "3",
                  "n_false_answers": "1",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "6",
                  "trial_num": "84",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "3 is opposite to 4",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "false_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "6",
                  "trial_num": "85",
                  "statement_1": "1 is the same as 2",
                  "statement_2": "3 is opposite to 4",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "false_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "6",
                  "trial_num": "86",
                  "statement_1": "1 is opposite to 2",
                  "statement_2": "3 is opposite to 4",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1",
                  "false_statements": "1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "6",
                  "trial_num": "87",
                  "statement_1": "1 is opposite to 2",
                  "statement_2": "3 is opposite to 4",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 3, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1",
                  "false_statements": "1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "6",
                  "trial_num": "88",
                  "statement_1": "1 is opposite to 2",
                  "statement_2": "3 is opposite to 4",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 3, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1",
                  "false_statements": "1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "6",
                  "trial_num": "89",
                  "statement_1": "1 is more than 2",
                  "statement_2": "3 is more than 4",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1, 1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "false_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1, 1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "6",
                  "trial_num": "90",
                  "statement_1": "1 is more than 2",
                  "statement_2": "3 is more than 4",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1, 1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "false_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1, 1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "6",
                  "trial_num": "91",
                  "statement_1": "1 is more than 2",
                  "statement_2": "3 is more than 4",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1, 1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "false_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1, 1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "3",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "6",
                  "trial_num": "92",
                  "statement_1": "1 is more than 2",
                  "statement_2": "3 is less than 4",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1, 1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2",
                  "false_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1, 1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "3",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "6",
                  "trial_num": "93",
                  "statement_1": "1 is more than 2",
                  "statement_2": "3 is less than 4",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1, 1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2",
                  "false_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1, 1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "6",
                  "trial_num": "94",
                  "statement_1": "1 is less than 2",
                  "statement_2": "3 is less than 4",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1, 1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "false_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1, 1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "6",
                  "trial_num": "95",
                  "statement_1": "1 is less than 2",
                  "statement_2": "3 is less than 4",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1, 1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "false_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1, 1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "3",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "6",
                  "trial_num": "96",
                  "statement_1": "1 is less than 2",
                  "statement_2": "3 is less than 4",
                  "statement_3": "",
                  "statement_4": "",
                  "statement_5": "",
                  "true_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1, 1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "false_statements": "1 to 2\u003Cbr\u003Eis the same as\u003Cbr\u003E4 to 3, 2 to 1\u003Cbr\u003Eis the same as\u003Cbr\u003E3 to 4, 4 to 3\u003Cbr\u003Eis the same as\u003Cbr\u003E1 to 2, 3 to 4\u003Cbr\u003Eis the same as\u003Cbr\u003E2 to 1, 1 to 2 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 3 to 4, 2 to 1 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 4 to 3, 3 to 4 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 1 to 2, 4 to 3 \u003Cbr\u003Eis opposite to\u003Cbr\u003E 2 to 1",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "7",
                  "trial_num": "97",
                  "statement_1": "1 is here",
                  "statement_2": "2 is there",
                  "statement_3": "If here is there and there is here",
                  "statement_4": "",
                  "statement_5": "then…",
                  "true_statements": "1 is there, 2 is here",
                  "false_statements": "1 is here, 2 is there",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "7",
                  "trial_num": "98",
                  "statement_1": "1 is here",
                  "statement_2": "2 is there",
                  "statement_3": "If here is there and there is here",
                  "statement_4": "",
                  "statement_5": "then…",
                  "true_statements": "1 is there, 2 is here",
                  "false_statements": "1 is here, 2 is there",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "7",
                  "trial_num": "99",
                  "statement_1": "1 is here now",
                  "statement_2": "2 was there then",
                  "statement_3": "If here is there and there is here",
                  "statement_4": "",
                  "statement_5": "then…",
                  "true_statements": "1 is there now, 2 was here then",
                  "false_statements": "1 is here now, 2 was there then, 1 was there then, 2 is here now",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "7",
                  "trial_num": "100",
                  "statement_1": "1 is here now",
                  "statement_2": "2 was there then",
                  "statement_3": "If here is there and there is here",
                  "statement_4": "",
                  "statement_5": "then…",
                  "true_statements": "1 is there now, 2 was here then",
                  "false_statements": "1 is here now, 2 was there then, 1 was there then, 2 is here now",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "7",
                  "trial_num": "101",
                  "statement_1": "1 is here now",
                  "statement_2": "2 was there then",
                  "statement_3": "If now is then and then is now",
                  "statement_4": "",
                  "statement_5": "then…",
                  "true_statements": "1 was here then, 2 is there now",
                  "false_statements": "1 is here now, 2 was there then, 1 was there then, 2 was here then",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "7",
                  "trial_num": "102",
                  "statement_1": "1 is here now",
                  "statement_2": "2 was there then",
                  "statement_3": "If now is then and then is now",
                  "statement_4": "",
                  "statement_5": "then…",
                  "true_statements": "1 was here then, 2 is there now",
                  "false_statements": "1 is here now, 1 was there then, 1 is there now, 2 was there then, 2 was here then, 2 is here now",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "7",
                  "trial_num": "103",
                  "statement_1": "1 is here now",
                  "statement_2": "2 was there then",
                  "statement_3": "If here is there and there is here",
                  "statement_4": "and if 1 is 2 and 2 is 1",
                  "statement_5": "then…",
                  "true_statements": "2 is there now, 1 was here then",
                  "false_statements": "2 was there then, 2 is here now, 2 was here then, 1 was there then, 1 is here now, 1 is there now",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "7",
                  "trial_num": "104",
                  "statement_1": "1 is here now",
                  "statement_2": "2 was there then",
                  "statement_3": "If here is there and there is here",
                  "statement_4": "and if 1 is 2 and 2 is 1",
                  "statement_5": "then…",
                  "true_statements": "2 is there now, 1 was here then",
                  "false_statements": "2 was there then, 2 is here now, 2 was here then, 1 was there then, 1 is here now, 1 is there now",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "7",
                  "trial_num": "105",
                  "statement_1": "1 is here now",
                  "statement_2": "2 was there then",
                  "statement_3": "If here is there and there is here",
                  "statement_4": "and if 1 is 2 and 2 is 1",
                  "statement_5": "then…",
                  "true_statements": "2 is there now, 1 was here then",
                  "false_statements": "2 was there then, 2 is here now, 2 was here then, 1 was there then, 1 is here now, 1 is there now",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "7",
                  "trial_num": "106",
                  "statement_1": "1 is here now",
                  "statement_2": "2 was there then",
                  "statement_3": "If here is there and there is here",
                  "statement_4": "and if 1 is 2 and 2 is 1",
                  "statement_5": "then…",
                  "true_statements": "2 is there now, 1 was here then",
                  "false_statements": "2 was there then, 2 is here now, 2 was here then, 1 was there then, 1 is here now, 1 is there now",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "7",
                  "trial_num": "107",
                  "statement_1": "1 is here now",
                  "statement_2": "2 was there then",
                  "statement_3": "If here is there and there is here",
                  "statement_4": "and if 1 is 2 and 2 is 1",
                  "statement_5": "then…",
                  "true_statements": "2 is there now, 1 was here then",
                  "false_statements": "2 was there then, 2 is here now, 2 was here then, 1 was there then, 1 is here now, 1 is there now",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "7",
                  "trial_num": "108",
                  "statement_1": "1 is here now",
                  "statement_2": "2 was there then",
                  "statement_3": "If now is then and then is now",
                  "statement_4": "and if 1 is 2 and 2 is 1",
                  "statement_5": "then…",
                  "true_statements": "2 was here then, 1 is there now",
                  "false_statements": "2 is here now, 2 was there then, 2 was here then, 1 was there then, 1 was here then, 1 is here now",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "7",
                  "trial_num": "109",
                  "statement_1": "1 is here now",
                  "statement_2": "2 was there then",
                  "statement_3": "If now is then and then is now",
                  "statement_4": "and if 1 is 2 and 2 is 1",
                  "statement_5": "then…",
                  "true_statements": "2 was here then, 1 is there now",
                  "false_statements": "2 is here now, 2 was there then, 2 was here then, 1 was there then, 1 was here then, 1 is here now",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "7",
                  "trial_num": "110",
                  "statement_1": "1 is here now",
                  "statement_2": "2 was there then",
                  "statement_3": "If now is then and then is now",
                  "statement_4": "and if 1 is 2 and 2 is 1",
                  "statement_5": "then…",
                  "true_statements": "2 was here then, 1 is there now",
                  "false_statements": "2 is here now, 2 was there then, 2 was here then, 1 was there then, 1 was here then, 1 is here now",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "7",
                  "trial_num": "111",
                  "statement_1": "1 is here now",
                  "statement_2": "2 was there then",
                  "statement_3": "If now is then and then is now",
                  "statement_4": "and if 1 is 2 and 2 is 1",
                  "statement_5": "then…",
                  "true_statements": "2 was here then, 1 is there now",
                  "false_statements": "2 is here now, 2 was there then, 2 was here then, 1 was there then, 1 was here then, 1 is here now",
                  "ku_statements": "",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "7",
                  "trial_num": "112",
                  "statement_1": "1 is here now",
                  "statement_2": "2 was there then",
                  "statement_3": "If now is then and then is now",
                  "statement_4": "and if 1 is 2 and 2 is 1",
                  "statement_5": "then…",
                  "true_statements": "2 was here then, 1 is there now",
                  "false_statements": "2 is here now, 2 was there then, 2 was here then, 1 was there then, 1 was here then, 1 is here now",
                  "ku_statements": "",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "8",
                  "trial_num": "113",
                  "statement_1": "1 plus 2",
                  "statement_2": "is equal to",
                  "statement_3": "3 plus 4",
                  "statement_4": "1 is more than 3",
                  "statement_5": "",
                  "true_statements": "3 is less than 1, 4 is more than 2, 2 is less than 4",
                  "false_statements": "2 is the same as 4, 2 is more than 4, 4 is less than 2, 1 is less than 3, 3 is more than 1",
                  "ku_statements": "1 is more than 4, 4 is more than 1, 1 is less than 4, 4 is less than 1, 2 is the same as 3, 3 is more than 2, 2 is less than 3, 3 is less than 2, 2 is more than 3",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "8",
                  "trial_num": "114",
                  "statement_1": "1 plus 2",
                  "statement_2": "is equal to",
                  "statement_3": "3 plus 4",
                  "statement_4": "1 is more than 3",
                  "statement_5": "",
                  "true_statements": "3 is less than 1, 4 is more than 2, 2 is less than 4",
                  "false_statements": "2 is the same as 4, 2 is more than 4, 4 is less than 2, 1 is less than 3, 3 is more than 1",
                  "ku_statements": "1 is more than 4, 4 is more than 1, 1 is less than 4, 4 is less than 1, 2 is the same as 3, 3 is more than 2, 2 is less than 3, 3 is less than 2, 2 is more than 3",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "8",
                  "trial_num": "115",
                  "statement_1": "1 plus 2",
                  "statement_2": "is equal to",
                  "statement_3": "3 plus 4",
                  "statement_4": "1 is less than 3",
                  "statement_5": "",
                  "true_statements": "3 is more than 1, 4 is less than 2, 2 is more than 4",
                  "false_statements": "2 is the same as 4, 2 is less than 4, 4 is more than 2, 1 is more than 3, 3 is less than 1",
                  "ku_statements": "1 is more than 4, 4 is more than 1, 1 is less than 4, 4 is less than 1, 2 is the same as 3, 3 is more than 2, 2 is less than 3, 3 is less than 2, 2 is more than 3",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "8",
                  "trial_num": "116",
                  "statement_1": "1 plus 2",
                  "statement_2": "is equal to",
                  "statement_3": "3 plus 4",
                  "statement_4": "1 is less than 3",
                  "statement_5": "",
                  "true_statements": "3 is more than 1, 4 is less than 2, 2 is more than 4",
                  "false_statements": "2 is the same as 4, 2 is less than 4, 4 is more than 2, 1 is more than 3, 3 is less than 1",
                  "ku_statements": "1 is more than 4, 4 is more than 1, 1 is less than 4, 4 is less than 1, 2 is the same as 3, 3 is more than 2, 2 is less than 3, 3 is less than 2, 2 is more than 3",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "8",
                  "trial_num": "117",
                  "statement_1": "1 minus 2",
                  "statement_2": "is equal to",
                  "statement_3": "3 minus 4",
                  "statement_4": "1 is more than 3",
                  "statement_5": "",
                  "true_statements": "3 is less than 1, 2 is more than 4, 4 is less than 2",
                  "false_statements": "3 is more than 1, 1 is less than 3, 2 is less than 4, 4 is more than 2, 2 is the same as 4",
                  "ku_statements": "1 is more than 4, 4 is more than 1, 1 is less than 4, 4 is less than 1, 2 is the same as 3, 3 is more than 2, 2 is less than 3, 3 is less than 2, 2 is more than 3",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "3",
                  "n_false_answers": "1",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "8",
                  "trial_num": "118",
                  "statement_1": "1 minus 2",
                  "statement_2": "is equal to",
                  "statement_3": "3 minus 4",
                  "statement_4": "1 is more than 3",
                  "statement_5": "",
                  "true_statements": "3 is less than 1, 2 is more than 4, 4 is less than 2",
                  "false_statements": "3 is more than 1, 1 is less than 3, 2 is less than 4, 4 is more than 2, 2 is the same as 4",
                  "ku_statements": "1 is more than 4, 4 is more than 1, 1 is less than 4, 4 is less than 1, 2 is the same as 3, 3 is more than 2, 2 is less than 3, 3 is less than 2, 2 is more than 3",
                  "probed_truth_value": "true",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "8",
                  "trial_num": "119",
                  "statement_1": "1 minus 2",
                  "statement_2": "is equal to",
                  "statement_3": "3 minus 4",
                  "statement_4": "1 is less than 3",
                  "statement_5": "",
                  "true_statements": "3 is more than 1, 2 is less than 4, 4 is more than 2",
                  "false_statements": "3 is less than 1, 1 is more than 3, 2 is more than 4, 4 is less than 2, 2 is the same as 4",
                  "ku_statements": "1 is more than 4, 4 is more than 1, 1 is less than 4, 4 is less than 1, 2 is the same as 3, 3 is more than 2, 2 is less than 3, 3 is less than 2, 2 is more than 3",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "1",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "8",
                  "trial_num": "120",
                  "statement_1": "1 minus 2",
                  "statement_2": "is equal to",
                  "statement_3": "3 minus 4",
                  "statement_4": "1 is less than 3",
                  "statement_5": "",
                  "true_statements": "3 is more than 1, 2 is less than 4, 4 is more than 2",
                  "false_statements": "3 is less than 1, 1 is more than 3, 2 is more than 4, 4 is less than 2, 2 is the same as 4",
                  "ku_statements": "1 is more than 4, 4 is more than 1, 1 is less than 4, 4 is less than 1, 2 is the same as 3, 3 is more than 2, 2 is less than 3, 3 is less than 2, 2 is more than 3",
                  "probed_truth_value": "false",
                  "n_answers": "4",
                  "n_true_answers": "2",
                  "n_false_answers": "2",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "8",
                  "trial_num": "121",
                  "statement_1": "1 plus 2",
                  "statement_2": "is more than",
                  "statement_3": "3 plus 4",
                  "statement_4": "1 is the same as 3",
                  "statement_5": "",
                  "true_statements": "2 is more than 4, 4 is less than 2, 3 is the same as 1",
                  "false_statements": "2 is less than 4, 4 is more than 2, 2 is the same as 4, 4 is the same as 2, 3 is more than 1, 3 is less than 1",
                  "ku_statements": "1 is more than 4, 4 is more than 1, 1 is less than 4, 4 is less than 1, 2 is the same as 3, 3 is more than 2, 2 is less than 3, 3 is less than 2, 2 is more than 3",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "3",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "8",
                  "trial_num": "122",
                  "statement_1": "1 plus 2",
                  "statement_2": "is more than",
                  "statement_3": "3 plus 4",
                  "statement_4": "1 is the same as 3",
                  "statement_5": "",
                  "true_statements": "2 is more than 4, 4 is less than 2, 3 is the same as 1",
                  "false_statements": "2 is less than 4, 4 is more than 2, 2 is the same as 4, 4 is the same as 2, 3 is more than 1, 3 is less than 1",
                  "ku_statements": "1 is more than 4, 4 is more than 1, 1 is less than 4, 4 is less than 1, 2 is the same as 3, 3 is more than 2, 2 is less than 3, 3 is less than 2, 2 is more than 3",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "8",
                  "trial_num": "123",
                  "statement_1": "1 minus 2",
                  "statement_2": "is more than",
                  "statement_3": "3 minus 4",
                  "statement_4": "1 is the same as 3",
                  "statement_5": "",
                  "true_statements": "2 is less than 4, 4 is more than 2, 3 is the same as 1",
                  "false_statements": "2 is more than 4, 4 is less than 2, 2 is the same as 4, 4 is the same as 2, 3 is more than 1, 3 is less than 1",
                  "ku_statements": "1 is more than 4, 4 is more than 1, 1 is less than 4, 4 is less than 1, 2 is the same as 3, 3 is more than 2, 2 is less than 3, 3 is less than 2, 2 is more than 3",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "8",
                  "trial_num": "124",
                  "statement_1": "1 minus 2",
                  "statement_2": "is more than",
                  "statement_3": "3 minus 4",
                  "statement_4": "1 is the same as 3",
                  "statement_5": "",
                  "true_statements": "2 is less than 4, 4 is more than 2, 3 is the same as 1",
                  "false_statements": "2 is more than 4, 4 is less than 2, 2 is the same as 4, 4 is the same as 2, 3 is more than 1, 3 is less than 1",
                  "ku_statements": "1 is more than 4, 4 is more than 1, 1 is less than 4, 4 is less than 1, 2 is the same as 3, 3 is more than 2, 2 is less than 3, 3 is less than 2, 2 is more than 3",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "8",
                  "trial_num": "125",
                  "statement_1": "1 plus 2",
                  "statement_2": "is less than",
                  "statement_3": "3 plus 4",
                  "statement_4": "2 is the same as 4",
                  "statement_5": "",
                  "true_statements": "1 is less than 3, 3 is more than 1, 4 is the same as 2",
                  "false_statements": "1 is more than 3, 3 is less than 1, 1 is the same as 3, 3 is the same as 1, 4 is more than 2, 2 is less than 4, 4 is less than 2, 2 is more than 4",
                  "ku_statements": "1 is more than 4, 4 is more than 1, 1 is less than 4, 4 is less than 1, 2 is the same as 3, 3 is more than 2, 2 is less than 3, 3 is less than 2, 2 is more than 3",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "8",
                  "trial_num": "126",
                  "statement_1": "1 plus 2",
                  "statement_2": "is less than",
                  "statement_3": "3 plus 4",
                  "statement_4": "2 is the same as 4",
                  "statement_5": "",
                  "true_statements": "1 is less than 3, 3 is more than 1, 4 is the same as 2",
                  "false_statements": "1 is more than 3, 3 is less than 1, 1 is the same as 3, 3 is the same as 1, 4 is more than 2, 2 is less than 4, 4 is less than 2, 2 is more than 4",
                  "ku_statements": "1 is more than 4, 4 is more than 1, 1 is less than 4, 4 is less than 1, 2 is the same as 3, 3 is more than 2, 2 is less than 3, 3 is less than 2, 2 is more than 3",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "2",
                  "n_false_answers": "4",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "8",
                  "trial_num": "127",
                  "statement_1": "1 minus 2",
                  "statement_2": "is less than",
                  "statement_3": "3 minus 4",
                  "statement_4": "2 is the same as 4",
                  "statement_5": "",
                  "true_statements": "1 is less than 3, 3 is more than 1, 4 is the same as 2",
                  "false_statements": "1 is more than 3, 3 is less than 1, 1 is the same as 3, 3 is the same as 1, 4 is more than 2, 2 is less than 4, 4 is less than 2, 2 is more than 4",
                  "ku_statements": "1 is more than 4, 4 is more than 1, 1 is less than 4, 4 is less than 1, 2 is the same as 3, 3 is more than 2, 2 is less than 3, 3 is less than 2, 2 is more than 3",
                  "probed_truth_value": "true",
                  "n_answers": "6",
                  "n_true_answers": "3",
                  "n_false_answers": "3",
                  "n_ku_answers": "0"
                },
                {
                  "Notes": "",
                  "block": "8",
                  "trial_num": "128",
                  "statement_1": "1 minus 2",
                  "statement_2": "is less than",
                  "statement_3": "3 minus 4",
                  "statement_4": "2 is the same as 4",
                  "statement_5": "",
                  "true_statements": "1 is less than 3, 3 is more than 1, 4 is the same as 2",
                  "false_statements": "1 is more than 3, 3 is less than 1, 1 is the same as 3, 3 is the same as 1, 4 is more than 2, 2 is less than 4, 4 is less than 2, 2 is more than 4",
                  "ku_statements": "1 is more than 4, 4 is more than 1, 1 is less than 4, 4 is less than 1, 2 is the same as 3, 3 is more than 2, 2 is less than 3, 3 is less than 2, 2 is more than 3",
                  "probed_truth_value": "false",
                  "n_answers": "6",
                  "n_true_answers": "1",
                  "n_false_answers": "5",
                  "n_ku_answers": "0"
                }
              ],
              "sample": {
                "mode": "sequential",
                "n": ""
              },
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
// define each of the four potential stimuli per trial //
stimulus_1_bucket = ['BOR', 'COC', 'WUC', 'QOZ', 'NEZ', 'VOM', 'LAJ', 'XUL', 'WAQ', 'QIK', 'QEZ', 'DIL', 'WAJ', 'XEM', 'CUQ', 'CEY', 'QIQ', 'MOX', 'JIV', 'NUH', 'RUH', 'JIZ', 'TEB', 'GUC', 'LIX', 'XEJ', 'JAQ', 'POZ', 'DUJ', 'JAC', 'SOH', 'JIS', 'NAC', 'QOP', 'YOV', 'NAS', 'KUK', 'YIK', 'YIF', 'GOF', 'JEC', 'YUC', 'CIH', 'KUP', 'WUW', 'XEP', 'CIP', 'QAG', 'CIM', 'CUW', 'JUZ', 'YOZ', 'SAZ', 'REW', 'CAX', 'FAP', 'BUX', 'KOH', 'RER', 'QIX', 'FUX', 'VUP', 'FIP', 'KIV', 'XUD', 'QOF', 'MOH', 'HAZ', 'LIM', 'GIQ', 'BUZ', 'GUG', 'KES', 'HOX', 'MIF', 'QOB', 'VAP', 'XUX', 'QOS', 'QED', 'NUX', 'WAV', 'BIX', 'XIC', 'COV', 'NIJ', 'JIR', 'QUC', 'YEC', 'DUM', 'RAQ', 'QES', 'DAF', 'XAT', 'MEB', 'WEW', 'NAQ', 'XEN', 'BUK', 'MUP', 'ROQ', 'NAX', 'YIR', 'SED', 'WIB', 'XIH', 'RUR', 'KAQ', 'PUW', 'POC', 'JIH', 'XUS', 'QIJ', 'PEC', 'QEL', 'MEV', 'XIB', 'CAG', 'QUX', 'YUD', 'TOS', 'GER', 'MEY', 'MUX', 'JEK', 'YIG', 'QIP', 'CIC', 'CUK', 'XAV', 'YIJ', 'XIR', 'TEC', 'YAS', 'NIF', 'LOZ', 'SAV', 'CAF', 'WEY', 'GAJ', 'KUZ', 'FEF', 'GIR', 'WEV', 'QUZ', 'CIB', 'REQ', 'SEJ', 'DUZ', 'KUM', 'XAZ', 'TUS', 'CID', 'YEB', 'XOC', 'NUJ', 'GUQ', 'HIX', 'TIY', 'BUP', 'HAC', 'QEK', 'QEX', 'SIY', 'GOL', 'NUG', 'QIR', 'CEF', 'CEZ', 'TEV', 'QIY', 'KEC', 'YUV', 'LOH', 'YEM', 'KIH', 'QIC', 'YOH', 'QUP', 'SUS', 'GUK', 'YAV', 'TEY', 'CEW', 'QUH', 'GOC', 'HOZ', 'VOR', 'KIW', 'XIW', 'LIC', 'XAC', 'PAB', 'DEP', 'BAQ', 'XEF', 'LOV', 'HOQ', 'FUW', 'QET', 'LAQ', 'MOC', 'POQ', 'KOB', 'QEG', 'GOG', 'WEQ', 'SUV', 'YUQ', 'QON', 'PEH', 'VUN', 'FIJ', 'PIM', 'RUY', 'LUC', 'MUB', 'JIC', 'WUF', 'PIR', 'PEM', 'JIP', 'WUH', 'LUP', 'MEH', 'DOX', 'PIV', 'VOK', 'LEZ', 'HIG', 'VUH', 'YOR', 'HUZ', 'RUC', 'QOR', 'PEB', 'XIZ', 'XIF', 'SIW', 'XOK', 'RIR', 'TIQ', 'VEW', 'ROR', 'JEY', 'FUY', 'QOL'];
stimulus_2_bucket = ['SUR', 'VUS', 'BAZ', 'WEH', 'KEH', 'YOP', 'GAH', 'XEW', 'NIY', 'JOX', 'GEW', 'CIK', 'FEC', 'TOZ', 'CEJ', 'CEH', 'MAZ', 'RAC', 'NUM', 'GEV', 'CAS', 'QAQ', 'PEQ', 'XID', 'QOG', 'NOJ', 'YOQ', 'LUD', 'VUL', 'QAV', 'BAX', 'PIF', 'KOJ', 'CIF', 'SEP', 'QUV', 'CUL', 'ROX', 'FIM', 'NUC', 'QIM', 'PEJ', 'SAQ', 'QAR', 'KEQ', 'MED', 'GEF', 'POV', 'RAV', 'HUD', 'NAM', 'DOH', 'JER', 'TIZ', 'JUV', 'NEX', 'CIX', 'LUY', 'XIG', 'NOC', 'TUY', 'YAB', 'QOK', 'DUL', 'NOV', 'LIH', 'PIY', 'WUX', 'BIY', 'NEN', 'VUQ', 'DEF', 'SOG', 'XIX', 'BUF', 'GOW', 'CUX', 'HIQ', 'VIY', 'BIM', 'SOC', 'QEP', 'HIF', 'KAH', 'QAY', 'WEF', 'LUB', 'MUR', 'VIK', 'JUJ', 'MEJ', 'JIT', 'DIW', 'NID', 'PEY', 'LUF', 'VAJ', 'NIK', 'XAY', 'VIJ', 'JOS', 'YUF', 'SEB', 'TEQ', 'KOC', 'VIZ', 'TAC', 'DET', 'KAV', 'TOV', 'SUW', 'KAL', 'KIG', 'PUC', 'SUC', 'RUV', 'CIY', 'CEP', 'MUV', 'JIF', 'BOZ', 'QUL', 'YEL', 'GOQ', 'QIS', 'YUB', 'QAK', 'QUJ', 'NIW', 'FIH', 'MAQ', 'QAL', 'SOQ', 'HUF', 'GIC', 'NOQ', 'QUQ', 'TIW', 'MER', 'VOG', 'JUC', 'VES', 'TES', 'NEY', 'JUX', 'XUQ', 'LOJ', 'QIB', 'VIW', 'BUV', 'DAJ', 'XEQ', 'LEQ', 'PAQ', 'MEC', 'SOJ', 'FEX', 'VOC', 'QAW', 'GUB', 'LIW', 'HUX', 'YOF', 'XUY', 'HUS', 'WOY', 'JUR', 'HUC', 'CUY', 'RIZ', 'CEK', 'VIX', 'CUS', 'QOC', 'VUC', 'NUD', 'HIH', 'YOX', 'WIM', 'FIC', 'CUF', 'XOJ', 'XES', 'JIY', 'XUN', 'XIY', 'QID', 'YIV', 'FOW', 'GUF', 'TAH', 'MIY', 'FAQ', 'QAP', 'COQ', 'XOS', 'CAJ', 'GIH', 'MIP', 'DOQ', 'QOX', 'VOP', 'WOM', 'WAH', 'SEY', 'MIZ', 'WIX', 'DIF', 'DEH', 'KEJ', 'CUN', 'KUB', 'QUW', 'WUM', 'VAB', 'VIF', 'KIY', 'POY', 'XOX', 'YIB', 'LUT', 'WOZ', 'RIV', 'FOM', 'VAF', 'NEH', 'DUX', 'QUD', 'JAV', 'HOV', 'YEZ', 'RUP', 'WAZ', 'KOQ', 'SAF', 'QIG', 'VUW', 'QIH', 'HIW'];
stimulus_3_bucket = ['CET', 'QUM', 'LIY', 'YUG', 'XUW', 'GAC', 'QEH', 'PAZ', 'XIP', 'GIM', 'DOZ', 'JAF', 'FUH', 'KEZ', 'SOR', 'XEG', 'MIV', 'YIH', 'BIQ', 'VUY', 'XUG', 'PID', 'SEK', 'DUK', 'HIZ', 'YEV', 'COH', 'QUB', 'GEG', 'VAX', 'VEC', 'GUJ', 'YIC', 'CIW', 'POB', 'FEQ', 'VUD', 'QAJ', 'BUJ', 'XEY', 'TIX', 'CEM', 'KIQ', 'YEQ', 'MAH', 'XUV', 'DUV', 'XAP', 'NIN', 'HUR', 'PUQ', 'PUZ', 'QOM', 'XIM', 'VEJ', 'FAL', 'HED', 'CAH', 'GEZ', 'BAJ', 'HIR', 'YIL', 'QOD', 'DOD', 'YUX', 'YIQ', 'DEC', 'KUJ', 'NUW', 'SAH', 'FUM', 'SIL', 'WOH', 'WER', 'PIQ', 'JEX', 'KUQ', 'FAV', 'KUC', 'NAK', 'YAF', 'GIZ', 'XOY', 'XUR', 'SUJ', 'QIV', 'FUV', 'CAQ', 'BAC', 'CAC', 'GAZ', 'VUK', 'CIZ', 'VOV', 'XOT', 'HOJ', 'JAD', 'SUD', 'LIV', 'TOX', 'HUW', 'CED', 'XOG', 'HEZ', 'BEX', 'KED', 'FUQ', 'LIQ', 'MEZ', 'XAS', 'NEC', 'XAG', 'JAL', 'VEB', 'VEM', 'REZ', 'GEJ', 'JOM', 'WUB', 'VAD', 'MOJ', 'BUC', 'WUR', 'QOW', 'VED', 'QEQ', 'FEM', 'CEQ', 'PAV', 'XOH', 'CAZ', 'GOZ', 'HEC', 'TEK', 'CIJ', 'VEQ', 'YOJ', 'NEF', 'NUZ', 'XEV', 'REJ', 'SUQ', 'FOT', 'YOC', 'KAW', 'YUN', 'XAJ', 'JUY', 'KIS', 'LUH', 'GOS', 'BEC', 'KAC', 'XOV', 'COF', 'TEM', 'MAV', 'BER', 'WUN', 'KUX', 'COM', 'ROM', 'FUJ', 'NAF', 'JOR', 'YIW', 'FAW', 'WIF', 'VIR', 'FOJ', 'MEF', 'VOQ', 'VIQ', 'WID', 'FIV', 'PIW', 'LEC', 'XEK', 'YAQ', 'QEC', 'YOS', 'XED', 'YUJ', 'RUD', 'YEF', 'XAM', 'BUQ', 'NER', 'XAD', 'YER', 'YUR', 'JIQ', 'JAJ', 'XAF', 'CIQ', 'VID', 'LIR', 'WEZ', 'SIQ', 'MUC', 'NAZ', 'SIH', 'CUC', 'MEK', 'WOQ', 'GUX', 'PAJ', 'XAN', 'FUS', 'QUK', 'DUQ', 'DEZ', 'LAL', 'VEZ', 'SOV', 'BEJ', 'PUV', 'COJ', 'FAZ', 'NEQ', 'KIB', 'ROJ', 'WIC', 'JES', 'HOS', 'TUV', 'QAN', 'MUH', 'WUQ', 'HAV', 'BAP', 'XIJ', 'YAD', 'FAM', 'NEM', 'QAZ', 'WUJ', 'HUY', 'PAG', 'JOP', 'XOQ', 'VAM', 'CEG', 'VUZ', 'CEN', 'BEM', 'WOC', 'KUV', 'YAX'];
stimulus_4_bucket = ['CEB', 'FIQ', 'YEY', 'LAH', 'LAV', 'LOY', 'BEW', 'FEV', 'CUZ', 'XOM', 'SAR', 'MUJ', 'MIW', 'XOB', 'RIQ', 'XOD', 'YUY', 'FOL', 'VAY', 'TOB', 'DUY', 'WIV', 'YED', 'GAW', 'JIK', 'SUK', 'XAB', 'YIY', 'LIG', 'VUJ', 'GUV', 'RUQ', 'XOP', 'HEH', 'MUZ', 'MUQ', 'YEG', 'BEZ', 'BIF', 'VEK', 'XIK', 'YUZ', 'NIR', 'CIV', 'KUN', 'XOR', 'YAT', 'DOJ', 'XER', 'XUK', 'YEJ', 'YAN', 'NEJ', 'TAZ', 'YUS', 'KUW', 'SEZ', 'WEP', 'KOD', 'LOQ', 'SEG', 'KER', 'JEP', 'XEC', 'PUM', 'BEP', 'DIY', 'WOV', 'KUF', 'XUP', 'YIZ', 'SIV', 'WUP', 'HIB', 'QEM', 'FEB', 'HAQ', 'KUD', 'XUT', 'QUR', 'JUW', 'TIR', 'CEX', 'YEX', 'BEB', 'JUL', 'FIF', 'XOW', 'CUV', 'JAH', 'BOH', 'WUL', 'TUJ', 'QEV', 'JOD', 'VAZ', 'XUH', 'PUX', 'MEX', 'WIW', 'VUF', 'XUF', 'HUK', 'NIQ', 'TUZ', 'NIZ', 'RUX', 'QAF', 'GON', 'GIW', 'RAR', 'NAJ', 'QAH', 'TEF', 'SIF', 'JUP', 'HUV', 'YIS', 'VEF', 'KAZ', 'JEJ', 'XEX', 'PIB', 'PEZ', 'VUV', 'XIV', 'LUK', 'MIQ', 'BIW', 'HIL', 'MUW', 'CUH', 'TIH', 'NUV', 'CUG', 'XAW', 'TEH', 'TOC', 'TEP', 'QUS', 'SIJ', 'VOY', 'YAG', 'JOC', 'LEP', 'NAH', 'DIC', 'PUY', 'TEJ', 'CEV', 'YAC', 'HOH', 'JIW', 'HEJ', 'TUQ', 'XIL', 'YAZ', 'DIZ', 'YIM', 'KET', 'WEC', 'FAC', 'BIV', 'HEQ', 'SUH', 'CIL', 'QEF', 'KOY', 'GUZ', 'KEB', 'JOV', 'WEX', 'WOX', 'XUJ', 'JOF', 'XOZ', 'JEV', 'SOZ', 'SUT', 'XIN', 'GEC', 'RUJ', 'JEQ', 'BOJ', 'QOJ', 'WEJ', 'TEZ', 'SEQ', 'FUF', 'ROP', 'BIR', 'XEB', 'VOZ', 'FUK', 'MOY', 'VIL', 'HAX', 'QER', 'XOF', 'XAX', 'NIV', 'GOP', 'KEM', 'YIT', 'WOF', 'DAC', 'JEZ', 'WIH', 'JUH', 'KOZ', 'JIX', 'FEJ', 'MEQ', 'QEJ', 'XEZ', 'YAJ', 'DIQ', 'MUY', 'QUN', 'HIY', 'JEH', 'QUY', 'QAM', 'SEM', 'ROV', 'CIG', 'BEH', 'HUQ', 'YEK', 'GIK', 'DEG', 'WIY', 'KIC', 'LEJ', 'NUP', 'JUQ', 'CIR', 'QUT', 'VAQ', 'FUZ', 'KUY', 'KIZ', 'NAV', 'MOV', 'GIX', 'JOQ', 'WOB', 'LAZ', 'GEQ', 'SEF', 'TIV', 'LUZ'];
stimulus_5_bucket = ['JAX', 'QUG', 'JOJ', 'QIF', 'DOY', 'JEM', 'KAJ', 'JUM', 'QIZ', 'TUM', 'VIG', 'XAK', 'YOK', 'TID', 'KAG', 'CIT', 'GOV', 'LUR', 'GUD', 'WOD', 'FUP', 'XIT', 'SUY', 'VAH', 'CAV', 'PUJ', 'QAC', 'FEG', 'BAW', 'WUK', 'DEQ', 'DAV', 'YOL', 'NOZ', 'SES', 'TAQ', 'DAZ', 'JEG', 'YOY', 'ROF', 'KIX', 'SEH', 'CER', 'NAL', 'GEX', 'QOY', 'LUV', 'BOQ', 'KAX', 'QOT', 'YUL', 'GUH', 'BUW', 'FAH', 'GUW', 'TIF', 'SIZ', 'BIH', 'CIN', 'QOV', 'VIB', 'DED', 'GAK', 'RUZ', 'LOD', 'XUC', 'XEH', 'GIV', 'HAB', 'RAZ', 'HON', 'FIW', 'WUV', 'GAQ', 'MAJ', 'XAL', 'FEK', 'BOV', 'KIJ', 'TUC', 'VOT', 'QAB', 'MIH', 'QIW', 'YUW', 'KUG', 'YAL', 'FAF', 'KEL', 'FUL', 'FUC', 'VOH', 'WAC', 'BUH', 'LUJ', 'TUW', 'QEB', 'QIL', 'KUR', 'WUG', 'TOQ', 'VEY', 'GEH', 'TEX', 'TOJ', 'VUR', 'VOB', 'RIX', 'GEB', 'WEK', 'BEQ', 'RIY', 'FOS', 'DEJ', 'LUN', 'KOV', 'SUG', 'FOF', 'QEY', 'XAQ', 'QUF', 'QIN', 'XIQ', 'VIH', 'PUH', 'NUQ', 'QOQ', 'LIF', 'WOR', 'DIH', 'BOC', 'QOH', 'XOL', 'TUH', 'LUQ', 'XUM', 'DUH', 'GIY', 'JOZ', 'NOF', 'COR', 'QEW', 'NIH', 'NOX', 'WOJ', 'BIZ', 'VUM', 'TUD', 'GAX', 'JEL', 'HUJ', 'MOZ', 'SEV', 'NIG', 'XAR', 'YOT', 'GUR', 'POG', 'XUB', 'QAS', 'RUF', 'FOZ', 'PEX', 'NOY', 'VEH', 'NUY', 'XON', 'TAY', 'TUR', 'RIW', 'HEV', 'VEP', 'PEF', 'PEV', 'PIH', 'CUJ', 'FOD', 'DOB', 'YUT', 'SUZ', 'BAV', 'FAK', 'YIX', 'TIB', 'MUK', 'TOH', 'VUX', 'POJ', 'XUZ', 'VUT', 'FAJ', 'XET', 'FOQ', 'SAJ', 'WIQ', 'YOG', 'FEH', 'WUT', 'DAQ', 'XEL', 'MOQ', 'CEC', 'WUZ', 'VUB', 'RIH', 'QEN', 'JAZ', 'KAD', 'FOC', 'WUY', 'NIC', 'FOV', 'KOX'];

stimulus_6_bucket = ['KOW', 'QAX', 'PIZ', 'XAH', 'KEW', 'VEV', 'LEH', 'QAD', 'GEP', 'LAN', 'YUH']

// generate initial stimuli in buckets
let buckets = [stimulus_1_bucket, stimulus_2_bucket, stimulus_3_bucket, stimulus_4_bucket, stimulus_5_bucket, stimulus_6_bucket];

buckets.forEach((bucket, index) => {
  this.state[`stimulus_${index + 1}`] = bucket[Math.floor(Math.random() * bucket.length)];
});


this.state.total_correct = 0

this.state.section = 1




}
              },
              "title": "main_trials",
              "tardy": true,
              "indexParameter": "loop_iteration",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "trials-and-breaks",
                "content": [
                  {
                    "type": "lab.html.Screen",
                    "files": {},
                    "responses": {
                      "mousedown button.continue-button": "continue"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "break",
                    "content": "\u003Cmain\u003E\n  \u003Cdiv class=\"rai-intro-text\"\u003E\n    \u003Cimg src=\"static\u002Flogo-without-text.png\" class=\"logo-img\"\u003E\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"rai-intro-text\"\u003E\u003Cp\u003EWell done! Feel free to take a short break.\u003Cbr\u003E\u003Cbr\u003EWhen you are ready to continue, click \u003Ckbd\u003Econtinue\u003C\u002Fkbd\u003E to go back to the task.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"footer-instructions\"\u003E\n\u003Cbutton class=\"continue-button\" type=\"submit\" form=\"demographics\" id=\"submit-demographics\"\u003E\n  \u003Cb\u003EContinue\u003C\u002Fb\u003E\n\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
                    "correctResponse": "continue",
                    "tardy": true,
                    "skip": "${this.parameters.trial_num != 49 && this.parameters.trial_num != 97}"
                  },
                  {
                    "type": "lab.html.Frame",
                    "context": "\u003Cheader class=\"header-plain\"\u003E\n  \u003Cdiv class=\"left-top\"\u003E\u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"middle-top\"\u003E\n    \u003Cdiv class=\"trial-text\"\u003ETrial ${this.parameters.trial_num} out of 128\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"right-top\"\u003E\n  \u003Cdiv id=\"static-timer-circle\"\u003E\u003Cp id=\"timer-text\"\u003E60\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\n  \n\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain data-labjs-section=\"frame\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E\n",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "run": function anonymous(
) {
clearInterval(this.state.trialTimer);
time_left = 59;

this.state.trialTimer = setInterval(function(){
  document.getElementById("timer-text").innerText = time_left;
  time_left -= 1;
}, 1000);
}
                    },
                    "title": "whole-trial-frame",
                    "tardy": true,
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "trial_sequence",
                      "tardy": true,
                      "content": [
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 0,
                              "angle": 0,
                              "width": 18.69,
                              "height": 36.16,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "+",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": "64",
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "iti",
                          "timeout": "250"
                        },
                        {
                          "type": "lab.html.Form",
                          "content": "\u003Cdiv class=\"trial-propositions\"\u003E\n  \u003Cdiv class=\"trial-proposition\"\u003E${this.parameters.statement_1}\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"trial-proposition\"\u003E${this.parameters.statement_2}\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"trial-proposition\"\u003E${this.parameters.statement_3}\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"trial-proposition\"\u003E${this.parameters.statement_4}\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\u003Cdiv class=\"trial-question\"\u003E\n  \u003Ci\u003EGiven this information, select all statements  which are \u003Cstrong\u003E${this.parameters.probed_truth_value}.\u003C\u002Fi\u003E\u003C\u002Fstrong\u003E\u003C\u002Fdiv\u003E\n\n\u003Cform\u003E\n  \u003Cdiv class=\"grid-container\"\u003E\n    \u003Clabel for=\"option1input\" id=\"option1\" class=\"grid-item\"\u003E\n      \u003Cinput type=\"checkbox\" id=\"option1input\" name=\"option1input\" class=\"checkbox\"\u003E\n      \u003Cb\u003E\u003C\u002Fb\u003E\n    \u003C\u002Flabel\u003E\n    \u003Clabel for=\"option2input\"  id=\"option2\" class=\"grid-item\"\u003E\n      \u003Cinput type=\"checkbox\" id=\"option2input\" name=\"option2input\" class=\"checkbox\"\u003E\n      \u003Cb\u003E\u003C\u002Fb\u003E\n    \u003C\u002Flabel\u003E\n    \u003Clabel for=\"option3input\"  id=\"option3\" class=\"grid-item\"\u003E\n      \u003Cinput type=\"checkbox\" id=\"option3input\" name=\"option3input\" class=\"checkbox\"\u003E\n      \u003Cb\u003E\u003C\u002Fb\u003E\n    \u003C\u002Flabel\u003E\n    \u003Clabel for=\"option4input\"  id=\"option4\" class=\"grid-item\"\u003E\n      \u003Cinput type=\"checkbox\" id=\"option4input\" name=\"option4input\" class=\"checkbox\"\u003E\n      \u003Cb\u003E\u003C\u002Fb\u003E\n    \u003C\u002Flabel\u003E\n    \u003Clabel for=\"option5input\"  id=\"option5\" class=\"grid-item\"\u003E\n      \u003Cinput type=\"checkbox\" id=\"option5input\" name=\"option5input\" class=\"checkbox\"\u003E\n      \u003Cb\u003E\u003C\u002Fb\u003E\n    \u003C\u002Flabel\u003E\n    \u003Clabel for=\"option6input\"  id=\"option6\" class=\"grid-item\"\u003E\n      \u003Cinput type=\"checkbox\" id=\"option6input\" name=\"option6input\" class=\"checkbox\"\u003E\n      \u003Cb\u003E\u003C\u002Fb\u003E\n    \u003Clabel for=\"option7input\"  id=\"option7\" class=\"grid-item\"\u003E\n      \u003Cinput type=\"checkbox\" id=\"option7input\" name=\"option7input\" class=\"checkbox\"\u003E\n      \u003Cb\u003E\u003C\u002Fb\u003E\n    \u003C\u002Flabel\u003E\n    \u003Clabel for=\"option8input\"  id=\"option8\" class=\"grid-item\"\u003E\n      \u003Cinput type=\"checkbox\" id=\"option8input\" name=\"option8input\" class=\"checkbox\"\u003E\n      \u003Cb\u003E\u003C\u002Fb\u003E\n    \u003C\u002Flabel\u003E\n  \u003C\u002Fdiv\u003E\n\n\n\n\u003Cfooter class=\"footer-trials\"\u003E\n\u003Cinput class=\"trial-submit-button\" type=\"submit\" value=\"Submit\"\u003E\n\u003C\u002Ffooter\u003E\u003C\u002Fform\u003E",
                          "scrollTop": true,
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
// function to choose random values from arrays 
function chooseOptions(array, n) {
    // Clone the original array to avoid altering it
    let clonedArray = array.slice();

    // Fisher-Yates Shuffle algorithm
    for (let i = clonedArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [clonedArray[i], clonedArray[j]] = [clonedArray[j], clonedArray[i]];
    }

    // Slice the first n elements
    return clonedArray.slice(0, n);
}

// function to replace values in array with mappings
function replaceMultipleValuesInArray(array, replacements) {
    return array.map(item => {
        let modifiedItem = item;
        for (const [key, value] of Object.entries(replacements)) {
            modifiedItem = modifiedItem.replace(new RegExp(key, 'g'), value);
        }
        return modifiedItem;
    });
}

// choose response options
this.state.true_responses = chooseOptions(this.parameters.true_statements.split(/,+(?=(?:(?:[^"]*"){2})*[^"]*$)/), this.parameters.n_true_answers)
this.state.false_responses = chooseOptions(this.parameters.false_statements.split(/,+(?=(?:(?:[^"]*"){2})*[^"]*$)/), this.parameters.n_false_answers)
this.state.ku_responses = chooseOptions(this.parameters.ku_statements.split(/,+(?=(?:(?:[^"]*"){2})*[^"]*$)/), this.parameters.n_ku_answers)


this.state.response_options = this.state.true_responses.concat(this.state.false_responses, this.state.ku_responses);


// map values for replacement 
const mappings = {
    "1": this.state.stimulus_1,
    "2": this.state.stimulus_2,
    "3": this.state.stimulus_3,
    "4": this.state.stimulus_4,
    "5": this.state.stimulus_5,
    "6": this.state.stimulus_6
};

// map arbitrary stimuli in trial to trial parameters
this.state.response_options = replaceMultipleValuesInArray(this.state.response_options, mappings);
this.parameters.statement_1 = replaceMultipleValuesInArray(this.parameters.statement_1.split(/,+(?=(?:(?:[^"]*"){2})*[^"]*$)/), mappings);
this.parameters.statement_2 = replaceMultipleValuesInArray(this.parameters.statement_2.split(/,+(?=(?:(?:[^"]*"){2})*[^"]*$)/), mappings);
this.parameters.statement_3 = replaceMultipleValuesInArray(this.parameters.statement_3.split(/,+(?=(?:(?:[^"]*"){2})*[^"]*$)/), mappings);
this.parameters.statement_4 = replaceMultipleValuesInArray(this.parameters.statement_4.split(/,+(?=(?:(?:[^"]*"){2})*[^"]*$)/), mappings);


this.state.correct = 0;



},
                            "run": function anonymous(
) {
// Function to update button visibility
function updateButtonVisibility(numberOfButtons) {
  const gridContainer = document.querySelector('.grid-container');
  const buttons = gridContainer.querySelectorAll('.grid-item');

  // Hide all buttons
  buttons.forEach(button => {
    button.style.display = 'none';
  });

  // Show only the required number of buttons
  for (let i = 0; i < numberOfButtons; i++) {
    buttons[i].style.display = 'block'; // Adjust display as per your layout
  }
};


// function to randomise button positions
function randomizeGridPositions(rowCount, columnCount) {
  const gridContainer = document.querySelector('.grid-container');
  const items = gridContainer.querySelectorAll('.grid-item');
  
  let positions = [];

  // Generate all possible positions
  for (let row = 1; row <= rowCount; row++) {
    for (let col = 1; col <= 2; col++) {
      positions.push({ row, col });
    }
  }

  // Shuffle positions array
  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }

  // Assign positions to grid items
  items.forEach((item, index) => {
    if (index < positions.length) {
      item.style.gridRow = positions[index].row;
      item.style.gridColumn = positions[index].col;
    }
  });
}

  
const gridContainer = document.querySelector('.grid-container');

switch (this.parameters.n_answers) {
  case "4":
  gridContainer.classList.add('four-items');
  randomizeGridPositions(2, 2); // For a 2x2 grid
  updateButtonVisibility(4);
  // Set the innerHTML of the first 4 buttons
  break;
  case "6":
  gridContainer.classList.add('six-items');
  randomizeGridPositions(2, 3); // For a 2x3 grid
  updateButtonVisibility(6);
  // Set the innerHTML of the first 6 buttons
  break;
  case "8":
  gridContainer.classList.add('eight-items');
  randomizeGridPositions(2, 4); // For a 2x4 grid
  updateButtonVisibility(8);
  // Set the innerHTML of the first 8 buttons
  break;
  // ... other cases ...
  default:
   // Handle any other number of options if needed
   break;
}


// Setting content for visible buttons
for (let i = 0; i < this.parameters.n_answers; i++) {
  document.getElementById(`option${i + 1}`).querySelector("b").innerHTML = this.state.response_options[i];
  console.log(i);
  }


function adjustFontSizeForGridItems() {
    const gridItems = document.querySelectorAll('.grid-item', '.trial-submit-button');
    
    gridItems.forEach(item => {
        let fontSize = parseInt(window.getComputedStyle(item).fontSize);
        let maxWidth = item.clientWidth; // The width of the container
        let textWidth;

        do {
            item.style.fontSize = `${fontSize}px`;
            // Create a temporary span to measure text width
            const span = document.createElement('span');
            span.style.visibility = 'hidden';
            span.style.position = 'absolute';
            span.innerText = item.innerText || item.textContent;
            document.body.appendChild(span);
            textWidth = span.offsetWidth;
            document.body.removeChild(span);
            
            // Decrease the font size if the text is wider than the container
            if (textWidth > maxWidth) {
                fontSize -= 1;
            } else {
                break; // If the text fits, exit the loop
            }
        } while (fontSize > 0); // Prevent infinite loop
    });
};


// Adjust font size on initial load and window resize
window.onload = adjustFontSizeForGridItems;
window.onresize = adjustFontSizeForGridItems;


// Determine the line height and font size based on this.parameters.block
const isBlockSix = this.parameters.block == 6;
const lineHeight = isBlockSix ? '1.6vw' : '5vw';
const fontSize = isBlockSix ? '1.25vw' : '1.5vw';

// Apply the determined line height and font size to the grid items
document.querySelectorAll('.grid-item').forEach(item => {
  item.style.lineHeight = lineHeight;
  item.style.fontSize = fontSize;
});

},
                            "after:end": function anonymous(
) {
// remove currently used stimuli and draw new ones from buckets
let buckets = [stimulus_1_bucket, stimulus_2_bucket, stimulus_3_bucket, stimulus_4_bucket, stimulus_5_bucket, stimulus_6_bucket];

buckets.forEach((bucket, index) => {
  // Always update stimulus_1 through stimulus_4
  if (index < 4) {
    // Filter out the used stimulus
    buckets[index] = bucket.filter(item => item !== this.state[`stimulus_${index + 1}`]);
    // Select a new stimulus for the next trial
    this.state[`stimulus_${index + 1}`] = buckets[index][Math.floor(Math.random() * buckets[index].length)];
  }

  // Update stimulus_5 only if statement_3's length > 1
  if (index === 4 && this.parameters.statement_3.length > 1) {
    buckets[index] = bucket.filter(item => item !== this.state.stimulus_5);
    this.state.stimulus_5 = buckets[index][Math.floor(Math.random() * buckets[index].length)];
  }

  // Update stimulus_6 only if statement_4's length > 1
  if (index === 5 && this.parameters.statement_4.length > 1) {
    buckets[index] = bucket.filter(item => item !== this.state.stimulus_6);
    this.state.stimulus_6 = buckets[index][Math.floor(Math.random() * buckets[index].length)];
  }
});



// check correct response and return according value to this.state.correct
function checkCorrectnessExtended() {
  // Determine the range of correct options based on probed_truth_value and other parameters
  let correctRangeStart, correctRangeEnd;

// note: I start indexing at 1 here and not 0, since first labelled option is option1
  if (this.parameters.probed_truth_value === "true") {
    correctRangeStart = 1;
    correctRangeEnd = this.parameters.n_true_answers;
  } else if (this.parameters.probed_truth_value === "false") {
    correctRangeStart = this.parameters.n_true_answers + 1;
    correctRangeEnd = this.parameters.n_answers - this.parameters.n_ku_answers;
  } else if (this.parameters.probed_truth_value === "known unknowns") {
    correctRangeStart = this.parameters.n_answers - this.parameters.n_ku_answers + 1;
    correctRangeEnd = this.parameters.n_answers;
  }

  // Initialize correct state to 1
  this.state.correct = 1;

  // Check each option's correctness
  for (let i = 1; i <= this.parameters.n_answers; i++) {
    const optionKey = `option${i}input`;
    const isOptionCorrect = (i >= correctRangeStart && i <= correctRangeEnd) ? this.state[optionKey] : !this.state[optionKey];

    if (!isOptionCorrect) {
      this.state.correct = 0; // Mark as incorrect if any option doesn't meet the criteria
      return; // Exit early since we found an incorrect option
    }
  }
};

// Call the function with extended logic
checkCorrectnessExtended.call(this);


if (this.state.correct == 1) {
  this.state.total_correct += 1
};



}
                          },
                          "title": "trial",
                          "timeout": "60000"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "lab.html.Screen",
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "completion",
              "content": "\u003Cmain class=\"content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-m text-justified\"\u003E\n  \u003Cdiv class=\"page-item page-item-html\"\u003E\n    \u003Cimg src=\"static\u002Flogo-without-text.png\" class=\"logo-img\"\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv\u003E\u003Cp\u003EYou have completed the test. Well done!\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EYour completion code is CEJ1PIMM. You may now close the page!\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n",
              "correctResponse": "continue"
            }
          ]
        }
      ]
    }
  ]
})

// Let's go!
study.run()