import Image from "next/image";

export default function FairylandPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      <section className="relative h-[500px]">
        <Image
          src="/fairyland.jpg"
          alt="Fairy Land Heroes"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-6xl font-bold mb-4">
            Fairy Land Heroes
          </h1>

          <p className="max-w-2xl text-xl text-zinc-300">
            A magical adventure where brave heroes protect the kingdom
            from darkness and ancient threats.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold mb-8">
          About The Game
        </h2>

        <p className="text-zinc-300 text-lg leading-8">
          Fairy Land Heroes is a colorful fantasy adventure featuring
          powerful heroes, magical creatures, beautiful kingdoms and
          exciting quests for players of all ages.
        </p>

      </section>

    </main>
  );
}