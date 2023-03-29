export default {
  setWorkspaceStatus(status) {
    let iframe_data = location.search.split("?").pop().split("=");
    if (iframe_data[0] != "iframe") return;
    let iframeIndex = parseInt(iframe_data[1]);
    if (isNaN(iframeIndex)) return;
    let workspaceData = sessionStorage.getItem("workspace");
    let workspace = {};
    if (workspaceData) {
      workspace = JSON.parse(workspaceData);
    }
    workspace["workspace_" + iframeIndex] = status;
    sessionStorage.setItem("workspace", JSON.stringify(workspace));
  },
};
