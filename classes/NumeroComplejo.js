
export default class NumeroComplejo {

   _real
   _imaginaria

   constructor(real, imaginaria){
      this._real = Number.parseFloat( real );
      this._imaginaria = Number.parseFloat( imaginaria );
   }

   get real(){
      return this._real;
   }

   set real(num){
      this._real = Number.parseFloat( num );
   }

   get imaginaria(){
      return this._imaginaria;
   }

   set imaginaria(num){
      this._imaginaria = Number.parseFloat( num );
   }

   mostrarNumero(){
      let sign = "+"
      if ( this._imaginaria < 0 ) sign = "";
      return `${ this._real } ${ sign } ${ this._imaginaria }i`
   }

   getModulo(){
      return Math.sqrt( Math.pow( this._real, 2 ) + Math.pow( this._imaginaria, 2 ) );
   }

   getArgumento(){
      return Math.atan2( this._imaginaria, this._real ) * ( 180/Math.PI )
   }

   getConjugado(){
      if ( this._imaginaria < 0 ) return this.mostrarNumero().replace( "-", "+" )
      return this.mostrarNumero().replace( "+", "-" )
   }

}



