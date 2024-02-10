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
import { useState, useContext } from "react";
import { InventoryContext } from "@/context/InventoryContext";

function Products() {
  // Accessing context for serial data
  const { setSerialData } = useContext(InventoryContext);

  // State for managing new product entries
  const [newProduct, setNewProduct] = useState([
    { product: "", quantity: "", selected: false, serialNumbers: [] },
  ]);

  // Function to add a new product entry
  const addNewProduct = () => {
    setNewProduct([
      ...newProduct,
      { product: "", quantity: "", selected: false, serialNumbers: [] },
    ]);
  };

  // Function to handle product selection change
  const handleProductChange = (index, selectedProduct) => {
    const updatedProducts = [...newProduct];
    updatedProducts[index].product = selectedProduct;
    setNewProduct(updatedProducts);
  };

  // Function to handle quantity change
  const handleQuantityChange = (index, quantity) => {
    const updatedProducts = [...newProduct];
    updatedProducts[index].quantity = quantity;
    setNewProduct(updatedProducts);
  };

  // Function to handle product selection
  const handleSelect = (index) => {
    const updatedProducts = newProduct.map((item, idx) => ({
      ...item,
      selected: idx === index,
    }));
    setNewProduct(updatedProducts);
    setSerialData(updatedProducts[index]);
  };

  return (
    <div className="flex flex-col gap-3 ">
      {/* Mapping through newProduct state to render product entries */}
      {newProduct.map((product, index) => (
        <div className="grid gap-4 grid-cols-2" key={index}>
          {/* Product Selection */}
          <div className="grid w-full items-center gap-1.5 relative">
            {index === 0 && <Label htmlFor="products">Products</Label>}
            <Select
              value={product.product}
              onValueChange={(selectedOption) =>
                handleProductChange(index, selectedOption)
              }
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
          {/* Quantity Input and Select Button */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="grid w-full items-center gap-1.5 relative">
              {index === 0 && <Label htmlFor="quantity">Quantity</Label>}
              <Input
                type="number"
                id="quantity"
                value={product.quantity}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
              />
            </div>
            <Button
              variant="default"
              className={`h-14 ${
                product.selected ? "bg-zinc-400" : "bg-blue-500"
              }`}
              onClick={() => handleSelect(index)}
            >
              {/* Button text based on selection */}
              {product.selected ? <span>Selected</span> : <span>Serial Number</span>}
            </Button>
          </div>
        </div>
      ))}

      {/* Button to add a new product entry */}
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
