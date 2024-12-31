function openDialog(idDivDialog,isoverlay) {
  const dialog = document.getElementById(idDivDialog);
  const overlay = document.getElementById(isoverlay);
  dialog.style.display = dialog.style.display === "block" ? "none" : "block";
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
  
}
