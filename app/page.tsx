import Link from "next/link";
import {
  FaFacebook,
  FaYoutube,
  FaDiscord,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const games = [
  {
    title: "Samisera Heroes",
    image: "/samisera.jpg",
    description: "Epic fantasy RPG adventure.",
    link: "/games/samisera",
  },
  {
    title: "Fairy Land Heroes",
    image: "/fairyland.jpg",
    description: "Magical heroes protecting their kingdom.",
    link: "/games/fairyland",
  },
  {
    title: "Crimson Slug",
    image: "/crimson.jpg",
    description: "Fast-paced action and survival battles.",
    link: "/games/crimson",
  },
  {
    title: "The Road To Cadmus",
    image: "/cadmus.jpg",
    description: "A legendary journey across forgotten lands.",
    link: "/games/cadmus",
  },
  {
    title: "Coming Soon",
    image: "/soon.jpg",
    description: "More exciting adventures are on the way.",
    link: "#",
  },
];

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white min-h-screen">

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="MudSlug Studio"
              width={50}
              height={50}
            />
            <span className="font-bold text-xl">
              MUDSLUG STUDIO
            </span>
          </Link>

          <nav className="flex gap-6 text-zinc-300 text-sm font-medium">
            <a href="/">Home</a>
            <a href="#games">Games</a>
            <a href="#">Shop</a>
            <a href="#">Careers</a>
            <a href="#">News</a>
            <a href="#">Gallery</a>
            <a href="#">Books</a>
            <a href="#">🌐 Language</a>
            <a href="#footer">Contact</a>
          </nav>

        </div>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      >
        <img
          src="/logo.png"
          alt="MudSlug Studio"
          width={220}
          height={220}
          className="mb-6"
        />

        <h1 className="text-6xl font-bold mb-4">
          MUDSLUG STUDIO
        </h1>

        <p className="text-xl text-zinc-300 max-w-2xl">
          Creating fantasy worlds, unforgettable heroes and epic adventures.
        </p>
      </section>

      {/* Games Section */}
      <section
        id="games"
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <h2 className="text-5xl font-bold text-center mb-16">
          OUR GAMES
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {games.map((game) => (
            <div
              key={game.title}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:scale-105 transition duration-300"
            >
              <div className="bg-white p-6">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-64 object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {game.title}
                </h3>

                <p className="text-zinc-400 mb-5">
                  {game.description}
                </p>

                <Link href={game.link}>
                  <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="bg-black border-t border-zinc-800 mt-20"
      >

        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-2xl font-bold mb-4">
              MUDSLUG STUDIO
            </h3>

            <p className="text-zinc-400">
              Creating fantasy worlds, unforgettable heroes and epic adventures.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Games
            </h4>

            <ul className="space-y-2 text-zinc-400">
              <li>Samisera Heroes</li>
              <li>Fairy Land Heroes</li>
              <li>Crimson Slug</li>
              <li>The Road To Cadmus</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Books
            </h4>

            <ul className="space-y-2 text-zinc-400">
              <li>Samisera Saga</li>
              <li>Cadmus Chronicles</li>
              <li>Fairyland Tales</li>
              <li>Coming Soon</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              Contact
            </h4>

            <ul className="space-y-2 text-zinc-400">
              <li>mudslugstudio@gmail.com</li>
              <li>Georgia</li>
              <li>Independent Game Studio</li>
            </ul>
          </div>

        </div>

        {/* Social Media */}
        <div className="border-t border-zinc-800">

          <div className="flex justify-center gap-8 py-6 text-3xl text-zinc-400">

            <a
              href="#"
              className="hover:text-blue-500 hover:scale-110 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="hover:text-red-500 hover:scale-110 transition"
            >
              <FaYoutube />
            </a>

            <a
              href="#"
              className="hover:text-indigo-400 hover:scale-110 transition"
            >
              <FaDiscord />
            </a>

            <a
              href="#"
              className="hover:text-pink-500 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaTiktok />
            </a>

            <a
              href="#"
              className="hover:text-sky-400 hover:scale-110 transition"
            >
              <FaXTwitter />
            </a>

          </div>

          <div className="pb-6 text-center text-zinc-500">
            © 2026 MudSlug Studio. All Rights Reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}