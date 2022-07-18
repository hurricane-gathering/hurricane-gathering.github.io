var app = new Vue({
  el: "#app",
  data: {
    apiVersion: "",
    dbVersion: "",

    languages: [],

    code: "",
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

    getElements() {
      var that = this;
      const token = "MTMCHINA:MTMChina_2022!";
      axios
        .get(
          "https://ticon4api.mtm.org/ticon-web/services/data/time-elements?code=3000KA.....5",
          {
            Headers: {
              'Authorization': `Basic ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err))
        .finally(() => {});
    },
  },
});
