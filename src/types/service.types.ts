export type service = {
    id:number,
    name: string,
    description: string | null,
    price: number,
    CarTypeId:number,
    CarType:{typeName:string}| null
  
    
    }
    
    
    
    export type serviceStore = {
        service: service | null,
        
    }