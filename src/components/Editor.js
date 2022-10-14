import Editor from "@monaco-editor/react";

function EditorView() {
  function onChange() {}
  return (
    <Editor
      //   className="h-[70vh]"
      className="px-5"
      options={{
        minimap: {
          enabled: false,
        },
      }}
      onChange={onChange}
      theme="vs-dark"
      defaultLanguage=""
      keepCurrentModel
      language=""
      //   value={props.value}
    ></Editor>
  );
}

export default EditorView;
