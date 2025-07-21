import { NextResponse } from "next/server";
import { products } from "@/app/api/data";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("productName")?.toLowerCase();

    if (!query) {
        return NextResponse.json({});
    }

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    return NextResponse.json({ products: filtered });
}
