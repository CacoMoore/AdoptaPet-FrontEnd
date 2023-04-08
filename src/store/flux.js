

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
      user_id: 0,
      email: "",
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
        rol_id: 1,
      },
      userDescription: [],
      userInfo: {
        name: "",
        last_name: "",
        phone: 0,
      },
      pets: [],
      petsDelete: '',
      loginUser: [],
      description: {
        description: "",
        motivation: "",
        style: "",
      },
      posts: [],
      post: {
        id: "",
        title: "",
        date: "",
        description: "",
        /*imagePost: "",*/
        rol_id: "",
      },
      favorites: [],
      favorite: [],

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
      putUserInfo: (e) => {
        e.preventDefault();
        const { email, user_id, token, userInfo } = getStore();
        const info = { ...userInfo, email };
        const urlFetch = `http://localhost:8080/users/${user_id}`;
        fetch(urlFetch, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          method: "PUT",
          body: JSON.stringify(info),
        })
          .then((res) => res.json())
          .then((data) => {
            alert(data);
            getActions().fetchUserData(user_id, data.token);
          })
          .catch((error) => console.log(error));
      },
      /* eslint-disable no-restricted-globals */
      deleteUser: (e, navigate) => {
        e.preventDefault();
        const { user_id, token } = getStore();
        const urlFetch = `http://localhost:8080/users/${user_id}`;
        const confirmed = confirm("¿Está seguro que desea eliminar al usuario?");
        if (confirmed) {
          fetch(urlFetch, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              navigate("/login");
              console.log(data);
              alert(data);
            })
            .catch((error) => console.log(error));
        }
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
            alert(data);
            console.log(data);
            getActions().getUserDescription(data.user_id);
          })
          .catch((error) => console.log(error));
      },
      handleChangeInfo: (e) => {
        let { userInfo } = getStore();
        setStore({
          userInfo: {
            ...userInfo,
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
            alert(JSON.stringify(data));
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
            alert(data)
          })
          .catch(error => {
            alert(error.message);
            console.log(error);
          });
      },
      fetchUserData: (user_id, token) => {
        fetch(`http://localhost:8080/users/${user_id}`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          method: "GET",
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
                rol_id: 2,
              },
            });
            getActions().getUserDescription(user_id);
            getActions().getFavoriteUser(user_id);
          })
          .catch(error => console.log(error));
      },
      handleUserLogin: (e, navigate) => {
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
            console.log(data)
            setStore({
              loginUser: data,
              token: data.token,
              user_id: data.user_id,
              email: data.email,
              user: {
                name: "",
                last_Name: "",
                email: "",
                phone: "",
                password: "",
                rol_id: 2,
              },
            });
            alert(JSON.stringify(data));
            console.log(data);
            navigate("/user");
            getActions().fetchUserData(data.user_id, data.token);
          })
          .catch(error => console.log(error));
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

      sendForm: (answers) => {
        return fetch("http://localhost:8080/form", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(answers)
        }).then(res => res.json())
          .then(data => console.log(data))

      },

      sendPost: (postAnswers) => {
        return fetch("http://localhost:8080/posts", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(postAnswers)
        }).then(res => res.json())
          .then(data => console.log(data), 
          getActions().getPost())
      },

      getPost: () => {
        fetch("http://localhost:8080/posts/list")
          .then((res) => res.json())
          .then((data) => setStore({ posts: data }))
          .catch((error) => console.log(error))
      },
      handleDeletePost: (id) => {
    
        const { token } = getStore(); 
        fetch(`http://localhost:8080/posts/${id}`,
          {
            headers: {
              "Content-Type":
                "application/json",
              "Authorization": `Bearer ${token}`
            },
            method: "DELETE",
          })
          .then(res => res.json())
          .then(data => console.log('Post eliminada', data), 
          getActions().getPost()) 
          .catch(error => console.log(error))
      },

      addFavorite: (pet) => {
        const { favorite } = getStore();
        if (!favorite.includes(pet)) {
          const newFavorites = [...favorite, pet];
          setStore({ favorite: newFavorites });
          console.log(newFavorites);
        }
      },
      sendFavorite: () => {
        fetch('http://localhost:8080/favorites', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            pet_id: "",
            user_id: ""
          })
        }).then(response => {
          if (response.ok) {
            console.log('Favorito guardado');
          }
        }).catch(error => {
          console.error('Error guardando favorito', error);
        });
      },
      getfavoriteuser: () => {
        const { user_id, token } = getStore();
        fetch(`http://localhost:8080/favorites/user/${user_id}`, 
        {headers: 
          {"Content-Type": "application/json",
        "Authorization": "Bearer " + token}
      })
        .then(res => res.json())
        .then(data => 
          {setStore({
          favorites: data});
        })
        .catch(error => console.log(error));      },
        

      removeFavorites: (name) => {
        const store = getStore();
        const newFavorites = store.favorite.filter(item => item !== name);
        setStore({ favorite: newFavorites });
      },



      getPets: () => {
        fetch("http://localhost:8080/pets/list")
          .then((res) => res.json())
          .then((data) => setStore({ pets: data }))
          .catch((error) => console.log(error))
      },

      handlePostPetSearch: (e) => {
        e.preventDefault();
        const { pet } = getStore();
        fetch("http://localhost:8080/pets/search", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(pet)
        }).then(res => res.json())
          .then(data => setStore({ pets: data }))
          .catch(error => console.log(error))
      },

      handlePostPetDelete: (id) => {

        fetch(`http://localhost:8080/pet/${id}`, {
          headers: {
            "Content-Type": "application/json"
          },
          method: "DELETE",

        }).then(res => res.json())
          .then(data => {
            console.log('Respuesta mascota eliminada', data)
            setStore({ petsDelete: data })

          })
          .catch(error => console.log(error))
      },

      handlePostPetFilter: (e) => {

        const { pet } = getStore();
        fetch("http://localhost:8080/pets/search", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(pet)
        }).then(res => res.json())
          .then(data => setStore({ pets: data }))
          .catch(error => console.log(error))
        setStore({
          pet: {

            gender: "",


            spicies: "",
            size: "",



          },

        })
      },




    }



  }
};

export default getState;
