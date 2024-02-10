# Check-in Modal for Inventory Design

This Check-in Modal for inventory is designed using the Shadcn UI library and integrated into a Next.js application. The modal facilitates the check-in process by allowing administrators to input their ID, specify product quantities, and view serial numbers for each product.

## Features

### Admin ID Input Field
- A text input field is provided for entering the Admin ID.

### Product List with Quantity
- Displays a list of products along with their respective quantities.
- Each product is associated with an input field for specifying the quantity to check in.

### Serial Number Button
- Next to each product, there's a button labeled "Serial Numbers."
- Clicking this button reveals a table displaying the serial numbers for the corresponding product.

### Serial Number Table
- A table is presented upon clicking the "Serial Numbers" button for a specific product.
- Each serial number is listed in a separate row within the table.

## Usage

- To check in inventory, start by entering the Admin ID in the designated input field.
- For each product, input the quantity being checked in.
- If serial numbers are needed, click the "Serial Numbers" button next to the respective product to view them in a table.
- Ensure clear labels and instructions are provided for each input field to facilitate smooth usage.

## Design Considerations

- The modal is designed to be user-friendly and intuitive, allowing for easy navigation.
- Clear instructions and labels are provided for each input field to minimize user confusion.
- Aesthetic appeal and responsiveness are maintained using the Shadcn UI library for styling and UI components.

## Tools and Libraries

- **Shadcn UI library**: Utilized for styling and UI components to ensure a visually appealing and consistent design.
- **Next.js**: Integrated into a Next.js application for seamless rendering and server-side rendering capabilities.