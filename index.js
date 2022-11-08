import NumeroComplejo from "./classes/NumeroComplejo.js";
import SumaNumeroComplejo from "./classes/SumaNumeroComplejo.js";
import RestaNumeroComplejo from "./classes/RestaNumeroComplejo.js";
import MultNumComplejos from "./classes/MultNumComplejos.js";
import DivisionNumComplejos from "./classes/DivisionNumComplejos.js";

function validateFields( ) {
   return cxNum1Real.value !== "" &&
   cxNum1Imaginary.value !== "" &&
   cxNum2Real.value !== "" &&
   cxNum2Imaginary.value !== ""
}

function validateSecondaryFields (){
   return cxNum3Real.value !== "" &&
   cxNum3Imaginary.value !== ""
}


function onSum(){

   // let cxNumberOne = new NumeroComplejo( cxNum1Real.value, cxNum1Imaginary.value );
   if ( validateFields() ){
      let suma = new SumaNumeroComplejo( cxNum1Real.value, cxNum1Imaginary.value );
      let cxNumberTwo = new NumeroComplejo ( cxNum2Real.value, cxNum2Imaginary.value );
   
      // message.innerHTML = cxNumberOne.mostrarNumero();
      result.innerHTML = suma.getResultado( cxNumberTwo );
   }
   else{
      result.innerHTML = "Llene todos los campos"
   }
   
}

function onSubstraction(){

   if ( validateFields() ){
      let resta = new RestaNumeroComplejo( cxNum1Real.value, cxNum1Imaginary.value );
      let cxNumberTwo = new NumeroComplejo ( cxNum2Real.value, cxNum2Imaginary.value );

      result.innerHTML = resta.getResultado( cxNumberTwo );
   }
   else{
      result.innerHTML = "Llene todos los campos"
   }
}

function onMultiplication(){

   if ( validateFields() ){
      let multiplicacion = new MultNumComplejos( cxNum1Real.value, cxNum1Imaginary.value );
      let cxNumberTwo = new NumeroComplejo ( cxNum2Real.value, cxNum2Imaginary.value );

      result.innerHTML = multiplicacion.getResultado( cxNumberTwo );
   }
   else{
      result.innerHTML = "Llene todos los campos"
   }
}

function onDivision(){

   if ( validateFields() ){

      let division = new DivisionNumComplejos( cxNum1Real.value, cxNum1Imaginary.value );
      let cxNumberTwo = new NumeroComplejo ( cxNum2Real.value, cxNum2Imaginary.value );

      result.innerHTML = division.getResultado( cxNumberTwo );
   }
   else{
      result.innerHTML = "Llene todos los campos"
   }
}

function onModule(){
   if ( validateSecondaryFields() ){

      let cxNumber = new NumeroComplejo ( cxNum3Real.value, cxNum3Imaginary.value );

      result2.innerHTML = cxNumber.getModulo();
   }
   else{
      result2.innerHTML = "Llene todos los campos"
   }
}

function onArgument(){
   if ( validateSecondaryFields() ){

      let cxNumber = new NumeroComplejo ( cxNum3Real.value, cxNum3Imaginary.value );

      result2.innerHTML = cxNumber.getArgumento();
   }
   else{
      result2.innerHTML = "Llene todos los campos"
   }
}

function onConjugated(){
   if ( validateSecondaryFields() ){

      let cxNumber = new NumeroComplejo ( cxNum3Real.value, cxNum3Imaginary.value );

      result2.innerHTML = cxNumber.getConjugado();
   }
   else{
      result2.innerHTML = "Llene todos los campos"
   }
}

sumBtn.addEventListener( 'click', onSum )
subsBtn.addEventListener( 'click', onSubstraction )
multBtn.addEventListener( 'click', onMultiplication )
divBtn.addEventListener( 'click', onDivision )

modBtn.addEventListener( 'click', onModule )
argBtn.addEventListener( 'click', onArgument )
conjBtn.addEventListener( 'click', onConjugated )

