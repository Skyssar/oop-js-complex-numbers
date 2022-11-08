import NumeroComplejo from "./NumeroComplejo.js";

export default class DivisionNumComplejos extends NumeroComplejo{
   constructor( real, imaginaria ){
      super( real, imaginaria );
   }

   dividir( otroNumeroComplejo ) {
      let denominador = otroNumeroComplejo. imaginaria * otroNumeroComplejo. imaginaria + otroNumeroComplejo._real * otroNumeroComplejo._real;
      let real = (this._real * otroNumeroComplejo. real + this._imaginaria * otroNumeroComplejo._imaginaria) / denominador;
      let imaginaria = (otroNumeroComplejo._real * this._imaginaria - this._real * otroNumeroComplejo._imaginaria ) / denominador;
      return new NumeroComplejo( real, imaginaria );
   }

   getResultado( otroNumeroComplejo ){
      let resultado = this.dividir( otroNumeroComplejo );
      return resultado.mostrarNumero();
   }

}