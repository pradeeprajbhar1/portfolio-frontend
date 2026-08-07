/* =====================================================
   TYPING ANIMATION
   Portfolio Hero Section
   ===================================================== */


const typingElement = document.getElementById("typing");


// Text List

const textArray = [

    "Web Developer",

    "Software Engineer",

    "Data Analyst",

    "Power BI Enthusiast"

];

let textIndex = 0;

let charIndex = 0;

let isDeleting = false;

// Typing Function

function typingEffect(){



    const currentText = textArray[textIndex];



    if(!isDeleting){


        // Adding Characters

        typingElement.textContent =
        currentText.substring(0,charIndex++);



        // Complete Word

        if(charIndex > currentText.length){


            isDeleting = true;


            setTimeout(typingEffect,1000);


            return;


        }


    }

    else{


        // Removing Characters


        typingElement.textContent =
        currentText.substring(0,charIndex--);



        // Word Removed

        if(charIndex === 0){


            isDeleting = false;


            textIndex++;



            if(textIndex >= textArray.length){


                textIndex = 0;


            }


        }


    }



    setTimeout(typingEffect,100);


}



// Start Animation

typingEffect();