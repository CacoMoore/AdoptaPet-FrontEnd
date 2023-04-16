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
      pet_id: 0,
      pet: {
        name: "",
        gender: "",
        age: "",
        description: "",
        species: "",
        size: "",
        img: null,
        medical_history: "",
        is_adopted: false,
        adress_id: false,
        rol_id: 1,
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
      userDescription: [],
      userInfo: {
        name: "",
        last_name: "",
        phone: 0,
      },
      pets: [],
      petGet: [],
      petsDelete: '',
      PetFilterContainer: {
        gender: "",
        species: "",
        size: "",

      },
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
        imagePost: null,
        rol_id: "",
      },
      favorites: [],
      currentPage: 1,
      petsPerPage: 9,
      forms: [],
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
      //funcion para paginacion siguiente pagina
      handleCurrentPageNext: (e) => {
        let { currentPage } = getStore();
        setStore({
          currentPage: (currentPage + 1)
        })
      },
      // Funcion para paginacion para devolverme a lpa ag anterior
      handleCurrentPagePrevius: (e) => {
        let { currentPage } = getStore();
        setStore({
          currentPage: (currentPage - 1)
        })
      },
      onSpecificPage: (e) => {

        setStore({
          currentPage: e
        })
      },
      //Funcion para atrapar el valor PetFilterContainer y asi poder usarla en el filtro de busqueda
      PetFilterContainer: (e) => {
        let { PetFilterContainer } = getStore();
        let name = e.target.name;
        let value = e.target.value;
        setStore({
          PetFilterContainer: {
            ...PetFilterContainer,
            [name]: value
          }
        })
      },
      handleChangeFilePet: (e) => {
        let { pet } = getStore();
        let name = e.target.name;
        let value = e.target.files[0];

        console.log(value)
        setStore({
          pet: {
            ...pet,
            [name]: value,
          },
        });
      },
      //Funcion para atrapar el valor pet y asi usarla para para el post
      handleChangePet: (e) => {
        let { pet } = getStore();
        let name = e.target.name;
        let value = e.target.value;

        setStore({
          pet: {
            ...pet,
            [name]: value,
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
      deleteUser: (e) => {
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
      handleUserRegister: (e, navigate) => {
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
            alert(JSON.stringify(data));
            navigate("/login");
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
            getActions().fetchUserData(data.user_id, data.token);
            navigate("/user");
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
      //Para subir la informacion de la pet
      handlePostPet: (e) => {
        e.preventDefault();
        const { pet } = getStore();
        const formData = new FormData();

        formData.append('name', pet.name)
        formData.append('gender', pet.gender)
        formData.append('age', pet.age)
        formData.append('description', pet.description)
        formData.append('species', pet.species)
        formData.append('size', pet.size)
        formData.append('file', pet.img)
        formData.append('medical_history', pet.medical_history)
        formData.append('is_adopted', pet.is_adopted)
        formData.append('adress_id', pet.adress_id)
        formData.append('rol_id', pet.rol_id)





        fetch("http://127.0.0.1:8080/pets", {

          method: "POST",
          body: formData
        }).then(res => res.json())
          .then(data => console.log(data))
          .catch(error => console.log(error))
        setStore({
          pet: {
            name: "",
            gender: "",
            age: "",
            description: "",
            species: "",
            size: "",
            img: null,
            medical_history: "",
            is_adopted: "",
            adress_id: "",
            rol_id: "",
          },

        })

      },
      //Funcion para traer la informacion de todos los pet funcion get
      sendForm: (answers) => {
        const { form, token, user_id } = getStore();
        console.log({ form, user_id, answers })
        const formWithUserId = { user_id, ...answers };
        console.log(formWithUserId)
        return fetch("http://localhost:8080/form", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          method: "POST",
          body: JSON.stringify(formWithUserId)
        }).then(res => res.json())
          .then(data => setStore({ forms: data }))
          .then(data => console.log(data))

      },

      sendPost: (postAnswers) => {
        fetch("http://localhost:8080/posts", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(postAnswers)
        }).then(res => res.json())
          .then((data) => {
            alert(data);
            getActions().getPost();
          })
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
      addFavorite: (e) => {
        e.preventDefault();
        const { user_id, pet_id, token } = getStore();
        const info = { pet_id, user_id };
        fetch(`http://localhost:8080/favorites`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          method: "POST",
          body: JSON.stringify(info),
        })
          .then((res) => res.json())
          .then((data) => {
            alert(data);
            getActions().fetchUserData(user_id, data.token);
          })
          .catch((error) => console.log(error));
      },
      getFavoriteUser: () => {
        const { user_id, token } = getStore();
        fetch(`http://localhost:8080/favorites/user/${user_id}`,
          {
            headers:
            {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + token
            }
          })
          .then(res => res.json())
          .then(data => {
            setStore({
              favorites: data
            });
          })
          .catch(error => console.log(error));
      },
      handlePet: (pet_id) => {
        setStore({ pet_id: pet_id });
        alert("¡Se eliminará el elemento seleccionado!");
        getActions().deleteFavorite();
        
    },
    
      deleteFavorite: () => {
        const {user_id, token, pet_id} = getStore();
        fetch(`http://localhost:8080/favorites/${user_id}/${pet_id}`,
        {
          headers:
          {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
          method: "DELETE",
        })
        .then(res => res.json())
          .then(data => {
            alert(data);
            getActions().getFavoriteUser();
          })
          .catch(error => console.log(error));
      },
      getForm: () => {
        return fetch("http://localhost:8080/form/list")
          .then((res) => res.json()

          )
          .catch((error) => console.log(error))
      },
      deleteForm: (id) => {
        const { token } = getStore();
        fetch(`http://localhost:8080/form/${id}`,
          {
            headers: {
              "Content-Type":
                "application/json",
              "Authorization": `Bearer ${token}`
            },
            method: "DELETE",
          })
          .then(res => res.json())
          .then(data => getActions().getForm())
          .catch(error => console.log(error))
      },
      getPets: () => {
        fetch("http://localhost:8080/pets/list")
          .then((res) => res.json())
          .then((data) => setStore({ pets: data }))
          .catch((error) => console.log(error))
      },
      //Funcion para filtrar se trae todos los pet que coincidan con el valor del filtro
      handlePostPetSearch: (e) => {
        e.preventDefault();
        const { PetFilterContainer } = getStore();
        fetch("http://localhost:8080/pets/search", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(PetFilterContainer)
        }).then(res => res.json())
          .then(data => setStore({ pets: data }))
          .catch(error => console.log(error))
        setStore({
          currentPage: 1
        })

      },
      getPet: (id) => {
        fetch(`http://localhost:8080/pet/${id}`)
          .then((res) => res.json())
          .then((data) => setStore({ 
            petGet: data,
            pet_id: data.id
           }))
          .catch((error) => console.log(error))
      },
      handlePutPet: (id) => {
        const { pet } = getStore();
        const formData = new FormData();

        // Fetch old data of the pet
        fetch(`http://127.0.0.1:8080/pet/${id}`)
          .then((res) => res.json())
          .then((data) => {

            formData.set('name', pet.name || data.name);
            formData.set('gender', pet.gender || data.gender);
            formData.set('age', pet.age || data.age);
            formData.set('description', pet.description || data.description);
            formData.set('species', pet.species || data.species);
            formData.set('size', pet.size || data.size);
            formData.set('medical_history', pet.medical_history || data.medical_history);
            formData.set('is_adopted', pet.is_adopted === undefined ? data.is_adopted : pet.is_adopted);
            formData.set('adress_id', pet.adress_id || data.adress_id);
            formData.set('rol_id', pet.rol_id || data.rol_id);


            if (pet.img && pet.img !== data.img) {
              formData.set('file', pet.img);
            }


            fetch(`http://127.0.0.1:8080/pet/${id}`, {
              method: 'PUT',
              body: formData,
            })
              .then((res) => res.json())
              .then((data) => {
                setStore({ petGet: data });
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      },
      // Se elimina la pet atraves de su id
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
      //Se resetea el valor del filtro
      handlePostPetRestore: (e) => {

        const { PetFilterContainer } = getStore();
        fetch("http://localhost:8080/pets/search", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(PetFilterContainer)
        }).then(res => res.json())
          .then(data => setStore({ pets: data }))
          .catch(error => console.log(error))
        setStore({
          PetFilterContainer: {
            gender: "",
            species: "",
            size: "",
          },
        })
      },
    },
  }
};

export default getState;
