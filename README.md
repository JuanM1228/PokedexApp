<p align="center" width="300">
   <img align="center" width="300" src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg" />
   <h3 align="center">Hey Heroes 👋! hope you enjoy the project.👨🏻‍💻</h3>
</p>

I decided to make this project about pokemon api because it is one of the series that I liked the most when I was a kid 👦 and what better than to make a test with something that you really enjoy 😍💪.

# 🐥 Pokedex

This project aims to create a visualization of a 100-pokemon catalog with the ability to display detailed information about each one of them. The design will be based on pure CSS, ensuring good user experience and a visually appealing interface.

<br>

# Tools

<br>
<br>

<p align="center" width="300">
<img align="center" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" />
<img align="center" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" />
   <img align="center" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
   <img align="center" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
   <img align="center" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" />
      <img align="center" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" />
      <img align="center" width="80" src="https://vitejs.dev/logo.svg" />
</p>

<br>
<br>

# Libraries used

## react-router-dom:

For navigation within the project, we will use both fixed and dynamic routes, utilizing one of the most popular libraries with a vast community of users.

<p align="center" width="300">
  <img align="center" width="120" src="https://reactrouter.com/_brand/react-router-color-inverted.svg"/>
</p>

## react icons:

Icons will be incorporated into the application as they are easy to integrate and are compatible with all versions of React.

<p align="center" width="300">
  <img align="center" width="50" src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg"/>
</p>

## redux-toolkit:

To simplify and optimize the process of creating stores and reducers in my project that uses Redux, I am using a library specifically designed for this purpose. This library is particularly useful for managing states within my project, and in my case, I am using it to manage the user name and data of the selected Pokémon.

<p align="center" width="300">
   <img align="center" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" />
</p>

# SVG:

For the project icon, header logo, and each of the Pokémon cards, I utilized SVG due to its ability to maintain high quality while reducing file size. Additionally, SVGs can be easily modified using CSS, as demonstrated in the customization of the Pokémon cards.

# Design:

- I chose to use pure CSS for my project, as it allowed me greater flexibility in my design. While frameworks such as Bootstrap and Tailwind are commonly used and offer simple designs, I felt that they might limit my creativity.
- Throughout the project, I utilized flexbox extensively to ensure a responsive design. Flexbox simplified the alignment of elements and components, and I found no need to use additional tools such as grid, because my layout was simple

<p align="center" width="300">
 <img align="center" width="400" src="images\responsive.gif" />
</p>

- To improve the appearance of the Pokémon cards, I utilized relative and absolute positioning for the placement of images. This technique allowed for better visual organization and an improved viewing experience.

- In terms of color selection, I limited the number of variables to make it easier to use and maintain consistency throughout the project. This involved creating a small color palette and using it consistently throughout the design. This approach ensured that the color scheme was cohesive and aesthetically pleasing.

<center>

|   **Variable**   |                                            **Color**                                             |
| :--------------: | :----------------------------------------------------------------------------------------------: |
| --yellow-pokemon |     ![**rgb(204, 181, 33)**](https://via.placeholder.com/10/CCB521?text=+) rgb(204, 181, 33)     |
|   --app-color    |       ![**rgb(36, 36, 36)**](https://via.placeholder.com/10/242424?text=+) rgb(36, 36, 36)       |
|   --font-color   | ![**rgb(204, 181, 33)**](https://via.placeholder.com/10/ffffffcc?text=+) rgb(255, 255, 255, 0.8) |

 </center>

- I chose to use a cursor pointer for the cards where it is possible to interact with the application to improve the user experience.

# Login restrictions:

To ensure data quality in the user input, I utilized regular expressions (regex) to restrict users to only entering alphabetic characters. Furthermore, I implemented a validation rule that required users to enter a name between 3-20 characters in length. These restrictions were based on my own proposals, but in a real project, validation rules would depend on the specifications provided by the front-end and back-end teams.

The use of regex is crucial for efficient and fast queries. By enforcing these restrictions, I was able to optimize the data quality and prevent errors that could arise from invalid user input.

<br>

# LocalStorage

To enhance the user experience and prevent the loss of selected Pokémon and user information upon refreshing the project, I utilized local storage. Without this tool, the data would have been deleted upon page refresh. However, by storing the data in local storage, it is retained even after the page is refreshed, improving the overall user experience.

<br>

# Componente Loading

To enhance the user experience and provide feedback to users, I implemented a loading component that appears while the API returns information to display. This feature alerts users that data is being requested and assures them that the application is working. The loading component improves the overall user experience by providing a visual cue that acknowledges their actions and assures them that progress is being made.

<br>

# Walkthrough of the project

## Header

To enhance the user interface and provide additional functionality, I added a Pokémon logo in SVG format and a logout button to the header. These features provide users with a more immersive experience and allow for easy navigation throughout the project. The logo provides visual interest and reinforces the overall theme of the application, while the logout button enables users to exit the application and return to the login screen. The addition of these features improves the overall usability and functionality of the application.

## Login screen

 <img align= "right" width="400" src="images\app.gif" />

The login screen features a welcome message, an input element, and a login button. The input element includes a placeholder attribute with the message "please enter your name" to prompt users to enter their login information. To ensure data accuracy and prevent errors, the application is designed to reject user names that include numerical elements, symbols, or blank spaces. If a user enters invalid information, a message appears with instructions on the accepted characteristics of a valid username. These features provide users with clear guidance and ensure that only valid login information is accepted, enhancing the overall functionality of the application.

## Pokemon List screen

The Pokemon List screen includes a logout button in the header, allowing users to return to the login screen. The pokedex name corresponding to the user is displayed at the top of the screen in an 8-bit font from Google Fonts, adding a playful touch to the interface.

The main body of the screen features 100 cards, each showcasing a different Pokemon's name, type, weight, and image. When a user hovers over a card, it grows in size by a certain percentage, improving the user experience and making it easier to select a specific Pokemon. The screen is designed with flexbox, ensuring that it remains responsive across different devices.

## Pokemon information screen

selecting a pokemon card will send us to another screen where we can see more characteristics of the selected pokemon such as weight, height, type of pokemon, life points, attack points, defense points and speed.

if you want to return to the pokemon list there are two ways to do it:

- clicking on the pokemon logo, since many users are used to click on the logos to return to home.
- clicking on the arrow button placed at the top left of the screen.
  it should be noted that when reloading the page this will not be affected since the info is stored in the local storage.

Another point to observe is that the url is dynamic with respect to the selected pokemon thanks to react router dom.

# Improvement points:

- better animations for page transitions.
- more information in pokemon card selected maybe with some carousel component and graphics for better visualization of information.
- Add error handling for when the API request fails, to provide a better user experience and inform the user of the issue.

# Steps to run project

You need these tools to get started:

- Node js
- Git

You need to clone this repository https://github.com/JuanM1228/PokeApp.git in a directory using a terminal

#### `git clone https://github.com/JuanM1228/PokeApp.git`

After that you need to enter the generated folder

#### `cd PokeApp`

After that you need to download the necessary dependencies for the project

#### `npm install`

finally run the app in the development mode.

#### `npm run dev -- --host`

this command is to run the project in development mode enabling the default port so that any networked device can observe the page.
