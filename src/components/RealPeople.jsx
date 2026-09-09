import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import clientA from "../assets/photos/client-a.webp";
import clientB from "../assets/photos/client-b.webp";
import clientC from "../assets/photos/client-c.webp";
import videoOne from "../assets/videos/client_1.mp4";
import videoTwo from "../assets/videos/client_2.mp4";
import videoThree from "../assets/videos/client_3.mp4";

const studentVideos = [
  { id: "video-one", source: videoOne, poster: clientA, label: "Student story" },
  { id: "video-two", source: videoTwo, poster: clientB, label: "Code 10 student" },
  { id: "video-three", source: videoThree, poster: clientC, label: "Student story" },
];

export default function RealPeople() {
  const videoRefs = useRef({});
  const [playingVideo, setPlayingVideo] = useState(null);

  const playVideo = (id) => {
    setPlayingVideo(id);
    videoRefs.current[id]?.play().catch(() => setPlayingVideo(null));
  };

  return (
    <section id="students" className="section bg-white overflow-hidden">
      <div className="container">
        <div className="mb-14 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">Students speak</p>
            <h2 className="display-heading">Real students.<br /><span>Real experiences.</span></h2>
          </div>
          <p className="section-copy md:col-span-4 md:col-start-9">Hear directly from Best Enough students about what the experience is really like.</p>
        </div>

        <div className="student-video-grid">
          {studentVideos.map((student, index) => (
            <motion.article
              key={student.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: .985 }}
              viewport={{ once: true }}
              transition={{ duration: .55, delay: index * .08, ease: [.16, 1, .3, 1] }}
              className="student-video-card"
            >
              <motion.video
                ref={(element) => { videoRefs.current[student.id] = element; }}
                className="student-video"
                poster={student.poster}
                preload="none"
                controls={playingVideo === student.id}
                playsInline
                animate={{ scale: playingVideo === student.id ? 1.035 : 1 }}
                transition={{ duration: .8, ease: [.16, 1, .3, 1] }}
                onEnded={() => setPlayingVideo(null)}
              >
                <source src={student.source} type="video/mp4" />
              </motion.video>
              {playingVideo !== student.id && (
                <button
                  type="button"
                  className="student-video-play focus-ring"
                  aria-label={`Play ${student.label}`}
                  onClick={() => playVideo(student.id)}
                >
                  <span><Play size={19} fill="currentColor" /></span>
                  <strong>{student.label}</strong>
                </button>
              )}
            </motion.article>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/[0.10] pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">Your story could be next.</p>
          <a href="#booking" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] hover:text-race-red">Start yours <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}
