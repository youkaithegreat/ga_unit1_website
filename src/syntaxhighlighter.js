
const syntaxHighlights = () => {
    let ca = document.getElementsByTagName("code");
    for(let i =0;i<ca.length;i++){
        let data = ca[i].innerHTML;
        data = data.replace(/&lt;(.*?)&gt;/g, '<span class="code-br">&lt;$1&gt;</span>');
        ca[i].innerHTML = data;
    }
}
