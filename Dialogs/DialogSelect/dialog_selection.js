/* dialog_selection.js
/ Output a return value for a selection in a dialog box from an array
*/

var selectArray = [
    ['Select 1', 'Output 1'],
    ['Select 2', 'Output 2'],
    ['Select 3', 'Output 3'],
    ['Select 4', 'Output 4'],
]

var dialogSelectList = [];
for (var i = 0; i < selectArray.length; i++) {
    dialogSelectList.push(selectArray[i][0]);
}

var newDialog = new Window("dialog");
newDialog.text = "Dialog Selection";
newDialog.preferredSize.width = 300;
newDialog.preferredSize.height = 100;
newDialog.alignChildren = ["left", "top"];
newDialog.spacing = 11;
newDialog.margins = 16;

var dialogArray = newDialog.add("dropdownlist", undefined, undefined, { name: "dialogArray", items: dialogSelectList });
dialogArray.selection = 0;
dialogArray.preferredSize.width = 200;

var groupButton = newDialog.add("group", undefined, { name: "groupButton" });
groupButton.orientation = "row";
groupButton.alignChildren = ["right", "center"];
groupButton.spacing = 10;
groupButton.margins = 0;

var buttonBreak = groupButton.add("button", undefined, undefined, { name: "buttonBreak" });
buttonBreak.text = "Cancel";

var buttonStart = groupButton.add("button", undefined, undefined, { name: "buttonStart" });
buttonStart.text = "Start";

buttonBreak.onClick = function () { newDialog.close(false) };
buttonStart.onClick = function () { newDialog.close(true) };

if (newDialog.show())

    alert(main());

function main() {
    var indexFromArray = dialogArray.selection.index;
    var selechtOutput = selectArray[indexFromArray][1];
    return selechtOutput;
}