// vid id =qQgwJch1ivs
import styles from "@/styles/Home.module.css"


function YouTubeVideo({videoId}) {
    return (
        <div className="video-responsive">
            <iframe 
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allowFullScreen
                title="Embedded youtube"
            
            
            />

        </div>
    );
}

export default YouTubeVideo;