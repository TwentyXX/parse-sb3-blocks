module.exports = {
        "ND,(]G?KLIy(IZrd2sl.": {
          "opcode": "event_whenflagclicked",
          "next": "e#.I5;deyduAZk,j9ppo",
          "parent": null,
          "inputs": {},
          "fields": {},
          "shadow": false,
          "topLevel": true,
          "x": 305,
          "y": 111
        },
        "jFn;sgg(G@XuwL1vUFiY": {
          "opcode": "control_forever",
          "next": null,
          "parent": "e#.I5;deyduAZk,j9ppo",
          "inputs": {
            "SUBSTACK": [
              2,
              "/fg7g@2RaeZ,HMi)F0Vk"
            ]
          },
          "fields": {},
          "shadow": false,
          "topLevel": false
        },
        "/fg7g@2RaeZ,HMi)F0Vk": {
          "opcode": "motion_movesteps",
          "next": "0#zjxQPa-6l4=;=`ncXK",
          "parent": "jFn;sgg(G@XuwL1vUFiY",
          "inputs": {
            "STEPS": [
              1,
              [
                4,
                "10"
              ]
            ]
          },
          "fields": {},
          "shadow": false,
          "topLevel": false
        },
        "e#.I5;deyduAZk,j9ppo": {
          "opcode": "motion_setrotationstyle",
          "next": "jFn;sgg(G@XuwL1vUFiY",
          "parent": "ND,(]G?KLIy(IZrd2sl.",
          "inputs": {},
          "fields": {
            "STYLE": [
              "left-right",
              null
            ]
          },
          "shadow": false,
          "topLevel": false
        },
        "3w3LWUV3s%;XYEL1MPEJ": {
          "opcode": "looks_nextcostume",
          "next": null,
          "parent": "0#zjxQPa-6l4=;=`ncXK",
          "inputs": {},
          "fields": {},
          "shadow": false,
          "topLevel": false
        },
        "0#zjxQPa-6l4=;=`ncXK": {
          "opcode": "motion_ifonedgebounce",
          "next": "3w3LWUV3s%;XYEL1MPEJ",
          "parent": "/fg7g@2RaeZ,HMi)F0Vk",
          "inputs": {},
          "fields": {},
          "shadow": false,
          "topLevel": false
        }
    };
