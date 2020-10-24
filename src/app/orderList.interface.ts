export interface OrderInterface{
  id: String; 
  orderNumber: String; 
  status:String;
  name:String;
  Address:String;
  order:OrderNameInterface[];
}
export interface OrderNameInterface
  {orderItemId:String;orderName:String;amount:any}
