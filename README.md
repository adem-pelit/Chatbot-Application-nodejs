# Chatbot Application

This project aims to develop a chatbot application that can interact with users by asking predefined questions. Users will respond to 10 questions, and their answers will be stored in a MongoDB database.

## Technologies

- **Frontend**: ReactJS
- **Backend**: ExpressJS
- **Database**: MongoDB

## Installation

### Prerequisites

- Node.js
- MongoDB

### Steps

1. **Run backend project**:

   ```bash
   cd .\backend
   npm i
   npm run dev
2. **Run frontend project**:

   ```bash
   cd .\frontend
   npm i
   npm run dev

## Preview

Upon accessing the application, users are greeted by a chatbox, with an input section at the bottom for responding to questions managed by the server. Once all questions have been answered, a thank-you message appears, the responses are saved in the database, and the page automatically reloads. If users wish to restart the conversation at any point, they can do so by clicking the "Finish Conversation" button located in the navbar.

![image](https://github.com/user-attachments/assets/916914cb-437b-477b-a4d1-4077343cecf6)
