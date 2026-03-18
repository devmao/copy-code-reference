import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('copyCodeReference.copy', () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showWarningMessage('No active editor.');
        return;
      }

      const doc = editor.document;
      const filePath = vscode.workspace.workspaceFolders?.length
        ? vscode.workspace.asRelativePath(doc.uri)
        : doc.fileName;

      const selection = editor.selection;
      const startLine = selection.start.line + 1;
      let endLine = selection.end.line + 1;
      if (selection.end.character === 0 && endLine > startLine) {
        endLine--;
      }
      const range =
        startLine === endLine ? `${startLine}` : `${startLine}-${endLine}`;

      const reference = `${filePath}:${range}`;
      vscode.env.clipboard.writeText(reference).then(
        () => vscode.window.showInformationMessage(`Copied: ${reference}`),
        () => vscode.window.showErrorMessage('Failed to copy to clipboard.')
      );
    })
  );
}

export function deactivate() {}
