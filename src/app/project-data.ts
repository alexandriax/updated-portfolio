export interface Project {
  id: string;
  title: string;
  overview: string;
  purpose: string;
  objective: string;
  approach: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  future: string[];
  reflection: string;
  images: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'pokedex',
    title: 'Pokedex',
    overview: `The Pokédex is a small web app built using HTML, CSS, and vanilla JavaScript. It was designed to integrate an external API (the PokéAPI in this case). Users can browse and search a list of pokémon, and can view detailed information dynamically.`,
    purpose: `The primary purpose of this app was to introduce APIs to my work and improve my understanding of asynchronous JavaScript. It was built as a part of my portfolio, and allowed me to practice fetching and displaying external data while maintaining an interactive and user-friendly frontend experience. By integrating data from the <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a> and <a href="https://pokemontcg.io/" target="_blank" rel="noopener noreferrer">Pokémon TCG API</a>, I gained hands-on experience in handling multiple API calls, optimizing data rendering for smooth performance, and implementing effective error management.<br><br>This project provided the opportunity to practice implementing jQuery and CSS for responsive design and user interactivity. It also served as a foundational experience in working with APIs and asynchronous operations, preparing me for future projects that involved designing and integrating my own API from scratch.`,
    objective: `The primary objective of this project was to integrate an external API to fetch and display pokémon data, while maintaining a responsive and interactive design. Key objectives included: <br>
    - Develop a fully functional web app that dynamically fetches and displays pokémon data. <br>
    - Create detailed modals that showcase information about each pokémon upon clicking. <br>
    - Ensure responsiveness by designing a mobile-friendly layout that adjusts across different screen sizes. <br>
    - Implement a search functionality allowing users to find pokémon easily. <br>
    - Strengthen my knowledge of JavaScript, jQuery, and CSS as well as UX/UI design.`,
    approach: `To accomplish these objectives, I used the following tools and methodologies:<br><br>
    <strong>JavaScript’s Fetch API:</strong> I used the Fetch API to asynchronously retrieve pokémon data from two separate endpoints. The pokémon cards found on the homepage are fetched from the Pokémon TCG API, while the detailed stats that appear when a user selects a pokémon are fetched from the PokéAPI.<br><br>
    <strong>jQuery:</strong> jQuery was used to manage dynamic user interactions, such as opening modals and triggering the display of pokémon details. This helped keep the UI visually organized.<br><br>
    <strong>CSS:</strong> CSS was used for responsive design, building custom modals, and visually organizing pokémon data. CSS Grid and Flexbox were used to align the layout and maintain aesthetics across all screen sizes.`,
    features: [
      'Two API integrations (Pokémon TCG API for card images, PokéAPI for detailed pokémon information)',
      'Dynamically generated pokémon list with real-time data retrieval',
      'Search functionality',
      'Interactive modals',
      'Responsive design',
      'Error handling and loading indicators'
    ],
    challenges: [
      'Handling two different APIs efficiently: Ensuring smooth API integration while managing multiple data sources was a major hurdle.',
      'Maintaining a responsive and aesthetically pleasing app: Required careful layout and CSS design.'
    ],
    solutions: [
      'Optimized API Calls: Used async/await to manage API calls efficiently and prevent unnecessary data fetching. Fetched details only when a user selects a pokémon.',
      'Error Handling: Implemented robust error handling to catch API failures and notify users of issues.',
      'Responsive Modals: Used custom CSS to build modals that adapt to different screen sizes.',
      'Enhanced UX/UI: Focused on layout, accessibility, and responsiveness using CSS Grid and Flexbox.'
    ],
    future: [
      'Enhance search functionality with filters like type and abilities.',
      'Transition to a framework like React for improved scalability.',
      'Fetch data from a third API to expand the pokédex.',
      'Develop competitive play features like a Type Effectiveness Guide and Battle Strategy Suggestions.'
    ],
    reflection: `This project provided the opportunity to refine several key skills:<br>
    - Working with external APIs and handling asynchronous data<br>
    - Managing user interactivity using vanilla JavaScript and jQuery<br>
    - Ensuring responsive design and aesthetics using CSS<br><br>
    The Pokédex laid the foundation for future, more complex applications. Because of this project, I was later able to design and integrate my own APIs using frameworks like React and Node.js.`,
    images: [
      'assets/imgs/pokedex.full.png',
      'assets/imgs/pokedex.loading.png',
      'assets/imgs/mew.png',
      'assets/imgs/pokedex.modal.png',
      'assets/imgs/jirachi.png',
      'assets/imgs/charmander.png'
    ]
  }, 

  {
    id: 'chatApp',
    title: 'Chat App',
    overview: 'This mobile chat app is a React Native application built using Expo and Firebase. It provides users with a streamlined chat interface along with the ability to send images and share their location. Designed with accessibility and responsiveness in mind, the app leverages modern mobile development technologies to create a native-feeling experience on both iOS and Android from a single codebase.',
    purpose: 'The purpose of this app was to build a fully functional mobile chat experience using JavaScript, and to demonstrate my ability to create native applications with modern frameworks. As mobile usage continues to dominate digital interaction, this project was designed as a mobile-first experience, emphasizing performance, usability, and accessibility.<br> This app was developed as part of my portfolio to strengthen my skills in React Native and Firebase. React Native allows developers to write once and deploy to both Android and iOS platforms, making it ideal for efficient mobile development. By integrating Firebase Firestore and Firebase Storage, I gained hands-on experience with real-time databases, authentication, and cloud storage solutions.<br>Through this project, I also became familiar with the Expo framework, the Gifted Chat UI library, and client-side storage using AsyncStorage, all of which are essential for building rich mobile user experiences.',
    objective: 'The objective of this project was to build a mobile chat application that:<br> Allows users to enter a chat room anonymously <br><br> Sends and receives text messages in real time <br> <br> Lets users pick an image from their device or take a photo to share in the chat <br> <br> Enables users to send their current location in the form of a map <br> <br> Functions offline and syncs conversations when reconnected <br> <br> Provides a user-friendly, accessible interface that supports screen readers <br><br> Demonstrates core mobile development concepts using JavaScript, React Native, and Firebase',
    approach: 'To bring this app to life, I used the following tools and technologies: <br> <br> <strong>React Native & Expo:</strong> <br>  Expo simplified the development and testing process across mobile platforms. I used React Native components to structure the app and styled them according to a provided design specification. <br><br> <strong>Gifted Chat:</strong><br>  Gifted Chat provided the core messaging UI and message-handling logic. I customized its behavior to support rich content like images and maps. <br><br> <strong>Firebase Authentication & Firestore:</strong><br> Users are authenticated anonymously, and messages are stored in Firestore for real-time syncing. I also used Firebase Cloud Storage to store images and return secure URLs to embed in messages.<br><br> <strong>AsyncStorage:</strong><br> To ensure offline functionality, messages are stored locally using AsyncStorage. When users go offline, they can still view their chat history. Once reconnected, the app syncs data with Firestore.<br><br> <strong>Expo ImagePicker & Location:</strong><br>  I used Expos ImagePicker to access the users library or camera, and Expo Location to share their current location as an embedded map.<br><br> <strong>Accessibility:</strong><br>  The app supports screen readers and accessible action buttons to ensure inclusivity for users with visual impairments. ',
    features: [
      'Anonymous user authentication via Firebase',
      'Real-time chat with persistent message history using Firestore',
      'Offline message storage using AsyncStorage',
      'Image sharing from camera and photo library',
      'Location sharing as a static map message',
      'Customizable chat screen background colors',
      'Accessible components compatible with screen readers',
      'Fully responsive design for iOS and Android'
    ],
    challenges:[
      'Image Rendering: Originally, image messages would break the message flow or display incorrectly. The issue stemmed from how message _id values were assigned during image uploads.',
      'Offline Sync Logic:  Ensuring seamless offline access while syncing messages with Firestore required precise data management and condition checks. ',
      'Accessibility:  Custom components such as the action sheet button needed to be made screen-reader accessible, requiring semantic structuring and testing.'
    ] ,
    solutions: [
      'Unique Message IDs:  I fixed image handling issues by generating unique UUIDs instead of using image URLs as _id values, which caused Firebase to misinterpret the message structure.',
      'Conditional Rendering:  Used isConnected to determine whether the user could send messages or not. If offline, the input field is disabled, and messages are retrieved from local storage.',
      'Accessible Custom Actions: Made the action sheet button navigable and labeled using accessibility props to ensure compatibility with screen readers.',
      'Encapsulation of Features: Separated image uploading and location sharing logic into a reusable CustomActions component for modularity and better organization.'
    ],
    future: [
      'Add push notifications to alert users of new messages',
      'Introduce user avatars and profile customization',
      'Implement message reactions and emoji support',
      'Include group chat or room creation features',
      'Integrate voice messaging',
      'Add message delivery and read receipts',
      'Offer light/dark theme toggles'
    ],
    reflection: 'This project was instrumental in deepening my understanding of React Native and mobile development workflows. I learned how to: <br><br>Structure an app using React Native and manage platform-specific quirks<br><br>Integrate Firebase services (Authentication, Firestore, Storage) effectively <br><br>  Manage offline-first experiences with AsyncStorage <br><br> Build an accessible UI using community libraries and Expo modules <br><br> By the end of this project, I had created a polished mobile chat experience with rich functionality and a clean, user-friendly interface. This chat app demonstrates my ability to build cross-platform mobile experiences from the ground up and has become a cornerstone of my portfolio.',
    images: [
      'assets/imgs/mobilechat-full.png',
      'assets/imgs/mobilechat-menu.png',
      'assets/imgs/mobilechat-map.png',
      'assets/imgs/mobilechat-color2.png',
      'assets/imgs/mobilechat-image.png',
    ]

  },

  {
    id: 'meetApp',
    title: 'Meet App',
    overview: 'Meet is a progressive web application (PWA) built with React that integrates with the Google Calendar API to display upcoming events based on a users selected city. The app supports offline access, filtering by the number of events shown, and includes interactive data visualizations that highlight trends in event types and locations. With Google authentication and city-based search functionality, Meet offers a seamless way for users to explore local events in real-time.',
    purpose: 'The purpose of this project was to build a responsive and fully functional event-focused web app using modern frontend tools and Google’s API services. As part of my portfolio, Meet demonstrates my understanding of OAuth2 authentication, API data handling, test-driven development, and progressive web app standards.<br><br>The app was designed to solve a practical problem: helping users discover events happening in their area. By connecting to a public Google Calendar API and offering intuitive search and filtering, Meet serves as both a technical showcase and a useful tool.<br><br>This project also provided the opportunity to learn about deploying serverless functions with AWS Lambda for secure token authorization, as well as implementing service workers for offline functionality. The app was developed using React and styled for cross-device responsiveness.',
    objective: 'The key objectives of the Meet App were to: <br><br> - Integrate with the Google Calendar API using secure OAuth2 authorization <br><br> - Allow users to search for events by city using an autocomplete search field <br><br> - Display a list of upcoming events with their relevant details <br> <br>- Enable users to filter how many events are displayed at once <br><br> - Provide data visualizations to help users explore trends in event types <br><br> - Ensure offline access and app installability by building as a PWA <br><br> - Follow test-driven development (TDD) practices using Jest and Cucumber',
    approach: 'To accomplish these goals, I used the following tools and practices: <br><br> <strong>React:</strong><br>  The entire app was built using React to create reusable components and manage state efficiently. Functional components with hooks allowed for a clean and modular structure. <br><br> <strong>Google Calendar API & OAuth2:</strong> <br>  Users are authenticated through Googles OAuth2 process. Events are fetched from a public calendar using a serverless function hosted on AWS Lambda to securely handle access tokens. <br><br> <strong>City Search with Suggestions:</strong><br>  The app includes an intelligent city search bar that uses a list of predefined locations. Suggestions are filtered in real time as the user types. <br><br> <strong>Data Visualizations:</strong> <br>  Using Recharts, I created pie charts and scatter plots to visualize event distribution by genre and city. This helped users understand what types of events were most popular in different locations. <br><br> <strong>PWA Support:</strong><br> The app supports offline mode and installability thanks to service workers and a manifest file. Cached data ensures users can still browse previously loaded events without an internet connection.<br><br> <strong> Testing:</strong><br> I used Jest for unit testing and Cucumber for integration testing following a test-driven development (TDD) workflow. This ensured reliability and helped catch errors early in development.  ' ,
    features: [
      'Google sign-in using OAuth2',
      'Event list with real-time filtering',
      'Search by city with autocomplete',
      'Filter by number of events displayed',
      'Interactive data visualizations (pie + scatter charts)',
      'Offline support with service workers',
      'Responsive, mobile-first layout',
      'Built and deployed as a PWA (installable on mobile)',
      'Serverless API token handling via AWS Lambda',
      'Fully tested with Jest and Cucumber'
    ],
    challenges: [
      'Google Authorization Flow: Setting up OAuth2 securely in a client-side app required creating and deploying a serverless function to manage access tokens, which added complexity to the project.',
      'Handling API Rate Limits and Errors: When querying the Google Calendar API, it was important to handle errors gracefully and stay within rate limits while testing and debugging.',
      'Offline Functionality: Service workers needed to be configured carefully to ensure cached data didn’t interfere with live updates. Testing offline behavior also introduced edge cases.',
      'Testing Asynchronous APIs: Creating unit and integration tests for async API calls and UI rendering required careful mocking of external data sources.'
    ] ,
    solutions: [
      'Serverless Token Exchange: I used AWS Lambda to securely exchange the authorization code for access tokens, keeping sensitive API logic out of the frontend codebase.',
      'Robust Error Handling: I implemented fallback messages and loading indicators to inform users of connection issues, empty event results, or other API errors.',
      'Caching Strategy: Service workers were configured to cache only essential files and previously fetched event data. This ensured reliability while still reflecting new updates when online.',
      'Mocking in Tests: To support TDD, I mocked the Google Calendar API and event data in both unit and integration tests, allowing for repeatable test scenarios without depending on live API responses.'
    ],
    future: [
      'Allow users to filter by event category or keyword (e.g., tech, music, food)',
      'Add user account personalization (e.g., favorited cities or event types)',
      'Let users add events directly to their Google Calendar',
      'Integrate geolocation to suggest events based on the user’s current location',
      'Add map view for visual event discovery',
      'Dark/light mode theme toggle'
    ],
    reflection: 'This project helped strengthen my skills in React, API integration, and test-driven development. I learned how to work with OAuth2 authentication securely, how to build performant and interactive frontend interfaces, and how to turn a complex user experience into a lightweight and accessible web application. <br> <br> The Meet App represents a culmination of many core frontend skills — from component design and user input handling to data visualization, offline support, and real-time filtering. It also gave me confidence working with third-party APIs and deploying serverless functions for secure backend logic. <br><br>By completing this project, I built a polished and functional app that not only demonstrates technical proficiency but also provides real user value.',
    images: [
      'assets/imgs/meet-full.png',
      'assets/imgs/meet-search.png',
      'assets/imgs/meet-filter.png',
      'assets/imgs/meet-data.png',
      'assets/imgs/meet-list.png'
    ],

  }
];


  