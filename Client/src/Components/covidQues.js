const questions = [
    {
      "_id": "5ed21b07818daa010f15e513",
      "description": "What is a virus?",
      "id": "1",
      "alternatives": [
        {
          "isCorrect": false,
          "_id": "5ed21b07818daa010f15e514",
          "text": "A microscopic, single-celled organism"
        },
        {
          "isCorrect": true,
          "_id": "5ed21b07818daa010f15e515",
          "text": "A sub-microscopic infectious agent that replicates only inside the living cells of an organism"
        },
        {
          "isCorrect": false,
          "_id": "5ed21b07818daa010f15e516",
          "text": "A multicellular organism with chlorophyll as its primary photosynthetic pigment"
        }
      ],
      "__v": 0
    },
    {
      "_id": "5ed21c0c16d86f012a75b8f9",
      "description": "What is the official name of the virus as designated by the World Health Organization (WHO)?",
      "id": "2",
      "alternatives": [
        {
          "isCorrect": true,
          "_id": "5ed21c0c16d86f012a75b8fa",
          "text": "Sars-CoV-2"
        },
        {
          "isCorrect": false,
          "_id": "5ed21c0c16d86f012a75b8fb",
          "text": "Covid-19"
        },
        {
          "isCorrect": false,
          "_id": "5ed21c0c16d86f012a75b8fc",
          "text": "Wuhan flu"
        }
      ],
      "__v": 0
    },
    {
      "_id": "5ed21c5d16d86f012a75b8fd",
      "description": "What does the 19 in Covid-19 stand for?",
      "id": "3",
      "alternatives": [
        {
          "isCorrect": false,
          "_id": "5ed21c5d16d86f012a75b8fe",
          "text": "It refers to the 19 molecules that make up the virus"
        },
        {
          "isCorrect": false,
          "_id": "5ed21c5d16d86f012a75b8ff",
          "text": "It is the 19th coronavirus identified since the WHO began naming them"
        },
        {
          "isCorrect": true,
          "_id": "5ed21c5d16d86f012a75b900",
          "text": "It is the year the virus was first encountered: 2019"
        }
      ],
      "__v": 0
    },
    {
      "_id": "5ed21ccc16d86f012a75b901",
      "description": "About what percentage of infected people recover without needing hospital treatment according to the World Health Organisation website?",
      "id": "4",
      "alternatives": [
        {
          "isCorrect": false,
          "_id": "5ed21ccc16d86f012a75b902",
          "text": "60%"
        },
        {
          "isCorrect": false,
          "_id": "5ed21ccc16d86f012a75b903",
          "text": "70%"
        },
        {
          "isCorrect": true,
          "_id": "5ed21ccc16d86f012a75b904",
          "text": "80%"
        },
        {
          "isCorrect": false,
          "_id": "5ed21ccc16d86f012a75b905",
          "text": "90%"
        }
      ],
      "__v": 0
    },
    {
      "_id": "5ed21d3116d86f012a75b906",
      "description": "Which of these is NOT listed by the WHO as a symptom of coronavirus?",
      "id": "5",
      "alternatives": [
        {
          "isCorrect": false,
          "_id": "5ed21d3116d86f012a75b907",
          "text": "Fever"
        },
        {
          "isCorrect": false,
          "_id": "5ed21d3116d86f012a75b908",
          "text": "Dry cough"
        },
        {
          "isCorrect": true,
          "_id": "5ed21d3116d86f012a75b909",
          "text": "Blurred vision"
        },
        {
          "isCorrect": false,
          "_id": "5ed21d3116d86f012a75b90a",
          "text": "Nasal congestion"
        }
      ],
      "__v": 0
    },
    {
      "_id": "5ed21d7d16d86f012a75b90b",
      "description": "What is more effective at removing the coronavirus from your hands",
      "id": "6",
      "alternatives": [
        {
          "isCorrect": false,
          "_id": "5ed21d7d16d86f012a75b90c",
          "text": "Alcohol-based hand sanitiser"
        },
        {
          "isCorrect": true,
          "_id": "5ed21d7d16d86f012a75b90d",
          "text": "Soap and water"
        }
      ],
      "__v": 0
    },
    {
      "_id": "5ed21dc716d86f012a75b90e",
      "description": "How big is the coronavirus?",
      "id": "7",
      "alternatives": [
        {
          "isCorrect": false,
          "_id": "5ed21dc716d86f012a75b90f",
          "text": "8 billionths of a metre in diameter"
        },
        {
          "isCorrect": true,
          "_id": "5ed21dc716d86f012a75b910",
          "text": "80 billionths of a metre in diameter"
        },
        {
          "isCorrect": false,
          "_id": "5ed21dc716d86f012a75b911",
          "text": "800 billionths of a metre in diameter"
        }
      ],
      "__v": 0
    },
    {
      "_id": "5ed21e0316d86f012a75b912",
      "description": "What does the virus attach itself to when it enters the human body?",
      "id": "8",
      "alternatives": [
        {
          "isCorrect": false,
          "_id": "5ed21e0316d86f012a75b913",
          "text": "Antigens"
        },
        {
          "isCorrect": false,
          "_id": "5ed21e0316d86f012a75b914",
          "text": "Red blood cells"
        },
        {
          "isCorrect": true,
          "_id": "5ed21e0316d86f012a75b915",
          "text": "Ace-2 receptors in the lining of the airways"
        }
      ],
      "__v": 0
    },
    {
      "_id": "5ed21e5516d86f012a75b916",
      "description": "The virus replicates by inserting its RNA into a human cell’s own replication machinery. It makes multiple copies of itself, and these burst out of the cell, causing the infection to spread. What does RNA stand for?",
      "id": "9",
      "alternatives": [
        {
          "isCorrect": true,
          "_id": "5ed21e5516d86f012a75b917",
          "text": "Ribonucleic acid"
        },
        {
          "isCorrect": false,
          "_id": "5ed21e5516d86f012a75b918",
          "text": "Reductone nano articulate"
        },
        {
          "isCorrect": false,
          "_id": "5ed21e5516d86f012a75b919",
          "text": "Reproducing nucleic agent"
        }
      ],
      "__v": 0
    },
    {
      "_id": "5ed21e9016d86f012a75b91a",
      "description": "How long can the virus survive on plastic and stainless steel surfaces, according to studies?",
      "id": "10",
      "alternatives": [
        {
          "isCorrect": true,
          "_id": "5ed21e9016d86f012a75b91b",
          "text": "72 hours or more"
        },
        {
          "isCorrect": false,
          "_id": "5ed21e9016d86f012a75b91c",
          "text": "24 to 60 hours"
        },
        {
          "isCorrect": false,
          "_id": "5ed21e9016d86f012a75b91d",
          "text": "4 to 12 hours"
        }
      ],
      "__v": 0
    },
    {
      "_id": "5ed21ee116d86f012a75b91e",
      "description": "This is not the first widespread coronavirus encountered by humans. But which of these is NOT a type of coronavirus?",
      "id": "11",
      "alternatives": [
        {
          "isCorrect": false,
          "_id": "5ed21ee116d86f012a75b91f",
          "text": "Severe acute respiratory syndrome (Sars)"
        },
        {
          "isCorrect": false,
          "_id": "5ed21ee116d86f012a75b920",
          "text": "Middle East respiratory syndrome (Mers)"
        },
        {
          "isCorrect": true,
          "_id": "5ed21ee116d86f012a75b921",
          "text": "Ebola"
        }
      ],
      "__v": 0
    },
    {
      "_id": "5ed21f1116d86f012a75b922",
      "description": "Governments around the world have been monitoring the 'R number' to determine when to ease lockdown restrictions. What is the R number?",
      "id": "12",
      "alternatives": [
        {
          "isCorrect": false,
          "_id": "5ed21f1116d86f012a75b923",
          "text": "The percentage of confirmed coronavirus cases that lead to death"
        },
        {
          "isCorrect": false,
          "_id": "5ed21f1116d86f012a75b924",
          "text": "The percentage of the population that has been tested for the coronavirus"
        },
        {
          "isCorrect": true,
          "_id": "5ed21f1116d86f012a75b925",
          "text": "The average number of people to whom one infected person will pass on the virus"
        }
      ],
      "__v": 0
    },
    {
      "_id": "5ed21f5016d86f012a75b926",
      "description": "Which organ in the body does this coronavirus primarily attack?",
      "id": "13",
      "alternatives": [
        {
          "isCorrect": true,
          "_id": "5ed21f5016d86f012a75b927",
          "text": "Lungs"
        },
        {
          "isCorrect": false,
          "_id": "5ed21f5016d86f012a75b928",
          "text": "Liver"
        },
        {
          "isCorrect": false,
          "_id": "5ed21f5016d86f012a75b929",
          "text": "Heart"
        }
      ],
      "__v": 0
    },
    {
      "_id": "5ed21f7d16d86f012a75b92a",
      "description": "Does the UK's National Health Service say you can use ibuprofen as a treatment of the symptoms of Covid-19?",
      "id": "14",
      "alternatives": [
        {
          "isCorrect": true,
          "_id": "5ed21f7d16d86f012a75b92b",
          "text": "Yes"
        },
        {
          "isCorrect": false,
          "_id": "5ed21f7d16d86f012a75b92c",
          "text": "No"
        }
      ],
      "__v": 0
    }

  ]
  export default questions