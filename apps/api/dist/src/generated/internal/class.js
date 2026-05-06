"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.7.0",
    "engineVersion": "75cbdc1eb7150937890ad5465d861175c6624711",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider     = \"prisma-client\"\n  output       = \"../src/generated\"\n  moduleFormat = \"commonjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nenum Role {\n  USER\n  ADMIN\n}\n\nmodel User {\n  id           String  @id @default(uuid())\n  email        String  @unique\n  passwordHash String  @unique\n  refreshToken String? @unique\n  name         String?\n  role         Role    @default(USER)\n  offers       Offer[] @relation(\"UserFavorites\")\n}\n\nmodel Offer {\n  id          String  @id @default(uuid())\n  title       String\n  description String?\n  price       Float\n  users       User[]  @relation(\"UserFavorites\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"passwordHash\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"refreshToken\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"Role\"},{\"name\":\"offers\",\"kind\":\"object\",\"type\":\"Offer\",\"relationName\":\"UserFavorites\"}],\"dbName\":null},\"Offer\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"users\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserFavorites\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"users\",\"_count\",\"offers\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"Offer.findUnique\",\"Offer.findUniqueOrThrow\",\"Offer.findFirst\",\"Offer.findFirstOrThrow\",\"Offer.findMany\",\"Offer.createOne\",\"Offer.createMany\",\"Offer.createManyAndReturn\",\"Offer.updateOne\",\"Offer.updateMany\",\"Offer.updateManyAndReturn\",\"Offer.upsertOne\",\"Offer.deleteOne\",\"Offer.deleteMany\",\"_avg\",\"_sum\",\"Offer.groupBy\",\"Offer.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"title\",\"description\",\"price\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"email\",\"passwordHash\",\"refreshToken\",\"name\",\"Role\",\"role\",\"every\",\"some\",\"none\",\"connectOrCreate\",\"upsert\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "dxUgCgUAAEsAIC4AAEcAMC8AAAcAEDAAAEcAMDEBAAAAAUABAAAAAUEBAAAAAUIBAAAAAUMBAEkAIUUAAEpFIgEAAAABACAIAwAATgAgLgAATAAwLwAAAwAQMAAATAAwMQEASAAhMgEASAAhMwEASQAhNAgATQAhAgMAAHcAIDMAAE8AIAgDAABOACAuAABMADAvAAADABAwAABMADAxAQAAAAEyAQBIACEzAQBJACE0CABNACEDAAAAAwAgAQAABAAwAgAABQAgCgUAAEsAIC4AAEcAMC8AAAcAEDAAAEcAMDEBAEgAIUABAEgAIUEBAEgAIUIBAEkAIUMBAEkAIUUAAEpFIgMFAAB2ACBCAABPACBDAABPACADAAAABwAgAQAACAAwAgAAAQAgAQAAAAcAIAEAAAADACABAAAAAQAgAwAAAAcAIAEAAAgAMAIAAAEAIAMAAAAHACABAAAIADACAAABACADAAAABwAgAQAACAAwAgAAAQAgBwUAAHUAIDEBAAAAAUABAAAAAUEBAAAAAUIBAAAAAUMBAAAAAUUAAABFAgELAAAQACAGMQEAAAABQAEAAAABQQEAAAABQgEAAAABQwEAAAABRQAAAEUCAQsAABIAMAELAAASADAHBQAAaQAgMQEAVQAhQAEAVQAhQQEAVQAhQgEAVgAhQwEAVgAhRQAAYkUiAgAAAAEAIAsAABUAIAYxAQBVACFAAQBVACFBAQBVACFCAQBWACFDAQBWACFFAABiRSICAAAABwAgCwAAFwAgAgAAAAcAIAsAABcAIAMAAAABACASAAAQACATAAAVACABAAAAAQAgAQAAAAcAIAUEAABmACAYAABoACAZAABnACBCAABPACBDAABPACAJLgAAQwAwLwAAHgAQMAAAQwAwMQEAOAAhQAEAOAAhQQEAOAAhQgEAOQAhQwEAOQAhRQAAREUiAwAAAAcAIAEAAB0AMBcAAB4AIAMAAAAHACABAAAIADACAAABACABAAAABQAgAQAAAAUAIAMAAAADACABAAAEADACAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAUDAABlACAxAQAAAAEyAQAAAAEzAQAAAAE0CAAAAAEBCwAAJgAgBDEBAAAAATIBAAAAATMBAAAAATQIAAAAAQELAAAoADABCwAAKAAwBQMAAFgAIDEBAFUAITIBAFUAITMBAFYAITQIAFcAIQIAAAAFACALAAArACAEMQEAVQAhMgEAVQAhMwEAVgAhNAgAVwAhAgAAAAMAIAsAAC0AIAIAAAADACALAAAtACADAAAABQAgEgAAJgAgEwAAKwAgAQAAAAUAIAEAAAADACAGBAAAUAAgGAAAUwAgGQAAUgAgKgAAUQAgKwAAVAAgMwAATwAgBy4AADcAMC8AADQAEDAAADcAMDEBADgAITIBADgAITMBADkAITQIADoAIQMAAAADACABAAAzADAXAAA0ACADAAAAAwAgAQAABAAwAgAABQAgBy4AADcAMC8AADQAEDAAADcAMDEBADgAITIBADgAITMBADkAITQIADoAIQ4EAAA8ACAYAABCACAZAABCACA1AQAAAAE2AQAAAAQ3AQAAAAQ4AQAAAAE5AQAAAAE6AQAAAAE7AQAAAAE8AQBBACE9AQAAAAE-AQAAAAE_AQAAAAEOBAAAPwAgGAAAQAAgGQAAQAAgNQEAAAABNgEAAAAFNwEAAAAFOAEAAAABOQEAAAABOgEAAAABOwEAAAABPAEAPgAhPQEAAAABPgEAAAABPwEAAAABDQQAADwAIBgAAD0AIBkAAD0AICoAAD0AICsAAD0AIDUIAAAAATYIAAAABDcIAAAABDgIAAAAATkIAAAAAToIAAAAATsIAAAAATwIADsAIQ0EAAA8ACAYAAA9ACAZAAA9ACAqAAA9ACArAAA9ACA1CAAAAAE2CAAAAAQ3CAAAAAQ4CAAAAAE5CAAAAAE6CAAAAAE7CAAAAAE8CAA7ACEINQIAAAABNgIAAAAENwIAAAAEOAIAAAABOQIAAAABOgIAAAABOwIAAAABPAIAPAAhCDUIAAAAATYIAAAABDcIAAAABDgIAAAAATkIAAAAAToIAAAAATsIAAAAATwIAD0AIQ4EAAA_ACAYAABAACAZAABAACA1AQAAAAE2AQAAAAU3AQAAAAU4AQAAAAE5AQAAAAE6AQAAAAE7AQAAAAE8AQA-ACE9AQAAAAE-AQAAAAE_AQAAAAEINQIAAAABNgIAAAAFNwIAAAAFOAIAAAABOQIAAAABOgIAAAABOwIAAAABPAIAPwAhCzUBAAAAATYBAAAABTcBAAAABTgBAAAAATkBAAAAAToBAAAAATsBAAAAATwBAEAAIT0BAAAAAT4BAAAAAT8BAAAAAQ4EAAA8ACAYAABCACAZAABCACA1AQAAAAE2AQAAAAQ3AQAAAAQ4AQAAAAE5AQAAAAE6AQAAAAE7AQAAAAE8AQBBACE9AQAAAAE-AQAAAAE_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"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map