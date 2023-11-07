import axios from 'axios';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

const useAxios = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          console.log('LogOut the user : ');
          logOut()
            .then(() => {
              navigate('/authentication/login');
            })
            .catch((err) => console.log(err));
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxios;
