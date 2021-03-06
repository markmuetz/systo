SYSTO.models.sir01 = {
   "meta": {
      "language": "system_dynamics",
      "id": "sir01"
   },
   "nodes": {
      "stock1": {
         "id": "stock1",
         "type": "stock",
         "label": "Susceptible",
         "centrex": 130,
         "centrey": 87,
         "text_shiftx": 1,
         "text_shifty": -22,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "500"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 100,
               "value": 100
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "stock2": {
         "id": "stock2",
         "type": "stock",
         "label": "Infected",
         "centrex": 331,
         "centrey": 92,
         "text_shiftx": 9,
         "text_shifty": 23,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "1"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 100,
               "value": 100
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "stock3": {
         "id": "stock3",
         "type": "stock",
         "label": "Recovered",
         "centrex": 328,
         "centrey": 204,
         "text_shiftx": 1,
         "text_shifty": -22,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "0"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 100,
               "value": 100
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "valve1": {
         "id": "valve1",
         "type": "valve",
         "label": "infection",
         "centrex": 230.5,
         "centrey": 89.5,
         "text_shiftx": 0,
         "text_shifty": 19,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "beta*0.01*Susceptible*Infected"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 10,
               "value": 10
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "valve2": {
         "id": "valve2",
         "type": "valve",
         "label": "recovery",
         "centrex": 329.5,
         "centrey": 148,
         "text_shiftx": 38,
         "text_shifty": -6,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "r*Infected"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 10,
               "value": 10
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable1": {
         "id": "variable1",
         "type": "variable",
         "label": "beta",
         "centrex": 208,
         "centrey": 155,
         "text_shiftx": 0,
         "text_shifty": 0,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "0.1"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      },
      "variable2": {
         "id": "variable2",
         "type": "variable",
         "label": "r",
         "centrex": 258,
         "centrey": 149,
         "text_shiftx": 0,
         "text_shifty": 0,
         "extras": {
            "equation": {
               "type": "long_text",
               "default_value": "",
               "value": "0.1"
            },
            "min_value": {
               "type": "short_text",
               "default_value": 0,
               "value": 0
            },
            "max_value": {
               "type": "short_text",
               "default_value": 1,
               "value": 1
            },
            "documentation": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            },
            "comments": {
               "type": "long_text",
               "default_value": "",
               "value": ""
            }
         }
      }
   },
   "arcs": {
      "flow1": {
         "id": "flow1",
         "type": "flow",
         "label": "flow1",
         "start_node_id": "stock1",
         "end_node_id": "stock2",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "node_id": "valve1",
         "shape": "straight",
         "line_colour": "#a0a0a0",
         "line_width": 4,
         "fill_colour": "#a0a0a0",
         "arrowhead": {
            "shape": "diamond",
            "gap": 6,
            "width": 5,
            "front": 12,
            "back": 0
         }
      },
      "flow2": {
         "id": "flow2",
         "type": "flow",
         "label": "flow2",
         "start_node_id": "stock2",
         "end_node_id": "stock3",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "node_id": "valve2",
         "shape": "straight",
         "line_colour": "#a0a0a0",
         "line_width": 4,
         "fill_colour": "#a0a0a0",
         "arrowhead": {
            "shape": "diamond",
            "gap": 6,
            "width": 5,
            "front": 12,
            "back": 0
         }
      },
      "influence1": {
         "id": "influence1",
         "type": "influence",
         "label": "influence1",
         "start_node_id": "stock1",
         "end_node_id": "valve1",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence2": {
         "id": "influence2",
         "type": "influence",
         "label": "influence2",
         "start_node_id": "stock2",
         "end_node_id": "valve1",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence3": {
         "id": "influence3",
         "type": "influence",
         "label": "influence3",
         "start_node_id": "stock2",
         "end_node_id": "valve2",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence4": {
         "id": "influence4",
         "type": "influence",
         "label": "influence4",
         "start_node_id": "variable1",
         "end_node_id": "valve1",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      },
      "influence5": {
         "id": "influence5",
         "type": "influence",
         "label": "influence5",
         "start_node_id": "variable2",
         "end_node_id": "valve2",
         "curvature": 0.3,
         "along": 0.5,
         "select_state": "normal",
         "set_state": "set",
         "shape": "curved",
         "line_colour": "#505050",
         "line_width": 1,
         "fill_colour": "#505050",
         "arrowhead": {
            "shape": "diamond",
            "gap": 2,
            "width": 3,
            "front": 10,
            "back": -2
         }
      }
   },
   "scenarios": {
      "default": {
         "simulation_settings": {
            "start_time": 0,
            "end_time": 100,
            "nstep": 100,
            "display_interval": 1,
            "integration_method": "euler1"
         }
      }
   }
};
