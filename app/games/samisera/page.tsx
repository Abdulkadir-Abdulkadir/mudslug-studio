import Image from "next/image";

export default function SamiseraPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      <section className="relative h-[500px]">
        <Image
          src="/samisera.jpg"
          alt="Samisera Heroes"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-6xl font-bold mb-4">
            Samisera Heroes
          </h1>

          <p className="max-w-2xl text-xl text-zinc-300">
            Epic fantasy RPG adventure in a magical world full of heroes,
            monsters and legendary battles.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold mb-8">
          About The Game
        </h2>

        <p className="text-zinc-300 text-lg leading-8">
          Samisera Heroes is a fantasy RPG where players explore mysterious
          lands, recruit powerful heroes, fight dangerous enemies and uncover
          ancient secrets.
        </p>

      </section>

    </main>
  );
}