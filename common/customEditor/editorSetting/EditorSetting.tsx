import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setGlobalCodeSuggestions,
  setGlobalFontSize,
  setGlobalTabSize,
} from "../../../redux/slices/editorSlice";
import { FontSizeOptions, TabSizeOptions } from "../constant";
import CustomSelect from "../customSelect/CustomSelect";
import style from "./EditorSetting.module.scss";

function EditorSetting({ showEditorSetting, setShowEditorSetting }: any) {
  const dispatch = useDispatch();
  const editorValue: any = useSelector((state: any) => state?.editor);
  const [fontSize, setFontSize]: any = useState({
    name: editorValue?.fontSize + "px",
    value: editorValue?.fontSize,
  });
  const [tabSize, setTabSize]: any = useState({
    name: editorValue?.tabSize + " spaces",
    value: editorValue?.tabSize,
  });
  const [autoSuggestion, setAutoSuggestion]: any = useState(
    editorValue?.codeSuggestions
  );

  const closeModal = () => {
    setShowEditorSetting(false);
  };

  const clickOnOverlay = (event: any) => {
    if (event.target === event.currentTarget) {
      setShowEditorSetting(false);
    }
  };

  const changeEditorSetting = () => {
    dispatch(setGlobalFontSize(fontSize?.value));
    dispatch(setGlobalTabSize(tabSize?.value));
    dispatch(setGlobalCodeSuggestions(autoSuggestion));
    setShowEditorSetting(false);
  };
  return (
    <div className={style.editorSetting} onClick={clickOnOverlay}>
      <div className={style.editorSetting_container}>
        <div className={style.editorSetting_container_header}>
          <h3 className={style.editorSetting_container_header_title}>
            Code Editor Settings
          </h3>
          <div
            className={style.editorSetting_container_header_close}
            onClick={closeModal}
          >
            &times;
          </div>
        </div>
        <div className={style.editorSetting_container_item}>
          <div className={style.editorSetting_container_item_title}>
            <p className={style.editorSetting_container_item_title_text}>
              Font Size Options
            </p>
            Choose the font size of the editor <br />
            Default is 14
          </div>
          <CustomSelect
            options={FontSizeOptions}
            selectedOption={fontSize}
            onOptionSelected={setFontSize}
            defaultValue={"14px"}
          />
        </div>
        <div className={style.editorSetting_container_item}>
          <div className={style.editorSetting_container_item_title}>
            <p className={style.editorSetting_container_item_title_text}>
              Tab Size Options
            </p>
            Choose the width of tab in characters <br />
            Default is 4
          </div>
          <CustomSelect
            options={TabSizeOptions}
            selectedOption={tabSize}
            onOptionSelected={setTabSize}
            defaultValue={"4 spaces"}
          />
        </div>
        <div className={style.editorSetting_container_item}>
          <div className={style.editorSetting_container_item_title}>
            Auto Suggestion Enable <br />
            Default is true
          </div>
          <div className={style.editorSetting_container_item_title_text}>
            <input
              type="checkbox"
              id="autoSuggestion"
              name="autoSuggestion"
              checked={autoSuggestion}
              onChange={(e) => {
                setAutoSuggestion(e.target.checked);
              }}
              className={style.editorSetting_container_item_title_text_input}
            />
          </div>
        </div>
        <div className={style.editorSetting_container_footer}>
          <button
            className={style.editorSetting_container_footer_btn_cancel}
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className={style.editorSetting_container_footer_btn_save}
            onClick={changeEditorSetting}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditorSetting;
