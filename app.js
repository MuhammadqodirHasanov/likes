function like_box(ary) {
    let likes = 0
    let dislikes = 0

    for (let indx = 0; indx < ary.length; indx++) {
        if (ary [indx] === 'like') {
            likes++
        } else if (ary [indx] === 'dislike') {
            dislikes++
        } 
    }

    console.log('likes:', likes);
    console.log('dislikes:', dislikes);

    if (likes > dislikes) {
        return true
    } else if (likes == dislikes) {
        return ''
    } else  {
        return false
    }
}

console.log(like_box(['dislike',
'dislike',
'dislike',
'dislike',
'dislike',
'like',
'like',
'like',
'like',
]));