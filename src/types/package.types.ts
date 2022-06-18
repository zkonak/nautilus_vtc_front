export type packages = {
    id:number,
    name:string| undefined,
    addressDepart:string| undefined,
    addressDestination:string| undefined,
    price:number| 0,
    CarTypeId:number,
  
    
    }
    
    
    
    export type packageStore = {
        package: packages | null,
        
    }