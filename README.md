# Dashboard with Collapsible Sidebar and Persistent Footer

![Dashboard Form Screenshot](screenshot1.png, screenshot2.png)

This project is a responsive web dashboard built with **HTML**, **CSS**, **Bootstrap**, and **JavaScript**. It features a sidebar with collapsible functionality, a persistent footer, and a selection of chart components created using **Chart.js**. The design is intended for a streamlined user experience, providing easy navigation, visual data representation, and adaptability across various screen sizes.

## Features

### 1. Responsive Sidebar with Collapsible Feature
- **Collapsible Sidebar**: The sidebar can be minimized to show only icons, maximizing screen space for the main content. A toggle button allows users to switch between expanded and minimized states.
- **Menu Options**: Includes links to the Dashboard, Chart, Settings, Login, and Logout pages, each with icons for quick navigation.

### 2. Persistent Footer
- **Fixed at the Bottom**: The footer remains at the bottom of the page even if the main content does not fill the entire viewport height.
- **Content**: Displays simple copyright information and can be customized.

### 3. Data Visualizations with Chart.js
- **Line Chart**: Displays a sales overview with monthly data.
- **Bar Chart**: Represents revenue by product.
- **Pie Chart**: Shows market share data for different brands.

## Technologies Used
- **HTML5** and **CSS3**: For structuring and styling the page.
- **Bootstrap 5**: Provides a responsive grid system, navigation, and styling utilities.
- **Bootstrap Icons**: Adds icons for better visual navigation in the sidebar.
- **Chart.js**: Used for creating interactive and customizable charts.
- **JavaScript**: Adds interactivity, including sidebar toggling and chart setup.

## Setup

1. **Clone this repository**:
   ```bash
   git clone https://github.com/bangale72/Dashboard-Tempalet.git
   cd Dashboard-Tempalet
   ```

2. **Open `index.html`** in your preferred browser.

3. **Dependencies**: 
   - The project uses external CDNs for Bootstrap and Chart.js. Ensure an active internet connection to load these libraries.

## File Structure

- **index.html**: Contains the main HTML structure, including the sidebar, main content area, and footer.
- **styles.css**: Custom CSS for layout adjustments, sidebar styling, and responsive design.
- **script.js**: Handles sidebar toggle functionality and initializes Chart.js data visualizations.

## Customization

- **Adding More Pages**: New pages can be linked through the sidebar by adding items in the `<ul>` list within the sidebar div.
- **Changing Chart Data**: Update the `data` property in the `script.js` file for each chart type to customize displayed data.
- **Styling**: Modify the `styles.css` file for custom colors, fonts, and other styles.

## Screenshots

> **Add screenshots here to illustrate the layout, sidebar, and charts.**

## License
This project is open-source and available under the MIT License.
