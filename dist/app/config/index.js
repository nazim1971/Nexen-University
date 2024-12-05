"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
class Config {
    constructor() {
        this.uri = process.env.DATABASE_URI;
        // Ensure required variables are present
        if (!this.uri) {
            throw new Error('DATABASE_URI is required in .env file');
        }
        if (!process.env.PORT) {
            throw new Error('PORT is required in .env file');
        }
        if (!process.env.BCRYPT_SALT_ROUNDS) {
            throw new Error('BCRYPT_SALT_ROUNDS is required in .env file');
        }
    }
    // MongoDB connection method
    connectDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.default.connect(this.uri);
                console.log('Connected to MongoDB Successfully');
            }
            catch (error) {
                console.error('Error connecting to MongoDB:', error instanceof Error ? error.stack : error);
            }
        });
    }
    // Getter for the port from the environment variable
    get port() {
        return Number(process.env.PORT);
    }
    get slat() {
        return Number(process.env.BCRYPT_SALT_ROUNDS);
    }
    get password() {
        return String(process.env.DEFAULT_PASS);
    }
}
exports.default = new Config();