// GET
// POST
// DELETE
// UPDATE
// PATCH
import { NextResponse } from "next/server"
export async function GET() {
    const data={
        name:"John",
        age:25
    }
   
    return NextResponse.json(data)
  }