 const base  = 'api/users'

 export const USERS_ENDPOINT = {
    base: `${base}`,
    byId:(id: number)=> `${base}/${id}` 
 } as const;