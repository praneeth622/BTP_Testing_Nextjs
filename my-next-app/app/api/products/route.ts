import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
  { id: 2, name: 'Coffee Mug', price: 15, category: 'Home' },
  { id: 3, name: 'Book', price: 25, category: 'Education' },
  { id: 4, name: 'Headphones', price: 199, category: 'Electronics' },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newProduct = {
    id: products.length + 1,
    ...body,
  };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}