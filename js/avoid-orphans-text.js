document.querySelectorAll("p").forEach(paragraph => {
    let words = paragraph.innerHTML.trim().split(" ");
    if (words.length > 1) {
        words[words.length - 2] += `&nbsp;${words.pop()}`;
        paragraph.innerHTML = words.join(" ");
    }
});
