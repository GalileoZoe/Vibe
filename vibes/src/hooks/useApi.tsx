import { useState, useEffect } from 'react';
import axios from 'axios';

// URL de tu API NestJS
const API_URL = 'http://localhost:3000/vibes/api/v1';

export const useApi = <T,>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/${endpoint}`);
        setData(res.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};
