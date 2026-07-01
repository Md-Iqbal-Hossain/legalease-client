// const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:5000';

// // GET 
// export const serverFetch = async (path) => {
//   try {
//     const res = await fetch(`${baseUrl}${path}`, {
//       cache: 'no-store',
//     });
//     if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`);
//     return await res.json();
//   } catch (error) {
//     console.error(`Fetch Error on path ${path}:`, error);
//     throw error;
//   }
// };

// // POST, PUT, PATCH, DELETE 
// export const serverMutation = async (path, method = 'POST', data = null) => {
//   try {
//     const options = {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };
    
//     if (data) {
//       options.body = JSON.stringify(data);
//     }

//     const res = await fetch(`${baseUrl}${path}`, options);
//     if (!res.ok) throw new Error(`Mutation Error! Status: ${res.status}`);
//     return await res.json();
//   } catch (error) {
//     console.error(`Mutation Error (${method}) on path ${path}:`, error);
//     throw error;
//   }
// };

// **********************************************

// import { redirect } from "next/navigation";
// import { getUserSession } from "./session"; 

// const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:5000';

// /**
//  * রিকোয়েস্টের জন্য সেশন টোকেন (User ID) হেডার জেনারেট করার হেল্পার
//  */
// export const authHeader = async () => {
//   const user = await getUserSession();
//   // Better-Auth এর কাস্টম আর্কিটেকচার অনুযায়ী user.id ব্যাকএন্ডে সেশন আইডেন্টিফায়ার হিসেবে পাঠানো হচ্ছে
//   const token = user?.id || ''; 
  
//   return token ? { 'Authorization': `Bearer ${token}` } : {};
// };

// /**
//  * রেসপন্স স্ট্যাটাস কোড হ্যান্ডেল করার সেন্ট্রাল ম্যানেজার
//  */
// const handleStatusCode = async (res) => {
//   if (res.status === 401) {
//     redirect('/unauthorized');
//   }
//   if (res.status === 403) {
//     redirect('/forbidden');
//   }
//   if (!res.ok) {
//     throw new Error(`HTTP Error! Status: ${res.status}`);
//   }
//   return await res.json();
// };

// // GET (পাবলিক বা প্রাইভেট দুই ধরনের রিকোয়েস্টই হ্যান্ডেল করতে পারে)
// export const serverFetch = async (path, requireAuth = false) => {
//   try {
//     const headers = requireAuth ? { ...(await authHeader()) } : {};
    
//     const res = await fetch(`${baseUrl}${path}`, {
//       cache: 'no-store',
//       headers: headers
//     });
    
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Fetch Error on path ${path}:`, error);
//     throw error;
//   }
// };

// // POST, PUT, PATCH, DELETE (মিউটেশনগুলোতে অটোমেটিক সিকিউরিটি হেডার যাবে)
// export const serverMutation = async (path, method = 'POST', data = null) => {
//   try {
//     const options = {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//         ...(await authHeader()), 
//       },
//     };
    
//     if (data) {
//       options.body = JSON.stringify(data);
//     }

//     const res = await fetch(`${baseUrl}${path}`, options);
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Mutation Error (${method}) on path ${path}:`, error);
//     throw error;
//   }
// };

// *****************************************

// import { redirect } from "next/navigation";
// import { getUserSession } from "./session"; 

// const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:5000';

// /**
//  * 🔑 রিকোয়েস্টের জন্য সেশন টোকেন (User ID) হেডার জেনারেট করার হেল্পার
//  */
// export const authHeader = async () => {
//   const user = await getUserSession();
//   // Better-Auth এর কাস্টম আর্কিটেকচার অনুযায়ী user.id ব্যাকএন্ডে সেশন আইডেন্টিফায়ার (Bearer Token) হিসেবে পাঠানো হচ্ছে
//   const token = user?.id || ''; 
  
//   return token ? { 'Authorization': `Bearer ${token}` } : {};
// };

// /**
//  * 🛡️ রেসপন্স স্ট্যাটাস কোড (401, 403) হ্যান্ডেল করার সেন্ট্রাল ম্যানেজার
//  */
// const handleStatusCode = async (res) => {
//   if (res.status === 401) {
//     redirect('/unauthorized');
//   }
//   if (res.status === 403) {
//     redirect('/forbidden');
//   }
//   if (!res.ok) {
//     throw new Error(`HTTP Error! Status: ${res.status}`);
//   }
//   return await res.json();
// };

// /**
//  * 🌐 GET Fetch - পাবলিক এবং প্রটেক্টেড দুই ধরনের রিকোয়েস্টই হ্যান্ডেল করতে পারে
//  * ব্যবহার: 
//  * ১. পাবলিক ডাটা: serverFetch('/api/lawyers')
//  * ২. প্রটেক্টেড ডাটা: serverFetch('/api/admin/users', true)
//  */
// export const serverFetch = async (path, requireAuth = false) => {
//   try {
//     const headers = requireAuth ? { ...(await authHeader()) } : {};
    
//     const res = await fetch(`${baseUrl}${path}`, {
//       cache: 'no-store',
//       headers: headers
//     });
    
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Fetch Error on path ${path}:`, error);
//     throw error;
//   }
// };

// /**
//  * 🔄 POST, PUT, PATCH, DELETE 
//  * সব মিউটেশনে স্বয়ংক্রিউভাবে সিকিউরিটি হেডার ইনজেক্ট হবে
//  */
// export const serverMutation = async (path, method = 'POST', data = null) => {
//   try {
//     const options = {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//         ...(await authHeader()), 
//       },
//     };
    
//     if (data) {
//       options.body = JSON.stringify(data);
//     }

//     const res = await fetch(`${baseUrl}${path}`, options);
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Mutation Error (${method}) on path ${path}:`, error);
//     throw error;
//   }
// };

// ****************************************************

// import { redirect } from "next/navigation";
// import { getSession } from "@/lib/auth-client"; // Better-Auth এর ক্লায়েন্ট-সাইড সেশন প্রোভাইডার

// const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:5000';

// /**
//  * 🔑 রিকোয়েস্টের জন্য সেশন টোকেন (User ID) হেডার জেনারেট করার সেন্ট্রাল হেল্পার
//  * ক্লায়েন্ট এবং সার্ভার উভয় এনভায়রনমেন্ট সেফগার্ড করা হয়েছে
//  */
// export const authHeader = async () => {
//   let token = '';

//   if (typeof window !== 'undefined') {
//     // 🌐 ক্লায়েন্ট সাইড (Client Component) থেকে কল হলে ব্রাউজার সেশন রিড করবে
//     const session = await getSession();
//     token = session?.user?.id || '';
//   } else {
//     // 🖥️ সার্ভার সাইড (Server Component/Action) থেকে কল হলে ডাইনামিকালি ইম্পোর্ট করবে
//     try {
//       const { getUserSession } = await import("./session");
//       const user = await getUserSession();
//       token = user?.id || '';
//     } catch (err) {
//       console.error("Dynamic session load failed on server-side:", err);
//     }
//   }
  
//   return token ? { 'Authorization': `Bearer ${token}` } : {};
// };

// /**
//  * 🛡️ রেসপন্স স্ট্যাটাস কোড (401, 403) হ্যান্ডেল করার সেন্ট্রাল ম্যানেজার
//  */
// const handleStatusCode = async (res) => {
//   if (res.status === 401) {
//     redirect('/unauthorized');
//   }
//   if (res.status === 403) {
//     redirect('/forbidden');
//   }
//   if (!res.ok) {
//     throw new Error(`HTTP Error! Status: ${res.status}`);
//   }
//   return await res.json();
// };

// /**
//  * 🌐 GET Fetch - পাবলিক এবং প্রটেক্টেড দুই ধরনের রিকোয়েস্টই হ্যান্ডেল করতে পারে
//  */
// export const serverFetch = async (path, requireAuth = false) => {
//   try {
//     const headers = requireAuth ? { ...(await authHeader()) } : {};
    
//     const res = await fetch(`${baseUrl}${path}`, {
//       cache: 'no-store',
//       headers: headers
//     });
    
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Fetch Error on path ${path}:`, error);
//     throw error;
//   }
// };

// /**
//  * 🔄 POST, PUT, PATCH, DELETE 
//  * সব মিউটেশনে স্বয়ংক্রিউভাবে সিকিউরিটি হেডার ইনজেক্ট হবে
//  */
// export const serverMutation = async (path, method = 'POST', data = null) => {
//   try {
//     const options = {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//         ...(await authHeader()), 
//       },
//     };
    
//     if (data) {
//       options.body = JSON.stringify(data);
//     }

//     const res = await fetch(`${baseUrl}${path}`, options);
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Mutation Error (${method}) on path ${path}:`, error);
//     throw error;
//   }
// };

// ************************************

// import { redirect } from "next/navigation";
// import { getSession } from "@/lib/auth-client"; 

// const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:5000';

// /**
//  * 🔑 রিকোয়েস্টের জন্য সেশন টোকেন (User ID) হেডার জেনারেট করার সেন্ট্রাল হেল্পার
//  */
// export const authHeader = async () => {
//   let token = '';

//   if (typeof window !== 'undefined') {
//     // 🌐 ক্লায়েন্ট সাইডে Better-Auth ক্লায়েন্ট মেথড ব্যবহার হবে
//     const session = await getSession();
//     token = session?.user?.id || '';
//   } else {
//     // 🖥️ সার্ভার সাইডে সম্পূর্ণ আলাদা ফাইল (serverSession) থেকে ডাটা আনা হবে
//     try {
//       const { getServerSession } = await import("./serverSession");
//       const user = await getServerSession();
//       token = user?.id || '';
//     } catch (err) {
//       console.error("Dynamic session load failed on server-side:", err);
//     }
//   }
  
//   return token ? { 'Authorization': `Bearer ${token}` } : {};
// };

// /**
//  * 🛡️ রেসপন্স স্ট্যাটাস কোড (401, 403) হ্যান্ডেল করার সেন্ট্রাল ম্যানেজার
//  */
// const handleStatusCode = async (res) => {
//   if (res.status === 401) {
//     redirect('/unauthorized');
//   }
//   if (res.status === 403) {
//     redirect('/forbidden');
//   }
//   if (!res.ok) {
//     throw new Error(`HTTP Error! Status: ${res.status}`);
//   }
//   return await res.json();
// };

// export const serverFetch = async (path, requireAuth = false) => {
//   try {
//     const headers = requireAuth ? { ...(await authHeader()) } : {};
//     const res = await fetch(`${baseUrl}${path}`, {
//       cache: 'no-store',
//       headers: headers
//     });
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Fetch Error on path ${path}:`, error);
//     throw error;
//   }
// };

// export const serverMutation = async (path, method = 'POST', data = null) => {
//   try {
//     const options = {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//         ...(await authHeader()), 
//       },
//     };
//     if (data) {
//       options.body = JSON.stringify(data);
//     }
//     const res = await fetch(`${baseUrl}${path}`, options);
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Mutation Error (${method}) on path ${path}:`, error);
//     throw error;
//   }
// };

// ************************************

// import { redirect } from "next/navigation";
// import { getSession } from "@/lib/auth-client"; 

// const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:5000';

// /**
//  * 🔑 রিকোয়েস্টের জন্য সেশন টোকেন (User ID) হেডার জেনারেট করার সেন্ট্রাল হেল্পার
//  */
// export const authHeader = async () => {
//   let token = '';

//   if (typeof window !== 'undefined') {
//     // 🌐 ক্লায়েন্ট সাইডে Better-Auth ক্লায়েন্ট মেথড ব্যবহার হবে
//     const session = await getSession();
//     token = session?.user?.id || '';
//   } else {
//     // 🖥️ সার্ভার সাইডে রানটাইমে সার্ভার সেশন রিড করা হবে
//     try {
//       const { getServerSession } = await import("./serverSession");
//       const user = await getServerSession();
//       token = user?.id || '';
//     } catch (err) {
//       console.error("Dynamic session load failed on server-side:", err);
//     }
//   }
  
//   return token ? { 'Authorization': `Bearer ${token}` } : {};
// };

// /**
//  * 🛡️ রেসপন্স স্ট্যাটাস কোড (401, 403) হ্যান্ডেল করার সেন্ট্রাল ম্যানেজার
//  */
// const handleStatusCode = async (res) => {
//   if (res.status === 401) {
//     redirect('/unauthorized');
//   }
//   if (res.status === 403) {
//     redirect('/forbidden');
//   }
//   if (!res.ok) {
//     throw new Error(`HTTP Error! Status: ${res.status}`);
//   }
//   return await res.json();
// };

// export const serverFetch = async (path, requireAuth = false) => {
//   try {
//     const headers = requireAuth ? { ...(await authHeader()) } : {};
//     const res = await fetch(`${baseUrl}${path}`, {
//       cache: 'no-store',
//       headers: headers
//     });
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Fetch Error on path ${path}:`, error);
//     throw error;
//   }
// };

// export const serverMutation = async (path, method = 'POST', data = null) => {
//   try {
//     const options = {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//         ...(await authHeader()), 
//       },
//     };
//     if (data) {
//       options.body = JSON.stringify(data);
//     }
//     const res = await fetch(`${baseUrl}${path}`, options);
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Mutation Error (${method}) on path ${path}:`, error);
//     throw error;
//   }
// };

// *******************************************

// import { redirect } from "next/navigation";
// import { authClient } from "@/lib/auth-client"; // 🔐 Better-Auth এর মেইন ক্লায়েন্ট অবজেক্ট ইম্পোর্ট করা হলো

// const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:5000';

// /**
//  * 🔑 রিকোয়েস্টের জন্য সেশন টোকেন (User ID) হেডার জেনারেট করার সেন্ট্রাল হেল্পার
//  */
// export const authHeader = async () => {
//   let token = '';

//   if (typeof window !== 'undefined') {
//     // 🌐 ক্লায়েন্ট সাইডে Better-Auth ক্লায়েন্ট মেথড (authClient.getSession()) ব্যবহার করা হলো
//     try {
//       const res = await authClient.getSession();
//       token = res?.data?.user?.id || '';
//     } catch (err) {
//       console.error("Client-side session retrieval failed:", err);
//     }
//   } else {
//     // 🖥️ সার্ভার সাইডে রানটাইমে সার্ভার সেশন রিড করা হবে (Turbopack বিল্ড সেফগার্ড)
//     try {
//       const { getServerSession } = await import("./serverSession");
//       const user = await getServerSession();
//       token = user?.id || '';
//     } catch (err) {
//       console.error("Dynamic session load failed on server-side:", err);
//     }
//   }
  
//   return token ? { 'Authorization': `Bearer ${token}` } : {};
// };

// /**
//  * 🛡️ রেসপন্স স্ট্যাটাস কোড (401, 403) হ্যান্ডেল করার সেন্ট্রাল ম্যানেজার
//  */
// const handleStatusCode = async (res) => {
//   if (res.status === 401) {
//     redirect('/unauthorized');
//   }
//   if (res.status === 403) {
//     redirect('/forbidden');
//   }
//   if (!res.ok) {
//     throw new Error(`HTTP Error! Status: ${res.status}`);
//   }
//   return await res.json();
// };

// export const serverFetch = async (path, requireAuth = false) => {
//   try {
//     const headers = requireAuth ? { ...(await authHeader()) } : {};
//     const res = await fetch(`${baseUrl}${path}`, {
//       cache: 'no-store',
//       headers: headers
//     });
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Fetch Error on path ${path}:`, error);
//     throw error;
//   }
// };

// export const serverMutation = async (path, method = 'POST', data = null) => {
//   try {
//     const options = {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//         ...(await authHeader()), 
//       },
//     };
//     if (data) {
//       options.body = JSON.stringify(data);
//     }
//     const res = await fetch(`${baseUrl}${path}`, options);
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Mutation Error (${method}) on path ${path}:`, error);
//     throw error;
//   }
// };

// *****************************************

// export const authHeader = async () => {
//   let token = '';

//   if (typeof window !== 'undefined') {
//     // 🌐 ক্লায়েন্ট সাইড
//     const session = await authClient.getSession();
//     token = session?.data?.user?.id || '';
//     return token ? { 'Authorization': `Bearer ${token}` } : {};
//   } else {
//     // 🖥️ সার্ভার সাইড: সরাসরি Next.js headers থেকে Cookie এবং Authorization পাস করে দেওয়া
//     try {
//       const { headers } = await import("next/headers");
//       const reqHeaders = await headers();
      
//       const cookie = reqHeaders.get("cookie") || "";
//       const authorization = reqHeaders.get("authorization") || "";
      
//       // সেশনের আইডি বের করার জন্য সার্ভার সেশন কল
//       const { getServerSession } = await import("./serverSession");
//       const user = await getServerSession();
//       token = user?.id || '';

//       return {
//         'Authorization': `Bearer ${token}`,
//         'Cookie': cookie, // Better-Auth সেশন কুকি ব্যাকএন্ডে পাস করার সেফগার্ড
//       };
//     } catch (err) {
//       console.error("Dynamic session load failed on server-side:", err);
//       return {};
//     }
//   }
// };

// **************************

// import { redirect } from "next/navigation";
// import { authClient } from "@/lib/auth-client"; 

// const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:5000';

// /**
//  * 🔑 রিকোয়েস্টের জন্য সেশন টোকেন (User ID) হেডার জেনারেট করার সেন্ট্রাল হেল্পার
//  */
// export async function authHeader() {
//   let token = '';

//   if (typeof window !== 'undefined') {
//     // 🌐 ক্লায়েন্ট সাইড (Client Component)
//     try {
//       const res = await authClient.getSession();
//       token = res?.data?.user?.id || '';
//     } catch (err) {
//       console.error("Client-side session retrieval failed:", err);
//     }
//   } else {
//     // 🖥️ সার্ভার সাইড (Server Component/Action)
//     try {
//       const { headers } = await import("next/headers");
//       const reqHeaders = await headers();
      
//       const cookie = reqHeaders.get("cookie") || "";
      
//       // ডাইনামিক সেশন রিড
//       const { getServerSession } = await import("./serverSession");
//       const user = await getServerSession();
//       token = user?.id || '';

//       if (token) {
//         return {
//           'Authorization': `Bearer ${token}`,
//           'Cookie': cookie,
//         };
//       }
//     } catch (err) {
//       console.error("Dynamic session load failed on server-side:", err);
//     }
//   }
  
//   return token ? { 'Authorization': `Bearer ${token}` } : {};
// }

// /**
//  * 🛡️ রেসপন্স স্ট্যাটাস কোড (401, 403) হ্যান্ডেল করার সেন্ট্রাল ম্যানেজার
//  */
// async function handleStatusCode(res) {
//   if (res.status === 401) {
//     redirect('/unauthorized');
//   }
//   if (res.status === 403) {
//     redirect('/forbidden');
//   }
//   if (!res.ok) {
//     throw new Error(`HTTP Error! Status: ${res.status}`);
//   }
//   return await res.json();
// }

// /**
//  * 🌐 GET Fetch - পাবলিক এবং প্রটেক্টেড দুই ধরনের রিকোয়েস্টই হ্যান্ডেল করতে পারে
//  */
// export async function serverFetch(path, requireAuth = false) {
//   try {
//     const headers = requireAuth ? { ...(await authHeader()) } : {};
    
//     const res = await fetch(`${baseUrl}${path}`, {
//       cache: 'no-store',
//       headers: headers
//     });
    
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Fetch Error on path ${path}:`, error);
//     throw error;
//   }
// }

// /**
//  * 🔄 POST, PUT, PATCH, DELETE 
//  */
// export async function serverMutation(path, method = 'POST', data = null) {
//   try {
//     const options = {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//         ...(await authHeader()), 
//       },
//     };
    
//     if (data) {
//       options.body = JSON.stringify(data);
//     }

//     const res = await fetch(`${baseUrl}${path}`, options);
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Mutation Error (${method}) on path ${path}:`, error);
//     throw error;
//   }
// }

// **************************************

// import { redirect } from "next/navigation";
// import { authClient } from "@/lib/auth-client"; 

// const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:5000';

// /**
//  * 🔑 রিকোয়েস্টের জন্য সেশন টোকেন হেডার জেনারেট করার সেন্ট্রাল হেল্পার
//  */
// export async function authHeader() {
//   let token = '';

//   if (typeof window !== 'undefined') {
//     // 🌐 ক্লায়েন্ট সাইড (Client Component)
//     try {
//       const res = await authClient.getSession();
//       token = res?.data?.user?.id || '';
//     } catch (err) {
//       console.error("Client-side session retrieval failed:", err);
//     }
//   } else {
//     // 🖥️ সার্ভার সাইড (Server Component/Action)
//     try {
//       // কুকির উপর নির্ভর না করে সরাসরি ডাটাবেজ ম্যাচিং সেশন টোকেন আনা হচ্ছে
//       const { getServerSessionToken } = await import("./serverSession");
//       token = await getServerSessionToken();
//     } catch (err) {
//       console.error("Dynamic session token load failed on server-side:", err);
//     }
//   }
  
//   return token ? { 'Authorization': `Bearer ${token}` } : {};
// }

// /**
//  * 🛡️ রেসপন্স স্ট্যাটাস কোড (401, 403) হ্যান্ডেল করার সেন্ট্রাল ম্যানেজার
//  */
// async function handleStatusCode(res) {
//   if (res.status === 401) {
//     redirect('/unauthorized');
//   }
//   if (res.status === 403) {
//     redirect('/forbidden');
//   }
//   if (!res.ok) {
//     throw new Error(`HTTP Error! Status: ${res.status}`);
//   }
//   return await res.json();
// }

// /**
//  * 🌐 GET Fetch - পাবলিক এবং প্রটেক্টেড দুই ধরনের রিকোয়েস্টই হ্যান্ডেল করতে পারে
//  */
// export async function serverFetch(path, requireAuth = false) {
//   try {
//     const headers = requireAuth ? { ...(await authHeader()) } : {};
    
//     const res = await fetch(`${baseUrl}${path}`, {
//       cache: 'no-store',
//       headers: headers
//     });
    
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Fetch Error on path ${path}:`, error);
//     throw error;
//   }
// }

// /**
//  * 🔄 POST, PUT, PATCH, DELETE 
//  */
// export async function serverMutation(path, method = 'POST', data = null) {
//   try {
//     const options = {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//         ...(await authHeader()), 
//       },
//     };
    
//     if (data) {
//       options.body = JSON.stringify(data);
//     }

//     const res = await fetch(`${baseUrl}${path}`, options);
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Mutation Error (${method}) on path ${path}:`, error);
//     throw error;
//   }
// }

// *******************************************

// import { redirect } from "next/navigation";
// import { authClient } from "@/lib/auth-client"; 

// const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:5000';

// /**
//  * 🔑 রিকোয়েস্টের জন্য সেশন টোকেন এবং কুকি হেডার জেনারেট করার সেন্ট্রাল হেল্পার
//  */
// export async function authHeader() {
//   let headersObj = {};

//   if (typeof window !== 'undefined') {
//     // 🌐 ক্লায়েন্ট সাইড (Client Component থেকে কল হলে)
//     try {
//       const res = await authClient.getSession();
//       const token = res?.data?.user?.id || '';
//       if (token) {
//         headersObj['Authorization'] = `Bearer ${token}`;
//       }
//     } catch (err) {
//       console.error("Client-side session retrieval failed:", err);
//     }
//   } else {
//     // 🖥️ সার্ভার সাইড (Server Component যেমন AdminManageUsersPage থেকে কল হলে)
//     try {
//       const { headers } = await import("next/headers");
//       const nextHeaders = await headers();
      
//       // ১. ব্রাউজার থেকে নেক্সট সার্ভারে আসা মূল Cookie তুলে নেওয়া (যাতে Better-Auth সেশন কুকি থাকে)
//       const rawCookie = nextHeaders.get("cookie");
//       if (rawCookie) {
//         headersObj['Cookie'] = rawCookie;
//       }

//       // ২. অল্টারনেটিভ হিসেবে ডাটাবেজ ম্যাচিং সেশন টোকেন বের করে Authorization হেডার যোগ করা
//       const { getServerSessionToken } = await import("./serverSession");
//       const token = await getServerSessionToken();
//       if (token) {
//         headersObj['Authorization'] = `Bearer ${token}`;
//       }
//     } catch (err) {
//       console.error("Dynamic session token load failed on server-side:", err);
//     }
//   }
  
//   return headersObj;
// }

// /**
//  * 🛡️ রেসপন্স স্ট্যাটাস কোড (401, 403) হ্যান্ডেল করার সেন্ট্রাল ম্যানেজার
//  */
// async function handleStatusCode(res) {
//   if (res.status === 401) {
//     redirect('/unauthorized');
//   }
//   if (res.status === 403) {
//     redirect('/forbidden');
//   }
//   if (!res.ok) {
//     throw new Error(`HTTP Error! Status: ${res.status}`);
//   }
//   return await res.json();
// }

// /**
//  * 🌐 GET Fetch - পাবলিক এবং প্রটেক্টেড দুই ধরনের রিকোয়েস্টই হ্যান্ডেল করতে পারে
//  */
// export async function serverFetch(path, requireAuth = false) {
//   try {
//     const extraHeaders = requireAuth ? await authHeader() : {};
    
//     const res = await fetch(`${baseUrl}${path}`, {
//       cache: 'no-store',
//       headers: {
//         'Content-Type': 'application/json',
//         ...extraHeaders
//       }
//     });
    
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Fetch Error on path ${path}:`, error);
//     throw error;
//   }
// }

// /**
//  * 🔄 POST, PUT, PATCH, DELETE 
//  */
// export async function serverMutation(path, method = 'POST', data = null) {
//   try {
//     const extraHeaders = await authHeader();
//     const options = {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//         ...extraHeaders
//       },
//     };
    
//     if (data) {
//       options.body = JSON.stringify(data);
//     }

//     const res = await fetch(`${baseUrl}${path}`, options);
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Mutation Error (${method}) on path ${path}:`, error);
//     throw error;
//   }
// }

// *************************

// import { redirect } from "next/navigation";
// import { authClient } from "@/lib/auth-client"; 

// const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:5000';

// /**
//  * 🔑 রিকোয়েস্টের জন্য সেশন টোকেন এবং কুকি হেডার জেনারেট করার সেন্ট্রাল হেল্পার
//  */
// export async function authHeader() {
//   let headersObj = {};

//   if (typeof window !== 'undefined') {
//     // 🌐 ক্লায়েন্ট সাইড (Client Component থেকে কল হলে)
//     try {
//       // Better-Auth এর ফুল সেশন অবজেক্ট রিড
//       const sessionRes = await authClient.getSession();
      
//       // এক্সপ্রেস ব্যাকএন্ড ভেরিফিকেশনের জন্য সেশন টোকেন অথবা ইউজার আইডি ব্যাকআপ
//       const sessionToken = sessionRes?.data?.session?.token;
//       const userId = sessionRes?.data?.user?.id;
//       const finalToken = sessionToken || userId || '';

//       if (finalToken) {
//         headersObj['Authorization'] = `Bearer ${finalToken}`;
//       }
//     } catch (err) {
//       console.error("Client-side session retrieval failed:", err);
//     }
//   } else {
//     // 🖥️ সার্ভার সাইড (Server Component/Action থেকে কল হলে)
//     try {
//       const { headers } = await import("next/headers");
//       const nextHeaders = await headers();
      
//       const rawCookie = nextHeaders.get("cookie");
//       if (rawCookie) {
//         headersObj['Cookie'] = rawCookie;
//       }

//       const { getServerSessionToken } = await import("./serverSession");
//       const token = await getServerSessionToken();
//       if (token) {
//         headersObj['Authorization'] = `Bearer ${token}`;
//       }
//     } catch (err) {
//       console.error("Dynamic session token load failed on server-side:", err);
//     }
//   }
  
//   return headersObj;
// }

// /**
//  * 🛡️ রেসপন্স স্ট্যাটাস কোড হ্যান্ডেল করার সেন্ট্রাল ম্যানেজার
//  */
// async function handleStatusCode(res) {
//   if (res.status === 401 || res.status === 403) {
//     // ক্র্যাশ এড়াতে ৪০১/৪০৩ এরর হলে সরাসরি খালি অ্যারে রেসপন্স রিটার্ন করবে
//     console.warn(`Backend rejected request with status: ${res.status}`);
//     return []; 
//   }
//   if (!res.ok) {
//     throw new Error(`HTTP Error! Status: ${res.status}`);
//   }
//   return await res.json();
// }

// /**
//  * 🌐 GET Fetch - পাবলিক এবং প্রটেক্টেড দুই ধরনের রিকোয়েস্টই হ্যান্ডেল করতে পারে
//  */
// export async function serverFetch(path, requireAuth = false) {
//   try {
//     const extraHeaders = requireAuth ? await authHeader() : {};
    
//     const res = await fetch(`${baseUrl}${path}`, {
//       cache: 'no-store',
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         ...extraHeaders
//       },
//       credentials: 'include' 
//     });
    
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Fetch Error on path ${path}:`, error);
//     return []; // ক্যাচ ব্লকে খালি অ্যারে রিটার্ন যেন ফ্রন্টএন্ড ক্র্যাশ না করে
//   }
// }

// /**
//  * 🔄 POST, PUT, PATCH, DELETE 
//  */
// export async function serverMutation(path, method = 'POST', data = null) {
//   try {
//     const extraHeaders = await authHeader();
//     const options = {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//         ...extraHeaders
//       },
//       credentials: 'include'
//     };
    
//     if (data) {
//       options.body = JSON.stringify(data);
//     }

//     const res = await fetch(`${baseUrl}${path}`, options);
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Mutation Error (${method}) on path ${path}:`, error);
//     throw error;
//   }
// }

// *******************************

// import { authClient } from "@/lib/auth-client"; 

// const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:5000';

// /**
//  * 🔑 সেশন টোকেন এবং কুকি হেডার জেনারেট করার সেন্ট্রাল হেল্পার
//  */
// export async function authHeader() {
//   let headersObj = {};

//   if (typeof window !== 'undefined') {
//     // 🌐 ক্লায়েন্ট সাইড (Client Component থেকে কল হলে)
//     try {
//       // ১. Better-Auth এর অফিসিয়াল মেথড ট্রাই
//       const sessionRes = await authClient.getSession();
//       const sessionToken = sessionRes?.data?.session?.token;
//       const userId = sessionRes?.data?.user?.id;
      
//       // ২. ব্যাকআপ: লোকাল স্টোরেজ থেকে Better-Auth এর ইন্টারনাল টোকেন রিড
//       const localToken = localStorage.getItem("better-auth:session_token");

//       const finalToken = sessionToken || userId || localToken || '';

//       if (finalToken) {
//         headersObj['Authorization'] = `Bearer ${finalToken}`;
//       }
//     } catch (err) {
//       console.error("Client-side session retrieval failed:", err);
//     }
//   } else {
//     // 🖥️ সার্ভার সাইড (Server Component/Action থেকে কল হলে)
//     try {
//       const { headers } = await import("next/headers");
//       const nextHeaders = await headers();
      
//       const rawCookie = nextHeaders.get("cookie");
//       if (rawCookie) {
//         headersObj['Cookie'] = rawCookie;
//       }

//       const { getServerSessionToken } = await import("./serverSession");
//       const token = await getServerSessionToken();
//       if (token) {
//         headersObj['Authorization'] = `Bearer ${token}`;
//       }
//     } catch (err) {
//       console.error("Dynamic session token load failed on server-side:", err);
//     }
//   }
  
//   return headersObj;
// }

// /**
//  * 🛡️ রেসপন্স স্ট্যাটাস কোড হ্যান্ডেল করার সেন্ট্রাল ম্যানেজার
//  */
// async function handleStatusCode(res) {
//   if (res.status === 401 || res.status === 403) {
//     console.warn(`Backend rejected request with status: ${res.status}`);
//     return []; 
//   }
//   if (!res.ok) {
//     throw new Error(`HTTP Error! Status: ${res.status}`);
//   }
//   return await res.json();
// }

// /**
//  * 🌐 GET Fetch
//  */
// export async function serverFetch(path, requireAuth = false) {
//   try {
//     const extraHeaders = requireAuth ? await authHeader() : {};
    
//     // রিকোয়েস্ট পাঠানোর আগে কনসোলে হেডার চেক করা (ফ্রন্টএন্ড টার্মিনালে দেখতে পাবেন)
//     if (requireAuth) {
//       console.log(`📡 Sending request to ${path} with headers:`, extraHeaders);
//     }

//     const res = await fetch(`${baseUrl}${path}`, {
//       cache: 'no-store',
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         ...extraHeaders
//       },
//       credentials: 'include' 
//     });
    
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Fetch Error on path ${path}:`, error);
//     return [];
//   }
// }

// /**
//  * 🔄 POST, PUT, PATCH, DELETE 
//  */
// export async function serverMutation(path, method = 'POST', data = null) {
//   try {
//     const extraHeaders = await authHeader();
//     const options = {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//         ...extraHeaders
//       },
//       credentials: 'include'
//     };
    
//     if (data) {
//       options.body = JSON.stringify(data);
//     }

//     const res = await fetch(`${baseUrl}${path}`, options);
//     return await handleStatusCode(res);
//   } catch (error) {
//     console.error(`Mutation Error (${method}) on path ${path}:`, error);
//     throw error;
//   }
// }

// *********************************

import { authClient } from "@/lib/auth-client"; 

const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:5000';

/**
 * 🔑 সেশন টোকেন এবং কুকি হেডার জেনারেট করার সেন্ট্রাল হেল্পার
 */
export async function authHeader() {
  let headersObj = {};

  if (typeof window !== 'undefined') {
    // 🌐 ক্লায়েন্ট সাইড (Client Component)
    try {
      const sessionRes = await authClient.getSession();
      
      const userEmail = sessionRes?.data?.user?.email;
      const userId = sessionRes?.data?.user?.id;
      const localToken = localStorage.getItem("better-auth:session_token");

      // 🛡️ ইমেইল থাকলে ইমেইল পাঠাবে, নাহলে আইডি বা সেশন টোকেন পাঠাবে
      const finalToken = userEmail || userId || localToken || '';

      if (finalToken) {
        headersObj['Authorization'] = `Bearer ${finalToken}`;
      }
    } catch (err) {
      console.error("Client-side session retrieval failed:", err);
    }
  } else {
    // 🖥️ সার্ভার সাইড (Server Component)
    try {
      const { headers } = await import("next/headers");
      const nextHeaders = await headers();
      
      const rawCookie = nextHeaders.get("cookie");
      if (rawCookie) {
        headersObj['Cookie'] = rawCookie;
      }

      const { getServerSessionToken } = await import("./serverSession");
      const token = await getServerSessionToken();
      if (token) {
        headersObj['Authorization'] = `Bearer ${token}`;
      }
    } catch (err) {
      console.error("Dynamic session token load failed on server-side:", err);
    }
  }
  
  return headersObj;
}

/**
 * 🛡️ রেসপন্স স্ট্যাটাস কোড হ্যান্ডেল করার সেন্ট্রাল ম্যানেজার
 */
async function handleStatusCode(res) {
  if (res.status === 401 || res.status === 403) {
    console.warn(`Backend rejected request with status: ${res.status}`);
    return []; 
  }
  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }
  return await res.json();
}

/**
 * 🌐 GET Fetch
 */
export async function serverFetch(path, requireAuth = false) {
  try {
    const extraHeaders = requireAuth ? await authHeader() : {};

    const res = await fetch(`${baseUrl}${path}`, {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...extraHeaders
      },
      credentials: 'include' 
    });
    
    return await handleStatusCode(res);
  } catch (error) {
    console.error(`Fetch Error on path ${path}:`, error);
    return [];
  }
}

/**
 * 🔄 POST, PUT, PATCH, DELETE 
 */
export async function serverMutation(path, method = 'POST', data = null) {
  try {
    const extraHeaders = await authHeader();
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...extraHeaders
      },
      credentials: 'include'
    };
    
    if (data) {
      options.body = JSON.stringify(data);
    }

    const res = await fetch(`${baseUrl}${path}`, options);
    return await handleStatusCode(res);
  } catch (error) {
    console.error(`Mutation Error (${method}) on path ${path}:`, error);
    throw error;
  }
}