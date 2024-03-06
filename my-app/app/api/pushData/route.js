import { NextResponse } from "next/server";
import { connectToDB } from "@/database/db";
import BusSchedule from "@/models/BusSchedule";

export async function POST(request) {
  try {
    await connectToDB();

    const requestBody = await request.json();
    const busData = requestBody.data;

    console.log("Data received:", busData);

    // Introduceți datele în baza de date
    for (const bus of busData) {
      try {
        const createdBus = await BusSchedule.create(bus);
        console.log("Created bus schedule for line:", createdBus._id);
      } catch (error) {
        console.error("Error creating bus schedule for line:", bus._id, error);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
}
