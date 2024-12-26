(
  function() {
    const vscode = acquireVSCodeApi();
    const button = document.getElementById("button");
    button.innerText = "hello from javascript";
  }
)();