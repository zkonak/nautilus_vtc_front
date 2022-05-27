export type user = {
    email: string,
    password: string,
    access_token: string
}

export type userComplete = {
    email: string,
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
