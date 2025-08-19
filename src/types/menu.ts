export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  dietary?: string[];
  ingredients?: string[];
  preparationMethod?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}