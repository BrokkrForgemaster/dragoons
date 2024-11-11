export default function Home() {
  return (
    <>
      <section className="gray-container relative flex items-center justify-center min-h-screen">
        <div className="relative w-full mx-auto rounded-xl h-[500px] overflow-hidden">
          <video
            className="relative top-0 left-0 w-full h-full mx-auto object-cover rounded-xl"
            autoPlay
            loop
            muted
            preload="auto"
            style={{ filter: 'brightness(40%) contrast(90%)', pointerEvents: 'none', maxWidth: "90%" }}
          >
            <source src="/space3.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10">
          <h1 className="heading">
            Travel the 'Verse with us!
          </h1>
        </div>
      </section>
    </>
  );
}
