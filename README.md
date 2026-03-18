# Copy Code Reference

VS Code extension that copies a reference to the current file and selected line range to the clipboard.

**Output format:** `path/to/file.ts:96-101` (or `path/to/file.ts:96` when a single line is selected)

## Default shortcut

| OS | Shortcut |
|----|----------|
| macOS | `Cmd+Alt+C` |
| Windows / Linux | `Ctrl+Alt+C` |

To change the shortcut, open **Preferences > Keyboard Shortcuts** (`Cmd+K Cmd+S` on macOS, `Ctrl+K Ctrl+S` on Windows/Linux), search for `Copy Code Reference`, and assign your preferred key combination.

## How to run

1. Open the `copy-code-reference` folder in VS Code (or Cursor).
2. Press **F5** to launch an Extension Development Host window.
3. In the new window, open a file, select a range of lines, then run **Command Palette** → **"Copy Code Reference (file:startLine-endLine)"**.

## Install permanently

From this folder:

```bash
npm i -g @vscode/vsce
vsce package
```

Then install the generated `.vsix` via **Extensions** → **⋯** → **Install from VSIX**.
