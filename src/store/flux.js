const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      user: {
        name: "",
        last_Name: "",
        email: "",
        phone: "",
        password: "",
        rol_id: "",
      }
    },
    actions: {
      handleChange: (e) => {
        let { user } = getStore()
        setStore({
          user: {
            ...user,
            [e.target.name]: e.target.value,
          },
        })
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
        }).then(res => res.json())
          .then(data => console.log(data))
          .catch(error => console.log(error));
        setStore({
          user: {
            name: "",
            last_Name: "",
            email: "",
            phone: "",
            password: "",
            rol_id: "",
          }
        })
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
        }).then(res => res.json())
          .then(data => console.log(data))
          .catch(error => console.log(error));
        setStore({
          user: {
            email: "",
            password: "",
          }
        })
      }
    },
  };
};
export default getState;