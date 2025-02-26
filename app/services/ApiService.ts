export async function getData<T>(filename: string): Promise<T> {
  try {
    const response = await fetch(`/data/${filename}.json`);
    if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
}
