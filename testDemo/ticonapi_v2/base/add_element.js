var vue = new Vue({
    el: "#app_add",


    methods: {
        addElement() {
            axios.post("https://localhost/ticon-web/services/data/mtm-base-elements",
            
            [{
                    "begin": {
                        "language": "de-DE",
                        "text": "Beginntext"
                    },
                    "structure":
                    [{
                            "row": {
                                "elementUid": "Reference-1004",
                                "factor": "3,000000000000000",
                                "description": {
                                    "language": "de-DE",
                                    "text": "Test 1",
                                    "isSource": true
                                },
                                "rowType": "REFERENCE"
                            }
                        }, {
                            "row": {
                                "elementUid": "Reference-1005",
                                "factor": "1,000000000000000",
                                "description": {
                                    "language": "de-DE",
                                    "text": "Test 2",
                                    "isSource": true
                                },
                                "rowType": "REFERENCE"
                            }
                        }, {
                            "row": {
                                "elementUid": "Reference-1005",
                                "factor": "1,000000000000000",
                                "description": {
                                    "language": "de-DE",
                                    "text": "Test 3",
                                    "isSource": true
                                },
                                "rowType": "REFERENCE"
                            }
                        }, {
                            "row": {
                                "elementUid": "Reference-1004",
                                "factor": "1,000000000000000",
                                "description": {
                                    "language": "de-DE",
                                    "text": "Test 4",
                                    "isSource": true
                                },
                                "rowType": "REFERENCE"
                            }
                        }
                    ],
                    "times": {
                        "ttb": 50.0,
                        "ttbUser": null,
                        "ttuUser": null,
                        "twUser": null,
                        "tb1User": null,
                        "tb2User": null,
                        "trtbUser": null,
                        "trtuUser": null,
                        "trwUser": null,
                        "trb1User": null,
                        "trb2User": null,
                        "tg": 50.0,
                        "te": 50.0,
                        "teUser": null,
                        "trUser": null,
                        "t": 50.0
                    },
                    "elementConfigurationuid": "ElementClassConfiguration-100006",
                    "folderuid": "Folder-60",
                    "code": "CREATE.ELEMENT.BY.REST",
                    "description": {
                        "language": "de-DE",
                        "text": "Beschreibung anlegen",
                        "isSource": true
                    },
                    "ownerUid": "Account-2",
                    "modifyUserUid": "Account-2",
                    "groupUid": null
                }],
                {
                    auth: {
                        username: "mtm",
                        password: "mtm",
                      },
                },
            ).then((res)=>{
                console.log(response);
            });
        }
    }
})