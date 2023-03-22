import Base_state_class from "./../../core/base-state.js";

var instance = null;

class Edit_undo_class {
  constructor() {
    //singleton
    if (instance) {
      return instance;
    }
    instance = this;

    this.Base_state = new Base_state_class();
    this.events();
  }

  events() {
    var _this = this;

    document
      .querySelector("#undo_button")
      .addEventListener("click", function (event) {
        _this.Base_state.undo();
      });

    document
      .querySelector("#redo_button")
      .addEventListener("click", function (event) {
        _this.Base_state.redo();
      });

    document
      .querySelector("#clear_button")
      .addEventListener("click", function (event) {
        const count = _this.Base_state.action_history.length - 1;
        for (let i = count; i >= 0; i--) {
          let now_history = _this.Base_state.action_history[i];
          if (now_history.action_id === "open_file_url") break;
          _this.Base_state.undo();
        }
      });
  }

  undo() {
    this.Base_state.undo();
  }
}

export default Edit_undo_class;
