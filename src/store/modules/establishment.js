import * as api from '../api';
import * as types from '../types';
import router from '../../router';

/* eslint no-param-reassign: 0 */
export default {
  state: {
    data: {},
  },

  actions: {
    retrieveEstablishment({ commit, state }, { name, location }) {
      commit(types.ESTABLISHMENT_RETRIEVE);

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
    [types.ESTABLISHMENT_RETRIEVE]() {
      // TODO: handle errors.
    },

    [types.ESTABLISHMENT_RECIEVE](state, establishment) {
      state.data = establishment;
    },
  },
};
