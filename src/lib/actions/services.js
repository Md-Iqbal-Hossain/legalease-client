// locale configuration pointing to your Node backend port
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:5000';

/**
 * ACTION: Create a brand new legal service entry
 */
export async function createLegalService(serviceData) {
  try {
    const response = await fetch(`${BASE_URL}/services`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(serviceData),
    });
    if (!response.ok) throw new Error('Failed to dispatch service asset creation.');
    return await response.json();
  } catch (error) {
    console.error("Action Error (createLegalService):", error);
    throw error;
  }
}

/**
 * ACTION: Fetch all registered legal services from the database cluster
 */
export async function getAllLegalServices() {
  try {
    const response = await fetch(`${BASE_URL}/services`, {
      method: 'GET',
      cache: 'no-store' // Forces Next.js to bypass caching for dynamic real-time data
    });
    if (!response.ok) throw new Error('Database streaming read failure.');
    return await response.json();
  } catch (error) {
    console.error("Action Error (getAllLegalServices):", error);
    return [];
  }
}

/**
 * ACTION: Modify an existing service outline by its unique database ID
 */
export async function updateLegalService(id, updatedFields) {
  try {
    const response = await fetch(`${BASE_URL}/services/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFields),
    });
    if (!response.ok) throw new Error('Target updates rejected by server pipeline.');
    return await response.json();
  } catch (error) {
    console.error("Action Error (updateLegalService):", error);
    throw error;
  }
}

/**
 * ACTION: Remove a legal service option completely from the collections
 */
export async function deleteLegalService(id) {
  try {
    const response = await fetch(`${BASE_URL}/services/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Resource removal exception.');
    return await response.json();
  } catch (error) {
    console.error("Action Error (deleteLegalService):", error);
    throw error;
  }
}