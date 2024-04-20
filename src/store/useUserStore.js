import axiosInstance, { ImageUploadingFetch } from "../api/axios.js"
import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'

const initialUserState = {
    id: "",
    role: "",//ROLE_ADMIN/ROLE_KOMISSAR/ROLE_HEAD/ROLE_SECRETARY
    department: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
}

const  register = async (userData) => {
    try {
        const { data } = await axiosInstance.post(`users/register/`, userData)
        localStorage.setItem("accessgemplanet", data.access);
        localStorage.setItem("refreshgemplanet", data.refresh);
        return data
      } catch (error) {
        console.error(error);
        return false;
      }
}

const  fetchApplication = async (fData) => {
    try {
        const formData = new FormData();

        for(const key in fData) {
            if(key === 'certs') {
                for(const cert in fData[key]) {
                    console.log(cert)
                    formData.append('certs', fData[key][cert]);
            }
            } else {
                formData.append(key, fData[key]);
            }
        }
        console.log(JSON.stringify(formData))
        const { data } = await ImageUploadingFetch.post(`abiturients/request-create/`, formData)
        return data
      } catch (error) {
        console.error(error);
        return false;
      }
}

const  signin = async (email, password) => {
    try {
        console.log({email:email,password:password})
        const { data } = axiosInstance.post(`users/login/`, {email:email,password:password})
        localStorage.setItem("accessgemplanet", data.access);
        localStorage.setItem("refreshgemplanet", data.refresh);
        return data
      } catch (error) {
        console.error(error);
        return false;
      }
}

const useUserStore = create(
    devtools(
        persist(
            (set, get) => ({
                user: initialUserState,

                signIn: async (email, password) => {
                    const user = await signin(email, password);
                    set(()=>({user:user}));
                },
                application: async (formData) => {
                    const response = await fetchApplication(formData);
                },
                register: async (user, password) => {
                    const response = await register(user, password);
                    set((state)=>({user: {...state.user, role:response.role}}));
                },
                reset: () => set(()=>({user:{...initialUserState}})),
            }),
            {
                name: 'userStore'
            },
        )
    ),
)

export default useUserStore