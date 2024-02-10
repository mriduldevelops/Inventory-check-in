import { FrameIcon } from "@radix-ui/react-icons";
import { Checkbox } from "@/components/ui/checkbox";
import { useContext } from "react";
import { InventoryContext } from "@/context/InventoryContext";

// Define columns for the data table
export const columns = [
  {
    // Column for selecting rows
    id: "select",
    header: ({ table }) => (
      // Render a checkbox for selecting all rows or indicating indeterminate state
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    // Cell component for individual row selection
    cell: ({ row }) => {
      // console.log(row.getIsSelected()&&row.id)
      return(

        // Render a checkbox for selecting individual rows
        <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        />
        )
    },
  },
  {
    accessorKey: "id",
    header: <FrameIcon />,
  },
  {
    // Column for entering serial numbers
    accessorKey: "serialNumber",
    header: "Serial Number",
    // Cell component for rendering serial number input
    cell: ({ row }) => {
      // Access serial data and setSerialData function from context
      const { serialData, setSerialData } = useContext(InventoryContext);

      // Event handler for serial number input change
      const handleSerialNumberChange = (e) => {
        const updatedSerialData = { ...serialData };
        // Update the serial number at the corresponding row index
        updatedSerialData.serialNumbers[row.index] = e.target.value;
        setSerialData(updatedSerialData);
        
      };

      return (
        <input className="outline-none bg-transparent"
          value={serialData.serialNumbers[row.index] || ""}
          onChange={handleSerialNumberChange}
        />
      );
    },
  },
];

