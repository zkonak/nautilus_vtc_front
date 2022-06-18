export type service = {
    id:number,
    name: string,
    description: string,
    price: number,
    carTypeId:number,
    CarType:{typeName:string}
  
    
    }
    
    
    
    export type serviceStore = {
        service: service | null,
        
    }