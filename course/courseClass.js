function SoftEngineeringClass(className ,classUnit ,classCapacity,book){
    this.className = className;
    this.classUnit = classUnit;
    this.classCapacity = classCapacity;
    this.book = book;
    this.printsoftWare = function(){
        console.log(`{className:${this.className},classUnit:${this.classUnit},classCapacity:${this.classCapacity}, book:${this.book}}`)
    }
}


function NetworkClass (className ,classUnit ,classCapacity , project){
    this.className = className;
    this.classUnit = classUnit;
    this.classCapacity = classCapacity;
    this.project = project;
    this.printNetwork = function(){
        console.log(`{className:${this.className},classUnit:${this.classUnit},classCapacity:${this.classCapacity}, project:${this.project}}`)
    }
    
}

const softWare = new SoftEngineeringClass("softEngineering",3,50,2)
softWare.printsoftWare()

const network = new NetworkClass("network",3,30,true)
network.printNetwork()