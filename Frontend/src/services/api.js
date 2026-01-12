// Service stub for future backend streaming
// This file will handle connections to the backend API

const API_BASE_URL = "http://localhost:3000/api"; // Replace with actual backend URL

/**
 * Placeholder for a function that establishes a stream.
 * In the future, this might use fetch with ReadableStreams or WebSocket.
 */
export const streamChatResponse = async (message, onChunkReceived) => {
    console.log("Initiating chat stream with message:", message);
    
    // TODO: Implement actual streaming logic here
    // Example pseudocode:
    // const response = await fetch(`${API_BASE_URL}/chat`, { method: 'POST', body: ... });
    // const reader = response.body.getReader();
    // ... loop to read chunks and call onChunkReceived(chunk) ...
};
