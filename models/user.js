const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require('uuid');

module.exports = class User {
    constructor(_dataFilePath = path.join(__dirname, "../data/users.json")) {
        this.dataFilePath = _dataFilePath;
    }

    async addUser(user) {
        try {
            const userData = await fs.readFile(this.dataFilePath, "utf8");
            let users = JSON.parse(userData) || [];
            if (users) {
                users.push({ id: uuidv4(), name: user?.name });
                await fs.writeFile(this.dataFilePath, JSON.stringify(users, null, 2));
            }
        } catch (error) {
            return error.message;
        }
    }

    async deleteUser(userId) {
        try {
            const userData = await fs.readFile(this.dataFilePath, "utf8");
            let users = JSON.parse(userData) || [];
            users = users.filter(user => user.id != userId);
            await fs.writeFile(this.dataFilePath, JSON.stringify(users, null, 2));
        } catch (error) {
            return error.message;
        }
    }

    async editUser(user) {
        try {
            const userData = await fs.readFile(this.dataFilePath, "utf8");
            let users = JSON.parse(userData) || [];
            const userIndex = users.findIndex(u => u.id == user?.id);
            if (userIndex !== -1) {
                users[userIndex].name = user?.name;
                await fs.writeFile(this.dataFilePath, JSON.stringify(users, null, 2));
            }
        } catch (error) {
            return error.message;
        }
    }

    async getUsers() {
        try {
            const userData = await fs.readFile(this.dataFilePath, "utf8");
            return JSON.parse(userData) || [];
        } catch (error) {
            return error.message;
        }
    }

    async getUserById(userId){
        try {
            const userData = await fs.readFile(this.dataFilePath, "utf8");
            let users = JSON.parse(userData) || [];
            return users.find(u => u.id == userId)
        } catch (error) {
            return error.message;
        }
    }
};
