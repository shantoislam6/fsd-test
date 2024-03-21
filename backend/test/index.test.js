"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const mocha_1 = require("mocha");
const app_1 = __importDefault(require("../src/app"));
chai_1.default.should();
chai_1.default.use(chai_http_1.default);
(0, mocha_1.describe)('GET /', () => {
    (0, mocha_1.it)('should return homepage with 200 status code', (done) => {
        chai_1.default.request(app_1.default)
            .get('/')
            .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});
(0, mocha_1.describe)('GET /health', () => {
    (0, mocha_1.it)('should return 200', (done) => {
        chai_1.default.request(app_1.default)
            .get('/health')
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });
});
