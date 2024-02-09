import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function NewProduct() {
  return (
    <div className="grid gap-4 grid-cols-2">
      <div className="grid w-full items-center gap-1.5 relative">
        <Select onValueChange={(value)=>console.log(value)}>
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
            <SelectItem value="penicl">Pencil</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-4 w-full">
        <div className="grid w-full items-center gap-1.5 relative">
          <Input type="number" id="quantity" onChange={(e)=>console.log(e.target.value)} />
        </div>
        <Button variant="default" className="h-14 bg-blue-500">
          Serial Number
        </Button>
      </div>
    </div>
  );
}

export default NewProduct;
