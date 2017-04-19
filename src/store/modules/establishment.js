import * as api from '../api';
import * as types from '../types';
import router from '../../router';

/* eslint no-param-reassign: 0 */
export default {
  state: {
    data: null,
    query: '',
  },

  actions: {
    retrieveEstablishment({ commit, state }, { name, location }) {
      commit(types.ESTABLISHMENT_RETRIEVE, name);

      api.getEstablishment(name, location)
        .then((response) => {
          const establishments = response.data.establishments;

          commit(types.ESTABLISHMENT_RECIEVE, establishments.length ? establishments[0] : null);
          router.push('/establishment');
        })
        .catch(() => router.push('/'));
    },
  },

  mutations: {
    [types.ESTABLISHMENT_RETRIEVE](state, query) {
      state.query = query;
    },

    [types.ESTABLISHMENT_RECIEVE](state, establishment) {
      state.data = establishment;
    },
  },
};
