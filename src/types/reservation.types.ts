export type reservation = {
dateDepart:Date | undefined,
timeDepart:string| undefined,
addressDepart:string| null,
addressDestination:string| null,
price:number| 0,
tax:number| 0,
priceKm:number| undefined,
packageService:string| undefined,
dateDestination:Date| undefined,
timeDestination:string| undefined,
CarTypeId:number,
UserId:number| undefined,
ServiceId:number| undefined,
PackageId:number| undefined,
prices:any| undefined,
distance: number| undefined,
carTypeName: string| null;
type:string| undefined;
}



export type reservationStore = {
    
    reservation: reservation | null,
    
}
