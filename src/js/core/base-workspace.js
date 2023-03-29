// @ts-nocheck
import Base_tab_class from "./base-tab.js";
var instance = null;

/**
 * Main GUI class
 */
class Base_workspace_class {
  constructor() {
    //singleton
    if (instance) {
      return instance;
    }
    instance = this;
    this.tabSEQ = 0;
  }

  init() {
    let _this = this;
    $("#import").click(function () {
      var Base_tab = new Base_tab_class();
      Base_tab.create_tab(_this.tabSEQ);
      _this.active_tab(Base_tab);
      _this.tabSEQ++;

      Base_tab.tab.onclick = function (e) {
        let isRemove = e.target.nodeName === "SPAN";
        isRemove ? _this.remove_tab(Base_tab) : _this.active_tab(Base_tab);
      };
    });

    window.addEventListener('storage', function(e) {
      if(e.storageArea===sessionStorage) {
        let workspace = _this.get_session();
        for(let key in workspace){
          let tab  = "#tab_" + key.split("_").pop();
          if(workspace[key]==="editing"){
            $(tab).addClass("editing");
          }
          else{
            $(tab).removeClass("editing");
          }
        }
      }
    })
  }

  remove_tab(Base_tab) {
    let workspace = this.get_session();
    let can_remove = true;
    if (workspace["workspace_" + Base_tab.index] == "editing") {
      can_remove = confirm("此頁尚未儲存，您確定要關閉?");
    }
    if (!can_remove) return;
    delete workspace["workspace_" + Base_tab.index];
    sessionStorage.setItem("workspace", JSON.stringify(workspace));
    Base_tab.tab.remove();
    Base_tab.iframe.remove();
    Base_tab.last_tab = null;
    this.active_tab();
  }

  active_tab(Base_tab) {
    let tab = ".tab:last-child";
    let iframe = "iframe:last-child";
    if (Base_tab) {
      tab = Base_tab.tab;
      iframe = Base_tab.iframe;
    }
    $(".tab.active").removeClass("active");
    $(tab).addClass("active");
    $("iframe.active").removeClass("active");
    $(iframe).addClass("active");
  }

  get_session(){
    let workspaceData = sessionStorage.getItem("workspace");
    let workspace = {};
    if (workspaceData) {
      workspace = JSON.parse(workspaceData);
    }
    return workspace;
  }
}

export default Base_workspace_class;
