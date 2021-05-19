export interface ClothesType {
  id: number
  name: string
  price: number
  description: string
  img: string
  sizes: string[]
}

export interface CartType {
  id: number
  name: string
  price: number
  img: string
  size: string
  quantity: number
}