"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
// Serve static files
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
// Route for root path
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "public", "index.html"));
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
