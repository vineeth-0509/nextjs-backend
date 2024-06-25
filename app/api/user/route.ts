import { NextRequest } from "next/server";
import {PrismaClient} from '@prisma/client'
const client = new PrismaClient();

export function GET(){
    //database logic
    return Response.json({
        email:"harkirat@gmail.com",
        name:"harkirat"
    })
}

export async function POST(req: NextRequest){
    //extract the body
    const body= await req.json();
    await client.user.create({
        data:{
            username: body.username,
            password:body.password
        }
    })

    //store the body in the database
    
    return Response.json({
        message:"You are logged in !"
    })
}