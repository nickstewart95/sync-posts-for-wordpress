window.onload=function(){document.getElementById("add-post-type").addEventListener("click",function(e){e.preventDefault();var t=document.querySelector("#settings-form table").getElementsByTagName("tbody")[0],n=document.querySelectorAll("#settings-form .form-table tr:nth-last-child(-n+6)"),o=document.querySelector("#settings-form .form-table tr:last-of-type input").getAttribute("id").slice(-1),l=(o=Number(o))+1;n.forEach(function(e){contents=(contents=(contents=e.outerHTML.replaceAll("_"+o,"_"+l)).replaceAll(" - "+o," - "+l)).replace(/value=".*?"/,""),t.insertAdjacentHTML("beforeend",contents)})},!1)};
//# sourceMappingURL=build.js.map