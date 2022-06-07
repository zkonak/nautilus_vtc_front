export type user = {
    mail: string,
    password: string,
    refreshToken: string
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
    isLogged: boolean
}
