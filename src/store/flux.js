const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      user:{
          name:"",
          lastName:"",
          email:"",
          password:"",
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
      }
    },
  };
};
export default getState;