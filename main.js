document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('feeSelect');

    // Add event listener to the select element
    selectElement.addEventListener('change', function() {
        const selectedOptionGroup = selectElement.options[selectElement.selectedIndex].parentNode;
        const label = selectedOptionGroup.getAttribute('label');
        document.getElementById('selectedGroupLabel').innerText = "* Using " + label + " fee rate";
    });

    // Initial calculation when the page loads
    calculateFees();
});

function calculateFees() {
    const selectElement = document.getElementById('feeSelect');
    const userFeeOption = parseFloat(selectElement.value);

    // Your existing calculation logic here...

    // Call your calculation function
    const { fee, amountAfterFees } = calculatePaypalFees(userAmount, userFeeOption);

    // Update the labels and values
    document.getElementById('intialpay').innerText = `$${userAmount.toFixed(2)}`;
    document.getElementById('cutfee').innerText = `$${fee.toFixed(2)}`;
}

function calculateFees() {
    let a=document.getElementsByTagName("input")[1].value;
    document.getElementById("intialpay").innerHTML="€"+a;
    document.getElementById("reciveamo").innerHTML="€"+a;
    


document.addEventListener('DOMContentLoaded', function() {

    const selectElement = document.getElementById('feeSelect');
    const userFeeOption = parseFloat(selectElement.value);
    

   
    const userAmount = parseFloat(document.getElementsByTagName("input")[1].value);

   
    const { fee, amountAfterFees } = calculatePaypalFees(userAmount, userFeeOption);

    
    document.getElementById('intialpay').innerText = `$${userAmount.toFixed(2)};`
    document.getElementById('cutfee').innerText = `$${fee.toFixed(2)};`
});



// Define a function to calculate PayPal fees based on the selected fee option
function calculatePaypalFees(amount, feeOption) {
    // Define the fee rates as an array of objects (percentage, fixed fee)
    const feeRates = [
        { percentage: 0.0249, fixedFee: 0.35 },  
        { percentage: 0.0219, fixedFee: 0.35 },  
        { percentage: 0.0199, fixedFee: 0.35 },  
        { percentage: 0.0179, fixedFee: 0.35 },  
        { percentage: 0.0149, fixedFee: 0.35 },  
        { percentage: 0.10, fixedFee: 0.10 },  
        { percentage: 0.0150, fixedFee: 0.35 },  
        // { percentage: 0.0240, fixedFee: 0.05 },  
        { percentage: 0.0429, fixedFee: 0.35 },  
        { percentage: 0.0449, fixedFee: 0.35 },  
        { percentage: 0.0549, fixedFee: 0.35 },  
        { percentage: 0.0579, fixedFee: 0.35 },  
        { percentage: 0.12, fixedFee: 0.10 }  
    ];

    // Get the selected fee rate
    const selectedFeeRate = feeRates[feeOption];

    // Calculate the fee
    const fee = (amount * selectedFeeRate.percentage) + selectedFeeRate.fixedFee;
    
    // Calculate the amount after fees
    const amountAfterFees = amount - fee;

    // Return the fee and the amount after fees
    return { fee, amountAfterFees };
}

// Example usage
const userAmount = document.getElementsByTagName("input")[1].value;  // User enters $100
const userFeeOption = document.getElementsByTagName("select")[1].value;

// const userFeeOption = parseFloat(selectElement.value); // User selects the first option

// Calculate the fees and the amount after fees
const { fee, amountAfterFees } = calculatePaypalFees(userAmount, userFeeOption);


let Expressamount=(fee/userAmount)*100

//For Sending
document.getElementById("cutfee").innerHTML="€"+fee.toFixed(2)
document.getElementById("remaming").innerHTML="€"+amountAfterFees.toFixed(2)
document.getElementById("Express").innerHTML=Expressamount.toFixed(2)+"%"

//Reciving Calculation
let Rpayment=(userAmount/(1-(fee/userAmount)))
let Rfee=Rpayment-userAmount
let REffactivly=(Rfee/Rpayment)*100


//For Reciving
document.getElementById("Recpayment").innerHTML="€"+Rpayment.toFixed(2)
document.getElementById("Recfee").innerHTML="€"+Rfee.toFixed(2)
document.getElementById("RecEffactivly").innerHTML=REffactivly.toFixed(2)+"%"




    // Set Lable Value

    let selectedGroupLabel=document.querySelector("#selectedGroupLabel")
    let selectedGroupLabel1=document.querySelector("#selectedGroupLabel1")


    if(userFeeOption==0){
        selectedGroupLabel.innerHTML=`* Unter Verwendung des Inlandsgebührensatzes von 2,49% + €,35 (für Waren und Dienstleistungen)`
        selectedGroupLabel1.innerHTML=`* Unter Verwendung des Inlandsgebührensatzes von 2,49% + €,35 (für Waren und Dienstleistungen)`
    }
    else if(userFeeOption==1){
        selectedGroupLabel.innerHTML="* Unter Verwendung des Inlandsgebührensatzes von 2,19% + €,35 (Kredit- und Debitkarten)"
        selectedGroupLabel1.innerHTML="* Unter Verwendung des Inlandsgebührensatzes von 2,19% + €,35 (Kredit- und Debitkarten)"
    }
    else if(userFeeOption==2){
        selectedGroupLabel.innerHTML=`* Unter Verwendung des Inlandsgebührensatzes von 1,99% + €,35 (Waren und Dienstleistungen, Spenden)`
        selectedGroupLabel1.innerHTML=`* Unter Verwendung des Inlandsgebührensatzes von 1,99% + €,35 (Waren und Dienstleistungen, Spenden)`
    }
    else if(userFeeOption==3){
        selectedGroupLabel.innerHTML=`* Unter Verwendung des Inlandsgebührensatzes von 1.79% + €,35 (Wohltätigkeit)`
        selectedGroupLabel1.innerHTML=`* Unter Verwendung des Inlandsgebührensatzes von 1.79% + €,35 (Wohltätigkeit)`
    }
    else if(userFeeOption==4){
        selectedGroupLabel.innerHTML=`* Unter Verwendung des Inlandsgebührensatzes von 1,49% + €,35 (Mikrozahlung)`
        selectedGroupLabel1.innerHTML=`* Unter Verwendung des Inlandsgebührensatzes von 1,49% + €,35 (Mikrozahlung)`
    }
    else if(userFeeOption==5){
        selectedGroupLabel.innerHTML=`* Unter Verwendung des Inlandsgebührensatzes von 10% €,10 (Mikrozahlung)`
        selectedGroupLabel1.innerHTML=`* Unter Verwendung des Inlandsgebührensatzes von 10% €,10 (Mikrozahlung)`
    }
    else if(userFeeOption==6){
        selectedGroupLabel.innerHTML=`* Unter Verwendung des Inlandsgebührensatzes von 1.5% + €,35 (Wohltätigkeit)`
        selectedGroupLabel1.innerHTML=`* Unter Verwendung des Inlandsgebührensatzes von 1.5% + €,35 (Wohltätigkeit)`
    }
    else if(userFeeOption==7){
        selectedGroupLabel.innerHTML=`* Unter Verwendung des internationalen Gebührensatzes von 4,29% + €,35 (+1,8 % aus Nordeuropa)`
        selectedGroupLabel1.innerHTML=`* Unter Verwendung des internationalen Gebührensatzes von 4,29% + €,35 (+1,8 % aus Nordeuropa)`
    }
    else if(userFeeOption==8){
        selectedGroupLabel.innerHTML=`* Unter Verwendung des internationalen Gebührensatzes von 4,49% + €,35 (+2,0 % aus Europa I & Nordamerika)`
        selectedGroupLabel1.innerHTML=`* Unter Verwendung des internationalen Gebührensatzes von 4,49% + €,35 (+2,0 % aus Europa I & Nordamerika)`
    }
    else if(userFeeOption==9){
        selectedGroupLabel.innerHTML=`* Unter Verwendung des internationalen Gebührensatzes von 5,49% + €,35 (+3,0 % aus Europa II)`
        selectedGroupLabel1.innerHTML=`* Unter Verwendung des internationalen Gebührensatzes von 5,49% + €,35 (+3,0 % aus Europa II)`
    }
    else if(userFeeOption==10){
        selectedGroupLabel.innerHTML=`* Unter Verwendung des internationalen Gebührensatzes von 5,79% + €,35 (+3,3 % aus Lateinamerika, APAC, anderen Ländern)`
        selectedGroupLabel1.innerHTML=`* Unter Verwendung des internationalen Gebührensatzes von 5,79% + €,35 (+3,3 % aus Lateinamerika, APAC, anderen Ländern)`
    }
    else if(userFeeOption==11){
        selectedGroupLabel.innerHTML=`* Unter Verwendung des internationalen Gebührensatzes von 12% + €,10 (Mikrozahlung)`
        selectedGroupLabel1.innerHTML=`* Unter Verwendung des internationalen Gebührensatzes von 12% + €,10 (Mikrozahlung)`
    }





//second tab pr recive ka button hide ha

let recive=document.getElementById("recive")
let reciveEdit=document.getElementById("reciveEdit")

let againNewding=document.getElementById("againNewding")
let editValue=document.getElementsByClassName("editValue")[0]

reciveEdit.style.display="none"
againNewding.style.display="none"

// editValue.display.style="block"
}





// Show Input Boxes


let recive=document.getElementById("recive")
let reciveEdit=document.getElementById("reciveEdit")

let againNewding=document.getElementById("againNewding")
let editValue=document.getElementsByClassName("editValue")[0]

// Sending Tab

let cutfee=document.getElementById("cutfee")
let remaming=document.getElementById("remaming")
let Express=document.getElementById("Express")

// Reciving Tab

let Recpayment=document.getElementById("Recpayment")
let Recfee=document.getElementById("Recfee")
let RecEffactivly=document.getElementById("RecEffactivly")

 selectedGroupLabel=document.querySelector("#selectedGroupLabel")
 selectedGroupLabel1=document.querySelector("#selectedGroupLabel1")






// let get Calculate the value after edit


function editSendingf(){
    recive.style.display="none"
    reciveEdit.style.display="block"

    editValue.style.display="none"
    againNewding.style.display="block"


    let inputvalue=document.getElementsByTagName("input")[1].value;
    document.getElementById("intialpay").innerHTML="€"+inputvalue
    document.getElementById("reciveamo").innerHTML="€"+inputvalue
    

    //Sending tab After Click on edit

    let inputbox1 = parseFloat(document.getElementById("percentageInput").value);
    let inputbox2 = parseFloat(document.getElementById("fixedFeeInput").value);

    let sendingFee = (((inputbox1 / 100) * inputvalue) + inputbox2).toFixed(2);
    cutfee.innerHTML="€"+sendingFee

    let afterFee=inputvalue-sendingFee
    remaming.innerHTML="€"+afterFee.toFixed(2)

    let effectivelyFee= ((sendingFee/inputvalue)*100).toFixed(2);
    Express.innerHTML=effectivelyFee+"%"


    // Reciving tab After Click on edit
    
    let receivingFee=(inputvalue/(1-(sendingFee/inputvalue))).toFixed(2)
    Recpayment.innerHTML="€"+receivingFee

    let afterReceivingFee=(receivingFee-inputvalue).toFixed(2)
    Recfee.innerHTML="€"+afterReceivingFee

    let effectivelyRecieveFee=((afterReceivingFee/receivingFee)*100).toFixed(2)
    RecEffactivly.innerHTML=effectivelyRecieveFee+"%"


    // Set Lable Value after Edit

    selectedGroupLabel.innerHTML=`* Using custom fee rate of ${inputbox1}% + $${inputbox2}`
    selectedGroupLabel1.innerHTML=`* Using custom fee rate of ${inputbox1}% + $${inputbox2}`

    
}



document.addEventListener('DOMContentLoaded', function() {
    const editLink = document.getElementById('editLink');
    const editFields = document.getElementById('editFields');
    const feeSelect = document.getElementById('Fee');

    const Fee=document.querySelector("#Fee")
    const getvalue=document.querySelector("#getvalue")
    
    let label=document.querySelectorAll(".tab-wrap label")[0]
    let label1=document.querySelectorAll(".tab-wrap label")[3]
    let label2=document.querySelectorAll(".tab-wrap label")[7]

    
    

    let sending=document.querySelector("#getvalue")

    editLink.addEventListener('click', function() {
        if (editFields.style.display === 'none') {
            
            editFields.style.display = 'block';
            feeSelect.style.display = 'none';
            editLink.innerText = 'kürzen';
            // editLink.style.marginLeft="54%"
            editLink.style.position="relative"
            editLink.style.left="50%"
            sending.style.display="none"

            const selectedOptionValue = feeSelect.value;
            const selectedOptionText = feeSelect.options[feeSelect.selectedIndex].text;
            const percentage = parseFloat(selectedOptionText.match(/(\d+\.\d+)%/)[1]);
            const fixedFee = parseFloat(selectedOptionText.match(/\$.+/)[0].substr(1));
            document.getElementById('percentageInput').value = percentage;
            document.getElementById('fixedFeeInput').value = fixedFee;


            //Top Lable Style After Editing
            label.style.margin= "0px 160px 0px 0px"
            label1.style.margin="0px 160px 0px 0px"
            label2.style.margin="0px 160px 0px 0px"
        } else {
            editFields.style.display = 'none';
            feeSelect.style.display = 'block';
            feeSelect.style.marginLeft="34%"
            feeSelect.style.position="relative"
            feeSelect.style.bottom="40px"

            editLink.innerText = 'cutten';
            // editLink.style.marginLeft="45%"
            editLink.style.position="relative"
            editLink.style.left="95%"
            editLink.style.top="0px"

            sending.style.display="block"
            sending.style.marginTop="-50px"
            sending.style.marginLeft="48%"

            Fee.style.marginLeft="30%"
            Fee.style.position="relative"
            Fee.style.top="-50px"
            getvalue.style.marginLeft="50%"

            // Sending Tab
            let sendaftercancel=document.getElementById("recive")
            sendaftercancel.style.display="inline-block"

            // Reciving Tab
            reciveaftercancel=document.getElementById("receive3")
            reciveaftercancel.style.display="inline-block"
        }
    });
    calculateFees();
});











//Jab Reset button pr click ho ga.... to input field ma value 0 set ho jay gi
function resetf() {
    document.getElementById('payment').value = '';
}



/*Jab user input field ma decrement waly arrow pr click kry ga.... to value 0 hony 
ky bad Minus ma ni jay gi... 0 pr stop ho jay gi*/

function checkValue() {
    var numberInput = document.getElementById('payment');
    var value = parseInt(numberInput.value, 10);

    if (value < 0) {
        numberInput.value = 0;
    }
}

document.getElementById('payment').addEventListener('input', checkValue);



//Form Focus Function

let payment=document.getElementById("payment")
payment.addEventListener("focus",function(e){
    e.target.style.boxShadow="0px 0px 2px 5px rgba(173, 216, 250, 1)"
    e.target.style.borderRadius="2px"
})
payment.addEventListener("blur",function(e){
    e.target.style.boxShadow=""
    e.target.style.borderRadius=""
})

// let cou=document.getElementsByClassName("Country")[0]
// cou.addEventListener("focus",function(e){
//     e.target.style.boxShadow="0px 0px 2px 5px rgba(173, 216, 250, 1)"
//     e.target.style.borderRadius="2px"
// })
// cou.addEventListener("blur",function(e){
//     e.target.style.boxShadow=""
//     e.target.style.borderRadius=""
// })

//  cou=document.getElementsByClassName("Country")[1]
// cou.addEventListener("focus",function(e){
//     e.target.style.boxShadow="0px 0px 2px 5px rgba(173, 216, 250, 1)"
//     e.target.style.borderRadius="2px"
// })
// cou.addEventListener("blur",function(e){
//     e.target.style.boxShadow=""
//     e.target.style.borderRadius=""
// })

function focusf(e){
    e.style.boxShadow="0px 0px 2px 5px rgba(173, 216, 250, 1)"
    e.style.borderRadius="2px"
}
function blurf(e){
    e.style.boxShadow=""
}
