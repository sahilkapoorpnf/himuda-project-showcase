export const HeroBanner = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Fallback Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80')] bg-cover bg-center" />
      
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[1]"
        poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-mountain-village-covered-in-fog-39766-large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-10" />
      
      {/* Content Overlay */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Welcome to HIMUDA
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
            Building Dreams in the Lap of Himalayas
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Housing & Urban Development Authority - Your Gateway to Quality Living in Himachal Pradesh
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg">
              Explore Properties
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};
