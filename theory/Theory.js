import { ExponentialCost, FirstFreeCost, LinearCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";

var id = "theory";
var name = "My Theory";
var description = "wowoow";
var authors = "Throngjwk";
var version = 1;

var currency;
var equaltion_number = 0;

var currencys = new Array(6);
var currencies_names = ["a", "b", "d", "g_1", "g_2", "g_3"];

var init = () => {
    var popup = ui.createPopup({
        title: "My Popup",
        content: ui.createStackLayout({
            children: [
                ui.createLabel({
                    text: "Check?",
                    fontSize: 20,
                    horizontalTextAlignment: TextAlignment.CENTER,
                }),
                ui.createCheckBox(),
                ui.createLabel({
                    text: "Settings",
                    fontSize: 20,
                    horizontalTextAlignment: TextAlignment.CENTER,
                }),
                ui.createGrid({
                    columnDefinitions: ["20*", "30*", "auto"],
                    children: [
                        ui.createButton({text: "Getting started", row: 0, column: 0}),
                        ui.createButton({text: "Perk", row: 0, column: 1}),
                        ui.createButton({text: "Coming soon.", row: 0, column: 2, padding: new Thickness(0)})
                    ]
                }),
                ui.createLabel({
                    text: "Equaltions",
                    fontSize: 20,
                    horizontalTextAlignment: TextAlignment.CENTER,
                }),
                ui.createGrid({
                    columnDefinitions: ["20*", "30*", "auto"],
                    children: [
                        ui.createButton({text: "Rho Equaltion", row: 0, column: 0, onClicked:() => equaltion_number = 0}),
                        ui.createButton({text: "a Equaltion", row: 0, column: 1, onClicked:() => equaltion_number = 1}),
                        ui.createButton({text: "Coming soon.", row: 0, column: 2, padding: new Thickness(0)})
                    ]
                }),
                ui.createLabel({
                    text: "Theory v1.0.0",
                    fontSize: 17,
                    horizontalTextAlignment: TextAlignment.CENTER,
                }),
                ui.createButton({text: "Close", onClicked: () => popup.hide()})
            ]
        })
    });
}

var getQuaternaryEntries = () => {
    if (quaternaryEntries.length == 0)
    {
        quaternaryEntries.push(new QuaternaryEntry("_{a}", null));
        quaternaryEntries.push(new QuaternaryEntry("_{b}", null));
        quaternaryEntries.push(new QuaternaryEntry("_{d}", null));
        quaternaryEntries.push(new QuaternaryEntry("_{g_1}", null));
        quaternaryEntries.push(new QuaternaryEntry("_{g_2}", null));
        quaternaryEntries.push(new QuaternaryEntry("_{g_3}", null));
    }
    for (let i = 0; i < 7; ++i) {
        quaternaryEntries[i].value = currencys[i].value;
    }
    return quaternaryEntries;
}

init();