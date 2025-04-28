
import { create } from "zustand";

const useUserStore = create((set, get) => ({
user: null,
balance: null,
loading: false,
userToken: localStorage.getItem('token') || null,
url: 'https://airrandserver-nhc3.onrender.com/',


setUser: (user) => set({ user }),
setBalance: (balance) => set({ balance }), 
setLoading: (loading) => set({ loading }),
setUserToken: (token) => {
    localStorage.setItem('token', token);
    set({ userToken: token });
},

    /////////------------------------------------ Fetch User Profile ------------------------------------/////////////////////

getUser : async ()=>{
    const {url} = get()
    set({ loading: true })
    const response = await fetch(`${url}user/dashboard`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })

    if(response.ok){
        set({ loading: false })
        const data = await response.json()
        set({ user: data.userDetails.user, balance: data.userDetails.balance })
        
    } else{
        // const error = await response.json()
        console.log(response);
    //    localStorage.removeItem('token')
        set({ loading: false })
        
    }

},

    /////////------------------------------------ Logout ------------------------------------/////////////////////


logout: ()=>{
    localStorage.removeItem('token')
    set({ user: null, userToken: null })
    window.location.href = '/'
    window.location.reload()
}

}));

export default useUserStore;