function solution (entryPoint) {
    const elemetChilds = entryPoint.querySelectorAll('*')
    if (elemetChilds.length > 0) {
        let copy = [];
        let copyNumber = [];
        let remove = [];
        let removeNumber = [];
        let removeChildren = [];
        let removeChildrenNumber = [];
        let switcher = [];
        let switcherNumber = [];

        for (let i = 0; i < elemetChilds.length; i++) {
            if (elemetChilds[i].hasAttribute('x-make')) {
                const [mark, markNumber] = elemetChilds[i].getAttribute('x-make').split(':');
                switch (mark) {
                    case 'copy': copy.push(elemetChilds[i]); copyNumber.push(markNumber); break;
                    case 'remove': remove.push(elemetChilds[i]); removeNumber.push(markNumber); break;
                    case 'removeChildren': removeChildren.push(elemetChilds[i]); removeChildrenNumber.push(markNumber); break;
                    case 'switch': switcher.push(elemetChilds[i]); switcherNumber.push(markNumber); break;
                }
            }
        }

        let a = 0;

        copy.forEach( el => {
            if (el.parentNode !== null) {
                if (el) {
                    for (let i = 0; i < copyNumber[a]; i++) {
                        el.removeAttribute('x-make');
                        let clone = el.cloneNode(true);
                        el.after(clone);
                    }
                }
            }
            a += 1;
        });
        a = 0;

        remove.forEach( el => {
            if (el.parentNode !== null) {
                if (el) {
                    for (let i = 0; i < removeNumber[a]; i++) {
                        if (el.nextElementSibling) el.nextElementSibling.remove();
                    }
                    el.removeAttribute('x-make');
                }
            }
            a += 1;
        });
        a = 0;


        removeChildren.forEach( el => {
            if (el.parentNode !== null) {
                if (el) {
                    const childrenNodesArr = el.querySelectorAll('*');
                    for (let i = 0; i < removeChildrenNumber[a]; i++) {
                        el.removeChild(childrenNodesArr[i]);
                    }
                    el.removeAttribute('x-make');
                }
            }
            a += 1;
        });
        a = 0;

        switcher.forEach( el => {
            if (el.parentNode !== null) {
                if (el) {
                    el.parentNode.insertBefore(el, el.parentNode.childNodes[switcherNumber[a]]);
                    el.removeAttribute('x-make');
                }
            }
            a += 1;
        });
        a = 0;

    }
}
