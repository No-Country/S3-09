const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const { authRoutes, uploadsRoutes, usersRoutes } = require('../routes')
const db = require('../database/connection');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            auth: '/api/v1/auth',
            uploads: '/api/v1/uploads',
            users: '/api/v1/users',
        }

        this.connectDB()
        this.middlewares()
        this.routes()
    }

    async connectDB() {
        try {
            await db.sync({ alter: true });
            console.log('Database connected');
        } catch (error) {
            console.log(error);
            console.log('It could not connect to the database');
        }
    }

    middlewares() {
        //CORS
        this.app.use(cors())
        //Static files
        this.app.use(express.static('public'));
        //Body parser
        this.app.use(express.json());
        //File uploads
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/'
        }));
    }

    routes() {
        this.app.use(this.paths.auth, authRoutes);
        this.app.use(this.paths.uploads, uploadsRoutes);
        this.app.use(this.paths.users, usersRoutes);
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

module.exports = Server;