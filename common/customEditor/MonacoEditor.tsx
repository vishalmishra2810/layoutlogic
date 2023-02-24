import Editor from "@monaco-editor/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { defineTheme } from "../../utils/lib/defineTheme";
import { ALL_LANGUAGE_COMPILER, themeOptions } from "./constant";
import CustomSelect from "./customSelect/CustomSelect";
import style from "./MonacoEditor.module.scss";
import settingIcon from "../../assets/setting.svg";
import Image from "next/image";
import EditorSetting from "./editorSetting/EditorSetting";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalTheme } from "../../redux/slices/editorSlice";

function MonacoEditor({ language }: any) {
  const dispatch = useDispatch();
  const { fontSize, tabSize, codeSuggestions, theme } = useSelector(
    (state: any) => state?.editor
  );
  const [customInput, setCustomInput] = useState("");
  const [value, setValue] = useState("");
  const [selectTheme, setSelectTheme] = useState({
    name: "Monokai",
    value: "monokai",
  });
  const [showEditorSetting, setShowEditorSetting] = useState(false);
  const [output, setOutput] = useState("");
  const [showInput, setShowInput] = useState(false);
  useEffect(() => {
    defineTheme(selectTheme?.value).then((res) => {
      dispatch(setGlobalTheme(res));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectTheme]);

  const handleCompile = () => {
    var data = {
      code: value,
      language: getLanguage(language),
      input: customInput,
    };
    var config = {
      method: "post",
      url: "https://api.codex.jaagrav.in",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        if (response.data.error) {
          setOutput(response.data.error);
        } else {
          setOutput(response.data.output);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleEditorChange = (value: any) => {
    setValue(value);
  };

  const clearOutput = () => {
    setOutput("");
  };

  const getLanguage = (language: any) => {
    let lang = ALL_LANGUAGE_COMPILER?.filter(
      (item: any) => item?.name === language
    );
    return lang[0]?.value;
  };

  const getDefaultValue = (language: any) => {
    let lang = ALL_LANGUAGE_COMPILER?.filter(
      (item: any) => item?.name === language
    );
    return lang[0]?.defaultValue;
  };

  const getTitle = (language: any) => {
    let lang = ALL_LANGUAGE_COMPILER?.filter(
      (item: any) => item?.name === language
    );
    return lang[0]?.title;
  };

  return (
    <>
      {showEditorSetting && (
        <EditorSetting
          setShowEditorSetting={setShowEditorSetting}
          showEditorSetting={showEditorSetting}
        />
      )}
      <div className={style.editor}>
        <div className={style.editorWrapper}>
          <div className={style.editorHeader}>
            <div className={style.editorHeaderLeft}>
              <CustomSelect
                key={"theme"}
                options={themeOptions}
                selectedOption={selectTheme}
                onOptionSelected={setSelectTheme}
                defaultValue={selectTheme?.name}
                name="Theme"
              />
              <Image
                src={settingIcon}
                alt="setting"
                width={24}
                height={24}
                className={style.settingIcon}
                onClick={() => setShowEditorSetting(true)}
              />
            </div>
            <button
              className={style.editorHeaderRightBtn}
              onClick={handleCompile}
            >
              Run
            </button>
          </div>
          <Editor
            key={"editor"}
            height="85vh"
            width={`100%`}
            language={getTitle(language)}
            value={getDefaultValue(language)}
            theme={theme}
            className={style.editor_monaco}
            onChange={handleEditorChange}
            options={{
              minimap: { enabled: false },
              fontSize: fontSize,
              tabSize: tabSize,
              quickSuggestions: codeSuggestions,
            }}
          />
        </div>
        <div className={style.editorOutput}>
          <div className={style.editorOutputHeader}>
            <div className={style.editorOutputHeaderLeft}>Output:</div>
            <div
              className={style.editorOutputHeaderRight}
              onClick={clearOutput}
            >
              Clear
            </div>
          </div>
          <div
            className={style.editorOutputBody}
            dangerouslySetInnerHTML={{ __html: output }}
          ></div>
          <div className={style.editorOutput_input}>
            <p
              onClick={() => setShowInput(!showInput)}
              className={style.editorOutput_input_title}
            >
              Add Custom Input
            </p>
            {showInput ||
              (true && (
                <textarea
                  placeholder="Custom Input"
                  onChange={(e) => setCustomInput(e.target.value)}
                  className={style.editorOutput_input_textarea}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MonacoEditor;
