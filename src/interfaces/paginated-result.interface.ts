export interface PaginatedResult {
    data:any[]
    meta: {
        total: number
        page:number
        lats_page:number 
    }
}