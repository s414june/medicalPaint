// @ts-nocheck

import config from "../config.js";
import app from "../app.js";
// import Base_layers_class from "./base-layers.js";
// import GUI_tools_class from "./gui/gui-tools.js";
// import GUI_preview_class from "./gui/gui-preview.js";
// import GUI_colors_class from "./gui/gui-colors.js";
// import GUI_layers_class from "./gui/gui-layers.js";
// import GUI_information_class from "./gui/gui-information.js";
// import GUI_details_class from "./gui/gui-details.js";
// import GUI_menu_class from "./gui/gui-menu.js";
// import Tools_translate_class from "../modules/tools/translate.js";
// import Tools_settings_class from "../modules/tools/settings.js";
// import Helper_class from "../libs/helpers.js";
// import alertify from "alertifyjs/build/alertify.min.js";
// import menuDefinition from "../config-menu.js";

/**
 * Main GUI class
 */
class Base_tab_class {
  constructor() {
    //singleton
    this.tab = null;
    this.iframe = null;
    this.index = "";
  }

  create_tab(tabSEQ) {
    let index = tabSEQ;
    this.index = index;
    let tab = `<div class="tab" id="tab_${index}">
      tab_${index}
      <span>x</span>
    </div>`;
    $("#tab_place").append(tab);
    let iframe = `<iframe src="./paint.html?iframe=${index}" frameborder="0" id="iframe_${index}"></iframe>`;
    $("#iframe_place").append(iframe);
    this.tab = $(`#tab_${index}`).get(0);
    this.iframe = $(`#iframe_${index}`).get(0);

    let workspaceData = sessionStorage.getItem("workspace");
    let workspace = {};
    if(workspaceData){
      workspace = JSON.parse(workspaceData);
    }
    workspace["workspace_"+this.index] = "init";
    sessionStorage.setItem("workspace",JSON.stringify(workspace));
  }

}

export default Base_tab_class;
