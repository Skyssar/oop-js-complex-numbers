import NumeroComplejo from "./NumeroComplejo.js";

export default class SumaNumeroComplejo extends NumeroComplejo{
   constructor( real, imaginaria ){
      super( real, imaginaria );
   }

   sumar( otroNumeroComplejo ){
      return new NumeroComplejo( this._real + otroNumeroComplejo._real, this._imaginaria + otroNumeroComplejo._imaginaria )
   }

   getResultado( otroNumeroComplejo ){
      let resultado = this.sumar( otroNumeroComplejo );
      return resultado.mostrarNumero();
   }

}