SYSTO.tutorials.singlepop = {
    meta: {
        author: 'Robert Muetzelfeldt',
        date: '13 March 2014',
        about: 'This is an auto-generated tutorial script for building a simple 1-stock, 1-flow population model.'
    },
    actionArray:[
    {
        "index": 1,
        "type": "create_node",
        "dateTime": "2014-03-13T22:50:36.599Z",
        "argList": {
            "mode": "stock",
            "nodeId": "stock1",
            "diagramx": 247,
            "diagramy": 126
        }
    },
    {
        "index": 2,
        "type": "set_node_label",
        "dateTime": "2014-03-13T22:50:47.665Z",
        "argList": {
            "mode": "stock",
            "nodeId": "stock1",
            "oldLabel": "stock1",
            "newLabel": "Deer_Population"
        }
    },
    {
        "index": 3,
        "type": "create_arc",
        "dateTime": "2014-03-13T22:50:55.127Z",
        "argList": {
            "type": "flow",
            "arc_id": "flow1",
            "start_node_exists": false,
            "start_node_id": null,
            "start_node_label": null,
            "end_node_exists": true,
            "end_node_id": "stock1",
            "end_node_label": "Deer_Population",
            "startPoint": {
                "x": 73,
                "y": 125
            }
        }
    },
    {
        "index": 4,
        "type": "set_node_label",
        "dateTime": "2014-03-13T22:51:03.999Z",
        "argList": {
            "mode": "valve",
            "nodeId": "valve1",
            "oldLabel": "valve1",
            "newLabel": "Births"
        }
    },
    {
        "index": 5,
        "type": "create_node",
        "dateTime": "2014-03-13T22:51:09.004Z",
        "argList": {
            "mode": "variable",
            "nodeId": "variable1",
            "diagramx": 100,
            "diagramy": 188
        }
    },
    {
        "index": 6,
        "type": "set_node_label",
        "dateTime": "2014-03-13T22:51:16.442Z",
        "argList": {
            "mode": "variable",
            "nodeId": "variable1",
            "oldLabel": "variable1",
            "newLabel": "Birth_Rate"
        }
    },
    {
        "index": 7,
        "type": "create_arc",
        "dateTime": "2014-03-13T22:51:23.744Z",
        "argList": {
            "type": "influence",
            "arc_id": "influence1",
            "start_node_exists": true,
            "start_node_id": "stock1",
            "start_node_label": "Deer_Population",
            "end_node_exists": true,
            "end_node_id": "valve1",
            "end_node_label": "Births"
        }
    },
    {
        "index": 8,
        "type": "create_arc",
        "dateTime": "2014-03-13T22:51:31.389Z",
        "argList": {
            "type": "influence",
            "arc_id": "influence2",
            "start_node_exists": true,
            "start_node_id": "variable1",
            "start_node_label": "Birth_Rate",
            "end_node_exists": true,
            "end_node_id": "valve1",
            "end_node_label": "Births"
        }
    },
    {
        "index": 9,
        "type": "set_equation",
        "dateTime": "2014-03-13T22:51:47.759Z",
        "argList": {
            "mode": "stock",
            "nodeId": "stock1",
            "nodeLabel": "Deer_Population",
            "oldEquation": "",
            "equation": "10"
        }
    },
    {
        "index": 10,
        "type": "set_equation",
        "dateTime": "2014-03-13T22:52:04.194Z",
        "argList": {
            "mode": "variable",
            "nodeId": "variable1",
            "nodeLabel": "Birth_Rate",
            "oldEquation": "",
            "equation": "0.25"
        }
    },
    {
        "index": 11,
        "type": "set_equation",
        "dateTime": "2014-03-13T22:52:31.887Z",
        "argList": {
            "mode": "valve",
            "nodeId": "valve1",
            "nodeLabel": "Births",
            "oldEquation": "",
            "equation": "Deer_Population*Birth_Rate"
        }
    }
]
};
