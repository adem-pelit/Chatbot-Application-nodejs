# Chatbot Application

This project aims to develop a chatbot application that can interact with users by asking predefined questions. Users will respond to 10 questions, and their answers will be stored in a MongoDB database.

## Technologies

- **Frontend**: ReactJS[ antdesign ]
- **Backend**: ExpressJS [ cors, dotenv, express-session, mongoose ]
- **Database**: MongoDB

## Session API

### 1. Get Current Session
- **Endpoint:** `GET /session/current`
- **Description:** Retrieves the current session information of the user based on the session ID.
- **Response:**
  - **200 OK**
    ```json
    {
    "data": {
        "_id": "66f3510d74abefb93add7d7d",
        "id": "VQ99y0tfJwrNlcP-05v9Us_nWd78M-EB",
        "messages": [
            {
                "from": "bot",
                "message": "What is your favorite breed of cat, and why?",
                "_id": "66f3510d74abefb93add7d7e"
            }
        ],
        "startTime": "2024-09-24T23:53:49.928Z",
        "__v": 0
       }
      }
    ```

### 2. Get All Sessions
- **Endpoint:** `GET /session`
- **Description:** Retrieves all session informations. 
- **Response:**
  - **200 OK**
    ```json
    {
    "sessions": [{
        "_id": "66f3510d74abefb93add7d7d",
        "id": "VQ99y0tfJwrNlcP-05v9Us_nWd78M-EB",
        "messages": [
            {
                "from": "bot",
                "message": "What is your favorite breed of cat, and why?",
                "_id": "66f3510d74abefb93add7d7e"
            }
        ],
        "startTime": "2024-09-24T23:53:49.928Z",
        "__v": 0
       }]
      }
    ```

### 3. Send Message
- **Endpoint:** `POST /send-message`
- **Description:** This endpoint let user to send message to his/her current session. 
- **Request Body:**
    ```json
    {
      "message": "string"
    }
    ```
- **Response:**
  - **201 Created**
    ```json
    {
      "ok": true,
    }
    ```

### 4. Logout Session
- **Endpoint:** `GET /logout`
- **Description:** This endpoint updates the session ending time information and terminates the user's current session.
- **Response:**
  - **200 OK**
    ```json
    {
      "ok": true,
    }
    ```

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
