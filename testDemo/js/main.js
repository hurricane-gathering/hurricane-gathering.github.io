var app = new Vue({
  el: "#app",
  data: {
    apiVersion: "",
    dbVersion: "",

    languages: [],

    code: [],
    query: '',
  },

  methods: {
    getVersion() {
      var that = this;
      axios
        .get("https://ticon4api.mtm.org/ticon-web/services/management/version")
        .then((res) => {
          console.log(res.data);
          that.apiVersion = res.data.apiVersion;
          that.dbVersion = res.data.dbVersion;
        })
        .catch((err) => console.log(err))
        .finally(() => {});
    },

    getLanguages() {
      var that = this;

      axios
        .get(
          "https://ticon4api.mtm.org/ticon-web/services/management/languages"
        )
        .then((res) => {
          console.log(res);
          that.languages = res.data.languages;
        })
        .catch((err) => console.log(err))
        .finally(() => {});
    },

    // getElements() {
    //   var that = this;
    //   axios
    //     .get(
    //       "https://ticon4api.mtm.org/ticon-web/services/data/time-elements?code=3000KA.....5",
    //       {
    //         auth: {
    //           username: 'MTMCHINA',
    //           password: 'MTMChina_2022!'
    //         },
    //       }
    //     )
    //     .then((res) => {
    //       console.log(res);
    //       that.code = res.data.entities;
    //     })
    //     .catch((err) => console.log(err))
    //     .finally(() => {});
    // },

    getElements() {
      if (this.query == 0) {
        return;
      }
      var that = this;
      axios
        .get(
          "https://ticon4api.mtm.org/ticon-web/services/data/time-elements?code=" + this.query,
          {
            auth: {
              username: 'MTMCHINA',
              password: 'MTMChina_2022!'
            },
          }
        )
        .then((res) => {
          console.log(res);
          // console.log(this.query);
          that.code = res.data.entities;
        })
        .catch((err) => console.log(err))
        .finally(() => {});
    },
  },
});
