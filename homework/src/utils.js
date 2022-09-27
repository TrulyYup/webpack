export const formatError = text => `
<span style="color: red;">
${text}
</span>`

export function errorHide() {
    document.getElementById("errorMessage").style.display = "none";
}