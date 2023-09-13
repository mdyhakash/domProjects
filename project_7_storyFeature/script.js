var arr = [
    {dp:"https://images.unsplash.com/photo-1694290124012-c1d19f091e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80", story:"https://images.unsplash.com/photo-1692712819802-030e2634c6bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"},
    {dp:"https://images.unsplash.com/photo-1694290124012-c1d19f091e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80", story:"https://images.unsplash.com/photo-1692712819802-030e2634c6bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"},
    {dp:"https://images.unsplash.com/photo-1694290124012-c1d19f091e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80", story:"https://images.unsplash.com/photo-1692712819802-030e2634c6bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"},
    {dp:"https://images.unsplash.com/photo-1694290124012-c1d19f091e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80", story:"https://images.unsplash.com/photo-1692712819802-030e2634c6bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"},
    {dp:"https://images.unsplash.com/photo-1694290124012-c1d19f091e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80", story:"https://images.unsplash.com/photo-1692712819802-030e2634c6bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"},
]
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class = "story_c">
    <img id="${idx}" src = "${elem.dp}" alt="">
    </div>`
})
var story = document.querySelector("#story")
story.innerHTML = clutter



story.addEventListener("click", function(dets){
    document.querySelector("#full_screen").style.display = "block"
    document.querySelector("#full_screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full_screen").style.display = "none"

    },3000)
    
});