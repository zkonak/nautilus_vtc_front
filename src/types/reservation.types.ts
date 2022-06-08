export type reservation = {
dateDepart:Date | undefined,
timeDepart:string| undefined,
addressDepart:string| undefined,
addressDestination:string| undefined,
price:number| undefined,
tax:number| undefined,
priceKm:number| undefined,
packageService:string| undefined,
dateDestination:Date| undefined,
timeDestination:string| undefined,
CarTypeId:number| undefined,
UserId:number| undefined,
ServiceId:number| undefined,
PackageId:number| undefined
}



export type reservationStore = {
    reservation: reservation | null,
    
}
