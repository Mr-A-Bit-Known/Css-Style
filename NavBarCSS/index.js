document.querySelectorAll('.tab-bar').forEach((item) => {
    let children = Array.from(item.children);
    let childrenCircleIndicator = item.querySelector('.tab_bar_circle_indicator');
    children.forEach((childItem, key) => {
        childItem.addEventListener('click', () => {
            let color = getComputedStyle(document.documentElement).getPropertyValue(`--theme-${childItem.dataset.theme}`);
            // childrenCircleIndicator.classList.remove('animate');
            childrenCircleIndicator.style.marginLeft = ((25 + childItem.clientWidth) * key) + 'px';
            // childrenCircleIndicator.classList.add('animate');
            document.querySelector('body').style.backgroundColor = color;
            childrenCircleIndicator.style.backgroundColor = color;
        })
    })
}
)