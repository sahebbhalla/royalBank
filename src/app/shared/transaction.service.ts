export class transaction{
    public date:Date;
    public amount:number;
    public currentBalance:number;
    public type:string;
    constructor(date:Date,amount:number,currentBalance:number,type:string){
        this.date=date;
        this.amount=amount;
        this.currentBalance=currentBalance;
        this.type =type;
    }
}