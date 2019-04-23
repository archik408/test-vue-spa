const PromiseCommitter = {};

PromiseCommitter.install = function(Vue) {
  Vue.commitPromise = function({ commit, state, mutation, namespace, promise }, ...args) {
    commit(mutation, { ...state[namespace], loading: true });

    promise(...args)
      .then(res => commit(mutation, { data: res.data, loading: false, error: null }))
      .catch(error => commit(mutation, { ...state[namespace], loading: false, error }));
  };

  Vue.commitAsync = function({ commit, state, mutation, namespace, asyncFunc }, ...args) {
    commit(mutation, { ...state[namespace], loading: true });

    asyncFunc(...args, (error, res) => {
      if (error) {
        return commit(mutation, { ...state[namespace], loading: false, error });
      }
      commit(mutation, { data: res.data, loading: false, error: null });
    });
  };

  Vue.commitSync = function({ commit, state, mutation, namespace, syncFunc }, ...args) {
    commit(mutation, { ...state[namespace], loading: true });

    try {
      const res = syncFunc(...args);
      commit(mutation, { data: res.data, loading: false, error: null });
    } catch (error) {
      commit(mutation, { ...state[namespace], loading: false, error });
    }
  };

  Vue.commit = function({ commit, mutation, namespace, data }) {
    commit(mutation, { [namespace]: data });
  };
};

export default PromiseCommitter;
