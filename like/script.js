let like = `<g class="style-scope yt-icon">
<path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" class="style-scope yt-icon"></path>
</g>`

let dislike = `<g class="style-scope yt-icon">
<path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" class="style-scope yt-icon"></path>
</g>`



function click(choice){
    let likeColor = document.getElementById('like-svg').style.fill;
    let dislikeColor = document.getElementById('dislike-svg').style.fill;
    if (choice == 1){
        if (likeColor != 'rgb(62, 166, 255)'){
            document.getElementById('like-t').style.color = '#3ea6ff'
            document.getElementById('dislike-t').style.color = '#909090'
            document.getElementById('like-svg').style.fill = '#3ea6ff'
            document.getElementById('dislike-svg').style.fill = '#909090'
            document.getElementById('container').style.borderBottom = '2px solid #3ea6ff'
        } else {
            document.getElementById('like-t').style.color = '#909090'
            document.getElementById('dislike-t').style.color = '#909090'
            document.getElementById('like-svg').style.fill = '#909090'
            document.getElementById('dislike-svg').style.fill = '#909090'
            document.getElementById('container').style.borderBottom = '2px solid #909090'
        }
    } else {
        if (dislikeColor != 'rgb(62, 166, 255)'){
            document.getElementById('like-t').style.color = '#909090'
            document.getElementById('dislike-t').style.color = '#3ea6ff'
            document.getElementById('like-svg').style.fill = '#909090'
            document.getElementById('dislike-svg').style.fill = '#3ea6ff'
            document.getElementById('container').style.borderBottom = '2px solid #3ea6ff'
        } else {
            document.getElementById('like-t').style.color = '#909090'
            document.getElementById('dislike-t').style.color = '#909090'
            document.getElementById('like-svg').style.fill = '#909090'
            document.getElementById('dislike-svg').style.fill = '#909090'
            document.getElementById('container').style.borderBottom = '2px solid #909090'
        }
    }
}

function btn(){
    let bg = document.getElementById('con').style.backgroundColor
    if (bg == 'rgba(49, 49, 49, 0)'){
        document.getElementById('con').style.backgroundColor = 'rgba(49, 49, 49, 1)'
        document.getElementById('btn').innerHTML = "remove background"
    } else {
        document.getElementById('con').style.backgroundColor = 'rgba(49, 49, 49, 0)'
        document.getElementById('btn').innerHTML = "add background"
    }
}