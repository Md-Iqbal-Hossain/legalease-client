const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:5000';

// GET 
export const serverFetch = async (path) => {
  try {
    const res = await fetch(`${baseUrl}${path}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(`Fetch Error on path ${path}:`, error);
    throw error;
  }
};

// POST, PUT, PATCH, DELETE 
export const serverMutation = async (path, method = 'POST', data = null) => {
  try {
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    if (data) {
      options.body = JSON.stringify(data);
    }

    const res = await fetch(`${baseUrl}${path}`, options);
    if (!res.ok) throw new Error(`Mutation Error! Status: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(`Mutation Error (${method}) on path ${path}:`, error);
    throw error;
  }
};