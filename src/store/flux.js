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
      user_id: "",
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
      userDescription: [],
      loginUser: [],
      description: {
        description: "",
        motivation: "",
        style: "",
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
      handleUserDescription: (e) => {
        e.preventDefault();
        const { description, token, user_id } = getStore();
        const descriptionWithUserId = { ...description, user_id };
        fetch("http://localhost:8080/users/description/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          method: "POST",
          body: JSON.stringify(descriptionWithUserId),
        })
          .then((res) => res.json())
          .then((data) => {
            setStore({
              description: {
                description: data.description,
                motivation: data.motivation,
                style: data.style,
              },
            });
            alert("La descripción ha sido actualizada exitosamente.");
            console.log(data);
            getActions().getUserDescription(data.user_id);
          })
          .catch((error) => console.log(error));
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
              token: data.token,
              user_id: data.user_id,
            });
            alert(data);
            console.log(data);
      
            // Fetch user information
            fetch(`http://localhost:8080/users/${data.user_id}`, {
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${data.token}`
              },
              method: "GET",
            })
              .then(res => res.json())
              .then(userData => {
                setStore({
                  loginUser: userData
                });
                console.log(userData);
                getActions().getUserDescription(data.user_id);
              })
              .catch(error => console.log(error));
          })
          .catch(error => console.log(error));
      },
      getUserDescription: () => {
        const { user_id, token } = getStore();
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
