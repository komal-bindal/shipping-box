# Shipping Box

## Description

This is a simple React.js and Redux-based application to calculate the shipping cost for boxes being shipped to specific locations worldwide from India. It allows users to input information about the receiver, box weight, box color, and destination country, and calculates the shipping cost based on the destination and weight. The application features a form view for entering box details, a table view for displaying the saved data, and a navigation bar for easy switching between the two views.

---

## Functionality

### View A - Form (Add Box)

The form consists of four fields:

1. **Receiver Name**: Input text field for the receiver's name.
2. **Weight**: Input number field for the weight of the box (in kilograms).
3. **Box Colour**: A color picker component that returns the color value in RGB format (e.g., "255, 255, 255").
4. **Destination Country**: Dropdown with the following destination options, each having a specific cost multiplier:
   - Sweden (7.35 INR)
   - China (11.53 INR)
   - Brazil (15.63 INR)
   - Australia (50.09 INR)
5. **Save Button**: Saves the data to the database and calculates the shipping cost based on the selected destination.

### View B - Table (List of Captured Inputs)

The table displays the following columns:

1. **Receiver Name**
2. **Weight in Kilograms**
3. **Box Colour**: Displayed as an actual color box.
4. **Destination Country**
5. **Calculated Shipping Cost**: Shipping cost in INR format based on the weight and destination.

### Component A - Navbar

A navigation bar contains two routes to switch between the form view (Add Box) and the table view (List of Captured Inputs).

---

## Installation & Setup

To run this application locally, follow these steps:

1. Clone the repository:

2. Navigate to the project directory:

3. Install the necessary dependencies:

4. Ensure you're using Node.js version 16.20: If you're using a different version, you can switch to Node 16 using a version manager like `nvm`.

5. Start the application:

6. Open your browser and go to `http://localhost:3000` to view the application.

---

## Technologies Used

- **React.js** for the frontend UI
- **Redux** for state management
- **CSS** for styling

This application provides a simple, interactive user experience for calculating and managing shipping costs for boxes worldwide.
