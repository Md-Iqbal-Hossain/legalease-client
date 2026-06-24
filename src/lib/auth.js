// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGO_DB_URI);
// const db = client.db(process.env.AUTH_DB_NAME);

// export const auth = betterAuth({
//     emailAndPassword: { 
//     enabled: true, 
//   },
//   database: mongodbAdapter(db, {
//     // Optional: if you don't provide a client, database transactions won't be enabled.
//     client
//   }),
// });

// *************************************************************

// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGO_DB_URI);
// const db = client.db(process.env.AUTH_DB_NAME);

// export const auth = betterAuth({
//   emailAndPassword: { 
//     enabled: true, 
//   },
//   database: mongodbAdapter(db, {
//     client
//   }),
//   // 1. Extend the user schema to include a role field
//   user: {
//     additionalFields: {
//       role: {
//         type: "string",
//         required: false, // Set to true if you want to strictly reject signups without roles
//         defaultValue: "client", // Fallback role if none is supplied
//       },
//     },
//   },
//   // 2. Map registration inputs to your database records
//   plugins: [
//     {
//       id: "role-signup-handler",
//       hooks: {
//         before: [{
//           matcher: (context) => context.path.startsWith("/sign-up"),
//           handler: async (context) => {
//             // Read custom data passed via options or body during signup
//             const body = context.request.body;
//             const chosenRole = body?.data?.role || body?.role || "client";
            
//             // Append the role to the internal pipeline metadata mapping
//             return {
//               context: {
//                 ...context,
//                 user: {
//                   ...context.user,
//                   role: chosenRole,
//                 }
//               }
//             };
//           }
//         }]
//       }
//     }
//   ]
// });

// **********************************************************

// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGO_DB_URI);
// const db = client.db(process.env.AUTH_DB_NAME);

// export const auth = betterAuth({
//   emailAndPassword: { 
//     enabled: true, 
//   },
//   database: mongodbAdapter(db, {
//     client
//   }),
//   user: {
//     additionalFields: {
//       role: {
//         type: "string",
//         required: false,
//         defaultValue: "client", // If a user doesn't pass anything, they default to client
//       },
//     },
//   },
//   // Use databaseHooks to catch data passing right before saving to MongoDB
//   databaseHooks: {
//     user: {
//       create: {
//         before: async (user, ctx) => {
//           // Better-Auth moves everything passed in 'data: {}' directly into the ctx pipeline
//           const signupBody = ctx.body;
//           const chosenRole = signupBody?.data?.role || signupBody?.role || "client";
          
//           return {
//             data: {
//               ...user,
//               role: chosenRole,
//             },
//           };
//         },
//       },
//     },
//   },
// });

// *********************************************************************************

// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// // Prevent multiple MongoClient instances during Next.js hot-reloads
// let client;
// if (process.env.NODE_ENV === "production") {
//   client = new MongoClient(process.env.MONGO_DB_URI);
// } else {
//   if (!global._mongoClient) {
//     global._mongoClient = new MongoClient(process.env.MONGO_DB_URI);
//   }
//   client = global._mongoClient;
// }

// const db = client.db(process.env.AUTH_DB_NAME);

// export const auth = betterAuth({
//   emailAndPassword: { 
//     enabled: true, 
//   },
//   database: mongodbAdapter(db, {
//     client
//   }),
//   user: {
//     additionalFields: {
//       role: {
//         type: "string",
//         required: false,
//         defaultValue: "client",
//       },
//     },
//   },
//   databaseHooks: {
//     user: {
//       create: {
//         before: async (user, ctx) => {
//           const signupBody = ctx.body;
//           const chosenRole = signupBody?.data?.role || signupBody?.role || "client";
          
//           return {
//             data: {
//               ...user,
//               role: chosenRole,
//             },
//           };
//         },
//       },
//     },
//   },
// });


// ***************************************************


import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// Prevent multiple MongoClient instances during Next.js hot-reloads
let client;
if (process.env.NODE_ENV === "production") {
  client = new MongoClient(process.env.MONGO_DB_URI);
} else {
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(process.env.MONGO_DB_URI);
  }
  client = global._mongoClient;
}

const db = client.db(process.env.AUTH_DB_NAME);

export const auth = betterAuth({
  emailAndPassword: { 
    enabled: true, 
    autoSignIn: false,
  },
  database: mongodbAdapter(db, {
    client
  }),
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "client", // Strict fallback base
      },
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user, ctx) => {
          const signupBody = ctx.body;
          let chosenRole = signupBody?.data?.role || signupBody?.role || "client";
          
          // Force normalize "user" or any unexpected value strictly to "client"
          if (chosenRole === "user" || (chosenRole !== "client" && chosenRole !== "lawyer")) {
            chosenRole = "client";
          }
          
          return {
            data: {
              ...user,
              role: chosenRole,
            },
          };
        },
      },
    },
  },
});