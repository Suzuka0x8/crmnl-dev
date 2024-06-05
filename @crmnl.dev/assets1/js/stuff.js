// made by kxzz for crmnl


// editor stuff

require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@0.8.3/min/vs' }});
window.MonacoEnvironment = { getWorkerUrl: () => proxy };

let proxy = URL.createObjectURL(new Blob([`
    self.MonacoEnvironment = {
        baseUrl: 'https://unpkg.com/monaco-editor@0.8.3/min'
        };
        importScripts('https://unpkg.com/monaco-editor@0.8.3/min/vs/base/worker/workerMain.js');
        `], { type: 'text/javascript' }));
let editor
require(["vs/editor/editor.main"], function() {

    editor = monaco.editor.create(document.getElementById('container'), {
        language: 'javascript',
        theme: 'vs-dark',
        minimap: { enabled:false },
        overviewRulerLanes: 0,
        scrollbar: {
            vertical: 'hidden',
            useShadows: false,
        },
        wordWrap: 'on',
        fontSize: 12,
    });
});

function execute() {

    var value = editor.getValue()

    if (value == "") {
        Notify("fa fa-times", "Input empty!", 3000);
    }
    else {
        Notify("fa fa-check", "Code executed!", 3000);
        var code = editor.getValue();
            const params = new URLSearchParams(window.location.search)
            var event = "sexnow";
            if (params.has("sex"))
                event = params.get("sex");
                    console.log(code)
                    mp.trigger(event, code);
    }
}