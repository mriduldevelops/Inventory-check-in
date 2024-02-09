import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

function Products() {
  const [newProduct, setNewProduct] = useState([
    { product: "", quantity: "", selected: false },
  ]);

  const addNewProduct = () => {
    setNewProduct([
      ...newProduct,
      { product: "", quantity: "", selected: false },
    ]);
  };

  const handleProductChange = (index, selectedProduct) => {
    const updatedProducts = [...newProduct];
    updatedProducts[index].product = selectedProduct;
    setNewProduct(updatedProducts);
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedProducts = [...newProduct];
    updatedProducts[index].quantity = quantity;
    setNewProduct(updatedProducts);
  };

  console.log(newProduct);
  return (
    <div className="flex flex-col gap-3 ">
      {newProduct.map((product, index) => (
        <div className="grid gap-4 grid-cols-2" key={index}>
          <div className="grid w-full items-center gap-1.5 relative">
            {index === 0 && <Label htmlFor="products">Products</Label>}
            <Select
              value={product.product}
              onValueChange={(selectedOption)=>handleProductChange(index, selectedOption)}
            >
              <SelectTrigger className="h-14">
                <SelectValue
                  className="text-zinc-300 font-semibold"
                  placeholder="Products"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pen">Pen</SelectItem>
                <SelectItem value="notebook">Notebook</SelectItem>
                <SelectItem value="diary">Diary</SelectItem>
                <SelectItem value="pencil">Pencil</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-4 w-full">
            <div className="grid w-full items-center gap-1.5 relative">
              {index === 0 && <Label htmlFor="quantity">Quantity</Label>}
              <Input
                type="number"
                id="quantity"
                value={product.quantity}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
              />
            </div>
            <Button variant="default" className="h-14 bg-blue-500">
              Serial Number
            </Button>
          </div>
        </div>
      ))}

      <span
        className="text-blue-500 mr-4 font-semibold text-sm text-right cursor-pointer"
        onClick={addNewProduct}
      >
        Add New
      </span>
    </div>
  );
}

export default Products;
