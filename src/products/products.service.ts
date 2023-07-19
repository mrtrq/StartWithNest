import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductService{
    products: Product[]=[];

    addProduct(title: string, des: string, price: number){
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, des, price);
        this.products.push(newProduct);
        return prodId
    }

    getProduct(){
        return [...this.products];
    }

    getProductById(id: string){
        const product = this.findProduct(id)[0]
        return {...product}
    }

    updateProcuct(id: string, title: string, description: string, price: number){
        const [product, index] = this.findProduct(id)
        const updatedProduct = {...product}
        if (title){
            updatedProduct.title = title
        }
        if (description){
            updatedProduct.description = description
        }
        if (price){
            updatedProduct.price = price
        }
        this.products[index] = updatedProduct

    }

    private findProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        const product = this.products[productIndex]
        if (!product){
            throw new NotFoundException('Your product is not available');
        }
        return [product, productIndex];

    }

    deleteProduct(prodId: string){
        const index = this.findProduct(prodId)[1]
        this.products.splice(index,1)
    }


}