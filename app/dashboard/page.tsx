import ellipse from "@/public/Ellipse 2982.svg";
import Image from "next/image";
import Link from "next/link";

// these are the oval pictures and icon on the second page
import leftImage from "@/public/Rectangle 1179.svg";
import rightImage from "@/public/Rectangle 1180.svg";
import Dmicon from "@/public/Group.svg";
import lineArrowUp from "@/public/Line arrow-up.svg";
import Hamburger from "@/ui/dashboard/Hamburger";
import Card from "@/ui/dashboard/Card";

// icons for the cards
import netIcon from "@/public/card_assets/Frame 2147226944.svg";
import PROicon from "@/public/card_assets/Frame 2147226944 (2).svg";
import contentIcon from "@/public/card_assets/Frame 2147226944.png";
import influencerIcon from "@/public/card_assets/Frame 2147226945 (1).svg";
import messageIcon from "@/public/card_assets/Frame 2147226945.svg";
import penIcon from "@/public/card_assets/Frame 2147226945 (2).svg";
import cartIcon from "@/public/card_assets/Frame 2147226944 (1).svg";
import ScrollCard from "@/ui/dashboard/ScrollCard";
import faqPhoto from "@/public/Picture.svg";

import {
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  MessageSquare,
  PhoneCall,
} from "@deemlol/next-icons";
import LittleCard from "@/ui/dashboard/LittleCard";

// icons for the little card
import a from "@/public/littleCardComps/Frame 2147227287.svg";
import b from "@/public/littleCardComps/Frame 2147227292.svg";
import c from "@/public/littleCardComps/Frame 2147227293.svg";
import d from "@/public/littleCardComps/Frame 2147227294.svg";
import e from "@/public/littleCardComps/Frame 2147227295.svg";
import Form from "@/ui/dashboard/Form";
import FaqList from "@/ui/dashboard/FaqList";

export default function Page() {
  return (
    <main className="flex flex-col  items-center justify-center w-full">
      <section className="m-20 flex flex-col items-center justify-center w-full md:w-[65%]">
        <div className="flex  items-end ">
          <hr className="w-20  text-gray-300 hidden md:inline-block" />
          <p className="text-sm text-center">
            Connecting businesses with the right
          </p>
          <hr className="w-20 text-gray-300 hidden md:inline-block" />
        </div>
        <h1 className="m-5 text-2xl text-center font-extrabold md:text-5xl ">
          Digital <span className="text-[#7642FE]">Marketing</span> Services
        </h1>
        <p className="m-5 w-[70%] text-center">
          we turn clicks to customers, our datad riven strategies improve your
          brand visibility, boosts conversion and maximize your return on
          investment
        </p>
        <div className=" flex flex-col m-5 gap-5 md:flex-row   ">
          <Link
            href={"/login"}
            className="px-5 py-3 text-white bg-[#7642FE]  rounded-md"
          >
            Get started
          </Link>
          <Link
            href={"/login"}
            className="px-5 py-3 text-[#7642FE] border border-[#7642FE] rounded-md"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* this is the image on the landing page */}
      <div className="flex items-center justify-center m-20 w-full">
        <Image
          src="/c07cdf4064567139d70da8ba2ccafd0c5c01420b.jpg"
          alt="banner image"
          height={100}
          width={1124}
          className="rounded-lg"
        />
      </div>

      {/* this is the purple data stuff under */}
      <section className="my-10 p-9 gap-3 w-full flex justify-around w-full items-center bg-[#7642FE] text-white bold ">
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg md: text-xl lg:text-3xl  bold">12</p>
          <p className="text-md md:text-lg lg:text-xl bold text-center">
            Digital Marketing services
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg md: text-xl lg:text-3xl  bold">300 +</p>
          <p className="text-md md:text-lg lg:text-xl bold text-center">
            Satisfied Clients
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg md: text-xl lg:text-3xl  bold">1200 +</p>
          <p className="text-md md:text-lg lg:text-xl bold text-center">
            Successful Campaigns Delivered
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg md: text-xl lg:text-3xl  bold">24/7</p>
          <p className="text-md md:text-lg lg:text-xl bold text-center">
            Support and Assistance
          </p>
        </div>
      </section>

      <section className="flex flex-col p-10 m-5 items-center justify-center">
        <div className="relative p-4 gap-10 w-full flex items-center justify-center">
          <Image
            src={leftImage}
            alt="guy image"
            width={291}
            height={512}
            className="flex-1 hidden md:block"
          />

          <div className="flex-1 p-15 flex flex-col  items-start justify-start">
            <div className="relative">
              <Image
                src={Dmicon}
                alt="funny icon"
                width={175.3}
                height={176.2}
                className="relative"
              />
              <Image
                src={lineArrowUp}
                alt="arrow"
                className="absolute top-11 left-11"
                width={90.5}
                height={90.5}
              />
            </div>

            <h1 className="my-10 text-2xl md:text-5xl font-extrabold">
              What drives Digital{" "}
              <span className="text-[#7642FE]">Marketing</span> Agency
            </h1>
            <p className="text-md md:text-lg ">
              Our Digital Marketing Agency platform was built to bridge the gap
              between businesses and digital marketing services. We make it
              easier for brands to discover, connect, and grow with the right
              marketing solutions—all in one platform.
            </p>

            <Link
              href={"/login"}
              className="mt-5 px-8 py-2 text-[#fefefe] bg-[#7642FE]  rounded-md"
            >
              Read about us
            </Link>
          </div>

          <Image
            src={rightImage}
            alt="girl image"
            width={291}
            height={512}
            className="hidden md:block flex-1"
          />
        </div>
      </section>

      {/* purple bannerlike stuff now */}
      <section className="relative m-20 py-20 px-40 flex flex-col items-center justify-center gap-5 bg-[#7642FE] rounded-xl md:w-[87%]">
        <Image
          src={ellipse}
          alt="ellipse"
          className="absolute top-[20%] left-[-35] text-[#333] text-blur-md"
        />

        <p className="text-bold text-normal md:text-2xl leading-relaxed text-[#fefefe] text-center">
          Ready to take your business to the next level? Let us help you find
          the right digital marketing service and connect you with the experts
          who can help your brand grow
        </p>
        <Link
          href={"/login"}
          className="mt-5 px-7 py-3 text-md md:text-lg text-[#fefefe] bg-transparent border  rounded-md"
        >
          Request Service
        </Link>
      </section>

      {/* components with card */}
      <section className="m-10 flex flex-col items-center justify-center p-5 w-fit">
        <div className="flex flex-col gap-10 items-center justify-center p-5 m-15 w-[50%]">
          <h1 className="text-2xl md:text-5xl font-extrabold">
            Popular <span className="text-[#7642FE]"> Services</span>.{" "}
          </h1>
          <p className="text-center">
            Don’t let your messages go unseen. With our email marketing service,
            you can build real relationships with your audience, deliver
            personalized experiences, and drive consistent sales. Let your
            emails work smarter — not harder.
          </p>
        </div>
        {/* this will conytain the card components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 w-[85%]">
          <Card
            title="Search Engine Optimization (SEO)"
            image={"/card_assets/Rectangle1181.png"}
            description="Get your business found by the right customers."
            smallIcon={netIcon}
          />
          <Card
            title="Content Marketing"
            description="Tell your story, attract your audience."
            smallIcon={contentIcon}
            image={"/card_assets/Rectangle1181(2).png"}
          />
          <Card
            title="Social Media Marketing"
            description="Transform your social presence into a sales engine."
            smallIcon={messageIcon}
            image={"/card_assets/Rectangle 1181 (1).png"}
          />

          <Card
            title="Web Design & Development"
            description="Build your dream online Presence"
            smallIcon={penIcon}
            image={"/card_assets/Rectangle 1181 (5).png"}
          />
          <Card
            title="Digital Marketing Strategy"
            description="Develop a clear roadmap for online success."
            smallIcon={cartIcon}
            image={"/card_assets/Rectangle 1181 (4).png"}
          />
          <Card
            title="Influencer Marketing"
            description="Amplify your brand's reach through authentic voices."
            smallIcon={influencerIcon}
            image={"/card_assets/Rectangle 1181 (3).png"}
          />
          <Card
            title="Public Relations (PR) & Online Reputation Management"
            description="Build trust and protect your brand's image."
            smallIcon={PROicon}
            image={"/card_assets/Rectangle 1181 (6).png"}
          />
        </div>
        <Link
          href={"/"}
          className="px-5 py-3 text-md md:text-lg self-end text-[#7642FE] "
        >
          See all services
        </Link>
      </section>

      {/* div for horizontal scrolling  */}
      {/* i couldnt implement scrollign and monotone noise */}
      <section className="flex flex-col items-center justify-center p-10 gap-10">
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <h1 className="text-2xl md:text-5xl font-extrabold">Testimonials</h1>
          <p>What Our Clients Say About Our Email Marketing Service</p>
        </div>
        <div className="mt-15 md:flex md:w-screen gap-5 grid grid-cols-1">
          <ScrollCard
            content=" We needed a way to nurture our leads more effectively. Their automated
            email sequences were a game-changer. Our follow-up process is now
            seamless, and we're seeing more qualified leads move through our sales
            funnel than ever before. Fantastic service."
            image="/Ellipse (1).png"
            name="Chinedu. O."
            company="Founder of Apex Solutions Group"
            className=""
          />
          <ScrollCard
            content="The team's expertise in audience segmentation made all the difference. 
          Our customers now receive emails that truly speak to their interests, and our click-through 
          rates have soared. This isn't just email marketing; it's smart customer connection."
            image="/Ellipse.png"
            name="Fatima. Y"
            company="E-commerce Manager at Global Trade Hub"
            className=""
          />
          <ScrollCard
            content="The team's expertise in audience segmentation made all the difference. 
          Our customers now receive emails that truly speak to their interests, and our click-through 
          rates have soared. This isn't just email marketing; it's smart customer connection."
            image="/Ellipse.png"
            name="Fatima. Y"
            company="E-commerce Manager at Global Trade Hub"
            className=""
          />
          <ScrollCard
            content="The team's expertise in audience segmentation made all the difference. 
          Our customers now receive emails that truly speak to their interests, and our click-through 
          rates have soared. This isn't just email marketing; it's smart customer connection."
            image="/Ellipse.png"
            name="Fatima. Y"
            company="E-commerce Manager at Global Trade Hub"
            className=""
          />
        </div>

        <div className="flex justify-between w-[10%]">
          <ChevronLeft />
          <ChevronRight />
        </div>
      </section>

      {/* secton with little cards */}
      <section className="m-10 p-10 flex flex-col items-center justify-center gap-30">
        <div className="flex flex-col gap-10 text-center">
          <h1 className=" text-2xl  font-extrabold  md:text-5xl   ">
            How It <span className="text-[#7642FE]">Works</span>
          </h1>

          <p className=" w-[50%] self-center">
            Getting started with us is simple. In just a few steps, you can find
            the right digital marketing service, connect with trusted experts,
            and manage everything in one place — stress-free
          </p>
        </div>
        <div className="w-[85%] h-[159] flex  justify-between">
          <LittleCard
            image={a}
            title="Pick your Goal"
            content="Choose your prefrered Service"
          />
          <LittleCard
            image={b}
            title="Create a free account"
            content="Sign up in minutes to manage your project"
          />
          <LittleCard
            image={c}
            title="Make payment"
            content="Complete your payment securely"
          />
          <LittleCard
            image={d}
            title="Track results"
            content="Monitor progress and  stay updated"
          />
          <LittleCard
            image={e}
            title="Share your feedback"
            content="Rate your experience and help us serve you better"
          />
        </div>
      </section>
      {/* section with forms */}
      <section className="flex flex-col items-center justify-center gap-20 m-10 p-10">
        <div className="flex flex-col gap-10 items-center justfy-center text-center ">
          <h1 className=" text-2xl  font-extrabold  md:text-5xl   ">
            Get In <span className="text-[#7642FE]">Touch</span> With Us Today
          </h1>
          <p className=" w-[50%] self-center">
            Have questions or ready to get started? Our team is here to help you
            find the right digital marketing solution for your business.
          </p>
        </div>
        <div className="flex gap-16 w-full ">
          <div className="w-fit md:w-[483] bg-[#7642fe] text-[#fefefe] p-10 border border-gray-100">
            <div className="flex flex-col items-start justify-start gap-4">
              <h1 className="text-md md:text-xl font-bold ">Contact Info</h1>
              <p className=" font-light">
                Have questions or ready to get started? Our team is here to help
                you find the right digital marketing solution for your business.
                Get in touch with us today and let’s grow your brand together.
              </p>
            </div>

            <div className="m-10 flex flex-col items-start justify-start gap-4">
              <div className="flex items-center gap-5 w-full">
                <MapPin size={36} color="#fefefe" />
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl font-bold"> Our Location</h1>
                  <p className="text-sm">
                    42 Kingsway Tower, Victoria Island, Lagos, Nigeria
                  </p>
                </div>
              </div>
              <div className="flex items-center  gap-5 w-full ">
                <PhoneCall size={36} color="#FFFFFF" />
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl font-bold">Phone Numbers</h1>
                  <p className="text-sm">+234 000 000</p>
                  <p className="text-sm">+234 000 000</p>
                </div>
              </div>
              <div className="flex items-center gap-5 w-full">
                <MessageSquare size={36} color="#FFFFFF" />
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl font-bold">Email Address</h1>
                  <p className="text-sm">hello@digitalmarketingagency.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start p-4  md:w-[629] bg-white border border-gray-100">
            <div className="flex flex-col justify-start gap-4">
              <h1 className="text-md md:text-xl font-bold ">Get In Touch</h1>
              <p className="font-light">
                Got questions or need guidance? Let’s talk! Reach out today for
                a free consultation and discover how we can connect your
                business with the right digital marketing solutions.
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center w-full">
              <Form />
            </div>
          </div>
        </div>
      </section>

      {/* purple section below */}
      <section className="m-20 py-20 px-40 flex flex-col items-center justify-center gap-5 bg-[#7642FE] rounded-xl md:w-[87%]">
        <h1 className="text-md md:text-3xl font-bold text-[#fefefe] ">
          Stay Ahead With Digital Marketing Agency
        </h1>
        <p className="text-bold text-normal md:text-md leading-relaxed text-[#fefefe] text-center">
          Get the latest tips, insights, and updates on digital marketing
          delivered straight to your inbox. No spam, just value.
        </p>
        <form
          action=""
          className="p-3 flex items-center justify-between gap-2 mt-5 border border-[#fefefe] rounded-md outline-none w-[65%]"
        >
          <input
            type="email"
            placeholder="email address"
            className=" text-md md:text-lg text-[#fefefe] bg-transparent border-none outline-none"
          />

          <Mail size={24} color="#fefefe" className="border-none" />
        </form>
        <Link
          href={"/signUp"}
          className="mt-5 px-5 py-3 bg-[#fefefe] text-[#7642FE]  rounded-md"
        >
          Suscribe Now
        </Link>
      </section>

      {/* FAQ's */}
      <section className="p-10 flex flex-col gap-16 items-start jutify-center w-fit md:w-[87%]  ">
        <div className="flex flex-col items-start gap-5 justify-start w-[36%] ">
          <h1 className="font-extrabold text-2xl md:text-4xl">FAQ's</h1>
          <p className="font-semibold text-[#5B5B5B]">
            Get quick solutions to popular questions in our FAQ, giving you
            essential info at a glance.
          </p>
        </div>
        <div className="flex gap-36 self-start  w-full">
          <Image src={faqPhoto} alt="image" width={420} height={390} />
          <div>
            <FaqList />
          </div>
        </div>
      </section>
    </main>
  );
}
