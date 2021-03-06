SYSTO.models.wonderland = {
 "meta": {
  "language": "system_dynamics"
 },
 "nodes": {
  "stock1": {
   "id": "stock1",
   "type": "stock",
   "label": "Population",
   "centrex": 287,
   "centrey": 43,
   "text_shiftx": 0,
   "text_shifty": -25,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "1"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "5"
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
  "cloud1": {
   "id": "cloud1",
   "type": "cloud",
   "label": "cloud1",
   "centrex": 153,
   "centrey": 44,
   "text_shiftx": 0,
   "text_shifty": -25,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": ""
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
   "label": "Deaths",
   "centrex": 220,
   "centrey": 43.5,
   "text_shiftx": 0,
   "text_shifty": -25,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "Population*Death_Rate"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
  "cloud2": {
   "id": "cloud2",
   "type": "cloud",
   "label": "cloud2",
   "centrex": 412,
   "centrey": 45,
   "text_shiftx": 0,
   "text_shifty": -25,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": ""
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
   "label": "Births",
   "centrex": 349.5,
   "centrey": 44,
   "text_shiftx": 0,
   "text_shifty": -25,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "Birth_Rate*Population"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
   "label": "Death_Rate",
   "centrex": 116,
   "centrey": 89,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "Normal_Death_Rate*Envir_Effect_Death"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
   "label": "Normal_Death_Rate",
   "centrex": 182,
   "centrey": 126,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "Death_Coeff_1*(Death_Coeff_2-exp(max(-50,min(50,Death_Income_Effect*Net_per_Capita_Output)))/(1+exp(max(-50,min(50,Death_Income_Effect*Net_per_Capita_Output)))))"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
  "variable3": {
   "id": "variable3",
   "type": "variable",
   "label": "Death_Coeff_1",
   "centrex": 99,
   "centrey": 156,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "0.01"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "0.2"
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
  "variable4": {
   "id": "variable4",
   "type": "variable",
   "label": "Death_Coeff_2",
   "centrex": 141,
   "centrey": 173,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "2.5"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "10"
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
  "variable5": {
   "id": "variable5",
   "type": "variable",
   "label": "Death_Income_Effect",
   "centrex": 201,
   "centrey": 176,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "0.18"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "1"
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
  "variable6": {
   "id": "variable6",
   "type": "variable",
   "label": "Birth_Rate",
   "centrex": 350,
   "centrey": 102,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "Birth_Coeff_1*(Birth_Coeff_2-exp(max(-50,min(50,Birth_Income_Effect*Net_per_Capita_Output)))/(1+exp(max(-50,min(50,Birth_Income_Effect*Net_per_Capita_Output)))))"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
  "variable7": {
   "id": "variable7",
   "type": "variable",
   "label": "Birth_Coeff_2",
   "centrex": 265,
   "centrey": 96,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "1.375"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "5"
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
  "variable8": {
   "id": "variable8",
   "type": "variable",
   "label": "Birth_Coeff_1",
   "centrex": 271,
   "centrey": 123,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "0.04"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "0.2"
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
  "variable9": {
   "id": "variable9",
   "type": "variable",
   "label": "Birth_Income_Effect",
   "centrex": 276,
   "centrey": 145,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "0.16"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "1"
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
  "variable10": {
   "id": "variable10",
   "type": "variable",
   "label": "Net_per_Capita_Output",
   "centrex": 311,
   "centrey": 164,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "Output_per_Capita-Pollution_Control"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
  "variable11": {
   "id": "variable11",
   "type": "variable",
   "label": "Envir_Effect_Death",
   "centrex": 58,
   "centrey": 183,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "1+Envir_Death_Scale*pow(max(0.01,1-Natural_Capital),Envir_Death_Nonlin)"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
  "variable12": {
   "id": "variable12",
   "type": "variable",
   "label": "Envir_Death_Nonlin",
   "centrex": 0,
   "centrey": 204,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "15"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "50"
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
  "variable13": {
   "id": "variable13",
   "type": "variable",
   "label": "Envir_Death_Scale",
   "centrex": 8,
   "centrey": 248,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "4"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "20"
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
   "label": "Output_per_Capita",
   "centrex": 248,
   "centrey": 219,
   "text_shiftx": 0,
   "text_shifty": -25,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "1"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "5"
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
  "cloud3": {
   "id": "cloud3",
   "type": "cloud",
   "label": "cloud3",
   "centrex": 139,
   "centrey": 223,
   "text_shiftx": 0,
   "text_shifty": -25,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": ""
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
  "valve3": {
   "id": "valve3",
   "type": "valve",
   "label": "Output_Net_Change_Rate",
   "centrex": 193.5,
   "centrey": 221,
   "text_shiftx": 0,
   "text_shifty": -25,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "Output_per_Capita*Output_Growth_Rate"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
   "label": "Natural_Capital",
   "centrex": 182,
   "centrey": 338,
   "text_shiftx": 0,
   "text_shifty": -25,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "0.98"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "5"
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
  "cloud4": {
   "id": "cloud4",
   "type": "cloud",
   "label": "cloud4",
   "centrex": 309,
   "centrey": 334,
   "text_shiftx": 0,
   "text_shifty": -25,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": ""
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
  "valve4": {
   "id": "valve4",
   "type": "valve",
   "label": "Natural_Capital_Net_Change_Rate",
   "centrex": 245.5,
   "centrey": 336,
   "text_shiftx": 0,
   "text_shifty": -25,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "Regeneration_Rate*Natural_Capital*(1-Natural_Capital)"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
  "variable14": {
   "id": "variable14",
   "type": "variable",
   "label": "Output_Growth_Rate",
   "centrex": 168,
   "centrey": 266,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "Growth_Rate-(Growth_Rate+Contraction_Rate)*pow((1-Natural_Capital),Contraction_Nonlin)"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
  "variable15": {
   "id": "variable15",
   "type": "variable",
   "label": "Growth_Rate",
   "centrex": 199,
   "centrey": 294,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "0.04"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "0.2"
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
  "variable16": {
   "id": "variable16",
   "type": "variable",
   "label": "Contraction_Rate",
   "centrex": 96,
   "centrey": 260,
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
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "0.5"
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
  "variable17": {
   "id": "variable17",
   "type": "variable",
   "label": "Contraction_Nonlin",
   "centrex": 96,
   "centrey": 294,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "2"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "10"
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
  "variable19": {
   "id": "variable19",
   "type": "variable",
   "label": "Pollution_Abatement",
   "centrex": 421,
   "centrey": 213,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "Abatement_Coeff*(exp(max(-50,min(50,Control_Effect*Pollution_Control*Population)))/(1+exp(max(-50,min(50,Control_Effect*Pollution_Control*Population))))-0.5)"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
  "variable20": {
   "id": "variable20",
   "type": "variable",
   "label": "Abatement_Coeff",
   "centrex": 367,
   "centrey": 179,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "2"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "10"
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
  "variable21": {
   "id": "variable21",
   "type": "variable",
   "label": "Pollution_Control",
   "centrex": 327,
   "centrey": 250,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "Control_Scale*pow((1-Natural_Capital),Control_Nonlin*Output_per_Capita)"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
  "variable22": {
   "id": "variable22",
   "type": "variable",
   "label": "Control_Scale",
   "centrex": 265,
   "centrey": 292,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "0.5"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "2"
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
  "variable23": {
   "id": "variable23",
   "type": "variable",
   "label": "Control_Nonlin",
   "centrex": 326,
   "centrey": 295,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "2"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "10"
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
  "variable24": {
   "id": "variable24",
   "type": "variable",
   "label": "Cleansing_Flow",
   "centrex": 263,
   "centrey": 380,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "Cleansing_Rate/Regen_Coeff*pow(Natural_Capital,Cleansing_Coeff)"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
  "variable25": {
   "id": "variable25",
   "type": "variable",
   "label": "Cleansing_Rate",
   "centrex": 176,
   "centrey": 387,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "1"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "5"
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
  "variable26": {
   "id": "variable26",
   "type": "variable",
   "label": "Cleansing_Coeff",
   "centrex": 345,
   "centrey": 374,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "2"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "10"
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
  "variable27": {
   "id": "variable27",
   "type": "variable",
   "label": "Regeneration_Rate",
   "centrex": 411,
   "centrey": 318,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "Normal_Regen_Rate*(exp(max(-50,min(50,Regen_Coeff*(Cleansing_Flow-Net_Pollution_Flow))))-1)"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
  "variable28": {
   "id": "variable28",
   "type": "variable",
   "label": "Regen_Coeff",
   "centrex": 413,
   "centrey": 367,
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
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "1"
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
  "variable29": {
   "id": "variable29",
   "type": "variable",
   "label": "Normal_Regen_Rate",
   "centrex": 500,
   "centrey": 349,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "1"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "10"
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
  "variable30": {
   "id": "variable30",
   "type": "variable",
   "label": "Net_Pollution_Flow",
   "centrex": 465,
   "centrey": 271,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "Pollution_Output-Pollution_Abatement"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
  "variable31": {
   "id": "variable31",
   "type": "variable",
   "label": "Pollution_Output",
   "centrex": 472,
   "centrey": 190,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "Population*Output_per_Capita*Pollution_Intensity"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
  "stock4": {
   "id": "stock4",
   "type": "stock",
   "label": "Pollution_Intensity",
   "centrex": 539,
   "centrey": 209,
   "text_shiftx": 0,
   "text_shifty": -25,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "1"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "5"
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
  "cloud5": {
   "id": "cloud5",
   "type": "cloud",
   "label": "cloud5",
   "centrex": 642,
   "centrey": 211,
   "text_shiftx": 0,
   "text_shifty": -25,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": ""
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
  "valve5": {
   "id": "valve5",
   "type": "valve",
   "label": "Pollution_Intensity_Change_Rate",
   "centrex": 590.5,
   "centrey": 210,
   "text_shiftx": 0,
   "text_shifty": -25,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "Pollution_Intensity*Pollution_Change_Rate"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "100"
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
  "variable32": {
   "id": "variable32",
   "type": "variable",
   "label": "Pollution_Change_Rate",
   "centrex": 646,
   "centrey": 264,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "-0.03"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "-0.1"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "0.1"
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
  "variable33": {
   "id": "variable33",
   "type": "variable",
   "label": "Control_Effect",
   "centrex": 385,
   "centrey": 256,
   "text_shiftx": 0,
   "text_shifty": 0,
   "extras": {
    "equation": {
     "type": "long_text",
     "default_value": "",
     "value": "0.02"
    },
    "min_value": {
     "type": "short_text",
     "default_value": "0",
     "value": "0"
    },
    "max_value": {
     "type": "short_text",
     "default_value": "100",
     "value": "0.1"
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
   "end_node_id": "cloud1",
   "curvature": 0.3,
   "along": 0.5,
   "node_id": "valve1"
  },
  "flow2": {
   "id": "flow2",
   "type": "flow",
   "label": "flow2",
   "start_node_id": "cloud2",
   "end_node_id": "stock1",
   "curvature": 0.3,
   "along": 0.5,
   "node_id": "valve2"
  },
  "flow3": {
   "id": "flow3",
   "type": "flow",
   "label": "flow3",
   "start_node_id": "cloud3",
   "end_node_id": "stock2",
   "curvature": 0.3,
   "along": 0.5,
   "node_id": "valve3"
  },
  "flow4": {
   "id": "flow4",
   "type": "flow",
   "label": "flow4",
   "start_node_id": "cloud4",
   "end_node_id": "stock3",
   "curvature": 0.3,
   "along": 0.5,
   "node_id": "valve4"
  },
  "flow5": {
   "id": "flow5",
   "type": "flow",
   "label": "flow5",
   "start_node_id": "cloud5",
   "end_node_id": "stock4",
   "curvature": 0.3,
   "along": 0.5,
   "node_id": "valve5"
  },
  "influence1": {
   "id": "influence1",
   "type": "influence",
   "label": "influence1",
   "start_node_id": "stock1",
   "end_node_id": "valve2",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence2": {
   "id": "influence2",
   "type": "influence",
   "label": "influence2",
   "start_node_id": "stock1",
   "end_node_id": "valve1",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence3": {
   "id": "influence3",
   "type": "influence",
   "label": "influence3",
   "start_node_id": "variable1",
   "end_node_id": "valve1",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence4": {
   "id": "influence4",
   "type": "influence",
   "label": "influence4",
   "start_node_id": "variable2",
   "end_node_id": "variable1",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence5": {
   "id": "influence5",
   "type": "influence",
   "label": "influence5",
   "start_node_id": "variable3",
   "end_node_id": "variable2",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence6": {
   "id": "influence6",
   "type": "influence",
   "label": "influence6",
   "start_node_id": "variable4",
   "end_node_id": "variable2",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence7": {
   "id": "influence7",
   "type": "influence",
   "label": "influence7",
   "start_node_id": "variable5",
   "end_node_id": "variable2",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence8": {
   "id": "influence8",
   "type": "influence",
   "label": "influence8",
   "start_node_id": "variable7",
   "end_node_id": "variable6",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence9": {
   "id": "influence9",
   "type": "influence",
   "label": "influence9",
   "start_node_id": "variable8",
   "end_node_id": "variable6",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence10": {
   "id": "influence10",
   "type": "influence",
   "label": "influence10",
   "start_node_id": "variable9",
   "end_node_id": "variable6",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence11": {
   "id": "influence11",
   "type": "influence",
   "label": "influence11",
   "start_node_id": "variable6",
   "end_node_id": "valve2",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence12": {
   "id": "influence12",
   "type": "influence",
   "label": "influence12",
   "start_node_id": "variable10",
   "end_node_id": "variable6",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence13": {
   "id": "influence13",
   "type": "influence",
   "label": "influence13",
   "start_node_id": "stock2",
   "end_node_id": "variable10",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence14": {
   "id": "influence14",
   "type": "influence",
   "label": "influence14",
   "start_node_id": "variable11",
   "end_node_id": "variable1",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence15": {
   "id": "influence15",
   "type": "influence",
   "label": "influence15",
   "start_node_id": "variable12",
   "end_node_id": "variable11",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence16": {
   "id": "influence16",
   "type": "influence",
   "label": "influence16",
   "start_node_id": "variable13",
   "end_node_id": "variable11",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence17": {
   "id": "influence17",
   "type": "influence",
   "label": "influence17",
   "start_node_id": "stock3",
   "end_node_id": "variable11",
   "curvature": 0.7442958300550747,
   "along": 0.6502753737214791
  },
  "influence18": {
   "id": "influence18",
   "type": "influence",
   "label": "influence18",
   "start_node_id": "variable14",
   "end_node_id": "valve3",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence19": {
   "id": "influence19",
   "type": "influence",
   "label": "influence19",
   "start_node_id": "variable16",
   "end_node_id": "variable14",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence20": {
   "id": "influence20",
   "type": "influence",
   "label": "influence20",
   "start_node_id": "variable17",
   "end_node_id": "variable14",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence21": {
   "id": "influence21",
   "type": "influence",
   "label": "influence21",
   "start_node_id": "variable15",
   "end_node_id": "variable14",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence22": {
   "id": "influence22",
   "type": "influence",
   "label": "influence22",
   "start_node_id": "stock3",
   "end_node_id": "variable14",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence23": {
   "id": "influence23",
   "type": "influence",
   "label": "influence23",
   "start_node_id": "stock3",
   "end_node_id": "valve4",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence24": {
   "id": "influence24",
   "type": "influence",
   "label": "influence24",
   "start_node_id": "stock3",
   "end_node_id": "variable24",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence25": {
   "id": "influence25",
   "type": "influence",
   "label": "influence25",
   "start_node_id": "variable25",
   "end_node_id": "variable24",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence26": {
   "id": "influence26",
   "type": "influence",
   "label": "influence26",
   "start_node_id": "variable26",
   "end_node_id": "variable24",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence27": {
   "id": "influence27",
   "type": "influence",
   "label": "influence27",
   "start_node_id": "variable28",
   "end_node_id": "variable24",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence28": {
   "id": "influence28",
   "type": "influence",
   "label": "influence28",
   "start_node_id": "variable28",
   "end_node_id": "variable27",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence29": {
   "id": "influence29",
   "type": "influence",
   "label": "influence29",
   "start_node_id": "variable27",
   "end_node_id": "valve4",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence30": {
   "id": "influence30",
   "type": "influence",
   "label": "influence30",
   "start_node_id": "variable24",
   "end_node_id": "variable27",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence31": {
   "id": "influence31",
   "type": "influence",
   "label": "influence31",
   "start_node_id": "variable29",
   "end_node_id": "variable27",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence32": {
   "id": "influence32",
   "type": "influence",
   "label": "influence32",
   "start_node_id": "variable30",
   "end_node_id": "variable27",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence33": {
   "id": "influence33",
   "type": "influence",
   "label": "influence33",
   "start_node_id": "variable19",
   "end_node_id": "variable30",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence34": {
   "id": "influence34",
   "type": "influence",
   "label": "influence34",
   "start_node_id": "variable23",
   "end_node_id": "variable21",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence35": {
   "id": "influence35",
   "type": "influence",
   "label": "influence35",
   "start_node_id": "stock2",
   "end_node_id": "variable21",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence36": {
   "id": "influence36",
   "type": "influence",
   "label": "influence36",
   "start_node_id": "variable22",
   "end_node_id": "variable21",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence37": {
   "id": "influence37",
   "type": "influence",
   "label": "influence37",
   "start_node_id": "variable21",
   "end_node_id": "variable19",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence38": {
   "id": "influence38",
   "type": "influence",
   "label": "influence38",
   "start_node_id": "variable20",
   "end_node_id": "variable19",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence39": {
   "id": "influence39",
   "type": "influence",
   "label": "influence39",
   "start_node_id": "variable33",
   "end_node_id": "variable19",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence40": {
   "id": "influence40",
   "type": "influence",
   "label": "influence40",
   "start_node_id": "variable32",
   "end_node_id": "valve5",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence41": {
   "id": "influence41",
   "type": "influence",
   "label": "influence41",
   "start_node_id": "stock4",
   "end_node_id": "valve5",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence42": {
   "id": "influence42",
   "type": "influence",
   "label": "influence42",
   "start_node_id": "variable31",
   "end_node_id": "variable30",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence43": {
   "id": "influence43",
   "type": "influence",
   "label": "influence43",
   "start_node_id": "stock1",
   "end_node_id": "variable31",
   "curvature": 1.0889780420532293,
   "along": 0.7752444746928393
  },
  "influence44": {
   "id": "influence44",
   "type": "influence",
   "label": "influence44",
   "start_node_id": "stock4",
   "end_node_id": "variable31",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence45": {
   "id": "influence45",
   "type": "influence",
   "label": "influence45",
   "start_node_id": "variable10",
   "end_node_id": "variable2",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence46": {
   "id": "influence46",
   "type": "influence",
   "label": "influence46",
   "start_node_id": "stock3",
   "end_node_id": "variable21",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence47": {
   "id": "influence47",
   "type": "influence",
   "label": "influence47",
   "start_node_id": "variable21",
   "end_node_id": "variable10",
   "curvature": 0.3,
   "along": 0.5
  },
  "influence48": {
   "id": "influence48",
   "type": "influence",
   "label": "influence48",
   "start_node_id": "stock1",
   "end_node_id": "variable19",
   "curvature": 0.3,
   "along": 0.5
  }
 },
   "scenarios": {
      "default": {
         "simulation_settings": {
            "start_time": 0,
            "end_time": 100,
            "nstep": 10,
            "display_interval": 1,
            "integration_method": "euler1"
         }
      }
   }
}
