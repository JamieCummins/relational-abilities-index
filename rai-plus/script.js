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
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Hello, and welcome!",
          "content": "You will now complete a test that is used to measure how well people can relate concepts in different ways.\u003Cbr\u003EYou will be presented with 67 total trials in this task. On each trial, you will see 1-3 statements about the relationship between imaginary words (for example: CUG is the same as JOM, JOM is the same as VEK). You will also be presented with a question on the bottom of the screen asking about the relationship between these words (for example: is CUG different to VEK?).\u003Cbr\u003E\u003Cbr\u003EYour task is to answer this question accurately, by selecting either \"YES\" or \"NO\", based on the information that is given to you.\u003Cbr\u003EIf you are using a smartphone, you can select yes or no by simply tapping on the yes\u002Fno buttons. If you are using a computer, then simply click the yes\u002Fno buttons."
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
      "title": "introduction_1"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "IMPORTANT!",
          "content": "On each trial, you will have 30 seconds to respond. After this 30 seconds, if you have not responded then the trial will end and you will immediately be moved on to the next trial. "
        },
        {
          "required": true,
          "type": "text",
          "content": "When you are ready, click \"continue\" to begin. "
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
      "title": "introduction_2"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "block": "1",
          "trial_num": "1",
          "relation_1": "is the same as",
          "stim_3_id": "",
          "relation_2": "",
          "stim_4_id": "",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "1",
          "q_rel": "opposite to",
          "q_stim_2_id": "2",
          "correct_response": "no"
        },
        {
          "block": "1",
          "trial_num": "2",
          "relation_1": "is the same as",
          "stim_3_id": "2",
          "relation_2": "is the same as",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "1",
          "q_rel": "the same as",
          "q_stim_2_id": "3",
          "correct_response": "yes"
        },
        {
          "block": "1",
          "trial_num": "3",
          "relation_1": "is the same as",
          "stim_3_id": "2",
          "relation_2": "is the same as",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "1",
          "q_rel": "the same as",
          "q_stim_2_id": "3",
          "correct_response": "yes"
        },
        {
          "block": "1",
          "trial_num": "4",
          "relation_1": "is opposite to",
          "stim_3_id": "2",
          "relation_2": "is opposite to",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "3",
          "q_rel": "the same as",
          "q_stim_2_id": "2",
          "correct_response": "no"
        },
        {
          "block": "1",
          "trial_num": "5",
          "relation_1": "is the same as",
          "stim_3_id": "2",
          "relation_2": "is the same as",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "3",
          "q_rel": "the same as",
          "q_stim_2_id": "1",
          "correct_response": "yes"
        },
        {
          "block": "1",
          "trial_num": "6",
          "relation_1": "is the same as",
          "stim_3_id": "3",
          "relation_2": "is the same as",
          "stim_4_id": "1",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "2",
          "q_rel": "opposite to",
          "q_stim_2_id": "3",
          "correct_response": "no"
        },
        {
          "block": "1",
          "trial_num": "7",
          "relation_1": "is opposite to",
          "stim_3_id": "2",
          "relation_2": "is opposite to",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "3",
          "q_rel": "the same as",
          "q_stim_2_id": "1",
          "correct_response": "yes"
        },
        {
          "block": "1",
          "trial_num": "8",
          "relation_1": "is opposite to",
          "stim_3_id": "3",
          "relation_2": "is opposite to",
          "stim_4_id": "1",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "1",
          "q_rel": "the same as",
          "q_stim_2_id": "3",
          "correct_response": "no"
        },
        {
          "block": "1",
          "trial_num": "9",
          "relation_1": "is opposite to",
          "stim_3_id": "3",
          "relation_2": "is opposite to",
          "stim_4_id": "1",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "2",
          "q_rel": "the same as",
          "q_stim_2_id": "1",
          "correct_response": "no"
        },
        {
          "block": "1",
          "trial_num": "10",
          "relation_1": "is opposite to",
          "stim_3_id": "2",
          "relation_2": "is the same as",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "3",
          "q_rel": "opposite to",
          "q_stim_2_id": "1",
          "correct_response": "yes"
        },
        {
          "block": "1",
          "trial_num": "11",
          "relation_1": "is opposite to",
          "stim_3_id": "3",
          "relation_2": "is the same as",
          "stim_4_id": "1",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "1",
          "q_rel": "opposite to",
          "q_stim_2_id": "3",
          "correct_response": "no"
        },
        {
          "block": "1",
          "trial_num": "12",
          "relation_1": "is the same as",
          "stim_3_id": "2",
          "relation_2": "is the same as",
          "stim_4_id": "3",
          "stim_5_id": "3",
          "relation_3": "is the same as",
          "stim_6_id": "4",
          "q_stim_1_id": "4",
          "q_rel": "opposite to",
          "q_stim_2_id": "2",
          "correct_response": "no"
        },
        {
          "block": "1",
          "trial_num": "13",
          "relation_1": "is opposite to",
          "stim_3_id": "2",
          "relation_2": "is opposite to",
          "stim_4_id": "3",
          "stim_5_id": "3",
          "relation_3": "is opposite to",
          "stim_6_id": "4",
          "q_stim_1_id": "4",
          "q_rel": "opposite to",
          "q_stim_2_id": "1",
          "correct_response": "yes"
        },
        {
          "block": "1",
          "trial_num": "14",
          "relation_1": "is the same as",
          "stim_3_id": "2",
          "relation_2": "is opposite to",
          "stim_4_id": "3",
          "stim_5_id": "3",
          "relation_3": "is opposite to",
          "stim_6_id": "4",
          "q_stim_1_id": "4",
          "q_rel": "the same as",
          "q_stim_2_id": "1",
          "correct_response": "yes"
        },
        {
          "block": "1",
          "trial_num": "15",
          "relation_1": "is opposite to",
          "stim_3_id": "2",
          "relation_2": "is opposite to",
          "stim_4_id": "3",
          "stim_5_id": "3",
          "relation_3": "is the same as",
          "stim_6_id": "4",
          "q_stim_1_id": "2",
          "q_rel": "opposite to",
          "q_stim_2_id": "3",
          "correct_response": "yes"
        },
        {
          "block": "2",
          "trial_num": "16",
          "relation_1": "is different to",
          "stim_3_id": "",
          "relation_2": "",
          "stim_4_id": "",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "2",
          "q_rel": "the same as",
          "q_stim_2_id": "1",
          "correct_response": "no"
        },
        {
          "block": "2",
          "trial_num": "17",
          "relation_1": "is the same as",
          "stim_3_id": "2",
          "relation_2": "is the same as",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "3",
          "q_rel": "the same as",
          "q_stim_2_id": "1",
          "correct_response": "yes"
        },
        {
          "block": "2",
          "trial_num": "18",
          "relation_1": "is different to",
          "stim_3_id": "2",
          "relation_2": "is different to",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "2",
          "q_rel": "the same as",
          "q_stim_2_id": "3",
          "correct_response": "no"
        },
        {
          "block": "2",
          "trial_num": "19",
          "relation_1": "is different to",
          "stim_3_id": "2",
          "relation_2": "is different to",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "1",
          "q_rel": "the same as",
          "q_stim_2_id": "3",
          "correct_response": "no"
        },
        {
          "block": "2",
          "trial_num": "20",
          "relation_1": "is the same as",
          "stim_3_id": "3",
          "relation_2": "is the same as",
          "stim_4_id": "1",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "2",
          "q_rel": "the same as",
          "q_stim_2_id": "3",
          "correct_response": "yes"
        },
        {
          "block": "2",
          "trial_num": "21",
          "relation_1": "is the same as",
          "stim_3_id": "3",
          "relation_2": "is the same as",
          "stim_4_id": "1",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "2",
          "q_rel": "the same as",
          "q_stim_2_id": "3",
          "correct_response": "no"
        },
        {
          "block": "2",
          "trial_num": "22",
          "relation_1": "is different to",
          "stim_3_id": "2",
          "relation_2": "is different to",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "1",
          "q_rel": "the same as",
          "q_stim_2_id": "2",
          "correct_response": "no"
        },
        {
          "block": "2",
          "trial_num": "23",
          "relation_1": "is different to",
          "stim_3_id": "3",
          "relation_2": "is different to",
          "stim_4_id": "1",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "2",
          "q_rel": "different to",
          "q_stim_2_id": "1",
          "correct_response": "yes"
        },
        {
          "block": "2",
          "trial_num": "24",
          "relation_1": "is different to",
          "stim_3_id": "2",
          "relation_2": "is the same as",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "3",
          "q_rel": "the same as",
          "q_stim_2_id": "1",
          "correct_response": "no"
        },
        {
          "block": "2",
          "trial_num": "25",
          "relation_1": "is the same as",
          "stim_3_id": "2",
          "relation_2": "is different to",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "1",
          "q_rel": "different to",
          "q_stim_2_id": "2",
          "correct_response": "yes"
        },
        {
          "block": "2",
          "trial_num": "26",
          "relation_1": "is the same as",
          "stim_3_id": "2",
          "relation_2": "is the same as",
          "stim_4_id": "3",
          "stim_5_id": "3",
          "relation_3": "is the same as",
          "stim_6_id": "4",
          "q_stim_1_id": "2",
          "q_rel": "the same as",
          "q_stim_2_id": "3",
          "correct_response": "yes"
        },
        {
          "block": "2",
          "trial_num": "27",
          "relation_1": "is different to",
          "stim_3_id": "2",
          "relation_2": "is different to",
          "stim_4_id": "3",
          "stim_5_id": "3",
          "relation_3": "is different to",
          "stim_6_id": "4",
          "q_stim_1_id": "2",
          "q_rel": "different to",
          "q_stim_2_id": "1",
          "correct_response": "yes"
        },
        {
          "block": "2",
          "trial_num": "28",
          "relation_1": "is the same as",
          "stim_3_id": "2",
          "relation_2": "is the same as",
          "stim_4_id": "3",
          "stim_5_id": "3",
          "relation_3": "is different to",
          "stim_6_id": "4",
          "q_stim_1_id": "2",
          "q_rel": "the same as",
          "q_stim_2_id": "3",
          "correct_response": "yes"
        },
        {
          "block": "2",
          "trial_num": "29",
          "relation_1": "is different to",
          "stim_3_id": "2",
          "relation_2": "is the same as",
          "stim_4_id": "3",
          "stim_5_id": "3",
          "relation_3": "is the same as",
          "stim_6_id": "4",
          "q_stim_1_id": "1",
          "q_rel": "different to",
          "q_stim_2_id": "3",
          "correct_response": "yes"
        },
        {
          "block": "3",
          "trial_num": "30",
          "relation_1": "is more than",
          "stim_3_id": "",
          "relation_2": "",
          "stim_4_id": "",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "2",
          "q_rel": "more than",
          "q_stim_2_id": "1",
          "correct_response": "no"
        },
        {
          "block": "3",
          "trial_num": "31",
          "relation_1": "is more than",
          "stim_3_id": "2",
          "relation_2": "is more than",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "1",
          "q_rel": "more than",
          "q_stim_2_id": "2",
          "correct_response": "yes"
        },
        {
          "block": "3",
          "trial_num": "32",
          "relation_1": "is more than",
          "stim_3_id": "2",
          "relation_2": "is more than",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "2",
          "q_rel": "less than",
          "q_stim_2_id": "3",
          "correct_response": "no"
        },
        {
          "block": "3",
          "trial_num": "33",
          "relation_1": "is less than",
          "stim_3_id": "2",
          "relation_2": "is less than",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "1",
          "q_rel": "less than",
          "q_stim_2_id": "3",
          "correct_response": "yes"
        },
        {
          "block": "3",
          "trial_num": "34",
          "relation_1": "is less than",
          "stim_3_id": "2",
          "relation_2": "is less than",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "2",
          "q_rel": "more than",
          "q_stim_2_id": "3",
          "correct_response": "no"
        },
        {
          "block": "3",
          "trial_num": "35",
          "relation_1": "is more than",
          "stim_3_id": "3",
          "relation_2": "is more than",
          "stim_4_id": "1",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "1",
          "q_rel": "more than",
          "q_stim_2_id": "3",
          "correct_response": "no"
        },
        {
          "block": "3",
          "trial_num": "36",
          "relation_1": "is more than",
          "stim_3_id": "3",
          "relation_2": "is more than",
          "stim_4_id": "1",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "3",
          "q_rel": "more than",
          "q_stim_2_id": "2",
          "correct_response": "yes"
        },
        {
          "block": "3",
          "trial_num": "37",
          "relation_1": "is less than",
          "stim_3_id": "3",
          "relation_2": "is less than",
          "stim_4_id": "1",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "3",
          "q_rel": "more than",
          "q_stim_2_id": "1",
          "correct_response": "yes"
        },
        {
          "block": "3",
          "trial_num": "38",
          "relation_1": "is more than",
          "stim_3_id": "2",
          "relation_2": "is more than",
          "stim_4_id": "3",
          "stim_5_id": "3",
          "relation_3": "is more than",
          "stim_6_id": "4",
          "q_stim_1_id": "1",
          "q_rel": "more than",
          "q_stim_2_id": "3",
          "correct_response": "yes"
        },
        {
          "block": "3",
          "trial_num": "39",
          "relation_1": "is less than",
          "stim_3_id": "2",
          "relation_2": "is less than",
          "stim_4_id": "3",
          "stim_5_id": "3",
          "relation_3": "is less than",
          "stim_6_id": "4",
          "q_stim_1_id": "3",
          "q_rel": "less than",
          "q_stim_2_id": "2",
          "correct_response": "no"
        },
        {
          "block": "3",
          "trial_num": "40",
          "relation_1": "is more than",
          "stim_3_id": "3",
          "relation_2": "is more than",
          "stim_4_id": "2",
          "stim_5_id": "4",
          "relation_3": "is more than",
          "stim_6_id": "3",
          "q_stim_1_id": "4",
          "q_rel": "less than",
          "q_stim_2_id": "1",
          "correct_response": "no"
        },
        {
          "block": "3",
          "trial_num": "41",
          "relation_1": "is more than",
          "stim_3_id": "3",
          "relation_2": "is more than",
          "stim_4_id": "1",
          "stim_5_id": "4",
          "relation_3": "is more than",
          "stim_6_id": "3",
          "q_stim_1_id": "4",
          "q_rel": "less than",
          "q_stim_2_id": "2",
          "correct_response": "no"
        },
        {
          "block": "3",
          "trial_num": "42",
          "relation_1": "is less than",
          "stim_3_id": "3",
          "relation_2": "is less than",
          "stim_4_id": "1",
          "stim_5_id": "4",
          "relation_3": "is less than",
          "stim_6_id": "2",
          "q_stim_1_id": "4",
          "q_rel": "less than",
          "q_stim_2_id": "2",
          "correct_response": "yes"
        },
        {
          "block": "4",
          "trial_num": "43",
          "relation_1": "comes after",
          "stim_3_id": "",
          "relation_2": "",
          "stim_4_id": "",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "1",
          "q_rel": "after",
          "q_stim_2_id": "2",
          "correct_response": "yes"
        },
        {
          "block": "4",
          "trial_num": "44",
          "relation_1": "comes before",
          "stim_3_id": "2",
          "relation_2": "comes before",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "3",
          "q_rel": "before",
          "q_stim_2_id": "2",
          "correct_response": "no"
        },
        {
          "block": "4",
          "trial_num": "45",
          "relation_1": "comes before",
          "stim_3_id": "2",
          "relation_2": "comes before",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "3",
          "q_rel": "before",
          "q_stim_2_id": "1",
          "correct_response": "no"
        },
        {
          "block": "4",
          "trial_num": "46",
          "relation_1": "comes after",
          "stim_3_id": "2",
          "relation_2": "comes after",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "2",
          "q_rel": "after",
          "q_stim_2_id": "1",
          "correct_response": "no"
        },
        {
          "block": "4",
          "trial_num": "47",
          "relation_1": "comes after",
          "stim_3_id": "2",
          "relation_2": "comes after",
          "stim_4_id": "3",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "3",
          "q_rel": "before",
          "q_stim_2_id": "1",
          "correct_response": "yes"
        },
        {
          "block": "4",
          "trial_num": "48",
          "relation_1": "comes before",
          "stim_3_id": "3",
          "relation_2": "comes before",
          "stim_4_id": "1",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "3",
          "q_rel": "after",
          "q_stim_2_id": "2",
          "correct_response": "no"
        },
        {
          "block": "4",
          "trial_num": "49",
          "relation_1": "comes after",
          "stim_3_id": "3",
          "relation_2": "comes after",
          "stim_4_id": "1",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "3",
          "q_rel": "after",
          "q_stim_2_id": "1",
          "correct_response": "yes"
        },
        {
          "block": "4",
          "trial_num": "50",
          "relation_1": "comes after",
          "stim_3_id": "3",
          "relation_2": "comes after",
          "stim_4_id": "1",
          "stim_5_id": "",
          "relation_3": "",
          "stim_6_id": "",
          "q_stim_1_id": "2",
          "q_rel": "before",
          "q_stim_2_id": "3",
          "correct_response": "yes"
        },
        {
          "block": "4",
          "trial_num": "51",
          "relation_1": "comes before",
          "stim_3_id": "2",
          "relation_2": "comes before",
          "stim_4_id": "3",
          "stim_5_id": "3",
          "relation_3": "comes before",
          "stim_6_id": "4",
          "q_stim_1_id": "4",
          "q_rel": "before",
          "q_stim_2_id": "2",
          "correct_response": "no"
        },
        {
          "block": "4",
          "trial_num": "52",
          "relation_1": "comes after",
          "stim_3_id": "2",
          "relation_2": "comes after",
          "stim_4_id": "3",
          "stim_5_id": "3",
          "relation_3": "comes after",
          "stim_6_id": "4",
          "q_stim_1_id": "2",
          "q_rel": "before",
          "q_stim_2_id": "4",
          "correct_response": "no"
        },
        {
          "block": "4",
          "trial_num": "53",
          "relation_1": "comes before",
          "stim_3_id": "3",
          "relation_2": "comes before",
          "stim_4_id": "2",
          "stim_5_id": "4",
          "relation_3": "comes before",
          "stim_6_id": "3",
          "q_stim_1_id": "2",
          "q_rel": "after",
          "q_stim_2_id": "4",
          "correct_response": "yes"
        },
        {
          "block": "4",
          "trial_num": "54",
          "relation_1": "comes after",
          "stim_3_id": "3",
          "relation_2": "comes after",
          "stim_4_id": "1",
          "stim_5_id": "4",
          "relation_3": "comes after",
          "stim_6_id": "3",
          "q_stim_1_id": "1",
          "q_rel": "before",
          "q_stim_2_id": "4",
          "correct_response": "yes"
        },
        {
          "block": "4",
          "trial_num": "55",
          "relation_1": "comes after",
          "stim_3_id": "3",
          "relation_2": "comes after",
          "stim_4_id": "1",
          "stim_5_id": "4",
          "relation_3": "comes after",
          "stim_6_id": "3",
          "q_stim_1_id": "2",
          "q_rel": "before",
          "q_stim_2_id": "4",
          "correct_response": "yes"
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
this.state.stimulus_1_bucket = ['JAX','CEB','QUG','VUS','YEY','BAZ','WEH','BEW', 'YOP','DOY','WUC','JUM','CUZ','MUJ','FEC','TID','XOB','CIT','GIM','KEZ','FOL','CEJ','WAQ','QIK','VAY','MAZ','QEZ','GUD','MIV','JIK','BIQ','SUK','PID','SUY','SEK','VAH','QIQ','PUJ','TEB','RUQ','XOP','MUZ','BAX','QUB','JAQ','VEC','DAZ','ROF','SEP','QOP','FIM','NAL','QIM','FEQ','YUZ','VUD','KIQ','MED','JEC','YEJ','NEJ','TIF','BIH','NAM','KOD','QOM','XIM','VEJ','FAL','REW','NOC','TUY','BAJ','LOD','XEH','BUX','HIR','JEP','YIL','PUM','BEP','WUV','XUP','SIV','YUX','XUD','HIB','SAH','SIL','WOH','HAZ','BUF','GIQ','GUG','JEX','MIH','YEX','VAP'];
this.state.stimulus_2_bucket = ['SUR','LOY','KEH','YUG','GAH','QIZ','XUW','XEW','TUM','QOZ','GAC','PAZ','XAK','XOD','DOZ','TOZ','GOV','RAC','DIL','WAJ','GEV','WIV','GAW','CAS','WOD','QAQ','VUY','XUG','XIT','NOJ','DUK','RUH','GUV','LUD','WUK','DEQ','GUC','VUL','COH','JAC','SES','JEG','YOY','BEZ','YIC','SEH','YOV','QUV','CIW','POB','PEJ','XIK','BUJ','BOQ','SAQ','KUK','KUN','YIK','XOR','YUL','GOF','BUW','GUW','YUS','CIH','DOH','KUP','SEZ','XEP','HUR','CIP','TIZ','VIB','CIX','CUW','CAH','GIV', 'NIF','SAV','HEJ','COF','LOJ','QEW','NIH','YIM','BER','KUX','XEQ','WEC','QUZ','HEQ','CIL','YIW','BIZ','QAW','YOF','GAX','JEL','KEB'];
this.state.stimulus_3_bucket = ['JAX','CEB','BAZ','LOY','LIY','KAJ','WUC','GAH','XEW','QOZ','GAC','XOM','MUJ','GEW','MIW','XOB','DOZ','FUH','KEZ','FOL','VAY','SOR','CEH','LUR','NUM','DIL','GUD','XEM','GAW','YIH','VUY','XIT','VAH','MOX','PUJ','DUK','FEG','LUD','YEV','DAV','QAV','BAX','MUQ','NOZ','DUJ','JAC','SOH','TAQ','VEC','BEZ','QOP','CER','CIW','FIM','NUC','VEK','XIK','YUZ','VUD','NAS','CIV','QAR','QOT','XOR','MED','YAT','DOJ','GUH','BUW','MAH','XUV','HUD','KUW','NIN','CIH','JER','CIP','PUQ','JUV','QAG','VEJ','YOZ','SAZ','CAH','TUY','GEZ','XEH','HON','JEP','XEC','WUV','KUF','XUP','DEC','KUJ','XUD','FEB','SAH','DEF','FUM','SIL','SOG','KIJ'];
this.state.stimulus_4_bucket = ['XAS','XEX','KOV','SUG','KAL','SUC','WUB','QEY','LUK','VAD','XIH','HIL','CEQ','CUH','XUS','NUQ','TEH','QIJ','TOC','QUS','PEC','XIB','TUH','GER','MEY','NUZ','JOC','SUQ','LEP','NAH','QUQ','TIW','KAW','JUC','XAV','JUY','YIJ','CEV','YAC','JUX','LOZ','COF','LOJ','DIZ','QEW','XEQ','WEC','FAC','CIL','YIW','FAW','TUD','JOV','WEX','HUS','JUR','JOF','XOC','NUJ','XOZ','WID','PIW','CEK','XEK','VIX','CUS','QAS','GOL','QOC','YOS','VUC','YUJ'];

this.state.stimulus_1 = this.state.stimulus_1_bucket[Math.random() * this.state.stimulus_1_bucket.length | 0];
this.state.stimulus_2 = this.state.stimulus_2_bucket[Math.random() * this.state.stimulus_2_bucket.length | 0];
this.state.stimulus_3 = this.state.stimulus_3_bucket[Math.random() * this.state.stimulus_3_bucket.length | 0];
this.state.stimulus_4 = this.state.stimulus_4_bucket[Math.random() * this.state.stimulus_4_bucket.length | 0];

this.parameters.stim_1 = this.state.stimulus_1
this.parameters.stim_2 = this.state.stimulus_2
this.parameters.q_stim_1 = this.state.stimulus_1
this.parameters.q_stim_2 = this.state.stimulus_2

this.state.total_correct = 0

}
      },
      "title": "trial_list",
      "tardy": true,
      "shuffleGroups": [],
      "template": {
        "type": "lab.html.Frame",
        "context": "\u003Chead\u003E\n    \u003Cdiv id='countdown' class='timer_caption'\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fhead\u003E\n\n\u003Cmain data-labjs-section=\"frame\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n  \u003Ccanvas\u002F\u003E\n\u003C\u002Fmain\u003E",
        "contextSelector": "[data-labjs-section=\"frame\"]",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
time_left = 30;

downloadTimer = setInterval(function(){
  if(time_left <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = "Seconds remaining: " + Math.trunc(time_left);
  }
  time_left -= 1;
}, 1000);


},
          "after:end": function anonymous(
) {
clearInterval(downloadTimer);
}
        },
        "title": "timer",
        "tardy": true,
        "content": {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -50,
              "angle": 0,
              "width": 864.46,
              "height": 27.12,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "${this.parameters.stim_1} ${this.parameters.relation_1} ${this.parameters.stim_2}",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 150,
              "angle": 0,
              "width": 904.49,
              "height": 27.12,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Is ${this.parameters.q_stim_1} ${this.parameters.q_rel} ${this.parameters.q_stim_2}?",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": -250,
              "top": 250,
              "angle": 0,
              "width": 100,
              "height": 75,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "yes"
            },
            {
              "type": "aoi",
              "left": 250,
              "top": 250,
              "angle": 0,
              "width": 100,
              "height": 75,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "no"
            },
            {
              "type": "rect",
              "left": -250,
              "top": 250,
              "angle": 0,
              "width": 100,
              "height": 75,
              "stroke": "#000000",
              "strokeWidth": 1,
              "fill": "#a8ca09"
            },
            {
              "type": "rect",
              "left": 250,
              "top": 250,
              "angle": 0,
              "width": 100,
              "height": 75,
              "stroke": "#000000",
              "strokeWidth": 1,
              "fill": "#d6341a"
            },
            {
              "type": "i-text",
              "left": -250,
              "top": 250,
              "angle": 0,
              "width": 56.03,
              "height": 31.64,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "YES",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 250,
              "top": 250,
              "angle": 0,
              "width": 42,
              "height": 31.64,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "NO",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 864.46,
              "height": 27.12,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "${this.parameters.stim_3} ${this.parameters.relation_2} ${this.parameters.stim_4}",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 50,
              "angle": 0,
              "width": 864.46,
              "height": 27.12,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "${this.parameters.stim_5} ${this.parameters.relation_3} ${this.parameters.stim_6}",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": -200,
              "angle": 0,
              "width": 368.64,
              "height": 27.12,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Trial ${parameters.trial_num} of 67",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
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
            "mousedown @yes": "yes",
            "mousedown @no": "no"
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.parameters.stim_1 = this.state.stimulus_1
this.parameters.stim_2 = this.state.stimulus_2

if (this.parameters.stim_3_id == 2) { 
  this.parameters.stim_3 = this.state.stimulus_2;
} else if (this.parameters.stim_3_id == 3) {
  this.parameters.stim_3 = this.state.stimulus_3;
};

if (this.parameters.stim_4_id == 1) { 
  this.parameters.stim_4 = this.state.stimulus_1;
} else if (this.parameters.stim_4_id == 2) {
  this.parameters.stim_4 = this.state.stimulus_2;
} else if (this.parameters.stim_4_id == 3) {
  this.parameters.stim_4 = this.state.stimulus_3;
};

if (this.parameters.stim_5_id == 3) { 
  this.parameters.stim_5 = this.state.stimulus_3;
} else if (this.parameters.stim_5_id == 4) {
  this.parameters.stim_5 = this.state.stimulus_4;
};

if (this.parameters.stim_6_id == 2) { 
  this.parameters.stim_6 = this.state.stimulus_2;
} else if (this.parameters.stim_6_id == 3) {
  this.parameters.stim_6 = this.state.stimulus_3;
} else if (this.parameters.stim_6_id == 4) {
  this.parameters.stim_6 = this.state.stimulus_4;
};

if (this.parameters.q_stim_1_id == 1) { 
  this.parameters.q_stim_1 = this.state.stimulus_1;
} else if (this.parameters.q_stim_1_id == 2) {
  this.parameters.q_stim_1 = this.state.stimulus_2;
} else if (this.parameters.q_stim_1_id == 3) {
  this.parameters.q_stim_1 = this.state.stimulus_3;
} else if (this.parameters.q_stim_1_id == 4) {
  this.parameters.q_stim_1 = this.state.stimulus_4;
};

if (this.parameters.q_stim_2_id == 1) { 
  this.parameters.q_stim_2 = this.state.stimulus_1;
} else if (this.parameters.q_stim_2_id == 2) {
  this.parameters.q_stim_2 = this.state.stimulus_2;
} else if (this.parameters.q_stim_2_id == 3) {
  this.parameters.q_stim_2 = this.state.stimulus_3;
} else if (this.parameters.q_stim_2_id == 4) {
  this.parameters.q_stim_2 = this.state.stimulus_4;
};





},
            "after:end": function anonymous(
) {
// remove currently used stimuli from buckets
this.state.stimulus_1_bucket = this.state.stimulus_1_bucket.filter(item => item !== this.state.stimulus_1)
this.state.stimulus_2_bucket = this.state.stimulus_2_bucket.filter(item => item !== this.state.stimulus_2)
this.state.stimulus_3_bucket = this.state.stimulus_3_bucket.filter(item => item !== this.state.stimulus_3)
this.state.stimulus_4_bucket = this.state.stimulus_4_bucket.filter(item => item !== this.state.stimulus_4)


// select the new stimuli for the next trial //
this.state.stimulus_1 = this.state.stimulus_1_bucket[Math.random() * this.state.stimulus_1_bucket.length | 0];
this.state.stimulus_2 = this.state.stimulus_2_bucket[Math.random() * this.state.stimulus_2_bucket.length | 0];
this.state.stimulus_3 = this.state.stimulus_3_bucket[Math.random() * this.state.stimulus_3_bucket.length | 0];
this.state.stimulus_4 = this.state.stimulus_4_bucket[Math.random() * this.state.stimulus_4_bucket.length | 0];

if (this.state.correct == 1) {
  this.state.total_correct += 1
};
}
          },
          "title": "trial",
          "correctResponse": "${parameters.correct_response}",
          "tardy": true,
          "timeout": "31000"
        }
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "block": "5",
          "trial_num": "56",
          "relation_1": "is the same as",
          "relation_2": "is the same as",
          "q_stim_1_id": "1",
          "q_stim_2_id": "2",
          "q_rel": "the same as",
          "q_stim_3_id": "3",
          "q_stim_4_id": "4",
          "correct_response": "yes"
        },
        {
          "block": "5",
          "trial_num": "57",
          "relation_1": "is opposite to",
          "relation_2": "is opposite to",
          "q_stim_1_id": "2",
          "q_stim_2_id": "1",
          "q_rel": "different to",
          "q_stim_3_id": "3",
          "q_stim_4_id": "4",
          "correct_response": "no"
        },
        {
          "block": "5",
          "trial_num": "58",
          "relation_1": "comes before",
          "relation_2": "comes before",
          "q_stim_1_id": "1",
          "q_stim_2_id": "2",
          "q_rel": "the same as",
          "q_stim_3_id": "3",
          "q_stim_4_id": "4",
          "correct_response": "yes"
        },
        {
          "block": "5",
          "trial_num": "59",
          "relation_1": "comes before",
          "relation_2": "comes before",
          "q_stim_1_id": "2",
          "q_stim_2_id": "1",
          "q_rel": "different to",
          "q_stim_3_id": "3",
          "q_stim_4_id": "4",
          "correct_response": "no"
        },
        {
          "block": "5",
          "trial_num": "60",
          "relation_1": "is the same as",
          "relation_2": "is opposite to",
          "q_stim_1_id": "1",
          "q_stim_2_id": "2",
          "q_rel": "the same as",
          "q_stim_3_id": "3",
          "q_stim_4_id": "4",
          "correct_response": "no"
        },
        {
          "block": "5",
          "trial_num": "61",
          "relation_1": "is opposite to",
          "relation_2": "is the same as",
          "q_stim_1_id": "2",
          "q_stim_2_id": "1",
          "q_rel": "different to",
          "q_stim_3_id": "3",
          "q_stim_4_id": "4",
          "correct_response": "yes"
        },
        {
          "block": "5",
          "trial_num": "62",
          "relation_1": "comes after",
          "relation_2": "comes before",
          "q_stim_1_id": "1",
          "q_stim_2_id": "2",
          "q_rel": "the same as",
          "q_stim_3_id": "3",
          "q_stim_4_id": "4",
          "correct_response": "no"
        },
        {
          "block": "5",
          "trial_num": "63",
          "relation_1": "comes after",
          "relation_2": "comes before",
          "q_stim_1_id": "2",
          "q_stim_2_id": "1",
          "q_rel": "different to",
          "q_stim_3_id": "3",
          "q_stim_4_id": "4",
          "correct_response": "no"
        },
        {
          "block": "5",
          "trial_num": "64",
          "relation_1": "is more than",
          "relation_2": "is more than",
          "q_stim_1_id": "1",
          "q_stim_2_id": "2",
          "q_rel": "the same as",
          "q_stim_3_id": "3",
          "q_stim_4_id": "4",
          "correct_response": "yes"
        },
        {
          "block": "5",
          "trial_num": "65",
          "relation_1": "is less than",
          "relation_2": "is less than",
          "q_stim_1_id": "2",
          "q_stim_2_id": "1",
          "q_rel": "the same as",
          "q_stim_3_id": "3",
          "q_stim_4_id": "4",
          "correct_response": "no"
        },
        {
          "block": "5",
          "trial_num": "66",
          "relation_1": "is more than",
          "relation_2": "is less than",
          "q_stim_1_id": "1",
          "q_stim_2_id": "2",
          "q_rel": "the same as",
          "q_stim_3_id": "3",
          "q_stim_4_id": "4",
          "correct_response": "no"
        },
        {
          "block": "5",
          "trial_num": "67",
          "relation_1": "is less than",
          "relation_2": "is more than",
          "q_stim_1_id": "1",
          "q_stim_2_id": "2",
          "q_rel": "the same as",
          "q_stim_3_id": "3",
          "q_stim_4_id": "4",
          "correct_response": "no"
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

this.state.stimulus_1 = this.state.stimulus_1_bucket[Math.random() * this.state.stimulus_1_bucket.length | 0];
this.state.stimulus_2 = this.state.stimulus_2_bucket[Math.random() * this.state.stimulus_2_bucket.length | 0];
this.state.stimulus_3 = this.state.stimulus_3_bucket[Math.random() * this.state.stimulus_3_bucket.length | 0];
this.state.stimulus_4 = this.state.stimulus_4_bucket[Math.random() * this.state.stimulus_4_bucket.length | 0];

this.parameters.stim_1 = this.state.stimulus_1
this.parameters.stim_2 = this.state.stimulus_2
this.parameters.stim_3 = this.state.stimulus_3
this.parameters.stim_4 = this.state.stimulus_4
this.parameters.q_stim_1 = this.state.stimulus_1
this.parameters.q_stim_2 = this.state.stimulus_2
this.parameters.q_stim_3 = this.state.stimulus_3
this.parameters.q_stim_4 = this.state.stimulus_4

}
      },
      "title": "trial_list_analogical ",
      "tardy": true,
      "shuffleGroups": [],
      "template": {
        "type": "lab.html.Frame",
        "context": "\u003Chead\u003E\n    \u003Cdiv id='countdown' class='timer_caption'\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fhead\u003E\n\n\u003Cmain data-labjs-section=\"frame\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n  \u003Ccanvas\u002F\u003E\n\u003C\u002Fmain\u003E",
        "contextSelector": "[data-labjs-section=\"frame\"]",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
time_left = 30;

downloadTimer = setInterval(function(){
  if(time_left <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = "Seconds remaining: " + Math.trunc(time_left);
  }
  time_left -= 1;
}, 1000);


},
          "after:end": function anonymous(
) {
clearInterval(downloadTimer);
}
        },
        "title": "timer",
        "tardy": true,
        "content": {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -50,
              "angle": 0,
              "width": 864.46,
              "height": 27.12,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "${this.parameters.stim_1} ${this.parameters.relation_1} ${this.parameters.stim_2}",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 150,
              "angle": 0,
              "width": 656.34,
              "height": 90.04,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Is ${this.parameters.q_stim_1} to ${this.parameters.q_stim_2}\n${this.parameters.q_rel} \n${this.parameters.q_stim_3} to ${this.parameters.q_stim_4}?",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": -250,
              "top": 250,
              "angle": 0,
              "width": 100,
              "height": 75,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "yes"
            },
            {
              "type": "aoi",
              "left": 250,
              "top": 250,
              "angle": 0,
              "width": 100,
              "height": 75,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "no"
            },
            {
              "type": "rect",
              "left": -250,
              "top": 250,
              "angle": 0,
              "width": 100,
              "height": 75,
              "stroke": "#000000",
              "strokeWidth": 1,
              "fill": "#a8ca09"
            },
            {
              "type": "rect",
              "left": 250,
              "top": 250,
              "angle": 0,
              "width": 100,
              "height": 75,
              "stroke": "#000000",
              "strokeWidth": 1,
              "fill": "#d6341a"
            },
            {
              "type": "i-text",
              "left": -250,
              "top": 250,
              "angle": 0,
              "width": 56.03,
              "height": 31.64,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "YES",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 250,
              "top": 250,
              "angle": 0,
              "width": 42,
              "height": 31.64,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "NO",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 864.46,
              "height": 27.12,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "${this.parameters.stim_3} ${this.parameters.relation_2} ${this.parameters.stim_4}",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": -200,
              "angle": 0,
              "width": 368.64,
              "height": 27.12,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Trial ${parameters.trial_num} of 67",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
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
            "mousedown @yes": "yes",
            "mousedown @no": "no"
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.parameters.stim_1 = this.state.stimulus_1
this.parameters.stim_2 = this.state.stimulus_2
this.parameters.stim_3 = this.state.stimulus_3
this.parameters.stim_4 = this.state.stimulus_4
this.parameters.q_stim_1 = this.state.stimulus_1
this.parameters.q_stim_2 = this.state.stimulus_2
this.parameters.q_stim_3 = this.state.stimulus_3
this.parameters.q_stim_4 = this.state.stimulus_4

if (this.parameters.stim_1_id == 1) { 
  this.parameters.stim_1 = this.state.stimulus_1;
} else if (this.parameters.stim_3_id == 2) {
  this.parameters.stim_1 = this.state.stimulus_2;
};

if (this.parameters.stim_2_id == 1) { 
  this.parameters.stim_2 = this.state.stimulus_1;
} else if (this.parameters.stim_4_id == 2) {
  this.parameters.stim_2 = this.state.stimulus_2;
};

if (this.parameters.q_stim_1_id == 1) { 
  this.parameters.q_stim_1 = this.state.stimulus_1;
} else if (this.parameters.q_stim_1_id == 2) {
  this.parameters.q_stim_1 = this.state.stimulus_2;
};

if (this.parameters.q_stim_2_id == 1) { 
  this.parameters.q_stim_2 = this.state.stimulus_1;
} else if (this.parameters.q_stim_2_id == 2) {
  this.parameters.q_stim_2 = this.state.stimulus_2;
};


},
            "after:end": function anonymous(
) {
// remove currently used stimuli from buckets 
this.state.stimulus_1_bucket = this.state.stimulus_1_bucket.filter(item => item !== this.state.stimulus_1)
this.state.stimulus_2_bucket = this.state.stimulus_2_bucket.filter(item => item !== this.state.stimulus_2)
this.state.stimulus_3_bucket = this.state.stimulus_3_bucket.filter(item => item !== this.state.stimulus_3)
this.state.stimulus_4_bucket = this.state.stimulus_4_bucket.filter(item => item !== this.state.stimulus_4)


// select the new stimuli for the next trial //
this.state.stimulus_1 = this.state.stimulus_1_bucket[Math.random() * this.state.stimulus_1_bucket.length | 0];
this.state.stimulus_2 = this.state.stimulus_2_bucket[Math.random() * this.state.stimulus_2_bucket.length | 0];
this.state.stimulus_3 = this.state.stimulus_3_bucket[Math.random() * this.state.stimulus_3_bucket.length | 0];
this.state.stimulus_4 = this.state.stimulus_4_bucket[Math.random() * this.state.stimulus_4_bucket.length | 0];

if (this.state.correct == 1) {
  this.state.total_correct += 1
};
}
          },
          "title": "trial",
          "correctResponse": "${parameters.correct_response}",
          "tardy": true,
          "timeout": "31000"
        }
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Thank you! ",
          "content": "Your responses have been recorded. In total, you got ${this.state.total_correct} out of 67 questions correct. "
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
      "title": "Completion",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()