import Image from "next/image";

export default function CadmusPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      <section className="relative h-[500px]">
        <Image
          src="/cadmus.jpg"
          alt="The Road To Cadmus"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-6xl font-bold mb-4">
            The Road To Cadmus
          </h1>

          <p className="max-w-2xl text-xl text-zinc-200">
            A journey across forgotten kingdoms, ancient ruins and legendary battles.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold mb-8">
          About The Game
        </h2>

        <p className="text-zinc-300 text-lg leading-8">
          The Road To Cadmus is an epic fantasy RPG adventure where heroes
          travel through dangerous lands, discover ancient secrets and
          fight powerful enemies on their path toward the legendary city
          of Cadmus.
        </p>

      </section>

    </main>
  );
}