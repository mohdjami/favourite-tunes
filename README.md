# Welcome to the documentation for the My Favorite Tunes app!

This app is a music streaming platform that allows users to listen to their favorite songs, discover new artists, and create playlists. Here's an overview of the app's features and functionality.

## Features

- User authentication and authorization with NextAuth and Prisma
- Responsive design with Tailwind CSS and Radix UI components
- Dynamic routing with Next.js
- Server-side rendering for improved SEO and performance
- API routes for fetching data from a PostgreSQL database
- Custom hooks for form handling and data validation
- Internationalization and localization with i18next
- Theming and dark mode with Next Themes
- Animation and transitions with Framer Motion

## Components

The app is built using a variety of React components, including:

- AlertDialog: A modal dialog for displaying alerts and notifications
- Avatar: A circular image component for displaying user avatars
- Button: A clickable button component with various styles and sizes
- Card: A container component for displaying media content
- Container: A responsive container component for centering and padding content
- Dialog: A modal dialog for displaying forms and other content
- DropdownMenu: A dropdown menu component for displaying options and actions
- Form: A form component with built-in validation and error handling
- Input: A text input component with various styles and sizes
- Label: A label component for displaying form field labels
- ModeToggle: A toggle switch for switching between light and dark themes
- Sheet: A drawer component for displaying additional content
- Skeleton: A loading skeleton component for displaying placeholder content
- Table: A table component for displaying data in a tabular format
- Textarea: A textarea component with various styles and sizes
- Toast: A toast component for displaying notifications and alerts
- Toaster: A container component for managing and displaying toasts

## Pages

The app includes the following pages:

- Home: The main page of the app, which displays a list of featured songs and artists
- Dashboard: A page for managing user account settings and preferences
- Music: A page for browsing and searching for songs and artists
- Sign In: A page for signing in to the app with various authentication providers
- Sign Up: A page for signing up for a new account
- Not Found: A page for displaying 404 errors when a requested page is not found

## API Routes

The app includes the following API routes for fetching data from the database:

- /api/songs: A route for fetching a list of songs
- /api/songs/:id: A route for fetching a list of songs by id.
- /api/artists A route for fetching a list of artists with their songs.
- /api/artists/:id/albums: A route for fetching a list of albums by an artist(SOON)
- /api/artists: A route for fetching a list of related artists

## Utilities

The app includes the following utility functions and modules:

- cn: A utility function for concatenating class names with conditional logic
- fetchArtistById: A utility function for fetching an artist by ID
- fetchSongs: A utility function for fetching a list of songs
- prisma: A Prisma client instance for interacting with the database
- useToast: A custom hook for managing and displaying toasts

## Configuration

The app includes the following configuration files:

- env.mjs: An environment configuration file for defining and accessing environment variables
- next.config.js: A Next.js configuration file for configuring webpack and other build settings
- package.json: A package configuration file for managing dependencies and scripts
- postcss.config.js: A PostCSS configuration file for configuring CSS processing and autoprefixing
- prisma/schema.prisma: A Prisma schema file for defining the database schema and models
- tailwind.config.js: A Tailwind CSS configuration file for configuring theming, colors, and other settings
- tsconfig.json: A TypeScript configuration file for configuring the TypeScript compiler and build settings
- vercel.json: A Vercel configuration file for configuring serverless functions and deployment settings

That's a brief overview of the My Favorite Tunes app! We hope you enjoy using it as much as we enjoyed building it.

# Installation Instructions

Follow these steps to install and run the "my-app" project:

1.  **Clone the repository**

    Use the following command to clone the repository:

    ```bash
    git clone https://www.github.com/mohdjami/favourite-tunes.git
    ```

    Navigate to the project directory

Use the following command to navigate to the project directory:

    cd my-app

Install the dependencies

Use the following command to install the project dependencies:

    npm install

or if you are using yarn:

    yarn install

Run the application

Use the following command to run the application in development mode:

    npm run dev

or if you are using yarn:

    yarn dev

The application will start running at http://localhost:3000.

Please ensure that you have Node.js and npm/yarn installed on your machine before you attempt to run this project.
