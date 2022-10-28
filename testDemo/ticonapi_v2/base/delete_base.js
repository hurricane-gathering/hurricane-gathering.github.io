var app = new Vue({
  el: "#app_delete",
  data: {
    deleteUid: "",
  },

  methods: {
    deleteElement() {
      if (this.deleteUid.length == 0) {
        return;
      }
      axios.delete(
        "https://ticon4api.mtm.org/ticon-web/services/data/time-elements?elementuids=" + this.deleteUid,
        {
          auth: {
            username: "MTMCHINA",
            password: "MTMChina_2022!",
          },
        }
      ).then(
        (res) => {
          console.log(res);
          document.getElementById("deleteFlag").innerHTML = '&emsp;&emsp;' + this.deleteUid + " 被删除成功！";
          document.getElementById("deleteInput").value = "";
        }
      ).catch((err) => {
        console.log(err);
        window.alert("没有该元素或删除失败！");
      })
        .finally(() => {
          return;
        });
    },
  }
}
)