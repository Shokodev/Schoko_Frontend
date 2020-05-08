<template>
<div class="bacnetview">
  <h1 class="subheading grey--text">BACnet Sicht</h1>
  <v-card
    class="mx-auto"
  >
    <v-card-text>
      <v-treeview
        :items="items"
        item-text=objectName
        shaped
        hoverable
      >
      </v-treeview>
    </v-card-text>
  </v-card>
</div>
</template>


<script>
import axios from 'axios';
import { mapGetters } from "vuex";

export default {
  name: "BacnetView",
  data() {
    return {
      siteName: "Site01",
      bacnetNode: "",
      nodeChildren: [],
      nodeParent: [],
      activeNode: "",
      httpResp: {},
      items: [{
      objectName: "B01",
      objectIdentifier: "Structure Element",
      description: "Logistik Delta",
      deviceInstanceNumber: null,
      children: [
          {
              objectName: "GA01",
              objectIdentifier: "Structure Element",
              description: "SGK GA01",
              deviceInstanceNumber: null,
              children: [
                  {
                      objectName: "E99",
                      objectIdentifier: "Structure Element",
                      description: "Allgemeine Funktionen SGK",
                      deviceInstanceNumber: null,
                      children: [
                          {
                              objectName: "DlyOff.TiMod",
                              objectIdentifier: "multi-state-value",
                              description: "Timer-Modus",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "DlyOff.Out",
                              objectIdentifier: "binary-value",
                              description: "Ausgang",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "Imp.TiMod",
                              objectIdentifier: "multi-state-value",
                              description: "Timer-Modus",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "Imp.In",
                              objectIdentifier: "binary-value",
                              description: "Eingang",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "AsSta.DsavSta",
                              objectIdentifier: "binary-value",
                              description: "Sommerzeit-Status",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "ResetG",
                              objectIdentifier: "binary-input",
                              description: "Rücksetztaste Gebäude",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "AlmDisL",
                              objectIdentifier: "binary-value",
                              description: "Alarmunterdrückung lokale AS",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "AsSta",
                              objectIdentifier: "Structure Element",
                              description: "Automationsstation-Zustand",
                              deviceInstanceNumber: null,
                              children: []
                          },
                          {
                              objectName: "ResetBtn",
                              objectIdentifier: "binary-input",
                              description: "Rücksetztaste",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "AlmP2e",
                              objectIdentifier: "binary-output",
                              description: "Alarm Prio 2 extern",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "DlyOn1",
                              objectIdentifier: "Structure Element",
                              description: "Einschaltverzögerung 1",
                              deviceInstanceNumber: null,
                              children: []
                          },
                          {
                              objectName: "AlmP1e",
                              objectIdentifier: "binary-output",
                              description: "Alarm Prio 1 extern",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "DlyOff",
                              objectIdentifier: "Structure Element",
                              description: "Ausschaltverzögerung",
                              deviceInstanceNumber: null,
                              children: []
                          },
                          {
                              objectName: "DlyOff.Reset",
                              objectIdentifier: "binary-value",
                              description: "Zurücksetzen",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "DlyOn1.TiMod",
                              objectIdentifier: "multi-state-value",
                              description: "Timer-Modus",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "Imp.Reset",
                              objectIdentifier: "binary-value",
                              description: "Zurücksetzen",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "ErAs",
                              objectIdentifier: "binary-value",
                              description: "Statuswarnung AS-STA",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "LmpA11",
                              objectIdentifier: "binary-output",
                              description: "Lampe Alarm Prio 1",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "DlyOff.In",
                              objectIdentifier: "binary-value",
                              description: "Eingang",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "EmO",
                              objectIdentifier: "binary-value",
                              description: "Notbedienung",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "DlyOn1.Out",
                              objectIdentifier: "binary-value",
                              description: "Ausgang",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "AlmRBtn",
                              objectIdentifier: "binary-value",
                              description: "Alarme quit/reset",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "Imp",
                              objectIdentifier: "Structure Element",
                              description: "Impuls",
                              deviceInstanceNumber: null,
                              children: []
                          },
                          {
                              objectName: "DlyOn1.Reset",
                              objectIdentifier: "binary-value",
                              description: "Zurücksetzen",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "DlyOn1.In",
                              objectIdentifier: "binary-value",
                              description: "Eingang",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "Imp.Out",
                              objectIdentifier: "binary-value",
                              description: "Ausgang",
                              deviceInstanceNumber: 2098177,
                              children: []
                          }
                      ]
                  },
                  {
                      objectName: "L01",
                      objectIdentifier: "Structure Element",
                      description: "Lüftung Gebindewaschanlage",
                      deviceInstanceNumber: null,
                      children: [
                          {
                              objectName: "Erc",
                              objectIdentifier: "Structure Element",
                              description: "Energierückgewinnung",
                              deviceInstanceNumber: null,
                              children: [
                                  {
                                      objectName: "CmdVal",
                                      objectIdentifier: "binary-value",
                                      description: "Befehlswert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "Pu",
                                      objectIdentifier: "Structure Element",
                                      description: "Pumpe",
                                      deviceInstanceNumber: null,
                                      children: [
                                          {
                                              objectName: "Mdlt",
                                              objectIdentifier: "analog-output",
                                              description: "Stetige Ansteuerung",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "KickFnct.Reset",
                                              objectIdentifier: "binary-value",
                                              description: "Zurücksetzen",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "Er",
                                              objectIdentifier: "binary-input",
                                              description: "Fehler",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "ThOvrld",
                                              objectIdentifier: "binary-input",
                                              description: "Thermoelektrische Überlast",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "KickFnct.Out",
                                              objectIdentifier: "binary-value",
                                              description: "Ausgang",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "Cmd",
                                              objectIdentifier: "binary-output",
                                              description: "Befehl",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "KickFnct",
                                              objectIdentifier: "Structure Element",
                                              description: "Periodischer Pumpenlauf",
                                              deviceInstanceNumber: null,
                                              children: []
                                          },
                                          {
                                              objectName: "KickFnct.OpSta",
                                              objectIdentifier: "binary-value",
                                              description: "Betriebszustand",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "KickFnct.EnFnct",
                                              objectIdentifier: "binary-value",
                                              description: "Freigabe Funktion",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          }
                                      ]
                                  },
                                  {
                                      objectName: "TCtr",
                                      objectIdentifier: "loop",
                                      description: "Temperaturregler",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "Vlv",
                                      objectIdentifier: "analog-output",
                                      description: "Ventil",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  }
                              ]
                          },
                          {
                              objectName: "TCtl",
                              objectIdentifier: "Structure Element",
                              description: "Temperaturregelung",
                              deviceInstanceNumber: null,
                              children: [
                                  {
                                      objectName: "SpField.SpRH",
                                      objectIdentifier: "analog-value",
                                      description: "Raumsollwert für Heizen",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TCasCtr",
                                      objectIdentifier: "Structure Element",
                                      description: "Temperatur-Kaskadenregler",
                                      deviceInstanceNumber: null,
                                      children: []
                                  },
                                  {
                                      objectName: "TCasCtr.Gain",
                                      objectIdentifier: "analog-value",
                                      description: "Verstärkung",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SpField.SwCmp",
                                      objectIdentifier: "binary-value",
                                      description: "Sommer/Winter-Komp.",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.Out",
                                      objectIdentifier: "analog-value",
                                      description: "Ausgang",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.Y10",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y10",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SpField.HuRelR",
                                      objectIdentifier: "analog-value",
                                      description: "Relative Raumfeuchte",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TCasCtr.SpMaxSu",
                                      objectIdentifier: "analog-value",
                                      description: "Maximaler Zuluftsollwert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TCasCtr.SpLoR",
                                      objectIdentifier: "analog-value",
                                      description: "Unterer Raumsollwert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SpField.SpRHuAbs",
                                      objectIdentifier: "analog-value",
                                      description: "Raumsollwert abs.Feuchte",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SpField.SpHiTR",
                                      objectIdentifier: "analog-value",
                                      description: "Oberer Raumtemp.-Sollwert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SpField.SpLoTR",
                                      objectIdentifier: "analog-value",
                                      description: "Unterer Raumtemp.-Sollwert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TCasCtr.SpHiR",
                                      objectIdentifier: "analog-value",
                                      description: "Oberer Raumsollwert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TCasCtr.EnFnct",
                                      objectIdentifier: "binary-value",
                                      description: "Freigabe Funktion",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TCasCtr.SpMinSu",
                                      objectIdentifier: "analog-value",
                                      description: "Minimaler Zuluftsollwert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH",
                                      objectIdentifier: "Structure Element",
                                      description: "Sommer/Winter-Komp.Heizen",
                                      deviceInstanceNumber: null,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.Y10",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y10",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.X9",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X9",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TCasCtr.SpHiSu",
                                      objectIdentifier: "analog-value",
                                      description: "Oberer Zuluftsollwert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TCasCtr.CtrSta",
                                      objectIdentifier: "multi-state-value",
                                      description: "Reglerzustand",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TCasCtr.SpLoSu",
                                      objectIdentifier: "analog-value",
                                      description: "Unterer Zuluftsollwert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.X1",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X1",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.Y9",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y9",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.X2",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X2",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.X3",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X3",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.Y7",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y7",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.X4",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X4",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.Y8",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y8",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.X5",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X5",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.X6",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X6",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.X7",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X7",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.X8",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X8",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.Y1",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y1",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.Y2",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y2",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.Y5",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y5",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.Y6",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y6",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.Y3",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y3",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SpField.SpRDhu",
                                      objectIdentifier: "analog-value",
                                      description: "Raumsollwert Entfeuchten",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.Y4",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y4",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SpField.DSpC",
                                      objectIdentifier: "analog-value",
                                      description: "Delta Kühlsollwert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SpField.DSpH",
                                      objectIdentifier: "analog-value",
                                      description: "Delta Heizsollwert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.Y2",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y2",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.Y3",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y3",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.Y4",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y4",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.Y5",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y5",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.Y6",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y6",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.Y7",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y7",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.Y8",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y8",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.Y9",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y9",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TCasCtr.SelSpErc",
                                      objectIdentifier: "binary-value",
                                      description: "Sollwertwahl ERG",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.Y1",
                                      objectIdentifier: "analog-value",
                                      description: "Stützwert Y1",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SpField",
                                      objectIdentifier: "Structure Element",
                                      description: "Sollwertfeld",
                                      deviceInstanceNumber: null,
                                      children: []
                                  },
                                  {
                                      objectName: "TCasCtr.OoServ",
                                      objectIdentifier: "binary-value",
                                      description: "Ausser Betrieb",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SpField.AP",
                                      objectIdentifier: "analog-value",
                                      description: "Luftdruck",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.In",
                                      objectIdentifier: "analog-value",
                                      description: "Eingang",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.Out",
                                      objectIdentifier: "analog-value",
                                      description: "Ausgang",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SpField.SpLoHuR",
                                      objectIdentifier: "analog-value",
                                      description: "Unterer Sollw.Raumfeuchte",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "CmdVal",
                                      objectIdentifier: "binary-value",
                                      description: "Befehlswert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.In",
                                      objectIdentifier: "analog-value",
                                      description: "Eingang",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TCasCtr.SpErcSu",
                                      objectIdentifier: "analog-value",
                                      description: "Zuluftsollwert ERG",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC",
                                      objectIdentifier: "Structure Element",
                                      description: "Sommer/Winter-Komp.Kühlen",
                                      deviceInstanceNumber: null,
                                      children: []
                                  },
                                  {
                                      objectName: "SpField.SpRHu",
                                      objectIdentifier: "analog-value",
                                      description: "Raumsollwert Befeuchten",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.X10",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X10",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpC.X10",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X10",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SpField.SpHiHuR",
                                      objectIdentifier: "analog-value",
                                      description: "Oberer Raumfeuchte-Sollw.",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TCasCtr.XctrSu",
                                      objectIdentifier: "analog-value",
                                      description: "Reglereingang Zuluft",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SpField.TR",
                                      objectIdentifier: "analog-value",
                                      description: "Raumtemperatur",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SpField.SpRC",
                                      objectIdentifier: "analog-value",
                                      description: "Raumsollwert für Kühlen",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.X8",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X8",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.X9",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X9",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.X6",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X6",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TCasCtr.XctrR",
                                      objectIdentifier: "analog-value",
                                      description: "Reglereingang Raum",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.X7",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X7",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TCasCtr.DefVal",
                                      objectIdentifier: "analog-value",
                                      description: "Vorgabewert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.X1",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X1",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.X4",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X4",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.X5",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X5",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.X2",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X2",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SwCmpH.X3",
                                      objectIdentifier: "analog-value",
                                      description: "Stützstelle X3",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  }
                              ]
                          },
                          {
                              objectName: "FdmpSu",
                              objectIdentifier: "Structure Element",
                              description: "Zuluftbrandschutzklappe",
                              deviceInstanceNumber: null,
                              children: [
                                  {
                                      objectName: "Cmd",
                                      objectIdentifier: "binary-output",
                                      description: "Befehl",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "FbMon01",
                                      objectIdentifier: "Structure Element",
                                      description: "Stellung",
                                      deviceInstanceNumber: null,
                                      children: [
                                          {
                                              objectName: "FbPos",
                                              objectIdentifier: "binary-value",
                                              description: "Rückmeldung Position",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          }
                                      ]
                                  },
                                  {
                                      objectName: "AlmBk",
                                      objectIdentifier: "binary-value",
                                      description: "Zu viele BSK zu",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "CmdVal",
                                      objectIdentifier: "binary-value",
                                      description: "Befehlswert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SpBkO",
                                      objectIdentifier: "multi-state-value",
                                      description: "SW Anz.Bsk Offen für Anl Ein",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "SpBk",
                                      objectIdentifier: "multi-state-value",
                                      description: "SW Anz.Bsk Zu für Anl Aus",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "AlmBkh",
                                      objectIdentifier: "binary-value",
                                      description: "Hauptkanal Bsk Zu",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  }
                              ]
                          },
                          {
                              objectName: "FanEx",
                              objectIdentifier: "Structure Element",
                              description: "Abluftventilator",
                              deviceInstanceNumber: null,
                              children: [
                                  {
                                      objectName: "Er",
                                      objectIdentifier: "binary-input",
                                      description: "Fehler",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "Cmd",
                                      objectIdentifier: "binary-output",
                                      description: "Befehl",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "Sp",
                                      objectIdentifier: "analog-value",
                                      description: "Sollwert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "DP",
                                      objectIdentifier: "analog-input",
                                      description: "Differenzdruckfühler",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "DPFan",
                                      objectIdentifier: "analog-input",
                                      description: "Diff. Druck über Ventilator",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "PCtr",
                                      objectIdentifier: "loop",
                                      description: "Druckregler",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "Mdlt",
                                      objectIdentifier: "analog-output",
                                      description: "Stetige Ansteuerung",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "MntnSwi",
                                      objectIdentifier: "binary-input",
                                      description: "Wartungsschalter",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "LmCtr",
                                      objectIdentifier: "loop",
                                      description: "Begrenzungsregler",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "Airvolc",
                                      objectIdentifier: "Structure Element",
                                      description: "Luftmengenberech.",
                                      deviceInstanceNumber: null,
                                      children: [
                                          {
                                              objectName: "FacK",
                                              objectIdentifier: "analog-value",
                                              description: "Faktor",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "Vlms",
                                              objectIdentifier: "analog-value",
                                              description: "Volumenstrom",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          }
                                      ]
                                  },
                                  {
                                      objectName: "ThOvrld",
                                      objectIdentifier: "binary-input",
                                      description: "Thermoelektrische Überlast",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "PMaxMon",
                                      objectIdentifier: "binary-input",
                                      description: "Maximaldruckwächter",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  }
                              ]
                          },
                          {
                              objectName: "HysMxeCho.EnFnct",
                              objectIdentifier: "binary-value",
                              description: "Freigabe Funktion",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "Ccl",
                              objectIdentifier: "Structure Element",
                              description: "Luftkühler",
                              deviceInstanceNumber: null,
                              children: [
                                  {
                                      objectName: "TCtr",
                                      objectIdentifier: "loop",
                                      description: "Temperaturregler",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TrndTFl",
                                      objectIdentifier: "trend-log",
                                      description: "Trend",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "Vlv",
                                      objectIdentifier: "analog-output",
                                      description: "Ventil",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TFl",
                                      objectIdentifier: "analog-input",
                                      description: "Vorlauftemperatur",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "CmdVal",
                                      objectIdentifier: "binary-value",
                                      description: "Befehlswert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TRt",
                                      objectIdentifier: "analog-input",
                                      description: "Rücklauftemperatur",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  }
                              ]
                          },
                          {
                              objectName: "DmpSfOa",
                              objectIdentifier: "Structure Element",
                              description: "Absperrklappe Aussenluft",
                              deviceInstanceNumber: null,
                              children: [
                                  {
                                      objectName: "CmdVal",
                                      objectIdentifier: "binary-value",
                                      description: "Befehlswert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "FbMon",
                                      objectIdentifier: "Structure Element",
                                      description: "Stellung",
                                      deviceInstanceNumber: null,
                                      children: [
                                          {
                                              objectName: "FbPos",
                                              objectIdentifier: "multi-state-input",
                                              description: "Rückmeldung Position",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "AlmNc",
                                              objectIdentifier: "binary-value",
                                              description: "Klappe nicht geschlossen",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "AlmNo",
                                              objectIdentifier: "binary-value",
                                              description: "Klappe nicht offen",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          }
                                      ]
                                  },
                                  {
                                      objectName: "Cmd",
                                      objectIdentifier: "binary-output",
                                      description: "Befehl",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  }
                              ]
                          },
                          {
                              objectName: "TEx",
                              objectIdentifier: "analog-input",
                              description: "Ablufttemperatur",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "HysMxeCho.Out",
                              objectIdentifier: "binary-value",
                              description: "Ausgang",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "SupvMon",
                              objectIdentifier: "Structure Element",
                              description: "Supervision Monitor",
                              deviceInstanceNumber: null,
                              children: [
                                  {
                                      objectName: "SupvPlt",
                                      objectIdentifier: "binary-value",
                                      description: "Überwachung Anlagensteuerung",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  }
                              ]
                          },
                          {
                              objectName: "FanSu",
                              objectIdentifier: "Structure Element",
                              description: "Zuluftventilator",
                              deviceInstanceNumber: null,
                              children: [
                                  {
                                      objectName: "DPFan",
                                      objectIdentifier: "analog-input",
                                      description: "Diff. Druck über Ventilator",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "Cmd",
                                      objectIdentifier: "binary-output",
                                      description: "Befehl",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "Airvolc",
                                      objectIdentifier: "Structure Element",
                                      description: "Luftmengenberech.",
                                      deviceInstanceNumber: null,
                                      children: [
                                          {
                                              objectName: "Vlms",
                                              objectIdentifier: "analog-value",
                                              description: "Volumenstrom",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "FacK",
                                              objectIdentifier: "analog-value",
                                              description: "Faktor",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          }
                                      ]
                                  },
                                  {
                                      objectName: "MntnSwi",
                                      objectIdentifier: "binary-input",
                                      description: "Wartungsschalter",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "LmCtr",
                                      objectIdentifier: "loop",
                                      description: "Begrenzungsregler",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "DP",
                                      objectIdentifier: "analog-input",
                                      description: "Differenzdruckfühler",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "PCtr",
                                      objectIdentifier: "loop",
                                      description: "Druckregler",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "PMaxMon",
                                      objectIdentifier: "binary-input",
                                      description: "Maximaldruckwächter",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "Er",
                                      objectIdentifier: "binary-input",
                                      description: "Fehler",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "ThOvrld",
                                      objectIdentifier: "binary-input",
                                      description: "Thermoelektrische Überlast",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "Mdlt",
                                      objectIdentifier: "analog-output",
                                      description: "Stetige Ansteuerung",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "Sp",
                                      objectIdentifier: "analog-value",
                                      description: "Sollwert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  }
                              ]
                          },
                          {
                              objectName: "EmO",
                              objectIdentifier: "binary-value",
                              description: "Notbedienung",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "TrndPlt",
                              objectIdentifier: "trend-log",
                              description: "Trend",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "TrndTSu",
                              objectIdentifier: "trend-log",
                              description: "Trend",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "TOaWs",
                              objectIdentifier: "analog-input",
                              description: "Aussentemp. Wetterstation",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "PreHcl",
                              objectIdentifier: "Structure Element",
                              description: "Vorerwärmer",
                              deviceInstanceNumber: null,
                              children: [
                                  {
                                      objectName: "Vlv",
                                      objectIdentifier: "analog-output",
                                      description: "Ventil",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "Pu",
                                      objectIdentifier: "Structure Element",
                                      description: "Pumpe",
                                      deviceInstanceNumber: null,
                                      children: [
                                          {
                                              objectName: "KickFnct.OpSta",
                                              objectIdentifier: "binary-value",
                                              description: "Betriebszustand",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "ThOvrld",
                                              objectIdentifier: "binary-input",
                                              description: "Thermoelektrische Überlast",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "KickFnct.Out",
                                              objectIdentifier: "binary-value",
                                              description: "Ausgang",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "KickFnct",
                                              objectIdentifier: "Structure Element",
                                              description: "Periodischer Pumpenlauf",
                                              deviceInstanceNumber: null,
                                              children: []
                                          },
                                          {
                                              objectName: "KickFnct.Reset",
                                              objectIdentifier: "binary-value",
                                              description: "Zurücksetzen",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "KickFnct.EnFnct",
                                              objectIdentifier: "binary-value",
                                              description: "Freigabe Funktion",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "Cmd",
                                              objectIdentifier: "binary-output",
                                              description: "Befehl",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          }
                                      ]
                                  },
                                  {
                                      objectName: "FrPrtMon",
                                      objectIdentifier: "binary-input",
                                      description: "Frostschutzwächter",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "TCtr",
                                      objectIdentifier: "loop",
                                      description: "Temperaturregler",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "CmdVal",
                                      objectIdentifier: "binary-value",
                                      description: "Befehlswert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  }
                              ]
                          },
                          {
                              objectName: "DmpSfEh",
                              objectIdentifier: "Structure Element",
                              description: "Absperrklappe Fortluft",
                              deviceInstanceNumber: null,
                              children: [
                                  {
                                      objectName: "FbMon",
                                      objectIdentifier: "Structure Element",
                                      description: "Stellung",
                                      deviceInstanceNumber: null,
                                      children: [
                                          {
                                              objectName: "FbPos",
                                              objectIdentifier: "multi-state-input",
                                              description: "Rückmeldung Position",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "AlmNo",
                                              objectIdentifier: "binary-value",
                                              description: "Klappe nicht offen",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          },
                                          {
                                              objectName: "AlmNc",
                                              objectIdentifier: "binary-value",
                                              description: "Klappe nicht geschlossen",
                                              deviceInstanceNumber: 2098177,
                                              children: []
                                          }
                                      ]
                                  },
                                  {
                                      objectName: "Cmd",
                                      objectIdentifier: "binary-output",
                                      description: "Befehl",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  },
                                  {
                                      objectName: "CmdVal",
                                      objectIdentifier: "binary-value",
                                      description: "Befehlswert",
                                      deviceInstanceNumber: 2098177,
                                      children: []
                                  }
                              ]
                          },
                          {
                              objectName: "HysMxeCho.SwiOnPt",
                              objectIdentifier: "analog-value",
                              description: "Einschaltpunkt",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "TSu",
                              objectIdentifier: "analog-input",
                              description: "Zulufttemperatur",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "HysMxeCho.Hys",
                              objectIdentifier: "analog-value",
                              description: "Hysterese",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "Sched",
                              objectIdentifier: "schedule",
                              description: "Zeitprogramm",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "CDmd",
                              objectIdentifier: "binary-value",
                              description: "Kühlbedarf",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "TrndRsnP",
                              objectIdentifier: "trend-log",
                              description: "Trend",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "RsnPrOpM",
                              objectIdentifier: "multi-state-value",
                              description: "Grund für akt.Betriebsart",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "AlmDisL",
                              objectIdentifier: "binary-value",
                              description: "Alarmunterdrückung lokale AS",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "FireDet",
                              objectIdentifier: "binary-input",
                              description: "Brandmelder",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "HDmd",
                              objectIdentifier: "binary-value",
                              description: "Wärmebedarf",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "2",
                              objectIdentifier: "analog-value",
                              description: "Analoger Wert",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "HysMxeCho",
                              objectIdentifier: "Structure Element",
                              description: "Hys.Max.-Eco.Umschaltung",
                              deviceInstanceNumber: null,
                              children: []
                          },
                          {
                              objectName: "SpC",
                              objectIdentifier: "analog-value",
                              description: "Kühlsollwert",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "SpH",
                              objectIdentifier: "analog-value",
                              description: "Heizsollwert",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "1",
                              objectIdentifier: "binary-value",
                              description: "Binärer Wert",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "HysMxeCho.Actg",
                              objectIdentifier: "binary-value",
                              description: "Wirksinn",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "TrndTEx",
                              objectIdentifier: "trend-log",
                              description: "Trend",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "HysMxeCho.ShftOnPt",
                              objectIdentifier: "analog-value",
                              description: "Einschaltpkt'verschiebung",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "PrOpMod",
                              objectIdentifier: "multi-state-value",
                              description: "Aktuelle Betriebsart",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "HysMxeCho.In",
                              objectIdentifier: "analog-value",
                              description: "Eingang",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "OpModMan",
                              objectIdentifier: "multi-state-value",
                              description: "Manuelle Betriebsart",
                              deviceInstanceNumber: 2098177,
                              children: []
                          }
                      ]
                  }
              ]
          },
          {
              objectName: "GA02",
              objectIdentifier: "Structure Element",
              description: "SGK GA02",
              deviceInstanceNumber: null,
              children: [
                  {
                      objectName: "E99",
                      objectIdentifier: "Structure Element",
                      description: "Allgemeine Funktionen SGK",
                      deviceInstanceNumber: null,
                      children: [
                          {
                              objectName: "AsSta",
                              objectIdentifier: "Structure Element",
                              description: "Automationsstation-Zustand",
                              deviceInstanceNumber: null,
                              children: []
                          },
                          {
                              objectName: "ErAs",
                              objectIdentifier: "binary-value",
                              description: "Statuswarnung AS-STA",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "Imp",
                              objectIdentifier: "Structure Element",
                              description: "Impuls",
                              deviceInstanceNumber: null,
                              children: []
                          },
                          {
                              objectName: "AsSta.DsavSta",
                              objectIdentifier: "binary-value",
                              description: "Sommerzeit-Status",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "DlyOn1.Reset",
                              objectIdentifier: "binary-value",
                              description: "Zurücksetzen",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "Imp.TiMod",
                              objectIdentifier: "multi-state-value",
                              description: "Timer-Modus",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "Imp.In",
                              objectIdentifier: "binary-value",
                              description: "Eingang",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "Imp.Reset",
                              objectIdentifier: "binary-value",
                              description: "Zurücksetzen",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "AlmRBtn",
                              objectIdentifier: "binary-value",
                              description: "Alarme quit/reset",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "EmO",
                              objectIdentifier: "binary-value",
                              description: "Notbedienung",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "DlyOff.Reset",
                              objectIdentifier: "binary-value",
                              description: "Zurücksetzen",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "Imp.Out",
                              objectIdentifier: "binary-value",
                              description: "Ausgang",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "DlyOff.In",
                              objectIdentifier: "binary-value",
                              description: "Eingang",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "DlyOn1.In",
                              objectIdentifier: "binary-value",
                              description: "Eingang",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "LmpA11",
                              objectIdentifier: "binary-output",
                              description: "Lampe Alarm Prio 1",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "ResetG",
                              objectIdentifier: "binary-input",
                              description: "Rücksetztaste Gebäude",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "DlyOff",
                              objectIdentifier: "Structure Element",
                              description: "Ausschaltverzögerung",
                              deviceInstanceNumber: null,
                              children: []
                          },
                          {
                              objectName: "ResetBtn",
                              objectIdentifier: "binary-input",
                              description: "Rücksetztaste",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "AlmDisL",
                              objectIdentifier: "binary-value",
                              description: "Alarmunterdrückung lokale AS",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "DlyOn1.Out",
                              objectIdentifier: "binary-value",
                              description: "Ausgang",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "DlyOff.Out",
                              objectIdentifier: "binary-value",
                              description: "Ausgang",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "AlmP1e",
                              objectIdentifier: "binary-output",
                              description: "Alarm Prio 1 extern",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "DlyOn1.TiMod",
                              objectIdentifier: "multi-state-value",
                              description: "Timer-Modus",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "DlyOff.TiMod",
                              objectIdentifier: "multi-state-value",
                              description: "Timer-Modus",
                              deviceInstanceNumber: 2098177,
                              children: []
                          },
                          {
                              objectName: "DlyOn1",
                              objectIdentifier: "Structure Element",
                              description: "Einschaltverzögerung 1",
                              deviceInstanceNumber: null,
                              children: []
                          },
                          {
                              objectName: "AlmP2e",
                              objectIdentifier: "binary-output",
                              description: "Alarm Prio 2 extern",
                              deviceInstanceNumber: 2098177,
                              children: []
                          }
                      ]
                  },
                  {
                      objectName: "S01",
                      objectIdentifier: "Structure Element",
                      description: "Sanitäralarme",
                      deviceInstanceNumber: null,
                      children: [
                          {
                              objectName: "CmnAlm01",
                              objectIdentifier: "binary-input",
                              description: "Sammelalarm Sumpfpumpe",
                              deviceInstanceNumber: 2098177,
                              children: []
                          }
                      ]
                  },
                  {
                      objectName: "E01",
                      objectIdentifier: "Structure Element",
                      description: "Elektroalarme",
                      deviceInstanceNumber: null,
                      children: [
                          {
                              objectName: "CmnAlm01",
                              objectIdentifier: "binary-input",
                              description: "Sammelalarm Warenlift",
                              deviceInstanceNumber: 2098177,
                              children: []
                          }
                      ]
                  }
              ]
          },
          {
              objectName: "1",
              objectIdentifier: "binary-value",
              description: "Binärer Wert",
              deviceInstanceNumber: 2098177,
              children: []
          },
          {
              objectName: "VlvTCtl10",
              objectIdentifier: "Structure Element",
              description: "Mischventil 10, Temp'regelung",
              deviceInstanceNumber: null,
              children: [
                  {
                      objectName: "TCtr",
                      objectIdentifier: "loop",
                      description: "Temperaturregler",
                      deviceInstanceNumber: 2098177,
                      children: []
                  },
                  {
                      objectName: "T",
                      objectIdentifier: "analog-input",
                      description: "Temperatur",
                      deviceInstanceNumber: 2098177,
                      children: []
                  },
                  {
                      objectName: "Vlv",
                      objectIdentifier: "analog-output",
                      description: "Ventil",
                      deviceInstanceNumber: 2098177,
                      children: []
                  }
              ]
          }
      ]
  }],
  open: [1, 2],
  search: null,
  caseSensitive: false,
    }
  },

  mounted() {

  },

  methods: {
     loadSite: async function() {
      let siteNode = await this.httpReq("Site01")
      this.nodeChildren = siteNode.data.children
        console.log(this.nodeChildren)
      },
    loadChildren: function(child) {
      this.nodeParent = child; // Does not work..
      this.nodeChildren = child.children;
      console.log(child.children)
    },
    loadParent: function() {
      console.log(this.nodeParent)
      this.nodeChildren = this.nodeParent.children;
      console.log(this.nodeChildren)
    },
    httpReq : async(path) => {
      return axios.get("http://localhost:8098/structure/" + path)
    }
  },
  computed: {
    filter () {
    return this.caseSensitive
      ? (item, search, textKey) => item[textKey].indexOf(search) > -1
      : undefined
  },
    ...mapGetters(["getBacnetObject"])
  },

}
</script>

<style >

</style>
