SYSTO.tutorials.tank1 = {
    meta: {
        author: 'Robert Muetzelfeldt',
        date: '4 June 2014',
        about: 'This is an auto-generated tutorial script for building a simple 1-stock, 2-flow water flow model'
    },
    actionArray:[
    {
        "index": 1,
        "type": "create_node",
        "dateTime": "2014-06-04T21:29:39.054Z",
        "argList": {
            "mode": "stock",
            "nodeId": "stock1",
            "diagramx": 339,
            "diagramy": 131
        }
    },
    {
        "index": 2,
        "type": "set_node_label",
        "dateTime": "2014-06-04T21:29:44.644Z",
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
        "dateTime": "2014-06-04T21:29:52.578Z",
        "argList": {
            "type": "flow",
            "arc_id": "flow1",
            "start_node_exists": false,
            "start_node_id": null,
            "start_node_label": null,
            "end_node_exists": true,
            "end_node_id": "stock1",
            "end_node_label": "tank",
            "startPoint": {
                "x": 171,
                "y": 132
            }
        }
    },
    {
        "index": 4,
        "type": "set_node_label",
        "dateTime": "2014-06-04T21:29:57.402Z",
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
        "dateTime": "2014-06-04T21:30:08.302Z",
        "argList": {
            "type": "flow",
            "arc_id": "flow2",
            "start_node_exists": true,
            "start_node_id": "stock1",
            "start_node_label": "tank",
            "end_node_exists": false,
            "end_node_id": null,
            "end_node_label": null,
            "endPoint": {
                "x": 483,
                "y": 133
            }
        }
    },
    {
        "index": 6,
        "type": "set_node_label",
        "dateTime": "2014-06-04T21:30:13.866Z",
        "argList": {
            "mode": "valve",
            "nodeId": "valve2",
            "oldLabel": "valve2",
            "newLabel": "outflow"
        }
    },
    {
        "index": 7,
        "type": "set_equation",
        "dateTime": "2014-06-04T21:31:05.606Z",
        "argList": {
            "mode": "stock",
            "nodeId": "stock1",
            "nodeLabel": "tank",
            "oldEquation": "",
            "equation": "0"
        }
    },
    {
        "index": 8,
        "type": "set_equation",
        "dateTime": "2014-06-04T21:32:00.483Z",
        "argList": {
            "mode": "valve",
            "nodeId": "valve1",
            "nodeLabel": "inflow",
            "oldEquation": "",
            "equation": "10"
        }
    },
    {
        "index": 9,
        "type": "create_arc",
        "dateTime": "2014-06-04T21:32:11.696Z",
        "argList": {
            "type": "influence",
            "arc_id": "influence1",
            "start_node_exists": true,
            "start_node_id": "stock1",
            "start_node_label": "tank",
            "end_node_exists": true,
            "end_node_id": "valve2",
            "end_node_label": "outflow"
        }
    },
    {
        "index": 10,
        "type": "create_node",
        "dateTime": "2014-06-04T21:32:24.056Z",
        "argList": {
            "mode": "variable",
            "nodeId": "variable1",
            "diagramx": 386,
            "diagramy": 181
        }
    },
    {
        "index": 11,
        "type": "set_node_label",
        "dateTime": "2014-06-04T21:32:53.161Z",
        "argList": {
            "mode": "variable",
            "nodeId": "variable1",
            "oldLabel": "variable1",
            "newLabel": "outflow_coef"
        }
    },
    {
        "index": 12,
        "type": "create_arc",
        "dateTime": "2014-06-04T21:33:01.793Z",
        "argList": {
            "type": "influence",
            "arc_id": "influence2",
            "start_node_exists": true,
            "start_node_id": "variable1",
            "start_node_label": "outflow_coef",
            "end_node_exists": true,
            "end_node_id": "valve2",
            "end_node_label": "outflow"
        }
    },
    {
        "index": 13,
        "type": "set_equation",
        "dateTime": "2014-06-04T21:33:22.747Z",
        "argList": {
            "mode": "valve",
            "nodeId": "valve2",
            "nodeLabel": "outflow",
            "oldEquation": "",
            "equation": "outflow_coef*tank"
        }
    },
    {
        "index": 15,
        "type": "set_equation",
        "dateTime": "2014-06-04T21:36:09.412Z",
        "argList": {
            "mode": "variable",
            "nodeId": "variable1",
            "nodeLabel": "outflow_coef",
            "oldEquation": "0.2",
            "equation": "0.05"
        }
    }
]};
