let Vue;

export class Store {
  constructor(options = {}) {
    const { state, mutations, strict = false } = options;

    this.state = state;
    this.mutations = mutations;
    // strict mode
    this.strict = strict;
    this._committing = false;
    resetStoreVM(this, state);
  }

  commit(_type, _payload) {
    this._withCommit(() => {
      this.mutations[_type].call(this, this.state, _payload);
    });
  }

  _withCommit(fn) {
    const committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  }
}

function resetStoreVM(store, state) {
  store._vm = new Vue({
    data: {
      state
    }
  });

  if (store.strict) {
    enableStrictMode(store)
  }
}

function enableStrictMode(store) {
  store._vm.$watch(function () {
    // store._vm.state
    return this.state;
  }, () => {
    if (process.env.NODE_ENV !== 'production') {
      if (!store._committing) {
        throw new Error('do not mutate vuex store state outside mutation handlers.');
      }
    }
  }, { deep: true, sync: true });
}

export function install(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      const options = this.$options
      // store injection
      if (options.store) {
        this.$store = typeof options.store === 'function'
          ? options.store()
          : options.store
      } else if (options.parent && options.parent.$store) {
        this.$store = options.parent.$store
      }
    }
  });
}

export default {
  Store,
  install,
}
