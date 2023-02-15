document.getElementById("btn-post").addEventListener("click", function () {
    const textField = document.getElementById('text-field')
    const newComment = textField.value;
    const commentCont = document.getElementById('comment-container')
    const p = document.createElement('p')
    p.innerText = newComment;
    commentCont.appendChild(p)
    textField.value = ""

})



document.getElementById('btn-comment').addEventListener('click', function () {
    const commentBox = document.getElementById("comment-box")
    const newComment = commentBox.value;
    const addComment = document.getElementById('comment-container')
    const h4 = document.createElement('h4')
    h4.innerText = newComment;
    addComment.appendChild(h4);
    commentBox.value = "";
})