import React from 'react';
import './Guide.css';

const UserGuide = () => {
    return (
        <div className="container">
            <h1>Grocery Shop Website User Guide</h1>
            <p>Welcome to Our Grocery Shop Website! This guide will help you navigate through our website, explaining the features and functionalities available for both users and administrators.</p>

            <div className="section">
                <h2>User Signin and Login</h2>

                <h3>User Login:</h3>
                <ul>
                    <li>Access the Signin Page: Navigate to the Signin page from the homepage.After the Signin move to Login in page</li>
                    <li>Enter Credentials: Input your username and password.</li>
                    <li>Login: Click on the "Login" button to access your user account.</li>
                </ul>

                <h3>User Dashboard:</h3>
                <ul>
                    <li>Dashboard is single page static web page .</li>
                    <li>Product page: i have created some default product ,because not able to access mongoDB by netlify.</li>
                </ul>

                <h3>Adding Products to Cart:</h3>
                <ul>
                    <li>Select a Product: Browse and select the product you wish to purchase.</li>
                    <li>Add to Cart: Click on the "Add to Cart" button to include the item in your shopping cart.</li>
                    <li>View Cart: Click on the cart icon to view the items you have added.</li>
                </ul>
            </div>

            <div className="section">
                <h2>Admin Login and Features</h2>

                <h3>Admin Login:</h3>
                <ul>
                    <li>Access the Admin Login Page: Navigate to the admin login page from the homepage.</li>
                    <li>Enter Credentials: Input your admin username and password.</li>
                    <li>Login: Click on the "Login" button to access the admin dashboard.</li>
                </ul>

                <h3>Admin Dashboard:</h3>
                <ul>
                    <li>Manage Products: View, add, edit, or delete products in the inventory using CRUD (Create, Read, Update, Delete) operations..</li>
                </ul>

                <h3>Adding Products:</h3>
                <ul>
                    <li>Access Product Management: Navigate to the product management section in the admin dashboard.</li>
                    <li>Add New Product:</li>
                    <ul>
                        <li>Click on the "Add Product" button.</li>
                        <li>Fill in the product details such as name, description, price, Imageurl and category.</li>
                        <li>Upload a product image.</li>
                        <li>Click "Save" to add the new product to the inventory.</li>
                    </ul>
                </ul>

                <h3>Editing Products:</h3>
                <ul>
                    <li>Select a Product: From the product list, choose the product you wish to edit.</li>
                    <li>Edit Details: Modify the necessary details and click "Save" to update the product information.</li>
                </ul>

                <h3>Deleting Products:</h3>
                <ul>
                    <li>Select a Product: From the product list, choose the product you wish to delete.</li>
                    <li>Delete Product: Click on the "Delete" button and confirm the deletion to remove the product from the inventory.</li>
                </ul>
            </div>

            <div className="section">
                <h2>Technologies Used:</h2>
                <p>Front-end: React.js, Redux<br />Back-end: Node.js, Express.js<br />Database: MongoDB</p>
            </div>

            <div className="section">
                <h2>Support and Feedback:</h2>
                <p>If you encounter any issues or have any questions, please feel free to contact our support team through the "Contact Us" section on the website. We value your feedback and are here to assist you.</p>

                <h3>special Note:</h3>
                <p>I have only uploaded the frontend on Netlify. To explore the full site, please visit the GitHub repository.</p>
            </div>
        </div>
    );
}

export default UserGuide;
