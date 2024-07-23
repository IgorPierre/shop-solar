import Button from "./Button";

export default function Banner() {
    return (
      <section className="bg-orange bg-pattern bg-center bg-cover text-white max-w-7xl mx-auto py-8 px-12 mt-4 mb-12 rounded-2xl relative">
        <h1 className="text-5xl font-black max-w-xl">
            Seus parceiros 
            em energia solar!
        </h1>
        <Button text="Fale conosco" isBordered/>
        <img 
          src="/images/hero_panel.png" 
          alt="imagem de um painel solar" 
          className="absolute top-0 right-12 w-96" 
        />
      </section>
    );
  }