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
  }

  init(){
    $("#import").click(function(){
      var Base_tab = new Base_tab_class();
      Base_tab.create_tab();
      Base_tab.active_tab();
    })
  }

}

export default Base_workspace_class;
