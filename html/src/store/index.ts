import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      formData: {
        firstname: '',
        lastname: '',
        sex: '',
        dateofbirth: null,
        height: null,
      },
    };
  },
  mutations: {
    setMainInfos(state: any, payload) {
      state.formData.firstname = payload.firstname;
      state.formData.lastname = payload.lastname;
      state.formData.sex = payload.sex;
    },
    setDetails(state: any, payload) {
      const date = payload.dateofbirth.split('-');
      const dateToStr = `${date[1]}/${date[2]}/${date[0]}`;

      state.formData.dateofbirth = dateToStr;
      state.formData.height = payload.height;
    },
  },
});
