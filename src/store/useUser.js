initialUserState = {
    id: "",
    role: "",
    department: "",
    firstName: "",
    lastName: "",
    email: "",
}

const fetchUser = async (username, password) => {
    
}

const useUserStore = create(
    devtools(
        persist(
            (set, get) => ({
                user: initialUserState,
                signIn: async (username, password) => {
                    const user = await fetchUser(username, password);
                    set(()=>({user:user}));
                },
                signUp: async (user) => {
                    const response = await postRegister(user);
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