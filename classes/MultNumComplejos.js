import NumeroComplejo from "./NumeroComplejo.js";

export default class MultNumComplejos extends NumeroComplejo{
   constructor( real, imaginaria ){
      super( real, imaginaria );
   }

   multiplicar( otroNumeroComplejo ) {
      let real = (this._real * otroNumeroComplejo._real) - (this._imaginaria * otroNumeroComplejo._imaginaria);
      let imaginaria = (this._real * otroNumeroComplejo._imaginaria) + (this._imaginaria * otroNumeroComplejo._real);
      return new NumeroComplejo(real, imaginaria);
   }

   getResultado( otroNumeroComplejo ){
      let resultado = this.multiplicar( otroNumeroComplejo );
      return resultado.mostrarNumero();
   }

}