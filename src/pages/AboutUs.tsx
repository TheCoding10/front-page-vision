import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import pastorsFamily from "@/assets/pastors-family.png";
import teamPhoto from "@/assets/team-photo.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#E5DDD5]">
      <Header variant="solid" />
      
      {/* Meet Our Pastors Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-8">
              <span className="font-bold">MEET</span>{" "}
              <span className="font-normal">OUR PASTORS</span>
            </h1>
            
            <p className="text-xl mb-6 leading-relaxed">
              Pastors Carlos and Cynthia Ramirez are passionate about making God's truth accessible to everyone, and have a heart for educating people to embrace God's love.
            </p>
            
            <p className="text-xl mb-6 leading-relaxed">
              They're serving in ministry with their family – Jose, Jarius, and Sajhara – proving that love, truth, community, and justice aren't just Sunday values, they're everyday ones. Their mission for GVM? Welcoming you exactly as you are, creating genuine community, and loving people the way Jesus did – radically and without hesitation.
            </p>
            
            <p className="text-xl font-semibold">
              You belong here.
            </p>
          </div>
          
          <div>
            <img 
              src={pastorsFamily} 
              alt="Pastors Carlos and Cynthia Ramirez with their family" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Building Together Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-normal mb-12">
            BUILDING <span className="font-bold">TOGETHER</span>
          </h2>
          
          <div className="mb-16">
            <img 
              src={teamPhoto} 
              alt="God's Voice Ministries Team" 
              className="w-full h-auto"
            />
          </div>

          <h3 className="text-4xl font-normal mb-12">
            WITH THIS CALL
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Mission */}
            <div>
              <h4 className="text-lg font-bold mb-4 pb-2 border-b-2 border-black">
                MISSION
              </h4>
              <p className="text-2xl font-bold leading-tight">
                EDUCATE PEOPLE TO EMBRACE AND SHARE GOD'S LOVE
              </p>
            </div>

            {/* Values */}
            <div>
              <h4 className="text-lg font-bold mb-4 pb-2 border-b-2 border-black">
                VALUES
              </h4>
              <p className="text-2xl font-bold leading-tight mb-2">
                LOVE.
              </p>
              <p className="text-2xl font-bold leading-tight mb-2">
                TRUTH.
              </p>
              <p className="text-2xl font-bold leading-tight text-[#D4AF37] mb-2">
                COMMUNITY.
              </p>
              <p className="text-2xl font-bold leading-tight">
                JUSTICE.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h4 className="text-lg font-bold mb-4 pb-2 border-b-2 border-black">
                VISION
              </h4>
              <p className="text-2xl font-bold leading-tight">
                TO HELP YOU BUILD AN UNWAVERING RELATIONSHIP WITH GOD, AND ONE ANOTHER.
              </p>
            </div>

            {/* Beliefs */}
            <div>
              <h4 className="text-lg font-bold mb-4 pb-2 border-b-2 border-black">
                BELIEFS
              </h4>
              <p className="text-xl font-bold leading-tight">
                TRINITY<br />
                SALVATION<br />
                RESURRECTION<br />
                SECOND COMING<br />
                SANCTIFICATION<br />
                BAPTISM IN WATER<br />
                COMMUNION<br />
                HOLY SPIRIT
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
