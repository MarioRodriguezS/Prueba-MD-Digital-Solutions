/*Script que configura el vídeo de la pantalla para tenga una interfaz de reproducción personalizada<*/
const d = document,
$video = d.querySelector(".video"),
$transparencia = d.querySelector(".video__transparencia"),
$play_icon = d.querySelector(".play-icon"),
$pause_icon = d.querySelector(".pause-icon");

$play_icon.addEventListener("click",(e)=>{
    $video.play();
    $play_icon.classList.remove("active-icon");
    $transparencia.classList.remove("is-active");
    $video.setAttribute("controls","")
    $pause_icon.classList.add("active-icon");
})

d.addEventListener("mouseover",(e)=>{
    if (e.target == $video || e.target == $transparencia || e.target == $pause_icon || e.target == $play_icon) {
        $transparencia.classList.add("is-active");
    }
    else{
        $transparencia.classList.remove("is-active");
    }
    if($video.currentTime == 0){
        $transparencia.classList.add("is-active");
    }
})

$pause_icon.addEventListener("click",(e)=>{
    $video.pause();
    $pause_icon.classList.remove("active-icon");
    $transparencia.classList.remove("is-active");
    $play_icon.classList.add("active-icon");
})