import axios from 'axios';

export const ApiEndpoint = axios.create({
    // baseURL: "http://127.0.0.1:8000/",
    baseUrl: "https://api.yutuparty.com/"
  });

// export const webSocketEndpoint = "ws://localhost:8000/ws/chat/";
export const webSocketEndpoint = "wss://api.yutuparty.com/ws/chat/";