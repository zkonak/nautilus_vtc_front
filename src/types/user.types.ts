export type user = {
    id:number,
    mail: string,
    password: string,
    refreshToken: string,
    type:string
}

export type userComplete = {
    mail: string,
    password: string,
    name: string, 
    lastname:string, 
    address:string, 
    tel: string,
    type:string,
    
}

export type userStore = {
    user: user | null,
    isLogged: boolean,
    
}
