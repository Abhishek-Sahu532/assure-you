# Assure You

**Your Trusted Online Shopping Companion**, ensuring quality, reliability, and satisfaction with every purchase.

[Live Demo](https://assure-you-new.onrender.com/)

---

## Tech Stack

**Client:** 
- React 
- Redux 
- MaterialUI 

**Server:** 
- Node 
- Express

**Database:** 
- MongoDB

**Auth:** 
- JsonWebToken
- Firebase

**Image Upload:** 
- Cloudinary

**Payment:** 
- Stripe

**Animation:** 
- animate.css

**E-mails:** 
- Nodemailer

**Documentation:** 
- Swagger.io

---

## Documentation

[Documentation](https://linktodocumentation)

---

## Views

### Desktop View

![Desktop View](/front_end/src/assets/images/desktop%20view.png)

### Mobile View

![Mobile View](/front_end/src/assets/images/mobile%20view.png)

---

## Authors

- [@Abhishek-Sahu532](https://github.com/Abhishek-Sahu532)

---

## Enhancements and Theoretical Concepts

### Cool Features

1. **Product Recommendations**:
   - Use a recommendation algorithm to suggest products based on user's past purchases and browsing history.
   - Implement this with Redux for state management and display recommendations on the product detail page.

2. **Wishlist Feature**:
   - Allow users to add products to a wishlist for future purchases.
   - Implement with Redux for state management and MongoDB for persistent storage.

3. **Enhanced Security**:
   - Implement two-factor authentication (2FA) using Node and a service like Twilio for sending verification codes.
   - Ensure all sensitive data is encrypted and securely stored.
     
4. **Dark Mode Toggle**:
   - Implement a dark mode toggle switch using React and MaterialUI to enhance user experience, especially during night time.
   - Use `useContext` and `useReducer` for managing the dark mode state globally.

5. **Real-time Notifications**:
   - Integrate WebSockets (using `Socket.io`) to provide real-time notifications for order updates, promotional offers, and messages.

### Theoretical Concepts

1. **State Management with Redux**:
   - Redux is a predictable state container for JavaScript apps. It helps in managing the state of the application in a consistent and predictable way. Using Redux, we can centralize the application's state and logic, enabling powerful capabilities like undo/redo, state persistence, and more.
   
2. **Component-Based Architecture in React**:
   - React follows a component-based architecture which makes the code more modular, maintainable, and reusable. Each part of the UI is divided into self-contained components that manage their own state and logic, allowing for more scalable applications.

3. **RESTful API Design with Express**:
   - RESTful APIs follow a set of principles that define how web standards, such as HTTP, should be used. Express, being a minimal and flexible Node.js web application framework, provides a robust set of features for building RESTful services.

4. **Authentication with JWT**:
   - JSON Web Tokens (JWT) are used for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs are commonly used for authentication and information exchange.

5. **Responsive Design with MaterialUI**:
   - MaterialUI provides a set of React components that implement Google's Material Design. It is responsive by default, ensuring that the application looks good on all devices, from mobile phones to desktops.

6. **Payment Integration with Stripe**:
   - Stripe is a popular payment gateway that provides APIs for handling online payments. Integrating Stripe ensures secure and reliable transactions, with support for multiple payment methods and currencies.

7. **Email Handling with Nodemailer**:
   - Nodemailer is a module for Node.js applications to allow easy email sending. It supports various transport methods, including SMTP, and can be used to send transactional emails, password resets, order confirmations, and more.

---

## How to Run Locally

### Prerequisites

- Node.js
- MongoDB
- Stripe Account
- Cloudinary Account

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Abhishek-Sahu532/assure-you.git
    cd assure-you
    ```

2. **Install server dependencies:**
    ```sh
    cd backend
    npm install
    ```

3. **Install client dependencies:**
    ```sh
    cd ../backend
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the `server` directory and add the following:

    ```sh
    PORT = your_mongodb_uri
    DB_URI = your_mongodb_uri
    JWT_SECRET = your_JWT_SECRET
    COOKIE_EXPIRE  = your_COOKIE_EXPIRE
    JWT_EXPIRE = your_JWT_EXPIRE
    SMPT_SERVICE =your_SMPT_SERVIC
    SMPT_EMAIL =your_SMPT_EMAIL
    SMPT_PASSWORD =your_SMPT_PASSWORD
    SMPT_HOST = syour_SMPT_HOST
    SMPT_PORT =your_SMPT_PORT
    CLOUDINARY_NAME = your_CLOUDINARY_NAME
    CLOUDINARY_API_KEY = your_CLOUDINARY_API_KEY
    API_SECRET = your_API_SECRET
    STRIPE_API_KEY = your_STRIPE_API_KEY
    STRIPE_SECRET_KEY = your_STRIPE_SECRET_KEY
    ```

5. **Run the application:**

    - Start the server:
        ```sh
        cd backend
        npm start
        ```

    - Start the client:
        ```sh
        cd ../frontend
        npm start
        ```

6. **Visit the application:**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

---

