import React from "react";
import Recent Messages from "../recentMessages";
import { messageService } from './messageService'; // Adjust the path accordingly

import { saveMessage } from '../path/to/databaseService';

const mockSaveToDatabase = jest.fn((message) => Promise.resolve({ success: true }));

jest.mock('../path/to/databaseService', () => ({
    saveMessage: (message) => mockSaveToDatabase(message),
}));

describe('Message Service', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mock calls after each test
    });

    test('should send message successfully', async () => {
        const message = "Hello, World!";
        const isSent = await messageService.sendMessage(message);
        
        expect(isSent).toBe(true);
        expect(mockSaveToDatabase).toHaveBeenCalledWith(message);
    });

    test('should fail to send null message', async () => {
        const isSent = await messageService.sendMessage(null);
        
        expect(isSent).toBe(false);
        expect(mockSaveToDatabase).not.toHaveBeenCalled();
    });

    test('should fail to send empty message', async () => {
        const isSent = await messageService.sendMessage("");
        
        expect(isSent).toBe(false);
        expect(mockSaveToDatabase).not.toHaveBeenCalled();
    });
});

// messageService.js
export const messageService = {
    saveMessage: (message) => {
        // Actual implementation to save the message to the database
    },
    getMessageById: (id) => {
        // Actual implementation to retrieve the message from the database
    }
};

import { messageService } from './messageService'; // Adjust the import path accordingly

// Mocking the messageService methods
jest.mock('./messageService', () => ({
    saveMessage: jest.fn(),
    getMessageById: jest.fn(),
}));

describe('Message Service', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mock calls after each test
    });

    test('should save and retrieve message successfully', () => {
        const message = { id: 1, content: "Hello, Database!" }; // Simulated message object

        // Mock implementation for saving and retrieving the message
        messageService.saveMessage.mockImplementation((msg) => {
            return Promise.resolve(msg); // Simulate saving the message
        });
        messageService.getMessageById.mockImplementation((id) => {
            return Promise.resolve(message); // Simulate retrieving the message
        });

        return messageService.saveMessage(message).then(() => {
            return messageService.getMessageById(message.id).then(retrievedMessage => {
                expect(retrievedMessage).not.toBeNull();
                expect(retrievedMessage.content).toEqual(message.content);
            });
        });
    });

// messageService.test.js
import { messageService } from './messageService'; // Adjust the path accordingly

// Mocking the messageService methods
jest.mock('./messageService', () => ({
    saveMessage: jest.fn(),
    getMessageById: jest.fn(),
}));

describe('Message Service', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mock calls after each test
    });

    test('should retrieve message successfully', async () => {
        const message = { id: 1, content: "Hello, Retrieval!" }; // Simulated message object

        // Mock implementation for saving and retrieving the message
        messageService.saveMessage.mockResolvedValue(message); // Simulate saving the message
        messageService.getMessageById.mockResolvedValue(message); // Simulate retrieving the message

        // Save the message
        await messageService.saveMessage(message);

        // Retrieve the message
        const retrievedMessage = await messageService.getMessageById(message.id);

        // Assertions
        expect(retrievedMessage).not.toBeNull();
        expect(retrievedMessage.content).toEqual(message.content);
    });
});
