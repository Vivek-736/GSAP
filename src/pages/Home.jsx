import { Link } from "react-router-dom";

const animations = [
  {
    title: "GSAP To",
    description:
      "The to() method is used to animate a single element from a starting state to an ending state.",
    path: "/gsapto",
  },
  {
    title: "GSAP From",
    description:
      "The from() method is used to animate a single element from an ending state to a starting state.",
    path: "/gsapfrom",
  },
  {
    title: "GSAP FromTo",
    description:
      "The fromTo() method is used to animate a single element from a starting state to an ending state and vice versa.",
    path: "/gsapfromto",
  },
  {
    title: "GSAP Timeline",
    description:
      "The timeline() method is used to create a timeline to manage multiple animations.",
    path: "/gsaptimeline",
  },
  {
    title: "GSAP Stagger",
    description:
      "The stagger() method is used to animate multiple elements with a stagger effect.",
    path: "/gsapstagger",
  },
  {
    title: "GSAP ScrollTrigger",
    description:
      "The ScrollTrigger plugin is used to trigger animations based on the scroll position.",
    path: "/gsapscrolltrigger",
  },
  {
    title: "GSAP Text",
    description: "Learn how to animate text with GSAP.",
    path: "/gsaptext",
  },
];

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-800 to-purple-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-12 text-center bg-clip-text bg-gradient-to-r from-purple-400 to-white animate-pulse">
          GSAP Animations Showcase
        </h1>
        <div className="bg-slate-800 backdrop-blur-md rounded-xl shadow-2xl p-6">
          <ol className="space-y-4">
            {animations.map((animation, index) => (
              <li
                key={index}
                className="group flex items-center gap-4 p-4 rounded-lg bg-slate-900/80 hover:bg-purple-700/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-lg font-bold text-purple-400 w-8">
                  {index + 1}.
                </span>
                <div className="flex-1">
                  <Link
                    to={animation.path}
                    className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-200"
                  >
                    {animation.title}
                  </Link>
                  <p className="text-sm text-slate-300 mt-1">
                    {animation.description}
                  </p>
                </div>
                <svg
                  className="size-6 text-purple-400 group-hover:text-white transform group-hover:scale-110 transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 13.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 13.586z"
                  />
                </svg>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Home;
