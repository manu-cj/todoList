const Title = ( header, titleText ) => {
    const title = document.createElement('a');
    title.href = '#';
    title.textContent = titleText;
    title.classList.add('title');
    header.appendChild(title);
}

export default Title;