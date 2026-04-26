export const MAPSERVER_LAYERS = Object.freeze({
  day_1_convective: { id: "0", name: "Day 1 Convective Outlook" },
  day_2_convective: { id: "8", name: "Day 2 Convective Outlook" },
  day_3_convective: { id: "16", name: "Day 3 Convective Outlook" },
  days_4_thru_8_convective: { id: "20", name: "Day 4 - 8 Convective Outlook" },
  
  day_1_categorical: { id: "1", name: "Day 1 Categorical Outlook" },
  day_2_categorical: { id: "9", name: "Day 2 Categorical Outlook" },
  day_3_categorical: { id: "17", name: "Day 3 Categorical Outlook" },

  day_1_prob_tornado: { id: "3", name: "Day 1 Probabilistic Tornado Outlook" },
  day_1_sig_tornado: { id: "2", name: "Day 1 Significant Tornado Outlook" },
  day_1_prob_hail: { id: "5", name: "Day 1 Probabilistic Hail Outlook" },
  day_1_sig_hail: { id: "4", name: "Day 1 Significant Hail Outlook" },
  day_1_prob_wind: { id: "7", name: "Day 1 Probabilistic Wind Outlook" },
  day_1_sig_wind: { id: "6", name: "Day 1 Significant Wind Outlook" },

  day_2_prob_tornado: { id: "11", name: "Day 2 Probabilistic Tornado Outlook" },
  day_2_sig_tornado: { id: "10", name: "Day 2 Significant Tornado Outlook" },
  day_2_prob_hail: { id: "13", name: "Day 2 Probabilistic Hail Outlook" },
  day_2_sig_hail: { id: "12", name: "Day 2 Significant Hail Outlook" },
  day_2_prob_wind: { id: "15", name: "Day 2 Probabilistic Wind Outlook" },
  day_2_sig_wind: { id: "14", name: "Day 2 Significant Wind Outlook" },
  
  day_3_prob: { id: "19", name: "Day 3 Probabilistic Outlook" },
  day_3_sig_severe: { id: "18", name: "Day 3 Significant Severe Outlook" },

  day_4_prob: { id: "21", name: "Day 4 Probabilistic Outlook" },
  day_5_prob: { id: "22", name: "Day 5 Probabilistic Outlook" },
  day_6_prob: { id: "23", name: "Day 6 Probabilistic Outlook" },
  day_7_prob: { id: "24", name: "Day 7 Probabilistic Outlook" },
  day_8_prob: { id: "25", name: "Day 8 Probabilistic Outlook" },
});

export const SPC_WX_OUTLKS_JSON_LAYERS = Object.freeze({
  DAY_1_JSON_DATA: { MAP_TITLE: "Day 1 Convective Outlook", LAYER_ID: "0" },
  DAY_2_JSON_DATA: { MAP_TITLE: "Day 2 Convective Outlook", LAYER_ID: "8" },
  DAY_3_JSON_DATA: { MAP_TITLE: "Day 3 Convective Outlook", LAYER_ID: "16" },
  DAY_48_JSON_DATA: { MAP_TITLE: "Day 4 - 8 Convective Outlook", LAYER_ID: "20" }
});

export const SPC_WX_OUTLKS_FEATURE_LAYERS = Object.freeze({
  // * --> FEATURE-ONLY LAYERS
  // ! --> IF no features, returns ("features": [{"properties.dn": 0}])
   
  DAY_1_CATEGORICAL: { MAP_TITLE: "Day 1 Categorical Outlook", LAYER_ID: "1" },
  DAY_2_CATEGORICAL: { MAP_TITLE: "Day 2 Categorical Outlook", LAYER_ID: "9" },
  DAY_3_CATEGORICAL: { MAP_TITLE: "Day 3 Categorical Outlook", LAYER_ID: "17" },

  DAY_4_PROBABILISTIC: { MAP_TITLE: "Day 4 Probabilistic Outlook", LAYER_ID: "21" },
  DAY_5_PROBABILISTIC: { MAP_TITLE: "Day 5 Probabilistic Outlook", LAYER_ID: "22" },
  DAY_6_PROBABILISTIC: { MAP_TITLE: "Day 6 Probabilistic Outlook", LAYER_ID: "23" },
  DAY_7_PROBABILISTIC: { MAP_TITLE: "Day 7 Probabilistic Outlook", LAYER_ID: "24" },
  DAY_8_PROBABILISTIC: { MAP_TITLE: "Day 8 Probabilistic Outlook", LAYER_ID: "25" },
  
  // * --> FEATURE + CIG (Conditional Intensity Group) LAYERS
  // ! --> IF no features, returns ("features": [])
  
  DAY_1_TORNADO: { 
    MAP_TITLE: "Day 1 Probabilistic Tornado Outlook", 
    LAYER_ID: "3",
    CIG_LAYER_ID: "2"
  },
  DAY_1_HAIL: { 
    MAP_TITLE: "Day 1 Probabilistic Hail Outlook", 
    LAYER_ID: "5",
    CIG_LAYER_ID: "4"
  },
  DAY_1_WIND: { 
    MAP_TITLE: "Day 1 Probabilistic Wind Outlook", 
    LAYER_ID: "7",
    CIG_LAYER_ID: "6"
  },  
  DAY_2_TORNADO: { 
    MAP_TITLE: "Day 2 Probabilistic Tornado Outlook", 
    LAYER_ID: "11",
    CIG_LAYER_ID: "10"
  },
  DAY_2_HAIL: { 
    MAP_TITLE: "Day 2 Probabilistic Hail Outlook", 
    LAYER_ID: "13",
    CIG_LAYER_ID: "12"
  },
  DAY_2_WIND: { 
    MAP_TITLE: "Day 2 Probabilistic Wind Outlook", 
    LAYER_ID: "15",
    CIG_LAYER_ID: "14"
  }, 
  DAY_3_PROBABILISTIC: { 
    MAP_TITLE: "Day 3 Probabilistic Outlook", 
    LAYER_ID: "19",
    CIG_LAYER_ID: "18"
  }
})