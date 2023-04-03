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
        is_adopted: false,
        adress_id: false,
        rol_id: false,
      },
      userDescription: [],
      pets: [],
      loginUser: [],
      description: {
        description: "",
        motivation: "",
        style: "",
      },
      form: {
        query1: "",
        query2: "",
        query3: "",
        query4: "",
        query5: "",
        query6: "",
        query7: "",
        query8: "",
        query9: "",
        query10: "",
        query11: "",
        query12: "",
        query13: "",
        query14: "",
        query15: "",
        query16: "",
        query17: "",
        query18: "",
        query19: "",
        query20: "",
        query21: "",
        query22: "",
        query23: "",
        query24: "",
        query25: "",
        query26: "",
        query27: "",
        query28: "",
        query29: "",
        query30: "",
        query31: "",
        query32: "",
        query33: "",
        query34: "",
        query35: "",
        query36: "",
        query37: "",
        query38: "",
        query39: "",
        query40: "",
        query41: "",
        query42: "",
        query43: "",
        query44: "",
      },
      
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
        let name = e.target.name;
        let value = e.target.value;
        let checked = e.target.value ? true : false
        setStore({
          pet: {
            ...pet,
            [name]: name === "is_adopted" ? checked : value,
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


      handlePostPet: (e) => {
        e.preventDefault();
        const { pet } = getStore();
        fetch("http://localhost:8080/pets", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(pet)
        }).then(res => res.json())
          .then(data => console.log(data))
          .catch(error => console.log(error))
        setStore({
          pet: {
            name: "",
            gender: "",
            age: "",
            description: "",
            spicies: "",
            size: "",
            medical_history: "",
            is_adopted: "",
            adress_id: "",
            rol_id: "",
          },

        })

      },
      getPets: () => {
        fetch("http://localhost:8080/pets/list")
          .then((res) => res.json())
          .then((data) => setStore({ pets: data }))
          .catch((error) => console.log(error))
      },

      sendForm: (e) => {
        e.preventDefault();
        const { form } = getStore();
        fetch("http://localhost:8080/form", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(form)
        }).then(res => res.json())
          .then(data => console.log(data))
          .catch(error => console.log(error))
        setStore({
          form: {
            query1: "",
            query2: "",
            query3: "",
            query4: "",
            query5: "",
            query6: "",
            query7: "",
            query8: "",
            query9: "",
            query10: "",
            query11: "",
            query12: "",
            query13: "",
            query14: "",
            query15: "",
            query16: "",
            query17: "",
            query18: "",
            query19: "",
            query20: "",
            query21: "",
            query22: "",
            query23: "",
            query24: "",
            query25: "",
            query26: "",
            query27: "",
            query28: "",
            query29: "",
            query30: "",
            query31: "",
            query32: "",
            query33: "",
            query34: "",
            query35: "",
            query36: "",
            query37: "",
            query38: "",
            query39: "",
            query40: "",
            query41: "",
            query42: "",
            query43: "",
            query44: "",
          },

        })

      },

    },
  };
};
export default getState;
