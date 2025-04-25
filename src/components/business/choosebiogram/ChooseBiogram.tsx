import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import user1 from "../../../assets/Rectangle 79.png";
import user2 from "../../../assets/Rectangle 77.png";
import user3 from "../../../assets/Rectangle 76.png";
import user4 from "../../../assets/Rectangle 78.png";
import user5 from "../../../assets/Rectangle 78 (1).png";
import banner from "../../../assets/Group 2.png";

const people = [
  {
    name: "Chan Ja HO",
    tag: "@chan567james.com",
    role: "Blogger",
    img: user1,
    color: "bg-orange-500",
  },
  {
    name: "Sara James",
    tag: "@sara123james.com",
    role: "Designer",
    img: user2,
    color: "bg-pink-500",
  },
  {
    name: "James Max",
    tag: "@james555.com",
    role: "Actor",
    img: user3,
    color: "bg-purple-700",
  },
  {
    name: "Alex",
    tag: "@alexcraft.com",
    role: "Influencer",
    img: user4,
    color: "bg-blue-500",
  },
  {
    name: "Eliza",
    tag: "@elizaSocial.com",
    role: "Photographer",
    img: user5,
    color: "bg-green-500",
  },
];

const ChooseBiogram = () => {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-cover bg-center px-6 py-12"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h1 className="text-5xl sm:text-6xl font-extrabold font-poppins mb-6 text-black">
        Globe Icons <br /> Choose Biogram
      </h1>
      <p className="text-lg sm:text-xl font-medium font-poppins max-w-4xl mb-10 text-black">
        Made for anyone with a smartphone and businesses of all sizes, Linkme is
        the ultimate tool for building connections and driving success in the
        digital age.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
        {people.map((person, i) => (
          <div
            key={i}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            {/* Role Ribbon */}
            <div
              className={`absolute top-0 left-0 w-0 h-0 border-l-[80px] border-b-[80px] ${person.color}`}
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            >
              <span className="absolute left-1 bottom-1 rotate-[-45deg] text-white text-xs font-bold">
                {person.role}
              </span>
            </div>

            {/* Image */}
            <div className="w-full h-60">
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info Box */}
            <div className="p-4 text-center bg-black bg-opacity-80">
              <h2 className="text-lg font-bold text-white">{person.name}</h2>
              <p className="text-sm text-white">{person.tag}</p>
              <div className="flex justify-center gap-3 mt-3 text-white text-lg">
                <FaInstagram />
                <FaFacebookF />
                <FaTwitter />
                <FaWhatsapp />
                <FaTiktok />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseBiogram;
