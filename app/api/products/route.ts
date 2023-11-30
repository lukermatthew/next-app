import { NextResponse } from "next/server";

export function GET(request: NextResponse) {
  return NextResponse.json([
    { id: 1, name: "Adidas" },
    { id: 2, name: "Bag" },
    { id: 3, name: "Shoes" },
  ]);
}
