import NumeroComplejo from "./NumeroComplejo.js";

export default class RestaNumeroComplejo extends NumeroComplejo{
   constructor( real, imaginaria ){
      super( real, imaginaria );
   }

   restar( otroNumeroComplejo ){
      return new NumeroComplejo( this._real - otroNumeroComplejo._real, this._imaginaria - otroNumeroComplejo._imaginaria )
   }

   getResultado( otroNumeroComplejo ){
      let resultado = this.restar( otroNumeroComplejo );
      return resultado.mostrarNumero();
   }

}
