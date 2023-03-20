# NextJs 13 Firebase essentials

## NextJs 13

- NextJs is a React Framework that makes Building powerful Full Stack (consisting of Front End and Backend) Applications a lot easier

### Key Features
- NextJS supports Server-Side Rendering (SSR), which allows it to deliver dynamic Content on the initial Page Load rather than waiting for an asynchronous Process to complete after the initial Page Load
- As a Result of SSR, the Web Application renders faster and provides a smoother User Experience, making it more user-friendly than many alternative Frameworks that lack SSR Features
- Automatic Code Splitting (ACS) is a NextJS Feature that allows to automatically separate the Code of a Web Application into smaller Bunldes, which are then loaded on Demand
- As a Result of ACS the Browser loads only the Code required for a specific Page or Component rather than the full Source Code
- NextJS offers a built-in Feature that enables Developers to import Data from external APIs using synchronous Code
- NextJS offers an Image Optimizer to automatically optimizes and compresses Images while creating HTML Views
- The Image Optimizer shrinks the Image Size, reducing the Size of the HTML View and the Time necessary to load the Images
- NextJS has built-in Support for Accessing Data via GraphQL without the need to call a Backend Server through its built-in Library called `Apollo Client`


### Server Component

- By Default, each Page in the `app` Directory is a Server Component which can not handle client-side Interactivity like Adding an `onSubmit()` to a Form Element
- To add client-side Interactivity it is necessary to add the `'use client'` at the Top of the File
- Server and Client Components can be interweaved

## Client-Site Rendering (CSR)

- A Server hosts the bundled Site with the Images and webpack bundled Files containing the Application Code and the needed Dependencies
- Users can request the bundled Files to execute and run them in their Browser
- Browsers are using `Interpreters` to interpret the received Files and render the actual Site that takes some decent Time

<p align="center">
  <img src="https://user-images.githubusercontent.com/29623199/222896607-5bd921ab-8fb0-4131-acda-e73b84208bf6.png" alt="Client Site Rendering" />
</P>

<hr>

## Server-Site Rendering (SSR) / Static Site Generation (SSG)

- **SSR** provides Users with Server-side Rendering on every Request
- **SSG** provides Users with statically generated Files that are created once at Build Time
- A Server hosts the generated Files with the Images and webpack bundled Files
- When a User requests a Page, the Server generates and renders it, so the User gets the finished Page instead of the bundled Files that would be needed to generate it in the Browser
- The Server contains the pre-rendered HTML and JavaScript Files, so the User can interact with them

<p align="center">
  <img src="https://user-images.githubusercontent.com/29623199/222897066-21a239e5-aee8-4f26-8a92-b58988bc1495.png" alt="Server Site Rendering" />
</P>

<hr>

### Server Components

- A Server Component is a Component that is fetched and rendered on the Server
- All Components are by Default `Server Components`
- The User only needs to download the generated HTML and JavaScript Files from the Server for the Server Components
- Server Components are used generally for Data Fetching and Reducing the Client Side Files

### Client Components

- A Client Component is a Component that is fetched and rendered on the Client
- The User only needs to download the JavaScript Files for the Client Components, so the Page loads faster
- Client Components are used generally for Event Handling or Lifecycle Hooks like `useEffect()`

## Firebase

- Firebase is a BaaS (Backend-as-a-Service) – Platform that provides Cloud Backend Services such as Authentication, Realtime Database, Cloud Storage, Analytics and more
