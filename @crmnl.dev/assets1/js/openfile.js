// made by kxzz for crmnl

document.getElementById('file-input').addEventListener('input', function () {
    var gay = document.getElementById('file-input');
    var fr = new FileReader();
    fr.onload = function () {
        var text = "";
        text = fr.result;
        // get cursor
        var line = editor.getPosition();
        var range = new monaco.Range(line.lineNumber, 1, line.lineNumber, 1);
        var id = { major: 1, minor: 1 };
        // insert
        var op = { identifier: id, range: range, text: text, forceMoveMarkers: true };

        var gaypath = gay.value;
        var allowedExtensions = /(\.gg|\.js)$/i;
        // file check
        if (!allowedExtensions.exec(gaypath)) {
            Notify("fa fa-times", "Invalid file type!", 3000);
            gay.value = null;
            return false;
        }
        else {
            editor.executeEdits("my-source", [op]);
            Notify("fa fa-check", "File inserted!", 3000);
            gay.value = null;
        }
    }

    fr.readAsText(this.files[0]);
})