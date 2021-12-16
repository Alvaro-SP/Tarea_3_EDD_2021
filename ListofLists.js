class nodo{//first like all data structure i create the nodo with the pointers.
    constructor(dato){
        this.dato=dato;
        this.siguiente=null;
        this.anterior=null;
        this.pila=new pila();
        this.size=0;
    }
}
//next i create my double array in this case with a header
class ListadeLista{
    constructor(){
        this.primero=null;
    }
    insert(dato){
        let nuevo= new nodo(dato);
        if(this.primero==null){
            this.primero=nuevo;
        }else{
            let aux = this.primero;
            while(aux.siguiente!=null){
                if(aux.dato==dato){
                    return
                }
                aux=aux.siguiente;
            };
            if(aux.dato==dato){
                return
            }
            aux.siguiente=nuevo;
            nuevo.anterior=aux;
        }
    }
    show(){
        let aux=this.primero;
        while(aux!=null){
            console.log(" --> "+aux.dato);
            aux.pila.showpila();
            aux=aux.siguiente;
        }
    }
    // i can insert numeric values or any kind of variables that you can test
    insertSon(data,value){
        let aux=this.primero;
        while(aux!=null){
            if(data==aux.dato){
                //HERE IS the most important part because i added a list in my list or array for to save more data in my data list.
                aux.pila.push(value);
                return
            }
            aux=aux.siguiente;
        }
        return null;
    }
}

class nodepila{
    constructor(dato){
        this.dato=dato;
        this.siguiente=null;
        this.anterior=null;
    }
    
}
//This is my heap that i use to insert numeric values
class pila{
    constructor(){
        this.header=null;
        this.size=0;
    }
    push(dato){
        let newnode=new nodepila(dato);
        if(this.emptyPila()){
            this.header=newnode;
            this.size;
        }else{
            let aux=this.header;
            newnode.siguiente=aux;
            this.header=newnode;
            this.size++;
        }
    }
    pop(){
        let aux=this.header;
        this.header=this.header.siguiente;
        this.size--;
        return aux;
    }
    peek(){
        return this.header.dato;
    }
    emptyPila(){
        if(this.header==null){
            return true;
        }
        return false;
    }
    showpila(){
        let aux=this.header;
        while(aux!=null){
            console.log("    -- "+aux.dato);
            aux=aux.siguiente;
        }
    }
    getSize(){
        return this.size;
    }
}
var ldl=new ListadeLista();
ldl.insert("Mamifero");
ldl.insert("Ave");
ldl.insert("Reptil");
ldl.insertSon("Mamifero","Gato")    // Here can be numeric values or text is not important aux xd
ldl.insertSon("Mamifero","Perro")
ldl.insertSon("Mamifero","Mono")
ldl.insertSon("Ave","Quetzal")
ldl.insertSon("Ave","Paloma")
ldl.insertSon("Ave","Avestruz")
ldl.insertSon("Reptil","Tortuga")
ldl.insertSon("Reptil","Cocodrilo")
ldl.insertSon("Reptil","Camaleon")

ldl.show();
