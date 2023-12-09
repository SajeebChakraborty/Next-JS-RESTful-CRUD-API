import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Product } from "@/lib/model/product";
import { connectionStr } from "@/lib/db";

export async function GET(){
 
    let data=[];
    try{
        console.log(connectionStr);
        await mongoose.connect(connectionStr);
        data = await Product.find();
    }
    catch(error)
    {
        data={success:false};
    }

    return NextResponse.json({result:data,success:true});
}
export async function POST(request)
{

    var result;

    try{
        const payload= await(request.json());
        await mongoose.connect(connectionStr);
        let product = new Product(payload);
         result=await product.save();
    }
    catch(error)
    {
        return NextResponse.json(error);
    }
    return NextResponse.json({result,success:true});

}