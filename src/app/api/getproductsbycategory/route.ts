import { NextRequest, NextResponse } from "next/server";
import { products } from "../data"

export async function GET(request : NextRequest) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("category")?.toLowerCase()

    if(!query) {
        return NextResponse.json({products})
    }

    const filteredProducts = products.filter(product => product.category.includes(query))

    return NextResponse.json({products: filteredProducts})
}