console.log("The script is working");
let skillNodes = document.querySelectorAll('.skill-node');
console.log(skillNodes);
let pastNode = skillNodes[0];
const bodyEl = document.querySelector('body');
// let svgEl = document.createElement('svg');
// svgEl.setAttribute("height", "100%");
// svgEl.setAttribute("width", "100%");
// svgEl.setAttribute("position", "absolute");
// svgEl.setAttribute("top", "0");
// svgEl.setAttribute("left", "0");
// for(let i = 0; i < skillNodes.length; i++) {
//     let curNode = skillNodes[i];
//     console.log(i, curNode);
//     for(let n = i + 1; n < skillNodes.length; n++) {
//         comparisonNode = skillNodes[n];
//         console.log(n, comparisonNode);
        
//         if (curNode.dataset.nodeid === comparisonNode.dataset.fromnode) {
//             let lineEl = document.createElement('line');
//             let rect = curNode.getBoundingClientRect()
//             let x1 = rect.left;//x is left, y is top
//             let y1 = rect.top;
//             let rect2 = comparisonNode.getBoundingClientRect();
//             let x2 = rect2.left;
//             let y2 = rect2.top;
//             lineEl.setAttribute("x1", x1);
//             lineEl.setAttribute("x2", x2);
//             lineEl.setAttribute("y1", y1);
//             lineEl.setAttribute("y2", y2);
//             svgEl.append(lineEl);
//             console.log(svgEl);

            
//         }
//     }
// }
// bodyEl.append(svgEl);

// function getOffSet(el) {
//     let rect = el.getBoundingClientRect();
//     let leftScroll = window.scrollX;
//     let right = window.scrollY;
//     return {top: rect.top + scroll}
// }
let curRect = {};
let compRect = {}
for(let i = 0; i < skillNodes.length; i++) {
    let curNode = skillNodes[i];
    for(let n = i + 1; n < skillNodes.length; n++) {
        comparisonNode = skillNodes[n];
        
        if (curNode.dataset.nodeid === comparisonNode.dataset.fromnode) {
            let borderDiv = document.createElement('div');
            let bottomBorderDiv = document.createElement('div');
            borderDiv.style.position = 'absolute';
            bottomBorderDiv.style.position = 'absolute';
            curRect["left"] = curNode.offsetLeft;
            curRect["top"] = curNode.offsetTop;
            compRect["left"] = comparisonNode.offsetLeft;
            compRect["top"] = comparisonNode.offsetTop;
            borderDiv.style.height = `${(compRect.top - curRect.top) / 4}px`;
            borderDiv.style.width = `${Math.abs(compRect.left - curRect.left)}px`;
            borderDiv.style.top = `${curRect.top + curNode.offsetHeight}px`;

            bottomBorderDiv.style.width = `${Math.abs(compRect.left - curRect.left)}px`;
            bottomBorderDiv.style.height = `${(compRect.top - curRect.top)/3}px`;
            bottomBorderDiv.style.top = `${curRect.top + curNode.offsetHeight + (curNode.offsetHeight/2) + 3}px`;
           
            if(( compRect.left - curRect.left) < 0 ) {
                //comparison node is left of current node
                borderDiv.style.borderRight = "black solid 1px";
                borderDiv.style.borderBottom = "black solid 1px";
                borderDiv.style.left = `${compRect.left + (comparisonNode.offsetWidth / 2)}px`
                bottomBorderDiv.style.left = `${compRect.left + (comparisonNode.offsetWidth / 2)}px`
                bottomBorderDiv.style.borderLeft = "black solid 1px";
            } else {
                //comarison node is right of current node
                borderDiv.style.borderLeft = "black solid 1px";
                borderDiv.style.borderBottom = "black solid 1px";
                borderDiv.style.left = `${curRect.left + (curNode.offsetWidth / 2)}px`
                bottomBorderDiv.style.left = `${curRect.left + (curNode.offsetWidth / 2)}px`
                bottomBorderDiv.style.borderRight = "black solid 1px";
            }
            bodyEl.append(borderDiv);
            bodyEl.append(bottomBorderDiv);
        }
    }
}