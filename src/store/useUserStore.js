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

const base64ToBlob = (base64, type = 'application/octet-stream') => {
    const binStr = atob(base64.split(',')[1]);
    const len = binStr.length;
    const arr = new Uint8Array(len);
  
    for (let i = 0; i < len; i++) {
      arr[i] = binStr.charCodeAt(i);
    }
  
    return new File([arr], "filename", { type: type });
  };

const  fetchApplication = async (fData) => {
    try {
        const formData = new FormData();

        for(const key in fData) {
            if(key === 'certs') {
                for(const cert in fData[key]) {
                    console.log(fData[key][cert])
                    const file = base64ToBlob(fData[key][cert]);
                    formData.append('certs', file);
            }
            } else {
                console.log(typeof(fData[key]))
                if(typeof fData[key] === 'string' && fData[key].startsWith('data')){
                    const file = base64ToBlob(fData[key]);
                    formData.append(key, file);
                }else{
                    formData.append(key, fData[key]);
                }
                
            }
        }
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
                applications_list: [''],
                application: {},
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
                getApplicationsList: async () => {
                    console.log('data1');
                    const data = await getApplicationsList();
                    console.log('data2');
                    console.log("data: "+data);
                    if(data)
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