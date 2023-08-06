# eCommerce Product Listing Page

This application utilizes a mock API to dynamically display a product list page based on user input.

## Functionality

The application offers the following features:

1. **Header with Product Categories:** The header provides quick access to a variety of product categories.

2. **Product Grid:** Products are presented in a grid layout for easy browsing.

3. **Product Cards:** Each product is showcased through an informative and visually appealing card.

4. **Product Counter:** The number of displayed products is conveniently counted and shown.

5. **Filtering Mechanism:** Users can filter the products based on their preferences.

6. **Sorting Mechanism:** Users can sort the products based on their preferences.

7. **Load More Button:** To enhance user experience, a "Load More" button is available for seamless browsing.

## Technologies Used

The application is built using the following technologies:

1. **ReactJS:** A popular JavaScript library for building user interfaces.

2. **Chakra UI:** A modern UI framework that aids in creating visually aesthetic and responsive designs.

3. **React Router Dom:** A routing library for React applications, enabling seamless navigation.

4. **Axios:** A promise-based HTTP client for making API requests, used here to interact with the mock API.


## Challenges

Several challenges were encountered during the development of this project:

1. **Mock API Integration:** Integrating and working with a mock API to fetch and display product data posed initial challenges in terms of data handling and synchronization. Also, I had to change APIs midway as the original API stopped working.

2. **Responsive Design:** Ensuring a seamless and visually appealing experience across various devices and screen sizes required careful consideration and testing.

3. **Complex State Management:** Managing the state of multiple components, such as the product grid and sorting options, demanded a robust state management approach.

4. **Load More Implementation:** Implementing the "Load More" functionality while minimizing disruptions to the user flow required meticulous coding and testing.

5. **UI/UX Consistency:** Achieving a consistent and intuitive user interface and experience across different parts of the application called for continuous design iterations.

Despite these challenges, the project successfully delivers a user-friendly eCommerce product listing page with a range of valuable features.

## How to run the project

Before we start, make sure you have the lattest version of NodeJS installed.

Here are some steps to run the project:

1. Clone the repository: `git clone https://github.com/TeodorTodorovT/ecommerce-product-listing-page.git`
2. Open a terminal in the projects directory.
3. Switch to the development branch: `git checkout development`
4. Install the necessary dependencies: `npm install`
5. To run the project: `npm run dev` and go to `http://localhost:5173/`

- To build the project: `npm run build`