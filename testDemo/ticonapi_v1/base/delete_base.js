var app = new Vue({
    el: "#app_delete",
    data:{
        deleteUid: "",
    },

    methods: {
        deleteElement() {
            if (this.deleteUid.length == 0) {
              return;
            }
            axios.delete(
              "https://localhost/ticon-web/services/data/mtm-base-elements/" + this.deleteUid,
              {
                auth: {
                  username: "mtm",
                  password: "mtm",
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