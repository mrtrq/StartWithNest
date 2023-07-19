import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly service: ProductService) {}
    
    @Post()
    addProduct(
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodPrice: number,
     ) {
        const generatedId = this.service.addProduct(prodTitle, prodDesc, prodPrice);

        return {id: generatedId};
    }

    @Get()
    getAllProducts(){
        return this.service.getProduct();
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string){
        return this.service.getProductById(prodId);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodPrice: number,
    ){
        this.service.updateProcuct(prodId, prodTitle, prodDesc, prodPrice);
        return null;
    }

    @Delete(':id')
    deleteProduct(@Param('id') prodId: string){
        this.service.deleteProduct(prodId)
        return null;
    }

}