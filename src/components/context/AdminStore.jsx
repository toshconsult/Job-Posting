
import axios from "axios";
import { create } from "zustand";

const useAdminStore = create((set, get) => ({
users: null,
userss: null,
tasks: null,
trx: null,
loading: false,
adminToken: localStorage.getItem('adminToken') || null,
url: 'https://airrandserver-nhc3.onrender.com/',


setUsers: (users) => set({ users }),
setTasks: (tasks) => set({ tasks }),
setTrx: (trx) => set({ trx }),
setNewUser: (userss) => set({userss}),
setLoading: (loading) => set({ loading }),
setAdminToken: (token) => {
    localStorage.setItem('adminToken', token);
    set({ adminToken: token });
},

    /////////------------------------------------ Fetch User Profile ------------------------------------/////////////////////

getUsers : async ()=>{
    try {

        
        const {url} = get()
    set({ loading: true })

    const response = await axios.get(`${url}admin/get-all-users`, {
       
       headers: {
            "Authorization": `Bearer ${localStorage.getItem('adminToken')}`
        }
    })

    if(response){
        set({ loading: false })
        const data = response.data
        
        set({ users: data.users })
        set({userss: data.users})
        
    } else{
    
        set({ loading: false })
        
    }
    } catch (error) {
       console.log("catch error", error);
        
    }

},



/////////------------------------------------ Fetch tasks ------------------------------------/////////////////////

getTasks : async ()=>{
    try {

        
        const {url} = get()
    set({ loading: true })

    const response = await axios.get(`${url}admin/get-all-tasks`, {
       
       headers: {
            "Authorization": `Bearer ${localStorage.getItem('adminToken')}`
        }
    })

    if(response){
        set({ loading: false })
        const data = response.data
        
        set({ tasks: data.tasks })
       
        
    } else{
    
        set({ loading: false })
        
    }
    } catch (error) {
       console.log("catch error", error);
        
    }

},


/////////------------------------------------ Fetch Transactions ------------------------------------/////////////////////

getTrx : async ()=>{
    try {

        const {url} = get()
    set({ loading: true })

    const response = await axios.get(`${url}admin/get-all-trx`, {
       
       headers: {
            "Authorization": `Bearer ${localStorage.getItem('adminToken')}`
        }
    })

    if(response){
        set({ loading: false })
        const data = response.data
        
        set({ trx: data.trx })
       
        
    } else{
    
        set({ loading: false })
        
    }
    } catch (error) {
       console.log("catch error", error);
        
    }

},

    /////////------------------------------------ Logout ------------------------------------/////////////////////


logout: ()=>{
    localStorage.removeItem('adminToken')
    set({ user: null, adminToken: null })
    window.location.href = '/login'
    // window.location.reload()
}

}));

export default useAdminStore;