var app = new Vue({
    el: "#app_query",
    data: {
        Code: "",
        code: [],
        expand: [],
    },

    methods: {
        // 通过 Code 查元素
        QueryElementsByCode1() {
            if (this.Code.length == 0) {
                return;
            }
            var that = this;
            axios
                .get("https://ticon4api.mtm.org/ticon-web/services/data/time-elements?" +
                    "expand[description]=true&codewildcards=true&code=*" + this.Code +"*",
                    {
                        auth: {
                            username: "MTMCHINA",
                            password: "MTMChina_2022!",
                        },
                    })
                .then((res) => {
                    console.log(res);
                    that.code = res.data.entities;
                    that.expand = res.data.expanded;
                    if (that.code.length == 0) {
                        window.alert("不存在！");
                        return;
                        //document.getElementById("tag1").innerHTML="不存在";
                        //window.open("ticon://");
                    } else {
                        document.getElementById("AllQueryBaseElements").innerHTML = '<span>搜索</span>' + this.Code + '<span>的结果如下</span><br>';
                        document.getElementById("AllQueryBaseElements").innerHTML += "<br>&emsp;&emsp;<b>头部信息</b><br>";
                        // 遍历获取数据
                        var tempCode = "";
                        for (let item of that.code) {
                            if (item.shortCode != null) {
                                tempCode = item.shortCode;
                            }
                            else {
                                tempCode = item.code;
                            }
                            document.getElementById("AllQueryBaseElements").innerHTML += '<ul>' + '<li>' +
                                (item.description.text ? item.description.text : "") + " [" + tempCode + "]" + '</li>' + '</ul>';
                        }
                        document.getElementById("AllQueryBaseElements").innerHTML += "&emsp;&emsp;<b>结构信息</b>";
                        if (that.expand.length == 0) {
                            document.getElementById("AllQueryBaseElements").innerHTML += "<br>&emsp;&emsp;无结构信息";
                            return;
                        }
                        for (let item of that.expand) {
                            tempCode = (item.shortCode != null) ? item.shortCode : item.code;
                            document.getElementById("AllQueryBaseElements").innerHTML += '<ul>' + '<li>' +
                                "代码：" + tempCode + "&emsp;&emsp;描述：" + (item.description.text ? item.description.text : "") +
                                '</li>' + '</ul>';
                        }
                    }
                })
                .catch((err) => console.log(err))
                .finally(() => { });
        },

        QueryElementsByCode2() {
            if (this.Code.length == 0) {
                return;
            }
            var that = this;
            axios
                .get("https://ticon4api.mtm.org/ticon-web/services/data/time-elements?" +
                    "expand[times]&expand[description]&expand[begin]&expand[content]&expand[end]&expand[limit]" +
                    "&expand[structure][row][element][description]&codewildcards=true&code=*" + this.Code + "*",
                    {
                        auth: {
                            username: "MTMCHINA",
                            password: "MTMChina_2022!",
                        },
                    })
                .then((res) => {
                    console.log(res);
                    that.code = res.data.entities;
                    that.expand = res.data.expanded;
                    if (that.code.length == 0) {
                        window.alert("不存在！");
                        return;
                        //document.getElementById("tag1").innerHTML="不存在";
                        //window.open("ticon://");
                    } else {
                        document.getElementById("AllQueryBaseElements").innerHTML = '<span>搜索</span>' + this.Code + '<span>的结果如下</span><br>';
                        document.getElementById("AllQueryBaseElements").innerHTML += "<br>&emsp;&emsp;<b>头部信息</b><br>";
                        // 遍历获取数据
                        for (let item of that.code) {
                            document.getElementById("AllQueryBaseElements").innerHTML += '<ul>' + '<li>' +
                                "代码：" + item.code + '<br>' + "短码：" + item.shortCode + '<br>' +
                                "uid：" + item.uid + '<br>' + "描述：" + (item.description.text ? item.description.text : "") +
                                "<br>开始：" + (item.begin.text ? item.begin.text : "") +
                                "<br>内容：" + (item.content.text ? item.content.text : "") +
                                "<br>结束：" + (item.end.text ? item.end.text : "") +
                                "<br>界限：" + (item.limit.text ? item.limit.text : "") +
                                "<br>tg总计：" + item.times.tg + "&nbsp;TMU" +
                                "<br>创建时间：" + item.createTime + "<br>最后修改时间：" +
                                item.modifyTime + '</li>' + '<br>' + '</ul>';
                        }
                        document.getElementById("AllQueryBaseElements").innerHTML += "&emsp;&emsp;<b>结构信息</b>";
                        if (that.expand.length == 0) {
                            document.getElementById("AllQueryBaseElements").innerHTML += "<br>&emsp;&emsp;无结构信息";
                            return;
                        }
                        for (let item of that.expand) {
                            document.getElementById("AllQueryBaseElements").innerHTML += '<ul>' + '<li>' +
                                "代码：" + item.code + '<br>' + "短码：" + item.shortCode + '<br>' +
                                "uid：" + item.uid + '<br>' +
                                "描述：" + (item.description.text ? item.description.text : "") + '<br>' +
                                // "开始：" + item.begin.text + "<br>内容：" + item.content.text +
                                // "<br>结束：" + item.end.text + "<br>界限：" + item.limit.text +
                                // "<br>tg总计：" + item.times.tg + "&nbsp;TMU" + 
                                "创建时间：" + item.createTime + "<br>最后修改时间：" + item.modifyTime +
                                '</li>' + '<br>' + '</ul>';
                        }
                    }
                })
                .catch((err) => console.log(err))
                .finally(() => { });
        },
    },
})