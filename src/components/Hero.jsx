export const Hero = () => {
    return (
        <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('./src/assets/Rectangle_full.png')" }}>

            <div className="absolute left-10 top-20 flex items-center">

            <div className="bg-white/10 backdrop-blur-md p-2 text-white rounded-lg ">
    <h1>Hello</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore deserunt, commodi sed molestias nostrum dolorum necessitatibus quam ducimus quae iure.</p>
  </div>
                

            </div>
            <div className="absolute bottom-20 right-6 flex items-center">
                <img src='./src/assets/comp_animation.png' alt="Third Image" />
            </div>
        </section>
    );
}
