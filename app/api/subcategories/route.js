import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { SubCategory } from "@/lib/model/subcategory";
import { connectionStr } from "@/lib/db";

export async function GET(){
 
    let data=[];
    try{
        console.log(connectionStr);
        await mongoose.connect(connectionStr);
        data = await SubCategory.find();
    }
    catch(error)
    {
        data={success:false};
    }

    return NextResponse.json({result:data,success:true});
}
export async function POST(request) {
    try {
        const payload = await request.json();
        await mongoose.connect(connectionStr);
        let subcategory = new SubCategory(payload);
        const result = await subcategory.save();
        return NextResponse.json({ result, success: true });
    } catch (error) {
        return NextResponse.json({ error: error, success: false }, { status: 500 });
    } finally {
        await mongoose.disconnect();
    }
}