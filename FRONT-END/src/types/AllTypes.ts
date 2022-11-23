export type OrderFormType = {
    // id?:number | undefined,
    // email:string | undefined,
    // password:string | undefined,
    // age:string | undefined,
    // gender:string | undefined
    _id:string | undefined,
    carType:string | undefined,
    fromDate:Date | undefined | string,
    toDate:Date | undefined | string
};


export type TCar = {
    _id:string
    carType:string,
    carModel:string,
    brand:string,
    gps:boolean,
    _4x4:boolean,
    engCapacity:number,
    img:string,
    price:number
}
