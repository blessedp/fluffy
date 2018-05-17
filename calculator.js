console.log('calculating net pay');
console.log('Please input your gross pay');
grossPay = 500000;

console.log('Your gross pay is ' + grossPay);



function calcMycontribution(grossPay){
    return (5/100) * grossPay;
}


function calcMyEmployerContribution(grossPay){
    return (10/100) * grossPay;
}

function calculatePAYE(grossPay){
   gp =grossPay;
   PAYE =0;
   if(gp <=235000){
       PAYE =0;
   }
   else if((gp> 235000 && gp < 335000)){
       increment =gp - 235000;
       PAYE = 0.1 * increment;
       if (PAYE > 10,000){
           PAYE = 10000;
       }
       else if ((gp > 335000 && gp < 410000)){
           increment2 =gp -335000;
           PAYE = 0.2 * increment2 + 10000;
           if (PAYE > 25000){
               PAYE = 25000;
           }
           else if ((gp > 410000 && gp < 20000000)){
               increment3 = gp - 410000;
               PAYE = 0.3 * increment3 + 10000 + 25000;
               if (PAYE > 19590000 ){
                   PAYE =19590000;
               }

           }
       }

   } 
}
function netpayCalculator(grossPay){
    gp = grossPay;
    nssf = calcMycontribution( grossPay);
    myPAYE = calculatePAYE(grossPay);

    np = gp - nssf -myPAYE;
    console.log ('Your net pay is' + np);


}

//function calculateNSSF(grossPay){
   // var myContribution;
   // var employerContribution;
   // myContribution =0.05 * grossPay;
   // employerContribution = 0.1 * grossPay;




