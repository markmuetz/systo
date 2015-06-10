SYSTO.tutorials.simple_sir = {
    meta: {
        author: 'Robert Muetzelfeldt',
        date: '4 March 2015',
        about: 'This is an auto-generated tutorial script doe building a simple SIR (susceptible-infected-recovered) disease model.'
    },
    actionArray:[
    {
        "index": 1,
        "type": "create_node",
        "dateTime": "2015-03-04T21:17:42.482Z",
        "argList": {
            "mode": "stock",
            "nodeId": "stock1",
            "diagramx": 177,
            "diagramy": 166
        }
    },
    {
        "index": 2,
        "type": "set_node_label",
        "dateTime": "2015-03-04T21:17:57.992Z",
        "argList": {
            "mode": "stock",
            "nodeId": "stock1",
            "oldLabel": "stock1",
            "newLabel": "susceptible"
        }
    },
    {
        "index": 3,
        "type": "create_node",
        "dateTime": "2015-03-04T21:18:01.061Z",
        "argList": {
            "mode": "stock",
            "nodeId": "stock2",
            "diagramx": 372,
            "diagramy": 172
        }
    },
    {
        "index": 4,
        "type": "set_node_label",
        "dateTime": "2015-03-04T21:18:07.232Z",
        "argList": {
            "mode": "stock",
            "nodeId": "stock2",
            "oldLabel": "stock2",
            "newLabel": "infected"
        }
    },
    {
        "index": 5,
        "type": "create_node",
        "dateTime": "2015-03-04T21:18:09.299Z",
        "argList": {
            "mode": "stock",
            "nodeId": "stock3",
            "diagramx": 558,
            "diagramy": 170
        }
    },
    {
        "index": 6,
        "type": "set_node_label",
        "dateTime": "2015-03-04T21:18:34.955Z",
        "argList": {
            "mode": "stock",
            "nodeId": "stock3",
            "oldLabel": "stock3",
            "newLabel": "recovered"
        }
    },
    {
        "index": 7,
        "type": "create_arc",
        "dateTime": "2015-03-04T21:18:38.069Z",
        "argList": {
            "type": "flow",
            "arc_id": "flow1",
            "start_node_exists": true,
            "start_node_id": "stock1",
            "start_node_label": "susceptible",
            "end_node_exists": true,
            "end_node_id": "stock2",
            "end_node_label": "infected"
        }
    },
    {
        "index": 8,
        "type": "set_node_label",
        "dateTime": "2015-03-04T21:18:54.835Z",
        "argList": {
            "mode": "valve",
            "nodeId": "valve1",
            "oldLabel": "flow1",
            "newLabel": "infecting"
        }
    },
    {
        "index": 9,
        "type": "create_arc",
        "dateTime": "2015-03-04T21:18:57.624Z",
        "argList": {
            "type": "flow",
            "arc_id": "flow2",
            "start_node_exists": true,
            "start_node_id": "stock2",
            "start_node_label": "infected",
            "end_node_exists": true,
            "end_node_id": "stock3",
            "end_node_label": "recovered"
        }
    },
    {
        "index": 10,
        "type": "set_node_label",
        "dateTime": "2015-03-04T21:19:05.151Z",
        "argList": {
            "mode": "valve",
            "nodeId": "valve2",
            "oldLabel": "flow2",
            "newLabel": "recovering"
        }
    },
    {
        "index": 11,
        "type": "create_node",
        "dateTime": "2015-03-04T21:19:11.221Z",
        "argList": {
            "mode": "variable",
            "nodeId": "variable1",
            "diagramx": 199,
            "diagramy": 105
        }
    },
    {
        "index": 12,
        "type": "set_node_label",
        "dateTime": "2015-03-04T21:19:15.561Z",
        "argList": {
            "mode": "variable",
            "nodeId": "variable1",
            "oldLabel": "variable1",
            "newLabel": "k1"
        }
    },
    {
        "index": 13,
        "type": "create_node",
        "dateTime": "2015-03-04T21:19:17.277Z",
        "argList": {
            "mode": "variable",
            "nodeId": "variable2",
            "diagramx": 407,
            "diagramy": 116
        }
    },
    {
        "index": 14,
        "type": "set_node_label",
        "dateTime": "2015-03-04T21:19:26.054Z",
        "argList": {
            "mode": "variable",
            "nodeId": "variable2",
            "oldLabel": "variable2",
            "newLabel": "k2"
        }
    },
    {
        "index": 15,
        "type": "create_arc",
        "dateTime": "2015-03-04T21:19:31.545Z",
        "argList": {
            "type": "influence",
            "arc_id": "influence1",
            "start_node_exists": true,
            "start_node_id": "stock1",
            "start_node_label": "susceptible",
            "end_node_exists": true,
            "end_node_id": "valve1",
            "end_node_label": "infecting"
        }
    },
    {
        "index": 16,
        "type": "create_arc",
        "dateTime": "2015-03-04T21:19:39.476Z",
        "argList": {
            "type": "influence",
            "arc_id": "influence2",
            "start_node_exists": true,
            "start_node_id": "stock2",
            "start_node_label": "infected",
            "end_node_exists": true,
            "end_node_id": "valve1",
            "end_node_label": "infecting"
        }
    },
    {
        "index": 17,
        "type": "create_arc",
        "dateTime": "2015-03-04T21:19:44.759Z",
        "argList": {
            "type": "influence",
            "arc_id": "influence3",
            "start_node_exists": true,
            "start_node_id": "variable1",
            "start_node_label": "k1",
            "end_node_exists": true,
            "end_node_id": "valve1",
            "end_node_label": "infecting"
        }
    },
    {
        "index": 18,
        "type": "create_arc",
        "dateTime": "2015-03-04T21:19:51.160Z",
        "argList": {
            "type": "influence",
            "arc_id": "influence4",
            "start_node_exists": true,
            "start_node_id": "stock2",
            "start_node_label": "infected",
            "end_node_exists": true,
            "end_node_id": "valve2",
            "end_node_label": "recovering"
        }
    },
    {
        "index": 19,
        "type": "create_arc",
        "dateTime": "2015-03-04T21:19:57.407Z",
        "argList": {
            "type": "influence",
            "arc_id": "influence5",
            "start_node_exists": true,
            "start_node_id": "variable2",
            "start_node_label": "k2",
            "end_node_exists": true,
            "end_node_id": "valve2",
            "end_node_label": "recovering"
        }
    },
    {
        "index": 20,
        "type": "set_equation",
        "dateTime": "2015-03-04T21:20:17.147Z",
        "argList": {
            "mode": "stock",
            "nodeId": "stock1",
            "nodeLabel": "susceptible",
            "oldEquation": "",
            "equation": "99"
        }
    },
    {
        "index": 21,
        "type": "set_equation",
        "dateTime": "2015-03-04T21:20:24.800Z",
        "argList": {
            "mode": "stock",
            "nodeId": "stock2",
            "nodeLabel": "infected",
            "oldEquation": "",
            "equation": "1"
        }
    },
    {
        "index": 22,
        "type": "set_equation",
        "dateTime": "2015-03-04T21:20:31.073Z",
        "argList": {
            "mode": "stock",
            "nodeId": "stock3",
            "nodeLabel": "recovered",
            "oldEquation": "",
            "equation": "0"
        }
    },
    {
        "index": 23,
        "type": "set_equation",
        "dateTime": "2015-03-04T21:21:06.881Z",
        "argList": {
            "mode": "valve",
            "nodeId": "valve1",
            "nodeLabel": "infecting",
            "oldEquation": "",
            "equation": "k1*susceptible*infected"
        }
    },
    {
        "index": 24,
        "type": "set_equation",
        "dateTime": "2015-03-04T21:21:20.181Z",
        "argList": {
            "mode": "valve",
            "nodeId": "valve2",
            "nodeLabel": "recovering",
            "oldEquation": "",
            "equation": "k2*infected"
        }
    },
    {
        "index": 25,
        "type": "set_equation",
        "dateTime": "2015-03-04T21:21:41.384Z",
        "argList": {
            "mode": "variable",
            "nodeId": "variable1",
            "nodeLabel": "k1",
            "oldEquation": "",
            "equation": "0.003"
        }
    },
    {
        "index": 26,
        "type": "set_equation",
        "dateTime": "2015-03-04T21:21:54.921Z",
        "argList": {
            "mode": "variable",
            "nodeId": "variable2",
            "nodeLabel": "k2",
            "oldEquation": "",
            "equation": "0.1"
        }
    }
]
};
