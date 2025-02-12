# 🏕️ Luxury Cabin Booking Website 🏕️

This is a Next.js study project application for a luxury cabin booking website. It utilizes Supabase for database management and user authentication.

## ✨ Features ✨

* **Home Page:**
    * Showcases stunning images of the cabins and surrounding scenery.
    * Includes a call-to-action button to explore available cabins.
* **Cabin Listings:**
    * Displays a list of available cabins with key information (e.g., name, capacity, images).
    * Includes a filter to narrow down the search by cabin capacity.
* **Cabin Details:**
    * Provides detailed information about a specific cabin, including descriptions, images, and amenities.
    * Allows users to make reservations with a reservation form.
* **User Authentication:**
    * Enables user registration and login using Supabase Auth.
    * Provides a secure guest area for logged-in users.
* **Guest Area:**
    * Allows users to view and manage their reservations.
    * Enables users to update their profile information.
* **About Page:**
    * Provides information about the business, its history, and the surrounding area.

## 🛠️ Project Setup

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
  ```

2. **Navigate to the project directory:**
   ```bash
   cd <project_directory>
```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Configure Supabase environment variables:**

    * Create a `.env.local` file in the project root.
    * Add your Supabase project URL and API key to the `.env.local` file:
      ```
      NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
      NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key> 
      ```

5. **Start the development server:**
   ```bash
   npm run dev
    ```

## 💾 Data Fetching

* Utilizes a data service (`_lib/data-service.js`) to interact with the Supabase database to fetch cabin data, booked dates, and user information.
* Leverages `getStaticParams()` and `generateStaticProps()` for server-side data fetching.

## 🎨 Styling

* Uses Tailwind CSS for styling and layout.
* Includes custom CSS for additional styling.
