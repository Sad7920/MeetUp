
# MeetUp- Instant Video Calling App

MeetUp is a real-time video calling app that allows users to connect instantly without the need for sign-ups or downloads. It provides a seamless and secure experience for users to either join existing rooms or create new ones with a unique room ID. The application uses WebRTC for peer-to-peer communication, leveraging technologies like Socket.io, Peer.js, and React-player for smooth media streaming.

## Architecture Overview

This project follows a **Monolithic Architecture**, where the entire application—frontend, backend, and real-time communication logic—are contained within a single application. The system is easy to deploy and manage due to its unified structure, while still being scalable and flexible enough to integrate new features in the future.

### Technologies Used

1. **Next.js**:  
   The frontend of this application is built using **Next.js**, a React framework that enables server-side rendering, static site generation, and API routes. Next.js allows for seamless routing, automatic code splitting, and provides a fantastic developer experience.

2. **Socket.io**:  
   **Socket.io** is used for real-time communication between the clients and the server. It enables bi-directional event-based communication and is responsible for broadcasting room events (such as users joining or leaving the room) in real-time.

3. **Peer.js**:  
   **Peer.js** is used for establishing **peer-to-peer (P2P) connections** between clients. It handles the WebRTC connections and provides an easy-to-use API for building video and audio streaming features between users in the same room.

4. **React-Player**:  
   The app uses **react-player**, a customizable React component, for embedding audio and video players. It handles the playback of streaming media and provides a smooth user experience during video calls.

5. **Lodash**:  
   **Lodash** is a JavaScript utility library that provides helpful functions for working with arrays, objects, and functions. It is used throughout the project to simplify operations and improve code readability.

6. **Mesh Topology**:  
   The application implements **Mesh Topology** for peer-to-peer communication. In a mesh network, each peer (user) is directly connected to every other peer in the room. This allows for efficient and low-latency communication, especially for small to medium-sized rooms.

## Features

- **Instant Room Creation**:  
  Users can instantly create a room by generating a unique room ID. No sign-up or login is required.
  
- **Join a Room**:  
  Users can join existing rooms by entering a valid room ID.

- **Real-Time Communication**:  
  Real-time audio and video calls are established using WebRTC via **Peer.js**, allowing peer-to-peer communication without any server-based media routing.

- **Seamless Media Streaming**:  
  Media is streamed efficiently between users using **React-player**, ensuring smooth video and audio playback.

- **Real-Time Notifications**:  
  The app provides real-time notifications to users when other participants join or leave the room, thanks to **Socket.io**.

- **Responsive Design**:  
  The app is fully responsive and works well on both desktop and mobile devices.

## How to Run Locally

To run the project locally on your machine, follow these steps:

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sad7920/MeetUp
   ```

2. Navigate to the project directory:
   ```bash
   cd MeetUp
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to access the app.

## Hosting

The application is hosted and accessible online. You can use the following link to access the live version:

[MeetUp - Instant Video Calling](https://meetup-production-40ff.up.railway.app/)

## Architecture Diagram

The app's architecture follows a **Monolithic structure** with a mesh topology for peer-to-peer communication. Here's a simplified diagram of how the application works:

```
+---------------------+            +------------------+
|    Client (User 1)  |---+    +-->|    Client (User 2) |
|   (React/Next.js)   |   |    |   |   (React/Next.js)  |
|   (Video Player)    |   |    |   |   (Video Player)   |
|   (Socket.io)       |<--+--->|   |   (Socket.io)      |
|   (Peer.js)         |       |    |   (Peer.js)        |
+---------------------+       |     +------------------+
                              |
                              |
                +-------------------------+
                |       Socket.io         |
                | Server (NextJs Server)  |
                +-------------------------+
```

- **Client**: Each client is built with **React** (using **Next.js** for SSR and routing). The client is responsible for connecting to the **Socket.io** server and establishing **Peer.js** connections.
- **Socket.io Server**: The server manages connections between clients, broadcasting events such as joining and leaving rooms.
- **Peer.js**: Handles the P2P connections between users for video and audio calls.

## Conclusion

This project is a simple but powerful video calling app built with modern technologies. The app showcases the use of **Monolithic Architecture** combined with **WebRTC** for real-time communication, making it both scalable and performant. With its peer-to-peer connectivity, no centralized media servers are required, allowing for smooth and efficient video calls.

Feel free to explore the code, suggest improvements, or use the app to create your own video rooms and connect with others!
