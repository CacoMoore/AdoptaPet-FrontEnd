const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      user: {
        name: "",
        last_Name: "",
        email: "",
        phone: "",
        password: "",
        rol_id: 2,
      },
      token: "",
      user_id:"",
      pet: {
        name: "",
        gender: "",
        age: "",
        description: "",
        species: "",
        size: "",
        medical_history: "",
        is_adopted: "",
        adress_id: "",
        rol_id: "",
      },
      loginUser: [],
      userDescription: [],
      description: {
        description: "",
        motivation:"",
        style:"",
      }
    },
    actions: {
      handleChange: (e) => {
        let { user, } = getStore();
        setStore({
          user: {
            ...user,
            [e.target.name]: e.target.value,
          },
        });
      },
      handleChangePet: (e) => {
        let { pet } = getStore();
        setStore({
          pet: {
            ...pet,
            [e.target.name]: e.target.value,
          },
        });
      },
      handleChangeDescription: (e) => {
        let { description } = getStore();
        setStore({
          description: {
            ...description,
            [e.target.name]: e.target.value,
          },
        });
      },
      handleUserRegister: (e) => {
        e.preventDefault();
        const { user } = getStore();
        fetch("http://localhost:8080/users", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
          alert("Registro exitoso: " + JSON.stringify(data));
          setStore({
            user: {
              name: "",
              last_Name: "",
              email: "",
              phone: "",
              password: "",
              rol_id: 2,
            }
          });
          console.log(data);
        })
        .catch(error => {
          alert("Ocurrió un error al registrar el usuario: " + error.message);
          console.log(error);
        });
      },
      handleUserDescription: (e) =>{
        e.preventDefault();
        const { description, token, user_id } = getStore();
        const descriptionWithUserId = { ...description, user_id };
        fetch("http://localhost:8080/users/description/",{
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
          method: "POST",
          body: JSON.stringify(descriptionWithUserId)
        })
        .then(res => res.json())
        .then(data => {
          setStore({
            description: {
              description: "",
              motivation:"",
              style:"",
            },
          })
          alert("Haz actualizado la información correctamente");
          console.log(data);
          getActions().getUserDescription(data.user_id);
        })
        .catch(error => console.log(error));
      },
      
      handleUserLogin: (e) => {
        e.preventDefault();
        const { user } = getStore();
        fetch("http://localhost:8080/login", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
          setStore({
            loginUser: data,
            user: {
              name: "",
              last_Name: "",
              email: "",
              phone: "",
              password: "",
              rol_id: "",
            },
            token: data.token,
            user_id: data.user_id,
          });
          alert("Haz iniciado sesión correctamente");
          console.log(data);
          getActions().getUserDescription(data.user_id);
        })
        .catch(error => console.log(error));
      },
      
      getUserDescription: () => {
        const {user_id, token} = getStore();
        const urlFetch = `http://localhost:8080/users/description/${user_id}`;
        fetch(urlFetch, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          }
        })
        .then(res => res.json())
        .then(data => {
          setStore({
            userDescription: data
          });
        })
        .catch(error => console.log(error));
      },
    },
  };
};
export default getState;
