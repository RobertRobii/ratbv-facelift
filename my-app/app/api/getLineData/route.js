import { NextResponse } from "next/server";
import { connectToDB } from "@/database/db";
import BusSchedule from "@/models/BusSchedule";

export async function GET() {
  try {
    await connectToDB();
    const data = await BusSchedule.find({});
    // console.log(data);
    return NextResponse.json({ success: true, data: data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}
