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

const  fetchApplication = async (data) => {
    console.log("formData")
    console.log(data)
    try {
        // const formData = new FormData();

        // for(const key in data) {
        //     if(key === 'certs') {
        //         for(const cert of data[key]) {
        //             formData.append('certs', cert);
        //         }
        //     } else {
        //         formData.append(key, data[key]);
        //     }
        // }
        // const { data } = await ImageUploadingFetch.post(`applications/`, formData)
        // return data
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

const  getApplicationsList = async () => {
    try {
        const { data } = await axiosInstance.get(`abiturients/requests/`);
        return data;
      } catch (error) {
        console.error(error);
        return false;
      }
}

const  getApplicationById = async ({ id }) => {
    try {
        const { data } = await axiosInstance.get(`abiturients/requests/${id}/`);
        return data;
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
                applications_list: initialUserState,
                application: initialUserState,
                signIn: async (email, password) => {
                    const user = await signin(email, password);
                    set(()=>({user:user}));
                },
                application: async (formData) => {
                    const response = await fetchApplication(formData);
                    console.log(fetchApplication)
                    return response
                },
                register: async (user, password) => {
                    const response = await register(user, password);
                    set((state)=>({user: {...state.user, role:response.role}}));
                },
                getApplicationsList: async () => {
                    const data = await getApplicationsList();
                    console.log(data);
                    set((state)=>({applications_list: data}));
                },
                getApplicationById: async ({ id }) => {
                    const data = await getApplicationById({ id });
                    set(state => ({application: data}))
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