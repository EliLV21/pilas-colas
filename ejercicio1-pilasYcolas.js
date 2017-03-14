
    function Stack(){
  var almacen = [];
  this.push=function(datos){
    almacen.push(datos);
};
  this.pop=function(){
    return almacen.pop();
};
  this.peek = function(){
   return almacen [almacen.length-1];
 };
  this.isEmpty = function(){
   return almacen.length == 0;
 };
 this.size = function(){
   return almacen.length;
 };
 this.clear = function(){
   almacen = [];
 };
  this.print=function(){
   console.loge(almacen.toString());
};

  var nombre = new Stack;
  nombre.push("Pilar ");
  nombre.push("Nash ");
  nombre.push("Claus ");
  nombre.push("Yess ");
  nombre.push("Pitt ");

nombre.print();

  var apellido = new Stack();
  apellido.push("Hernández ");
  apellido.push("Juárez ");
  apellido.push("Flores ");
  apellido.push("Gutiérrez ");
  apellido.push("Fernández ");

apellido.print();

  for (var i = 0; i < 5; i++){
 nombres.push(nombre.pop() +  apellido.pop());
}

document.write(nombres);
console.log(nombres);
