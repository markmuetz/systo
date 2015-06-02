SYSTO.tutorials.tank1 = {
    meta: {
        author: 'Robert Muetzelfeldt',
        date: '12 Feb 2014',
        about: 'This is an auto-generated tutorial script doe building a simple 1-stock, 2-flow model.'
    },
    actionArray:[
        {   "index": 0,
            "type": "start"
        },
        {
            "index": 1,
            "type": "create_node",
            "dateTime": "2014-02-12T14:23:32.399Z",
            "argList": {
                "mode": "stock",
                "nodeId": "stock1",
                "diagramx": 209,
                "diagramy": 99
            }
        },
        {
            "index": 2,
            "type": "set_node_label",
            "dateTime": "2014-02-12T14:23:46.979Z",
            "argList": {
                "mode": "stock",
                "nodeId": "stock1",
                "oldLabel": "stock1",
                "newLabel": "tank"
            }
        },
        {
            "index": 3,
            "type": "create_arc",
            "dateTime": "2014-02-12T14:23:56.155Z",
            "argList": {
                "type": "flow",
                "arc_id": "flow1",
                "start_node_exists": false,
                "start_node_id": null,
                "end_node_exists": true,
                "end_node_id": "stock1",
                "startPoint": {
                    "x": 62,
                    "y": 99
                }
            }
        },
        {
            "index": 4,
            "type": "set_node_label",
            "dateTime": "2014-02-12T14:24:04.796Z",
            "argList": {
                "mode": "valve",
                "nodeId": "valve1",
                "oldLabel": "valve1",
                "newLabel": "inflow"
            }
        },
        {
            "index": 5,
            "type": "create_arc",
            "dateTime": "2014-02-12T14:24:10.508Z",
            "argList": {
                "type": "flow",
                "arc_id": "flow2",
                "start_node_exists": true,
                "start_node_id": "stock1",
                "end_node_exists": false,
                "end_node_id": null,
                "endPoint": {
                    "x": 347,
                    "y": 100
                }
            }
        },
        {
            "index": 6,
            "type": "set_node_label",
            "dateTime": "2014-02-12T14:24:17.674Z",
            "argList": {
                "mode": "valve",
                "nodeId": "valve2",
                "oldLabel": "valve2",
                "newLabel": "outflow"
            }
        },
        {
            "index": 7,
            "type": "create_node",
            "dateTime": "2014-02-12T14:24:39.591Z",
            "argList": {
                "mode": "variable",
                "nodeId": "variable1",
                "diagramx": 244,
                "diagramy": 143
            }
        },
        {
            "index": 8,
            "type": "set_node_label",
            "dateTime": "2014-02-12T14:24:43.786Z",
            "argList": {
                "mode": "variable",
                "nodeId": "variable1",
                "oldLabel": "variable1",
                "newLabel": "tap"
            }
        },
        {
            "index": 9,
            "type": "create_arc",
            "dateTime": "2014-02-12T14:24:50.325Z",
            "argList": {
                "type": "influence",
                "arc_id": "influence1",
                "start_node_exists": true,
                "start_node_id": "stock1",
                "end_node_exists": true,
                "end_node_id": "valve2"
            }
        },
        {
            "index": 10,
            "type": "create_arc",
            "dateTime": "2014-02-12T14:24:55.707Z",
            "argList": {
                "type": "influence",
                "arc_id": "influence2",
                "start_node_exists": true,
                "start_node_id": "variable1",
                "end_node_exists": true,
                "end_node_id": "valve2"
            }
        },
        {
            "index": 11,
            "type": "set_equation",
            "dateTime": "2014-02-12T14:25:25.854Z",
            "argList": {
                "mode": "stock",
                "nodeId": "stock1",
                "oldEquation": "100",
                "equation": "0"
            }
        },
        {
            "index": 12,
            "type": "set_equation",
            "dateTime": "2014-02-12T14:25:43.549Z",
            "argList": {
                "mode": "valve",
                "nodeId": "valve1",
                "oldEquation": "",
                "equation": "10"
            }
        },
        {
            "index": 13,
            "type": "set_equation",
            "dateTime": "2014-02-12T14:25:56.478Z",
            "argList": {
                "mode": "variable",
                "nodeId": "variable1",
                "oldEquation": "",
                "equation": "0.05"
            }
        },
        {
            "index": 14,
            "type": "set_equation",
            "dateTime": "2014-02-12T14:26:10.296Z",
            "argList": {
                "mode": "valve",
                "nodeId": "valve2",
                "oldEquation": "",
                "equation": "tap*tank"
            }
        }
    ]
};

